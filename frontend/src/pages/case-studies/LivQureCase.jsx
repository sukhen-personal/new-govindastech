import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Activity, CalendarCheck, Pill, IndianRupee, Stethoscope, Building2, Lock, Video, ServerCog } from "lucide-react";
import { PageHero, Tag, StatusBadge } from "@/components/PageHero";
import { Reveal, SectionHeading } from "@/components/Reveal";
import { LivQurePanel } from "@/components/LivQure";
import { CtaBanner } from "@/components/CtaBanner";

const ARCHITECTURE = [
  { icon: Stethoscope, title: "Patient & Doctor Apps", desc: "Cross-platform mobile apps with appointment booking, queue management and low-latency telemedicine video." },
  { icon: ServerCog, title: "Unified API Core", desc: "Node.js microservices behind a hardened gateway — appointments, records, prescriptions and orders as clean domains." },
  { icon: Building2, title: "Pharmacy Network", desc: "Real-time inventory sync with partner pharmacies, automated e-prescription routing and order tracking." },
  { icon: Lock, title: "Trust Layer", desc: "Secure payments, encrypted health records and role-based access for patients, doctors and pharmacies." },
  { icon: Video, title: "Telemedicine Engine", desc: "Low-latency consultation rooms with in-call e-prescriptions and automated follow-up scheduling." },
  { icon: Activity, title: "Operations Dashboard", desc: "The command centre every clinic sees each morning — appointments, patients, prescriptions and revenue." },
];

const RESULTS = [
  { icon: Activity, value: "432+", label: "Active patients on platform" },
  { icon: CalendarCheck, value: "128", label: "Appointments managed daily" },
  { icon: Pill, value: "256", label: "Automated prescriptions" },
  { icon: IndianRupee, value: "₹2.45L", label: "Revenue run-rate" },
];

const STACK = ["React Native", "Node.js", "Redis", "Kubernetes", "Docker", "TypeScript", "WebRTC", "Razorpay"];

export const LivQureCase = () => (
  <>
    <PageHero
      eyebrow="Case Study · Healthcare"
      title={<>LivQure — healing, <span className="text-gold-gradient italic">engineered end to end</span></>}
      mantra="सर्वे सन्तु निरामयाः · May all be free of disease"
      desc="A comprehensive digital healthcare platform connecting patients, doctors and pharmacies — with appointment & queue management, e-prescriptions, secure payments and telemedicine."
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
              Clinics juggled paper queues, phone-booked appointments and disconnected pharmacies. Patients waited
              hours; doctors drowned in administration; prescriptions vanished into notebooks. Care was divine in
              intent, chaotic in delivery.
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="glass-vedic rounded-3xl p-8 h-full" data-testid="case-solution">
            <p className="text-xs uppercase tracking-[0.3em] font-mono text-gold-flute mb-4">Our Solution</p>
            <p className="text-slate-300 font-light leading-relaxed">
              LivQure unifies the entire care journey: patients book and consult from their phones, doctors run their
              day from one dashboard, and pharmacies receive e-prescriptions and orders in real time — with secure
              payments closing the loop.
            </p>
          </div>
        </Reveal>
      </div>
    </section>

    <section className="max-w-7xl mx-auto px-6 lg:px-10 py-14">
      <Reveal>
        <SectionHeading eyebrow="Architecture" title={<>The organs of a <span className="text-gold-gradient italic">living platform</span></>} />
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
            <SectionHeading eyebrow="The Daily Dashboard" title={<>What Dr. Sharma sees <span className="text-gold-gradient italic">every sunrise</span></>} />
            <p className="text-base text-slate-300 font-light leading-relaxed mt-5">
              One glance, complete clarity — appointments, active patients, automated prescriptions and revenue,
              synced in real time across every device in the clinic.
            </p>
          </Reveal>
        </div>
        <Reveal className="lg:col-span-7" delay={0.12}>
          <LivQurePanel />
        </Reveal>
      </div>
    </section>

    <section className="max-w-7xl mx-auto px-6 lg:px-10 py-14">
      <Reveal>
        <SectionHeading eyebrow="Results" title={<>Impact measured in <span className="text-gold-gradient italic">lives eased</span></>} />
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
          Build your healthcare platform with us
          <ArrowRight size={17} className="transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </Reveal>
    </section>

    <CtaBanner />
  </>
);
