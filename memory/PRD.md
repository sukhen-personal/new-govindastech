# GovindasTech — Vedic OTT Platform Website (PRD)

## Original Problem Statement
Redesign https://govindastech.com/ into a superior aesthetic look and feel. Stress on OTT end-to-end Platform as a product. Incorporate modern CRM and feedback features. Punchline: "Driven By Purpose. Powered by Intelligence". Theme: ancient Vedic style — a divine technological creation in resemblance of Lord Krishna. Static frontend only; user hosts it themselves.

## User Personas
- OTT platform buyers / media companies evaluating end-to-end streaming vendors
- Enterprise clients seeking cloud/backend/mobile engineering
- Visitors exploring the LivQure healthcare product and company credibility

## Architecture
- **Stack**: Static React 19 (CRA + craco), Tailwind CSS, framer-motion 11, lenis smooth scrolling, lucide-react icons. No backend, no database (user choice).
- **Sections**: Glassmorphic navbar → kinetic hero (masked line reveal, Sudarshana ring, parallax peacock frame, telemetry ticker) → editorial tech marquee → GovindasStream OTT console (interactive live/FAST/analytics simulator) → Sudarshana CRM + live feedback widget → capabilities bento grid → LivQure spotlight → heritage + count-up stats → minimal enquiry form → cinematic footer with massive outline typography.
- **Design system**: Krishna midnight navy (#030712/#060D24/#0B1536), sacred gold (#D4AF37/#F59E0B/#FBBF24), peacock teal/cyan; fonts: Cinzel/Cinzel Decorative, Playfair Display, Plus Jakarta Sans, JetBrains Mono, Tiro Devanagari Sanskrit.
- **Brand mark**: Original SVG logo (peacock feather eye inside 8-spoke chakra), reused as favicon.svg.

## Implemented (2026-10-09)
- Full Vedic redesign, all 10 sections from design guidelines
- Kinetic on-load hero with masked line-by-line reveal of the punchline
- Interactive OTT stream simulator with 3 modes and live telemetry
- Interactive feedback widget (feather rating → sentiment telemetry readout)
- Count-up stats, slow editorial marquee, parallax + rotating Sudarshana rings, Lenis momentum scroll, gold scroll-progress bar, grain overlay, starfield
- Minimal enquiry form with divine success state (CLIENT-SIDE ONLY — no backend; submissions are not stored or emailed)
- Verified at 375 / 768 / 1366 px; form, feedback widget, nav, anchors all exercised

## Backlog
- P0: Wire enquiry form to a real backend/email service when user self-hosts (currently mocked client-side)
- P1: Case studies / pricing pages, blog
- P1: SEO meta expansion (OG images, JSON-LD) for self-hosted deployment
- P2: Multi-language (Hindi/Sanskrit toggle), dark-gold alternate theme

## Notes
- No credentials / auth — public marketing site. /app/memory/test_credentials.md not applicable.
