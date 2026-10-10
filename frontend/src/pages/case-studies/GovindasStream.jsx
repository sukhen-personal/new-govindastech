import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Radio, ShieldCheck, Gauge, Globe2 } from "lucide-react";
import { PageHero, Tag, StatusBadge } from "@/components/PageHero";
import { Reveal, SectionHeading } from "@/components/Reveal";
import { OttConsole, OTT_FEATURES } from "@/components/OttPlatform";
import { CtaBanner } from "@/components/CtaBanner";

const PIPELINE_STAGES = [
  { n: "01", title: "Ingest", desc: "Multi-protocol contribution — RTMP, SRT and WebRTC feeds land on edge ingest nodes." },
  { n: "02", title: "Transcode", desc: "FFmpeg & AWS Elemental ladder generation — 4K UHD down to mobile-friendly renditions." },
  { n: "03", title: "Package", desc: "HLS & DASH packaging with multi-audio Dolby Atmos tracks and subtitle sidecars." },
  { n: "04", title: "Protect", desc: "Widevine, FairPlay and PlayReady DRM with geo-fencing and entitlement checks." },
  { n: "05", title: "Deliver", desc: "42+ global CDN nodes with mid-mile routing tuned for sub-second glass-to-glass." },
  { n: "06", title: "Play", desc: "One player SDK across web, mobile and every connected TV platform." },
];

const RESULTS = [
  { icon: Gauge, value: "0.38s", label: "Glass-to-glass live latency" },
  { icon: Globe2, value: "42+", label: "Global CDN edge nodes" },
  { icon: ShieldCheck, value: "99.99%", label: "Uptime across live events" },
  { icon: Radio, value: "15M+", label: "Stream minutes served" },
];

const STACK = ["Go", "Node.js", "FFmpeg", "AWS Elemental", "Kubernetes", "Docker", "Redis", "Kafka", "React", "Swift", "Kotlin", "Flutter", "HLS", "DASH", "Widevine", "FairPlay"];

export const GovindasStreamCase = () => (
  <>
    <PageHero
      eyebrow="Case Study · OTT Platform"
      title={<>GovindasStream — an <span className="text-gold-gradient italic">end-to-end OTT universe</span></>}
      mantra="अन्तरिक्षात् पर्दा पर्यन्तम् · From the cosmos to the screen"
      desc="How we engineered a complete live, VOD and FAST streaming platform — from contribution ingest to living-room playback — with sub-second latency and divine reliability."
    >
      <div className="flex flex-wrap items-center gap-4">
        <StatusBadge status="LIVE" />
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
              Broadcasters and content houses were stitching together five vendors — ingest here, transcoding there,
              DRM somewhere else — losing viewers to buffering, latency and fragmentation across devices. They needed
              one platform, one contract, one pane of glass.
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="glass-vedic rounded-3xl p-8 h-full" data-testid="case-solution">
            <p className="text-xs uppercase tracking-[0.3em] font-mono text-gold-flute mb-4">Our Solution</p>
            <p className="text-slate-300 font-light leading-relaxed">
              GovindasStream unifies the entire chain: contribution ingest, cloud transcoding, packaging, DRM,
              ad insertion and multi-device playback — orchestrated on Kubernetes with a real-time analytics engine
              watching every frame like a guardian chakra.
            </p>
          </div>
        </Reveal>
      </div>
    </section>

    <section className="max-w-7xl mx-auto px-6 lg:px-10 py-14">
      <Reveal>
        <SectionHeading eyebrow="Architecture" title={<>The six mandalas of the <span className="text-gold-gradient italic">streaming pipeline</span></>} />
      </Reveal>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-12" data-testid="case-pipeline">
        {PIPELINE_STAGES.map((s, i) => (
          <Reveal key={s.n} delay={0.05 * i}>
            <div className="glass-vedic rounded-2xl p-6 h-full transition-all duration-300 hover:-translate-y-1 hover:border-gold-flute/50" data-testid={`pipeline-stage-${i}`}>
              <p className="font-display text-2xl text-gold-gradient mb-3">{s.n}</p>
              <h3 className="font-sans font-semibold text-lg text-slate-100">{s.title}</h3>
              <p className="text-sm text-slate-400 font-light mt-2 leading-relaxed">{s.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>

    <section className="max-w-7xl mx-auto px-6 lg:px-10 py-14">
      <Reveal>
        <SectionHeading eyebrow="Live Console" title={<>Touch the platform <span className="text-gold-gradient italic">yourself</span></>} />
      </Reveal>
      <Reveal delay={0.1} className="mt-12 max-w-4xl">
        <OttConsole />
      </Reveal>
    </section>

    <section className="max-w-7xl mx-auto px-6 lg:px-10 py-14">
      <Reveal>
        <SectionHeading eyebrow="Capabilities Delivered" title={<>Every feature, <span className="text-gold-gradient italic">production-hardened</span></>} />
      </Reveal>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
        {OTT_FEATURES.map((f, i) => (
          <Reveal key={f.title} delay={0.05 * i}>
            <div className="glass-vedic rounded-2xl p-6 h-full" data-testid={`case-feature-${i}`}>
              <f.icon size={22} className="text-gold-flute mb-4" />
              <h3 className="font-sans font-semibold text-slate-100">{f.title}</h3>
              <p className="text-sm text-slate-400 font-light mt-2">{f.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>

    <section className="max-w-7xl mx-auto px-6 lg:px-10 py-14">
      <Reveal>
        <SectionHeading eyebrow="Results" title={<>Numbers that speak in <span className="text-gold-gradient italic">gold</span></>} />
      </Reveal>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-12" data-testid="case-results">
        {RESULTS.map((r, i) => (
          <Reveal key={r.label} delay={0.06 * i}>
            <div className="glass-vedic rounded-2xl p-6 text-center h-full" data-testid={`case-result-${i}`}>
              <r.icon size={20} className="text-gold-flute mx-auto mb-3" />
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
          Build your OTT platform with us
          <ArrowRight size={17} className="transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </Reveal>
    </section>

    <CtaBanner />
  </>
);
