import { Link } from "react-router-dom";
import { ArrowRight, HeartPulse, BrainCircuit, CloudCog, Cpu, FlaskConical, Newspaper, ShieldCheck, ShoppingBag, GraduationCap } from "lucide-react";
import { PageHero, StatusBadge } from "@/components/PageHero";
import { Reveal, SectionHeading } from "@/components/Reveal";
import { CtaBanner } from "@/components/CtaBanner";

const PRODUCTS = [
  {
    icon: HeartPulse, name: "LivQure", type: "Digital Healthcare Platform", status: "LIVE",
    desc: "A comprehensive healthcare platform connecting patients, doctors and pharmacies.",
    features: ["Appointment & queue management", "Doctor and pharmacy network", "e-Prescriptions and orders", "Secure payments"],
    caseStudy: "/case-studies/livqure",
  },
  {
    icon: BrainCircuit, name: "Govindas AI", type: "AI-Powered Platform", status: "IN DEVELOPMENT",
    desc: "Intelligent automation and AI solutions to help businesses work smarter.",
    features: ["AI assistants and chatbots", "Document intelligence", "Workflow automation", "Predictive insights"],
  },
  {
    icon: CloudCog, name: "Govindas Cloud", type: "Cloud Infrastructure Platform", status: "IN DEVELOPMENT",
    desc: "Simplified cloud infrastructure management for startups and enterprises.",
    features: ["Kubernetes orchestration", "Auto scaling", "Monitoring and logging", "Backup and recovery"],
  },
  {
    icon: Cpu, name: "Govindas IoT", type: "IoT Platform", status: "BETA",
    desc: "Build, connect and manage smart devices and IoT ecosystems.",
    features: ["Device management", "Real-time telemetry", "Automation rules", "Data analytics"],
  },
  {
    icon: FlaskConical, name: "Govindas Labs", type: "Innovation Lab", status: "PLANNED",
    desc: "Exploring emerging technologies to build the future.",
    features: ["Emerging tech R&D", "Prototypes and POCs", "Open source contributions", "Future products"],
  },
];

const PIPELINE = [
  { icon: Newspaper, name: "Govindas Media CMS", desc: "A next-gen content management system for media platforms." },
  { icon: ShieldCheck, name: "Govindas Secure", desc: "Security and compliance platform for modern applications." },
  { icon: ShoppingBag, name: "Govindas Commerce", desc: "Headless commerce platform for scalable experiences." },
  { icon: GraduationCap, name: "Govindas Learn", desc: "AI-powered learning platform for education and training." },
];

export const Products = () => (
  <>
    <PageHero
      eyebrow="Our Products"
      title={<>Innovative products that create <span className="text-gold-gradient italic">real impact</span></>}
      mantra="सृष्टिः एव परमं ध्यानम् · Creation is the highest meditation"
      desc="We build and invest in products that solve real-world problems and empower businesses and individuals through technology."
    />

    <section className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
      <Reveal>
        <SectionHeading eyebrow="Products We Build & Scale" title={<>From healthcare to AI, crafted for <span className="text-gold-gradient italic">transformation</span></>} />
      </Reveal>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12" data-testid="products-grid">
        {PRODUCTS.map((p, i) => (
          <Reveal key={p.name} delay={0.05 * (i % 3)}>
            <article className="group glass-vedic rounded-2xl p-7 h-full flex flex-col transition-all duration-300 hover:-translate-y-1 hover:border-gold-flute/50 hover:shadow-[0_0_50px_-14px_rgba(212,175,55,0.45)]" data-testid={`product-card-${p.name.toLowerCase().replace(/\s/g, "-")}`}>
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/25 flex items-center justify-center">
                  <p.icon size={22} className="text-gold-flute" />
                </div>
                <StatusBadge status={p.status} />
              </div>
              <h3 className="font-serif text-2xl text-slate-50">{p.name}</h3>
              <p className="text-xs font-mono tracking-[0.2em] uppercase text-peacock-cyan mt-1.5">{p.type}</p>
              <p className="text-sm text-slate-400 font-light mt-3 leading-relaxed">{p.desc}</p>
              <ul className="mt-5 space-y-2 flex-1">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-sm text-slate-300 font-light">
                    <span className="w-1.5 h-1.5 rotate-45 bg-gold/60 shrink-0" /> {f}
                  </li>
                ))}
              </ul>
              {p.caseStudy && (
                <Link to={p.caseStudy} data-testid="product-case-link" className="group/link inline-flex items-center gap-2 mt-6 text-sm font-mono tracking-wider text-gold-flute hover:text-gold transition-colors">
                  View case study
                  <ArrowRight size={15} className="transition-transform duration-300 group-hover/link:translate-x-1" />
                </Link>
              )}
            </article>
          </Reveal>
        ))}
      </div>
    </section>

    <section className="max-w-7xl mx-auto px-6 lg:px-10 py-14">
      <Reveal>
        <SectionHeading eyebrow="Products in the Pipeline" title={<>What is <span className="text-gold-gradient italic">coming next</span></>} mantra="भविष्यं निर्मियमाणम् · The future is being forged" />
      </Reveal>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12" data-testid="pipeline-grid">
        {PIPELINE.map((p, i) => (
          <Reveal key={p.name} delay={0.06 * i}>
            <div className="glass-vedic rounded-2xl p-6 h-full transition-all duration-300 hover:-translate-y-1 hover:border-gold-flute/50" data-testid={`pipeline-card-${i}`}>
              <p.icon size={22} className="text-gold-flute mb-4" />
              <h3 className="font-sans font-semibold text-slate-100">{p.name}</h3>
              <p className="text-sm text-slate-400 font-light mt-2 leading-relaxed">{p.desc}</p>
              <p className="mt-4 text-[10px] font-mono tracking-[0.25em] text-gold/50 uppercase">In the Yagna</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>

    <CtaBanner title="Have an Idea for the Next Big Thing?" desc="Let's build a product that creates impact and drives change." />
  </>
);
