import { useEffect, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const LINKS = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Products", to: "/products" },
  { label: "Case Studies", to: "/case-studies" },
  { label: "Tech Stack", to: "/tech-stack" },
  { label: "Contact", to: "/contact" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      data-testid="nav-main-header"
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-vedic shadow-[0_8px_32px_rgba(0,0,0,0.5)]" : "bg-krishna-void/70 backdrop-blur-md border-b border-gold/10"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
        <Link to="/" data-testid="nav-brand" className="flex items-center gap-3 group">
          <img src="/logo.png" alt="GovindasTech logo" className="w-11 h-11 object-contain transition-transform duration-500 group-hover:scale-110" />
          <span className="leading-none">
            <span className="block font-royal font-bold text-lg tracking-wide text-slate-50">GovindasTech</span>
            <span className="block font-mantra text-[11px] text-gold/70 mt-0.5">गोविन्दस्टेक</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-7" data-testid="nav-links">
          {LINKS.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              data-testid={`nav-link-${l.label.toLowerCase().replace(/[^a-z]+/g, "-")}`}
              className={({ isActive }) =>
                `text-sm font-medium tracking-wide transition-colors duration-200 ${
                  isActive ? "text-gold-flute" : "text-slate-300 hover:text-gold-flute"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            data-testid="nav-cta-launch"
            className="ml-1 px-5 py-2.5 text-sm font-semibold rounded-full bg-gradient-to-r from-gold to-gold-glow text-krishna-void halo-gold hover:brightness-110 transition-all duration-300 hover:-translate-y-0.5"
          >
            Launch OTT Console
          </Link>
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
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `text-base transition-colors ${isActive ? "text-gold-flute" : "text-slate-200 hover:text-gold-flute"}`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            className="mt-2 px-5 py-3 text-center text-sm font-semibold rounded-full bg-gradient-to-r from-gold to-gold-glow text-krishna-void"
          >
            Launch OTT Console
          </Link>
        </div>
      )}
    </header>
  );
};
