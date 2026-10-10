import { Link } from "react-router-dom";
import {
  Boxes, CloudCog, ServerCog, Smartphone, Globe2, Radio, Tv, Cpu, BrainCircuit, ShieldCheck, ArrowRight,
} from "lucide-react";
import { PageHero, Tag } from "@/components/PageHero";
import { Reveal, SectionHeading } from "@/components/Reveal";
import { CtaBanner } from "@/components/CtaBanner";
import { Marquee } from "@/components/Marquee";

const SERVICES = [
  { icon: Boxes, title: "Product Engineering", desc: "From idea to production, we build scalable digital products — discovery, MVP roadmaps, design systems and launch-ready engineering under one roof.", deliverables: ["Product discovery & MVP roadmaps", "Scalable product architecture", "Design systems & UI engineering", "Launch, iteration & growth support"], tags: ["React", "Next.js", "Node.js", "Go"] },
  { icon: CloudCog, title: "Cloud & Platform Engineering", desc: "Scalable, secure and highly available cloud infrastructure — Kubernetes orchestration, multi-region failover and infrastructure as code.", deliverables: ["Kubernetes cluster design & orchestration", "Multi-region failover & disaster recovery", "IaC, CI/CD pipelines & GitOps", "Observability, logging & alerting"], tags: ["Kubernetes", "Docker", "AWS", "GCP"] },
  { icon: ServerCog, title: "Backend Engineering", desc: "Robust APIs, microservices and high-performance systems built for concurrency, caching and event-driven scale.", deliverables: ["REST & GraphQL API engineering", "Event-driven microservices", "Caching layers & message queues", "Performance tuning & load testing"], tags: ["Go", "Node.js", "Java", "Redis", "Kafka"] },
  { icon: Smartphone, title: "Mobile App Development", desc: "Native and cross-platform mobile apps that users love — offline-first, GPU-accelerated and store-ready.", deliverables: ["iOS & Android native apps", "Cross-platform Flutter / React Native builds", "Offline sync & push notifications", "App Store & Play release operations"], tags: ["Swift", "Kotlin", "Flutter", "React Native"] },
  { icon: Globe2, title: "Web Development", desc: "Modern web applications, enterprise portals and SaaS platforms — accessible, fast and engineered for conversion.", deliverables: ["SaaS platform engineering", "Enterprise portals & dashboards", "WCAG 2.1 accessible interfaces", "Sub-second time-to-interactive"], tags: ["React", "Next.js", "TypeScript"] },
  { icon: Radio, title: "OTT & Streaming Solutions", desc: "End-to-end OTT solutions for live, VOD and FAST platforms — from ingest to every screen on Earth.", deliverables: ["Live & VOD transcoding pipelines", "FAST channel orchestration + SSAI", "DRM, geo-fencing & entitlements", "Player SDKs for every device"], tags: ["FFmpeg", "AWS Elemental", "HLS", "DASH"] },
  { icon: Tv, title: "TV App Development", desc: "Apple TV, Android TV, Fire TV and Roku apps with immersive ten-foot experiences and platform certification handled.", deliverables: ["Ten-foot UX design & engineering", "Platform certification & store launch", "Unified playback across devices", "Living-room analytics"], tags: ["tvOS", "Android TV", "Fire TV", "Roku", "Tizen", "WebOS"] },
  { icon: Cpu, title: "IoT Solutions", desc: "Smart devices, automation, monitoring and connected ecosystems — from firmware handshake to fleet dashboard.", deliverables: ["Device provisioning & management", "Real-time telemetry pipelines", "Automation rule engines", "Fleet analytics dashboards"], tags: ["MQTT", "Kafka", "Node.js", "Flutter"] },
  { icon: BrainCircuit, title: "AI & Automation", desc: "AI integration, chatbots and intelligent workflow automation that quietly remove toil from your business.", deliverables: ["AI assistants & chatbots", "Document intelligence pipelines", "Predictive insight engines", "Workflow automation"], tags: ["Python", "LLM APIs", "Node.js"] },
  { icon: ShieldCheck, title: "Quality Assurance", desc: "Comprehensive testing, automation and quality engineering — release gates that keep perfection sacred.", deliverables: ["Automated test suites", "Performance & chaos testing", "Device & browser labs", "Release quality gates"], tags: ["Playwright", "CI/CD", "Load Testing"] },
];

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
          <Reveal key={s.title} delay={0.04 * (i % 4)}>
            <article className="group glass-vedic rounded-2xl p-7 h-full transition-all duration-300 hover:-translate-y-1 hover:border-gold-flute/50 hover:shadow-[0_0_50px_-14px_rgba(212,175,55,0.45)]" data-testid={`service-card-${i}`}>
              <div className="flex items-start justify-between mb-5">
                <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/25 flex items-center justify-center">
                  <s.icon size={22} className="text-gold-flute" />
                </div>
                <span className="font-mono text-[10px] tracking-[0.25em] text-gold/40">{String(i + 1).padStart(2, "0")}</span>
              </div>
              <h3 className="font-sans font-semibold text-xl text-slate-100">{s.title}</h3>
              <p className="text-sm text-slate-400 font-light mt-2 leading-relaxed">{s.desc}</p>
              <ul className="mt-5 space-y-2">
                {s.deliverables.map((d) => (
                  <li key={d} className="flex items-center gap-2.5 text-sm text-slate-300 font-light">
                    <span className="w-1.5 h-1.5 rotate-45 bg-gold/60 shrink-0" /> {d}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 mt-6">
                {s.tags.map((t) => <Tag key={t}>{t}</Tag>)}
              </div>
            </article>
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
