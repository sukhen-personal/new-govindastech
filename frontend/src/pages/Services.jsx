import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { PageHero, Tag } from "@/components/PageHero";
import { Reveal, SectionHeading } from "@/components/Reveal";
import { CtaBanner } from "@/components/CtaBanner";
import { Marquee } from "@/components/Marquee";
import { SERVICES } from "@/data/services";

const PROCESS = [
  { n: "01", title: "Discover", desc: "We understand your goals and requirements." },
  { n: "02", title: "Plan & Architect", desc: "We design architecture and roadmaps." },
  { n: "03", title: "Design", desc: "UI/UX and system design focused on usability." },
  { n: "04", title: "Develop", desc: "Agile development with clean code." },
  { n: "05", title: "Test & Validate", desc: "Rigorous testing for quality and performance." },
  { n: "06", title: "Deploy & Scale", desc: "Seamless deployment and optimization." },
];

export const Services = () => (
  <>
    <PageHero
      eyebrow="Our Services"
      title={<>End-to-end engineering for the <span className="text-gold-gradient italic">digital world</span></>}
      mantra="दश दिशाः, एकं लक्ष्यम् · Ten disciplines, one purpose"
      desc="Comprehensive engineering services to help startups, enterprises and brands build scalable, secure and future-ready digital products and platforms."
    >
      <Link to="/contact" data-testid="services-hero-cta" className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-gold to-gold-glow text-krishna-void font-semibold halo-gold transition-all duration-300 hover:-translate-y-0.5">
        Start a Project <ArrowRight size={17} className="transition-transform duration-300 group-hover:translate-x-1" />
      </Link>
    </PageHero>

    <section className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
      <Reveal>
        <SectionHeading eyebrow="What We Do" title={<>Ten disciplines of <span className="text-gold-gradient italic">divine craft</span></>} />
      </Reveal>
      <div className="grid md:grid-cols-2 gap-5 mt-12" data-testid="services-grid">
        {SERVICES.map((s, i) => (
          <Reveal key={s.slug} delay={0.04 * (i % 4)}>
            <Link
              to={`/services/${s.slug}`}
              data-testid={`service-card-${i}`}
              className="group block glass-vedic rounded-2xl p-7 h-full transition-all duration-300 hover:-translate-y-1 hover:border-gold-flute/50 hover:shadow-[0_0_50px_-14px_rgba(212,175,55,0.45)]"
            >
              <div className="flex items-start justify-between mb-5">
                <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/25 flex items-center justify-center">
                  <s.icon size={22} className="text-gold-flute" />
                </div>
                <span className="font-mono text-[10px] tracking-[0.25em] text-gold/40">{String(i + 1).padStart(2, "0")}</span>
              </div>
              <h3 className="font-sans font-semibold text-xl text-slate-100 group-hover:text-gold-flute transition-colors">{s.title}</h3>
              <p className="text-sm text-slate-400 font-light mt-2 leading-relaxed">{s.tagline}</p>
              <div className="flex flex-wrap gap-2 mt-5">
                {s.tags.slice(0, 4).map((t) => <Tag key={t}>{t}</Tag>)}
              </div>
              <span className="inline-flex items-center gap-2 mt-6 text-sm font-mono tracking-wider text-gold-flute group-hover:text-gold transition-colors">
                Enter the discipline
                <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>

    <Marquee />

    <section className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
      <Reveal>
        <SectionHeading eyebrow="Our Process" title={<>A proven <span className="text-gold-gradient italic">engineering process</span></>} mantra="क्रमः सिद्ध्यर्थम् · Order leads to accomplishment" />
      </Reveal>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-12" data-testid="process-grid">
        {PROCESS.map((p, i) => (
          <Reveal key={p.n} delay={0.06 * i}>
            <div className="glass-vedic rounded-2xl p-7 h-full transition-all duration-300 hover:-translate-y-1 hover:border-gold-flute/50" data-testid={`process-step-${i}`}>
              <p className="font-display text-3xl text-gold-gradient mb-4">{p.n}</p>
              <h3 className="font-sans font-semibold text-lg text-slate-100">{p.title}</h3>
              <p className="text-sm text-slate-400 font-light mt-2">{p.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>

    <CtaBanner />
  </>
);
