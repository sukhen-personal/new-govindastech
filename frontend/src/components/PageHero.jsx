import { Reveal } from "./Reveal";

export const PageHero = ({ eyebrow, title, mantra, desc, children }) => (
  <section className="relative pt-40 pb-16 starfield overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_55%_45%_at_75%_10%,rgba(37,99,235,0.14),transparent),radial-gradient(ellipse_45%_40%_at_10%_90%,rgba(13,148,136,0.1),transparent)]" />
    <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
      <Reveal>
        <p className="text-xs uppercase tracking-[0.3em] font-mono text-gold-flute/90 mb-5">{eyebrow}</p>
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight text-slate-50 leading-[1.08] max-w-4xl" data-testid="page-title">
          {title}
        </h1>
        {mantra && <p className="font-mantra text-lg text-gold/70 mt-6">{mantra}</p>}
        {desc && <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed mt-5 max-w-2xl">{desc}</p>}
        {children && <div className="mt-8">{children}</div>}
      </Reveal>
    </div>
  </section>
);

export const StatusBadge = ({ status }) => {
  const styles = {
    LIVE: "text-emerald-400 border-emerald-400/40 bg-emerald-400/10",
    BETA: "text-peacock-cyan border-peacock-cyan/40 bg-peacock-cyan/10",
    "IN DEVELOPMENT": "text-gold-flute border-gold-flute/40 bg-gold-flute/10",
    PLANNED: "text-slate-400 border-slate-500/40 bg-slate-500/10",
  };
  return (
    <span className={`inline-flex items-center gap-1.5 text-[10px] font-mono tracking-[0.2em] border rounded-full px-3 py-1 ${styles[status] || styles.PLANNED}`} data-testid={`status-${status.toLowerCase().replace(/\s/g, "-")}`}>
      <span className="w-1.5 h-1.5 rounded-full bg-current animate-glow-pulse" />
      {status}
    </span>
  );
};

export const Tag = ({ children }) => (
  <span className="text-xs font-mono tracking-wider text-amber-200/75 border border-gold/20 bg-gold/5 rounded-full px-3 py-1">
    {children}
  </span>
);
