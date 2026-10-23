from fastapi import FastAPI, APIRouter
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import asyncio
import logging
import time
from collections import defaultdict, deque
from pathlib import Path
from fastapi import HTTPException, Request
from pydantic import BaseModel, Field, ConfigDict, EmailStr
import mailer
from typing import List
import uuid
from datetime import datetime, timezone


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# Define Models
class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")  # Ignore MongoDB's _id field
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class StatusCheckCreate(BaseModel):
    client_name: str

# Add your routes to the router instead of directly to app
@api_router.get("/")
async def root():
    return {"message": "Hello World"}

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.model_dump()
    status_obj = StatusCheck(**status_dict)
    
    # Convert to dict and serialize datetime to ISO string for MongoDB
    doc = status_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    
    _ = await db.status_checks.insert_one(doc)
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    # Exclude MongoDB's _id field from the query results
    status_checks = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    
    # Convert ISO string timestamps back to datetime objects
    for check in status_checks:
        if isinstance(check['timestamp'], str):
            check['timestamp'] = datetime.fromisoformat(check['timestamp'])
    
    return status_checks

# ---- Contact form -> SMTP email -------------------------------------------
class ContactRequest(BaseModel):
    name: str = Field(min_length=1, max_length=120)
    email: EmailStr
    company: str = Field(default="", max_length=160)
    phone: str = Field(default="", max_length=40)
    interest: str = Field(default="", max_length=120)
    subject: str = Field(min_length=1, max_length=200)
    message: str = Field(min_length=1, max_length=5000)
    website: str = ""  # honeypot: real visitors never see or fill this


# Per-IP limit: 5 enquiries / 10 min. In-memory, which is plenty for a single-process site.
_RATE_WINDOW, _RATE_MAX = 600, 5
_hits = defaultdict(deque)


def _client_ip(request: Request) -> str:
    fwd = request.headers.get("x-forwarded-for")
    return fwd.split(",")[0].strip() if fwd else (request.client.host if request.client else "?")


@api_router.post("/contact")
async def send_contact(body: ContactRequest, request: Request):
    if body.website:  # bot filled the hidden field — pretend success, send nothing
        return {"ok": True}

    ip, now = _client_ip(request), time.monotonic()
    q = _hits[ip]
    while q and now - q[0] > _RATE_WINDOW:
        q.popleft()
    if len(q) >= _RATE_MAX:
        raise HTTPException(429, "Too many messages. Please try again in a few minutes.")
    q.append(now)

    data = body.model_dump(exclude={"website"})
    # Keep a copy so an enquiry is never lost if SMTP is down.
    record = {**data, "ip": ip, "created_at": datetime.now(timezone.utc).isoformat(), "emailed": False}
    inserted = await db.contact_enquiries.insert_one(record)

    try:
        await asyncio.to_thread(mailer.send_enquiry, **data)
    except mailer.MailNotConfigured:
        logging.getLogger(__name__).error("Contact form used but SMTP is not configured")
        raise HTTPException(503, "Email is not set up yet. Please write to hello@govindastech.com.")
    except Exception:
        logging.getLogger(__name__).exception("SMTP send failed")
        raise HTTPException(502, "We couldn't send your message right now. Please email hello@govindastech.com.")

    await db.contact_enquiries.update_one({"_id": inserted.inserted_id}, {"$set": {"emailed": True}})
    return {"ok": True}


# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()