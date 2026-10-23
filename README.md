# GovindasTech Website

Marketing website for **GovindasTech** — *Driven By Purpose. Powered by Intelligence.*
End-to-end OTT streaming platforms, cloud engineering and CRM intelligence, presented in a Vedic-inspired design.

- **Frontend:** React 19 (Create React App + craco), React Router, Tailwind CSS, Framer Motion, Lenis smooth scrolling
- **Backend:** FastAPI + MongoDB (Motor), contact-form email over SMTP (Google Workspace)

## Features

- Multi-page site: Home, Services (10 detail pages), Products, Case Studies (3 deep dives), Tech Stack, Contact
- Contact form that emails `hello@govindastech.com` and stores every enquiry in MongoDB
- "Sarthi" chat assistant (rule-based, runs entirely in the browser)
- "Make It Yours" panel: accent theme (including time-of-day Auto), text size, calm-motion mode — saved in `localStorage`
- Per-page SEO titles, descriptions and Open Graph images (`frontend/public/og/`)
- Installable web manifest and favicons

## Project structure

```
.
├── backend/
│   ├── server.py          # FastAPI app and routes (/api/contact, /api/status)
│   ├── mailer.py          # SMTP delivery for contact enquiries
│   ├── requirements.txt
│   └── .env.example       # copy to .env
├── frontend/
│   ├── public/            # index.html, logos, OG images, .htaccess / _redirects
│   └── src/
│       ├── pages/         # route-level pages (+ case-studies/)
│       ├── components/    # shared UI (Navbar, Footer, Hero, Sarthi, ...)
│       ├── data/          # services content
│       └── App.js         # routes
├── memory/PRD.md          # product notes and change log
└── tests/
```

## Prerequisites

- Node.js 18+ and Yarn
- Python 3.10+
- MongoDB running locally (default `mongodb://localhost:27017`)

## Getting started

### 1. Backend

```bash
cd backend
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
cp .env.example .env        # then edit .env (see Configuration)
uvicorn server:app --host 0.0.0.0 --port 8001 --reload
```

API docs: http://localhost:8001/docs

### 2. Frontend

```bash
cd frontend
yarn install
yarn start
```

Site: http://localhost:3000

The frontend reads `REACT_APP_BACKEND_URL` from `frontend/.env` (`http://localhost:8001` for local development).
Leave it empty in production when the site and API share one origin.

## Configuration

### `backend/.env`

| Variable | Description |
| --- | --- |
| `MONGO_URL` | MongoDB connection string |
| `DB_NAME` | Database name |
| `CORS_ORIGINS` | Comma-separated allowed origins (e.g. `http://localhost:3000`) |
| `SMTP_HOST` | `smtp.gmail.com` for Google Workspace |
| `SMTP_PORT` | `465` (SSL) or `587` (STARTTLS) |
| `SMTP_SECURE` | `ssl` for port 465, `starttls` for 587 |
| `SMTP_USER` | Mailbox used to send, e.g. `hello@govindastech.com` |
| `SMTP_PASSWORD` | Google **app password** for that mailbox (not the normal login password) |
| `MAIL_FROM` | From address (normally the same as `SMTP_USER`) |
| `MAIL_FROM_NAME` | Display name on the email |
| `MAIL_TO` | Where enquiries are delivered |

`.env` files are git-ignored. Never commit them.

### Creating a Google app password

1. Enable 2-Step Verification on the sending account (a Workspace admin may need to allow it).
2. Open https://myaccount.google.com/apppasswords and create an app password.
3. Put the 16-character value in `SMTP_PASSWORD`, then restart the backend.

## Contact form flow

1. The visitor submits the form on `/contact`; the page posts JSON to `POST /api/contact`.
2. The backend validates the input, drops honeypot (bot) submissions silently, and rate-limits each IP to 5 messages per 10 minutes.
3. The enquiry is saved to the `contact_enquiries` collection first, so nothing is lost if email fails.
4. An email is sent to `MAIL_TO` with `Reply-To` set to the visitor, so replying answers them directly. On success the record is marked `emailed: true`.

Error responses: `503` SMTP not configured, `502` SMTP send failed, `429` rate limit hit.

To list enquiries that were saved but not emailed:

```bash
mongosh govindastech --eval 'db.contact_enquiries.find({emailed: false})'
```

## Building for production

```bash
cd frontend
yarn build        # outputs frontend/build
```

- Serve `frontend/build` from any static host or reverse proxy and route `/api/*` to the FastAPI app.
- Single-page-app deep links need a fallback to `index.html`: `public/.htaccess` (Apache) and `public/_redirects` (Netlify) are included.
- Run the backend with a process manager, for example `uvicorn server:app --host 0.0.0.0 --port 8001`, and set the `backend/.env` variables in the server environment.
- `og:image` URLs point at `https://govindastech.com/`, so keep `og-image.png` and `og/` at the site root.

## Tests

```bash
cd backend
source .venv/bin/activate
pytest
```

## Design system

- Colors: midnight navy (`#030712`, `#060D24`, `#0B1536`), sacred gold (`#D4AF37`, `#F59E0B`, `#FBBF24`), peacock teal/cyan
- Fonts: Cinzel / Cinzel Decorative, Playfair Display, Plus Jakarta Sans, JetBrains Mono, Tiro Devanagari Sanskrit

More background and a change log are in [memory/PRD.md](memory/PRD.md).
