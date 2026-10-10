# GovindasTech — Vedic OTT Platform Website (PRD)

## Original Problem Statement
Redesign https://govindastech.com/ into a superior aesthetic look and feel. Stress on OTT end-to-end Platform as a product. Incorporate modern CRM and feedback features. Punchline: "Driven By Purpose. Powered by Intelligence". Theme: ancient Vedic style — a divine technological creation in resemblance of Lord Krishna. Static frontend only; user hosts it themselves.

## User Personas
- OTT platform buyers / media companies evaluating end-to-end streaming vendors
- Enterprise clients seeking cloud/backend/mobile engineering
- Visitors exploring the LivQure healthcare product and company credibility

## Architecture
- **Stack**: Static React 19 (CRA + craco) with react-router-dom multi-page routing, Tailwind CSS, framer-motion 11, lenis smooth scrolling, lucide-react icons. No backend, no database (user choice).
- **Pages**: `/` Home (hero, marquee, OTT, CRM, capabilities, LivQure, stats, CTA) · `/services` (10 disciplines + 6-step process) · `/products` (5 products with status badges + 4 pipeline) · `/case-studies` (index) + 3 deep dives (`govindas-stream`, `livqure`, `sudarshana-crm`) with challenge/solution, architecture grids, interactive widgets, results & stack tags · `/tech-stack` (6 realms) · `/contact` (full form → mailto to hello@govindastech.com, FAQ accordion).
- **Hosting helpers**: public/.htaccess (Apache) + public/_redirects (Netlify) for SPA deep-link fallback.
- **Design system**: Krishna midnight navy (#030712/#060D24/#0B1536), sacred gold (#D4AF37/#F59E0B/#FBBF24), peacock teal/cyan; fonts: Cinzel/Cinzel Decorative, Playfair Display, Plus Jakarta Sans, JetBrains Mono, Tiro Devanagari Sanskrit.
- **Brand mark**: Original SVG logo (peacock feather eye inside 8-spoke chakra), reused as favicon.svg.

## Implemented (2026-10-09)
- Full Vedic redesign, kinetic hero, marquee, interactive OTT console, feedback widget, stats, Vedic footer
- (2026-10-10) Multi-page restructure with react-router-dom; all content from original govindastech.com migrated (10 services, 6-step process, 5 products + 4 pipeline, contact email & FAQs)
- (2026-10-10) Three deep-dive case study pages: GovindasStream (6-stage streaming pipeline), LivQure (6-component architecture + dashboard), Sudarshana CRM (6-spoke intelligence chakra + live feedback widget)
- (2026-10-10) Tech Stack page (Languages, Web, Mobile & TV, Backend & Data, Cloud, Media & Streaming)
- (2026-10-10) Contact page with original form fields; submit opens prefilled email to hello@govindastech.com (works on static hosting); FAQ accordion with original 3 FAQs
- (2026-10-10) Original company GT logo integrated (navbar + footer) with provided favicons (32/48px), apple-touch-icon, favicon-192 + manifest.json (installable, app-like)
- (2026-10-10) OG/Twitter preview meta in index.html + generated og-image.png (1200×630, logo + punchline); per-page title/description updates via Seo component (og:image points at https://govindastech.com/og-image.png — upload og-image.png to web root when self-hosting)
- (2026-10-10) Ten service deep-dive pages at /services/:slug — overview, 6 deliverables, 4-step approach, tech tags, related case study, prev/next navigation; data lives in src/data/services.js
- (2026-10-10) "Make It Yours" customization panel (floating button): 3 accent themes (Sacred Gold / Peacock Teal / Divine Crimson via CSS variables), 3 text sizes, Full/Calm motion toggle (stops animations + smooth scroll), persisted in localStorage
- (2026-10-10) Per-page OG images: 13 unique 1200×630 cards generated (3 case studies + 10 services) in public/og/, wired into the Seo component with per-page og:title/description/image/url
- (2026-10-10) Theme scheduler: "Auto" accent option in the customization panel — Sacred Gold (morning/night), Peacock Teal (afternoon), Divine Crimson (evening), re-resolved every 60s
- (2026-10-10) Hero wheel redesigned as an ornate Sudarshana Chakra SVG: 24 flame teeth, engraved rings, 16 tipped spokes, 8 lotus petals, counter-rotating dash ring, glowing core; enlarged to 720px framing the peacock hero image
- (2026-10-10) Mayur Pankh image frame removed from hero; hero is now text-led with two faint chakras (large right at 30% opacity, small counter-rotating bottom-left)
- (2026-10-10) Chakra continuity: faint 440px Sudarshana ring added to PageHero — appears on all inner pages (services, products, case studies, tech stack, contact, all detail pages)
- (2026-10-10) "Sarthi" chatbot popup (bottom-left): rule-based charioteer with greeting, 4 quick chips, keyword-matched answers covering OTT/services/products/cases/tech/pricing/contact, navigation links inside replies, typing indicator; MOCKED (client-side rule-based, no LLM backend since site is static-only)
- (2026-10-10) Fix: footer "DRIVEN BY PURPOSE." outline text was clipped at the right edge — fluid size reduced to 6.8vw, verified fitting at 375/768/1366 px
- Verified at 375 / 768 / 1366 px across all pages; nav, mobile menu, FAQ, consoles exercised; accent/text-size themes verified incl. persistence across reload; per-page og:image meta verified on service + case study pages; auto theme verified (resolves + labels current daypart); Sarthi verified (chips, free-text answers, in-chat navigation, mobile layout)

## Backlog
- P0: Wire enquiry form to a backend/form service if mailto flow is not enough (currently mailto — functional but depends on visitor's email client)
- P1: OG images + JSON-LD for self-hosted SEO; per-page meta titles
- P2: Hindi/Sanskrit language toggle; blog

## Notes
- No credentials / auth — public marketing site. /app/memory/test_credentials.md not applicable.
