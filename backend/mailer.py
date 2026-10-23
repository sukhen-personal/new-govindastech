"""SMTP delivery for website enquiries (stdlib only — no third-party mail service)."""

import os
import smtplib
import ssl
from email.message import EmailMessage
from email.utils import formataddr, make_msgid
from html import escape


class MailNotConfigured(RuntimeError):
    pass


def _settings():
    host = os.environ.get("SMTP_HOST")
    user = os.environ.get("SMTP_USER")
    password = os.environ.get("SMTP_PASSWORD")
    if not (host and user and password):
        raise MailNotConfigured("SMTP_HOST / SMTP_USER / SMTP_PASSWORD are not set")
    port = int(os.environ.get("SMTP_PORT", "465"))
    # "ssl" = implicit TLS (usually port 465); "starttls" = upgrade on 587.
    secure = os.environ.get("SMTP_SECURE", "ssl" if port == 465 else "starttls").lower()
    return {
        "host": host,
        "port": port,
        "secure": secure,
        "user": user,
        "password": password,
        "from_addr": os.environ.get("MAIL_FROM", user),
        "from_name": os.environ.get("MAIL_FROM_NAME", "GovindasTech Website"),
        "to_addr": os.environ.get("MAIL_TO", "hello@govindastech.com"),
    }


def _clean_header(value: str) -> str:
    # Header injection guard: a header value must never contain a line break.
    return " ".join(str(value).split())


def send_enquiry(*, name, email, company, phone, interest, subject, message) -> None:
    """Blocking — call via asyncio.to_thread from async routes."""
    s = _settings()

    msg = EmailMessage()
    msg["Subject"] = f"[Website enquiry] {_clean_header(subject)}"
    msg["From"] = formataddr((s["from_name"], s["from_addr"]))
    msg["To"] = s["to_addr"]
    # Hitting "Reply" in the inbox answers the visitor directly.
    msg["Reply-To"] = formataddr((_clean_header(name), _clean_header(email)))
    msg["Message-ID"] = make_msgid(domain=s["from_addr"].split("@")[-1])

    rows = [("Name", name), ("Email", email), ("Company", company), ("Phone", phone), ("Interested in", interest)]
    rows = [(k, v) for k, v in rows if v]

    text = "\n".join(f"{k}: {v}" for k, v in rows) + f"\n\nSubject: {subject}\n\n{message}\n"
    msg.set_content(text)

    table = "".join(
        f'<tr><td style="padding:4px 14px 4px 0;color:#888">{escape(k)}</td><td>{escape(str(v))}</td></tr>'
        for k, v in rows
    )
    html = (
        '<div style="font-family:Arial,sans-serif;color:#1a1a1a;max-width:640px">'
        '<h2 style="color:#B45309;margin:0 0 12px">New website enquiry</h2>'
        f"<table>{table}</table>"
        f'<p style="margin:16px 0 4px"><strong>{escape(subject)}</strong></p>'
        f'<p style="white-space:pre-wrap;background:#FFF7E6;padding:14px;border-left:3px solid #D4AF37">{escape(message)}</p>'
        '<p style="font-size:12px;color:#888">Sent from the govindastech.com contact form. Reply to answer the sender directly.</p>'
        "</div>"
    )
    msg.add_alternative(html, subtype="html")

    ctx = ssl.create_default_context()
    if s["secure"] == "ssl":
        with smtplib.SMTP_SSL(s["host"], s["port"], context=ctx, timeout=20) as smtp:
            smtp.login(s["user"], s["password"])
            smtp.send_message(msg)
    else:
        with smtplib.SMTP(s["host"], s["port"], timeout=20) as smtp:
            smtp.starttls(context=ctx)
            smtp.login(s["user"], s["password"])
            smtp.send_message(msg)
