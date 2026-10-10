import { Link } from "react-router-dom";
import { LogoMark, FluteWave } from "./Logo";

const LINKS = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Products", to: "/products" },
  { label: "Case Studies", to: "/case-studies" },
  { label: "Tech Stack", to: "/tech-stack" },
  { label: "Contact", to: "/contact" },
];

const CASES = [
  { label: "GovindasStream OTT", to: "/case-studies/govindas-stream" },
  { label: "LivQure Healthcare", to: "/case-studies/livqure" },
  { label: "Sudarshana CRM", to: "/case-studies/sudarshana-crm" },
];

export const Footer = () => (
  <footer className="relative border-t border-gold/15 overflow-hidden starfield" data-testid="footer">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_50%_110%,rgba(212,175,55,0.1),transparent)]" />
    <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-20 pb-10">
      <div className="flex flex-col lg:flex-row justify-between gap-12 mb-20">
        <div className="max-w-sm">
          <div className="flex items-center gap-3 mb-5">
            <LogoMark size={42} />
            <div>
              <p className="font-royal font-bold text-xl text-slate-50">GovindasTech</p>
              <p className="font-mantra text-xs text-gold/70">गोविन्दस्टेक</p>
            </div>
          </div>
          <p className="text-sm text-slate-400 font-light leading-relaxed">
            Engineering sacred digital platforms — OTT streaming universes, cloud firmaments and CRM chakras —
            from Bengaluru to every node on Earth.
          </p>
          <FluteWave className="w-56 mt-6 opacity-70" />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-12">
          <div>
            <p className="text-xs font-mono tracking-[0.25em] uppercase text-gold-flute mb-5">Navigate</p>
            <ul className="space-y-3">
              {LINKS.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} data-testid={`footer-link-${l.label.toLowerCase().replace(/[^a-z]+/g, "-")}`}
                     className="text-sm text-slate-400 hover:text-gold-flute transition-colors duration-200">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-mono tracking-[0.25em] uppercase text-gold-flute mb-5">Case Studies</p>
            <ul className="space-y-3">
              {CASES.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} data-testid={`footer-case-${l.to.split("/").pop()}`}
                     className="text-sm text-slate-400 hover:text-gold-flute transition-colors duration-200">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-mono tracking-[0.25em] uppercase text-gold-flute mb-5">Sanctum</p>
            <ul className="space-y-3 text-sm text-slate-400">
              <li>Bengaluru, Bharat</li>
              <li>Global CDN Nodes</li>
              <li>Security Audits · SOC2</li>
              <li><a href="mailto:hello@govindastech.com" data-testid="footer-email" className="hover:text-gold-flute transition-colors">hello@govindastech.com</a></li>
            </ul>
          </div>
        </div>
      </div>

      <p className="font-display font-black text-[9vw] leading-none text-outline-gold text-center select-none whitespace-nowrap" aria-hidden="true">
        DRIVEN BY PURPOSE.
      </p>

      <div className="gold-hairline mt-14 mb-7" />
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono tracking-wider text-slate-500">
        <p>© {new Date().getFullYear()} GovindasTech Pvt Ltd · All rights reserved</p>
        <p className="font-mantra text-gold/60 text-sm">ॐ नमो भगवते वासुदेवाय</p>
        <p>Powered by Intelligence</p>
      </div>
    </div>
  </footer>
);
