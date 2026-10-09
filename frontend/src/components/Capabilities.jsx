import { CloudCog, ServerCog, Smartphone, Globe2, BrainCircuit } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";

const CELLS = [
  { icon: CloudCog, title: "Cloud & Platform Engineering", desc: "Kubernetes orchestration, multi-region failover and auto-scaling microservices across AWS & GCP — the firmament beneath every product.", span: "md:col-span-8", tall: true },
  { icon: ServerCog, title: "Backend Engineering", desc: "High-concurrency Go, Rust & Node.js services with Redis and Kafka.", span: "md:col-span-4", tall: true },
  { icon: Smartphone, title: "Mobile App Architecture", desc: "Flutter, React Native, Swift & Kotlin with offline sync and GPU acceleration.", span: "md:col-span-4" },
  { icon: Globe2, title: "Web & Enterprise Portals", desc: "Next.js and React dashboards, WCAG 2.1 AAA accessible, sub-second TTI.", span: "md:col-span-4" },
  { icon: BrainCircuit, title: "AI & Predictive Solutions", desc: "Recommendation engines, metadata auto-tagging and intelligent transcribing.", span: "md:col-span-4" },
];

export const Capabilities = () => (
  <section id="capabilities" className="relative py-28 lg:py-36">
    <div className="max-w-7xl mx-auto px-6 lg:px-10">
      <Reveal>
        <SectionHeading
          eyebrow="Engineering Capabilities"
          title={<>A mandala of <span className="text-gold-gradient italic">disciplines</span></>}
          mantra="शिल्पं हि सर्वस्य आधारः · Craft is the foundation of all"
        />
      </Reveal>

      <div className="grid md:grid-cols-12 gap-4 mt-14">
        {CELLS.map((c, i) => (
          <Reveal key={c.title} className={`col-span-full ${c.span}`} delay={0.06 * i}>
            <div
              className={`group relative glass-vedic rounded-2xl p-7 h-full overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-gold-flute/50 hover:shadow-[0_0_50px_-14px_rgba(212,175,55,0.45)] ${c.tall ? "min-h-[220px]" : "min-h-[180px]"}`}
              data-testid={`capability-cell-${i}`}
            >
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(6,182,212,0.06),transparent_45%,rgba(212,175,55,0.05))] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <c.icon size={26} className="text-gold-flute mb-4 relative" />
              <h3 className="relative font-sans font-semibold text-lg text-slate-100">{c.title}</h3>
              <p className="relative text-sm text-slate-400 font-light mt-2 leading-relaxed max-w-md">{c.desc}</p>
              <span className="absolute bottom-4 right-5 font-mono text-[10px] tracking-[0.25em] text-gold/40">0{i + 1}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
