import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, HeartPulse, TicketCheck, Radar, BrainCircuit, BellRing, Workflow } from "lucide-react";
import { PageHero, Tag, StatusBadge } from "@/components/PageHero";
import { Reveal, SectionHeading } from "@/components/Reveal";
import { FeedbackWidget } from "@/components/CrmIntelligence";
import { CtaBanner } from "@/components/CtaBanner";

const ARCHITECTURE = [
  { icon: Workflow, title: "Signal Ingestion", desc: "Every touchpoint — playback events, support chats, in-app ratings, payment failures — streams into Kafka topics in real time." },
  { icon: BrainCircuit, title: "AI Categorization", desc: "Python inference workers classify sentiment, intent and urgency, then enrich each signal with customer context." },
  { icon: HeartPulse, title: "Sentiment Telemetry", desc: "Live NPS and emotion scoring per viewer, per stream, per region — rendered on dashboards within seconds." },
  { icon: TicketCheck, title: "Omnichannel Support", desc: "Tickets, refunds and entitlement sync flow through one queue — email, chat and in-app unified." },
  { icon: Radar, title: "Churn Radar", desc: "Predictive models flag at-risk viewers before drop-off and trigger re-engagement journeys automatically." },
  { icon: BellRing, title: "Alerting & Rituals", desc: "Threshold breaches page the right human instantly; weekly wisdom digests go to operators and leadership." },
];

const RESULTS = [
  { value: "99.98%", label: "Signal capture rate" },
  { value: "<3s", label: "Signal-to-dashboard latency" },
  { value: "41%", label: "Churn reduction in pilot" },
  { value: "24/7", label: "Autonomous monitoring" },
];

const STACK = ["Kafka", "Python", "Node.js", "Redis", "React", "TypeScript", "Kubernetes", "LLM APIs"];

export const SudarshanaCrmCase = () => (
  <>
    <PageHero
      eyebrow="Case Study · CRM & Feedback Intelligence"
      title={<>Sudarshana CRM — the chakra that <span className="text-gold-gradient italic">never misses</span></>}
      mantra="सर्वे भवन्तु सुखिनः · May every viewer be delighted"
      desc="A modern CRM and feedback-intelligence engine for streaming platforms: real-time sentiment telemetry, omnichannel viewer support and predictive churn radar."
    >
      <div className="flex flex-wrap items-center gap-4">
        <StatusBadge status="BETA" />
        <Link to="/case-studies" data-testid="case-back-link" className="inline-flex items-center gap-2 text-sm font-mono tracking-wider text-slate-400 hover:text-gold-flute transition-colors">
          <ArrowLeft size={15} /> All case studies
        </Link>
      </div>
    </PageHero>

    <section className="max-w-7xl mx-auto px-6 lg:px-10 py-14">
      <div className="grid lg:grid-cols-2 gap-8">
        <Reveal>
          <div className="glass-vedic rounded-3xl p-8 h-full" data-testid="case-challenge">
            <p className="text-xs uppercase tracking-[0.3em] font-mono text-gold-flute mb-4">The Challenge</p>
            <p className="text-slate-300 font-light leading-relaxed">
              Streaming platforms learn about unhappy viewers weeks too late — through churned subscriptions.
              Feedback lived in silos: app reviews here, support tickets there, playback errors nowhere. No one saw
              the whole devotee.
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="glass-vedic rounded-3xl p-8 h-full" data-testid="case-solution">
            <p className="text-xs uppercase tracking-[0.3em] font-mono text-gold-flute mb-4">Our Solution</p>
            <p className="text-slate-300 font-light leading-relaxed">
              Sudarshana CRM spins every signal into one orbit — playback telemetry, support conversations and
              feedback widgets are ingested, understood by AI and acted upon in seconds, with a churn radar that
              intervenes before a viewer ever leaves.
            </p>
          </div>
        </Reveal>
      </div>
    </section>

    <section className="max-w-7xl mx-auto px-6 lg:px-10 py-14">
      <Reveal>
        <SectionHeading eyebrow="Architecture" title={<>Six spokes of the <span className="text-gold-gradient italic">intelligence chakra</span></>} />
      </Reveal>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-12" data-testid="case-architecture">
        {ARCHITECTURE.map((a, i) => (
          <Reveal key={a.title} delay={0.05 * i}>
            <div className="glass-vedic rounded-2xl p-6 h-full transition-all duration-300 hover:-translate-y-1 hover:border-gold-flute/50" data-testid={`arch-cell-${i}`}>
              <a.icon size={22} className="text-gold-flute mb-4" />
              <h3 className="font-sans font-semibold text-lg text-slate-100">{a.title}</h3>
              <p className="text-sm text-slate-400 font-light mt-2 leading-relaxed">{a.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>

    <section className="max-w-7xl mx-auto px-6 lg:px-10 py-14">
      <div className="grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-5">
          <Reveal>
            <SectionHeading eyebrow="Live Widget" title={<>Feel the feedback loop <span className="text-gold-gradient italic">yourself</span></>} />
            <p className="text-base text-slate-300 font-light leading-relaxed mt-5">
              This is the exact widget pattern viewers use inside streaming apps — one tap becomes a scored,
              routed, acknowledged signal. Try it.
            </p>
          </Reveal>
        </div>
        <Reveal className="lg:col-span-7" delay={0.12}>
          <FeedbackWidget />
        </Reveal>
      </div>
    </section>

    <section className="max-w-7xl mx-auto px-6 lg:px-10 py-14">
      <Reveal>
        <SectionHeading eyebrow="Results" title={<>Intelligence, <span className="text-gold-gradient italic">quantified</span></>} />
      </Reveal>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-12" data-testid="case-results">
        {RESULTS.map((r, i) => (
          <Reveal key={r.label} delay={0.06 * i}>
            <div className="glass-vedic rounded-2xl p-6 text-center h-full" data-testid={`case-result-${i}`}>
              <p className="font-mono text-3xl text-gold-gradient">{r.value}</p>
              <p className="text-xs font-mono tracking-wider text-slate-500 mt-2 uppercase">{r.label}</p>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal delay={0.15}>
        <div className="flex flex-wrap gap-2 mt-10" data-testid="case-stack">
          {STACK.map((t) => <Tag key={t}>{t}</Tag>)}
        </div>
      </Reveal>
      <Reveal delay={0.2}>
        <Link to="/contact" data-testid="case-cta" className="group inline-flex items-center gap-2 mt-12 px-7 py-3.5 rounded-full bg-gradient-to-r from-gold to-gold-glow text-krishna-void font-semibold halo-gold transition-all duration-300 hover:-translate-y-0.5">
          Bring Sudarshana to your platform
          <ArrowRight size={17} className="transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </Reveal>
    </section>

    <CtaBanner />
  </>
);
