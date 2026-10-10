import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { PageHero, Tag } from "@/components/PageHero";
import { Reveal, SectionHeading } from "@/components/Reveal";
import { CtaBanner } from "@/components/CtaBanner";
import { SERVICES } from "@/data/services";

export const ServiceDetail = () => {
  const { slug } = useParams();
  const idx = SERVICES.findIndex((s) => s.slug === slug);
  if (idx === -1) return <Navigate to="/services" replace />;
  const s = SERVICES[idx];
  const prev = SERVICES[(idx - 1 + SERVICES.length) % SERVICES.length];
  const next = SERVICES[(idx + 1) % SERVICES.length];

  return (
    <>
      <PageHero
        eyebrow={`Service · ${String(idx + 1).padStart(2, "0")} / ${SERVICES.length}`}
        title={<>{s.title.split(" ").slice(0, -1).join(" ")} <span className="text-gold-gradient italic">{s.title.split(" ").slice(-1)}</span></>}
        mantra={s.mantra}
        desc={s.tagline}
      >
        <Link to="/services" data-testid="service-back-link" className="inline-flex items-center gap-2 text-sm font-mono tracking-wider text-slate-400 hover:text-gold-flute transition-colors">
          <ArrowLeft size={15} /> All ten disciplines
        </Link>
      </PageHero>

      <section className="max-w-5xl mx-auto px-6 lg:px-10 py-14">
        <Reveal>
          <div className="glass-vedic rounded-3xl p-8 sm:p-10 halo-gold" data-testid="service-overview">
            <div className="w-14 h-14 rounded-xl bg-gold/10 border border-gold/25 flex items-center justify-center mb-6">
              <s.icon size={26} className="text-gold-flute" />
            </div>
            <p className="text-xs uppercase tracking-[0.3em] font-mono text-gold-flute mb-4">The Craft</p>
            <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed">{s.overview}</p>
          </div>
        </Reveal>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-14">
        <Reveal>
          <SectionHeading eyebrow="What You Receive" title={<>Deliverables of this <span className="text-gold-gradient italic">discipline</span></>} />
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-12" data-testid="service-deliverables">
          {s.deliverables.map((d, i) => (
            <Reveal key={d} delay={0.05 * i}>
              <div className="glass-vedic rounded-2xl p-6 h-full flex items-center gap-4 transition-all duration-300 hover:-translate-y-1 hover:border-gold-flute/50" data-testid={`deliverable-${i}`}>
                <span className="w-2 h-2 rotate-45 bg-gold-flute shrink-0" />
                <p className="font-sans font-medium text-slate-100">{d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-14">
        <Reveal>
          <SectionHeading eyebrow="Our Approach" title={<>How the <span className="text-gold-gradient italic">yajna</span> unfolds</>} />
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12" data-testid="service-approach">
          {s.approach.map((a, i) => (
            <Reveal key={a.n} delay={0.06 * i}>
              <div className="glass-vedic rounded-2xl p-6 h-full" data-testid={`approach-step-${i}`}>
                <p className="font-display text-2xl text-gold-gradient mb-3">{a.n}</p>
                <h3 className="font-sans font-semibold text-lg text-slate-100">{a.title}</h3>
                <p className="text-sm text-slate-400 font-light mt-2 leading-relaxed">{a.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.15}>
          <div className="flex flex-wrap gap-2 mt-10" data-testid="service-stack">
            {s.tags.map((t) => <Tag key={t}>{t}</Tag>)}
          </div>
        </Reveal>
      </section>

      {s.related && (
        <section className="max-w-5xl mx-auto px-6 lg:px-10 py-8">
          <Reveal>
            <Link to={s.related.to} data-testid="service-related-case"
              className="group block glass-vedic rounded-3xl p-8 transition-all duration-300 hover:-translate-y-1 hover:border-gold-flute/50 hover:shadow-[0_0_60px_-16px_rgba(212,175,55,0.5)]">
              <p className="text-xs uppercase tracking-[0.3em] font-mono text-peacock-cyan mb-3">Related Proof</p>
              <span className="inline-flex items-center gap-3 font-serif text-xl sm:text-2xl text-slate-50 group-hover:text-gold-flute transition-colors">
                {s.related.label}
                <ArrowRight size={20} className="transition-transform duration-300 group-hover:translate-x-1.5 text-gold-flute" />
              </span>
            </Link>
          </Reveal>
        </section>
      )}

      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-10">
        <div className="grid sm:grid-cols-2 gap-4">
          <Link to={`/services/${prev.slug}`} data-testid="service-prev"
            className="group glass-vedic rounded-2xl p-6 transition-all duration-300 hover:border-gold-flute/50">
            <p className="text-xs font-mono tracking-[0.25em] uppercase text-slate-500 mb-2 flex items-center gap-2">
              <ArrowLeft size={13} /> Previous discipline
            </p>
            <p className="font-serif text-xl text-slate-100 group-hover:text-gold-flute transition-colors">{prev.title}</p>
          </Link>
          <Link to={`/services/${next.slug}`} data-testid="service-next"
            className="group glass-vedic rounded-2xl p-6 text-right transition-all duration-300 hover:border-gold-flute/50">
            <p className="text-xs font-mono tracking-[0.25em] uppercase text-slate-500 mb-2 flex items-center justify-end gap-2">
              Next discipline <ArrowRight size={13} />
            </p>
            <p className="font-serif text-xl text-slate-100 group-hover:text-gold-flute transition-colors">{next.title}</p>
          </Link>
        </div>
      </section>

      <CtaBanner />
    </>
  );
};
