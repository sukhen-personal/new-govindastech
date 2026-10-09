import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { LogoMark } from "./Logo";

const LINKS = [
  { label: "OTT Platform", href: "#ott-platform" },
  { label: "Sudarshana CRM", href: "#crm" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "LivQure", href: "#livqure" },
  { label: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      data-testid="nav-main-header"
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-vedic shadow-[0_8px_32px_rgba(0,0,0,0.5)]" : "bg-krishna-void/70 backdrop-blur-md border-b border-gold/10"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
        <a href="#top" data-testid="nav-brand" className="flex items-center gap-3 group">
          <span className="transition-transform duration-500 group-hover:rotate-45">
            <LogoMark size={38} />
          </span>
          <span className="leading-none">
            <span className="block font-royal font-bold text-lg tracking-wide text-slate-50">GovindasTech</span>
            <span className="block font-mantra text-[11px] text-gold/70 mt-0.5">गोविन्दस्टेक</span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-8" data-testid="nav-links">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              data-testid={`nav-link-${l.label.toLowerCase().replace(/[^a-z]+/g, "-")}`}
              className="text-sm font-medium text-slate-300 hover:text-gold-flute transition-colors duration-200 tracking-wide"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            data-testid="nav-cta-launch"
            className="ml-2 px-5 py-2.5 text-sm font-semibold rounded-full bg-gradient-to-r from-gold to-gold-glow text-krishna-void halo-gold hover:brightness-110 transition-all duration-300 hover:-translate-y-0.5"
          >
            Launch OTT Console
          </a>
        </nav>

        <button
          data-testid="nav-mobile-toggle"
          className="lg:hidden text-gold-flute p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden glass-vedic border-t border-gold/15 px-6 py-6 flex flex-col gap-4" data-testid="nav-mobile-menu">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-base text-slate-200 hover:text-gold-flute transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-2 px-5 py-3 text-center text-sm font-semibold rounded-full bg-gradient-to-r from-gold to-gold-glow text-krishna-void"
          >
            Launch OTT Console
          </a>
        </div>
      )}
    </header>
  );
};
