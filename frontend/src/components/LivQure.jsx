import { Reveal, SectionHeading } from "./Reveal";
import { Activity, CalendarCheck, Pill, IndianRupee } from "lucide-react";

const METRICS = [
  { icon: Activity, value: "432+", label: "Active Patients" },
  { icon: CalendarCheck, value: "128", label: "Daily Appointments" },
  { icon: Pill, value: "256", label: "Automated Prescriptions" },
  { icon: IndianRupee, value: "₹2.45L", label: "Revenue Run-Rate" },
];

export const LivQure = () => (
  <section id="livqure" className="relative py-28 lg:py-36 bg-krishna-midnight/40 overflow-hidden">
    <div className="absolute -left-40 top-1/3 w-96 h-96 rounded-full bg-peacock-emerald/10 blur-3xl" />
    <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-12 items-center">
      <div className="lg:col-span-6">
        <Reveal>
          <p className="inline-block text-xs font-mono tracking-[0.25em] uppercase text-peacock-cyan border border-peacock-cyan/30 rounded-full px-4 py-1.5 mb-6" data-testid="livqure-badge">
            Flagship Healthcare Deployment
          </p>
          <SectionHeading
            eyebrow="Product Spotlight"
            title={<>LivQure — healing, <span className="text-gold-gradient italic">engineered</span></>}
          />
          <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed mt-6 max-w-xl">
            LivQure bridges patients, super-specialists and diagnostic pharmacies through unified digital records
            and low-latency telemedicine — a product born of purpose, serving lives every day.
          </p>
          <p className="font-mantra text-gold/70 mt-6 text-lg">सर्वे सन्तु निरामयाः — May all be free of disease</p>
        </Reveal>
      </div>

      <Reveal className="lg:col-span-6" delay={0.12}>
        <div className="glass-vedic rounded-3xl p-7 halo-gold" data-testid="livqure-panel">
          <div className="flex items-center justify-between mb-6">
            <div>
              <p className="text-xs font-mono tracking-wider text-slate-500">WELCOME BACK</p>
              <p className="font-serif text-xl text-slate-100 mt-1">Dr. Sharma</p>
            </div>
            <span className="flex items-center gap-2 text-xs font-mono text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-glow-pulse" /> SYNCED
            </span>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {METRICS.map((m, i) => (
              <div key={m.label} className="rounded-xl border border-gold/15 bg-krishna-navy/50 p-5 transition-all duration-300 hover:border-gold-flute/40" data-testid={`livqure-metric-${i}`}>
                <m.icon size={18} className="text-gold-flute mb-3" />
                <p className="font-mono text-2xl text-slate-50">{m.value}</p>
                <p className="text-xs font-mono tracking-wider text-slate-500 mt-1 uppercase">{m.label}</p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);
