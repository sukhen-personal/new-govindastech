import { Link } from "react-router-dom";
import { ArrowRight, Radio, HeartPulse, Orbit } from "lucide-react";
import { PageHero, Tag } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { CtaBanner } from "@/components/CtaBanner";

const CASES = [
  {
    icon: Radio, name: "GovindasStream", type: "End-to-End OTT Platform", to: "/case-studies/govindas-stream",
    desc: "A complete live, VOD and FAST streaming universe — sub-second latency, DRM-armoured, delivered to every screen on Earth.",
    metric: "0.38s", metricLabel: "Live Latency",
    tags: ["FFmpeg", "AWS Elemental", "Kubernetes", "HLS/DASH"],
  },
  {
    icon: HeartPulse, name: "LivQure", type: "Digital Healthcare Platform", to: "/case-studies/livqure",
    desc: "Patients, super-specialists and pharmacies united through digital records, telemedicine and automated prescriptions.",
    metric: "432+", metricLabel: "Active Patients",
    tags: ["React Native", "Node.js", "Redis", "Kubernetes"],
  },
  {
    icon: Orbit, name: "Sudarshana CRM", type: "Feedback Intelligence", to: "/case-studies/sudarshana-crm",
    desc: "Real-time sentiment telemetry, omnichannel viewer support and a predictive churn radar that never misses a signal.",
    metric: "99.98%", metricLabel: "Signal Capture Rate",
    tags: ["Kafka", "Python", "Node.js", "React"],
  },
];

export const CaseStudies = () => (
  <>
    <PageHero
      eyebrow="Case Studies"
      title={<>Deep dives into our <span className="text-gold-gradient italic">divine creations</span></>}
      mantra="प्रमाणं हि ज्ञानस्य दीपकः · Proof is the lamp of knowledge"
      desc="Architectures, engineering decisions and measurable results from the platforms we have forged — told in full."
    />

    <section className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
      <div className="grid lg:grid-cols-3 gap-6" data-testid="case-studies-grid">
        {CASES.map((c, i) => (
          <Reveal key={c.to} delay={0.08 * i}>
            <Link to={c.to} data-testid={`case-card-${c.to.split("/").pop()}`}
              className="group block glass-vedic rounded-3xl p-8 h-full transition-all duration-300 hover:-translate-y-1.5 hover:border-gold-flute/50 hover:shadow-[0_0_60px_-16px_rgba(212,175,55,0.5)]">
              <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/25 flex items-center justify-center mb-6">
                <c.icon size={22} className="text-gold-flute" />
              </div>
              <p className="text-xs font-mono tracking-[0.25em] uppercase text-peacock-cyan">{c.type}</p>
              <h2 className="font-serif text-3xl text-slate-50 mt-2">{c.name}</h2>
              <p className="text-sm text-slate-400 font-light mt-3 leading-relaxed">{c.desc}</p>
              <div className="my-6 rounded-xl border border-gold/15 bg-krishna-navy/50 p-4 text-center">
                <p className="font-mono text-3xl text-gold-gradient">{c.metric}</p>
                <p className="text-[10px] font-mono tracking-[0.25em] uppercase text-slate-500 mt-1">{c.metricLabel}</p>
              </div>
              <div className="flex flex-wrap gap-2 mb-6">
                {c.tags.map((t) => <Tag key={t}>{t}</Tag>)}
              </div>
              <span className="inline-flex items-center gap-2 text-sm font-mono tracking-wider text-gold-flute group-hover:text-gold transition-colors">
                Enter the deep dive
                <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>

    <CtaBanner />
  </>
);
