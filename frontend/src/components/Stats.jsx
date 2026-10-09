import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "framer-motion";
import { Reveal, SectionHeading } from "./Reveal";

const TEMPLE_IMG =
  "https://images.pexels.com/photos/32762553/pexels-photo-32762553.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";

const STATS = [
  { value: 32, suffix: "+", label: "Projects Delivered", sub: "Zero-downtime execution" },
  { value: 24, suffix: "+", label: "Products Engineered", sub: "Across 6 continents" },
  { value: 99.99, suffix: "%", label: "SLA Uptime Focus", sub: "High-reliability tier", decimals: 2 },
  { value: 15, suffix: "M+", label: "Stream Minutes Served", sub: "Ultra-low buffering" },
];

const CountUp = ({ value, suffix, decimals = 0 }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 2.2,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(decimals ? v.toFixed(decimals) : Math.round(v).toString()),
    });
    return () => controls.stop();
  }, [inView, value, decimals]);

  return (
    <span ref={ref} className="font-mono text-4xl sm:text-5xl text-gold-gradient" data-testid="stat-value">
      {display}
      {suffix}
    </span>
  );
};

export const Stats = () => (
  <section id="heritage" className="relative py-28 lg:py-36">
    <div className="max-w-7xl mx-auto px-6 lg:px-10">
      <div className="grid lg:grid-cols-12 gap-12 items-center mb-20">
        <Reveal className="lg:col-span-5">
          <div className="relative rounded-3xl overflow-hidden border border-gold/25 halo-gold">
            <img src={TEMPLE_IMG} alt="Sacred temple carvings — ancient architecture, modern systems" className="w-full h-[380px] object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-krishna-void/80 to-transparent" />
          </div>
        </Reveal>
        <div className="lg:col-span-7">
          <Reveal>
            <SectionHeading
              eyebrow="Heritage & Proof"
              title={<>Ancient precision, <span className="text-gold-gradient italic">modern systems</span></>}
            />
            <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed mt-6 max-w-2xl">
              The temples of Bharat were engineered to stand for millennia — aligned to stars, tolerant of time.
              We build distributed systems with the same reverence: every service carved deliberately, every
              pipeline aligned to purpose.
            </p>
          </Reveal>
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4" data-testid="stats-grid">
        {STATS.map((s, i) => (
          <Reveal key={s.label} delay={0.08 * i}>
            <div className="glass-vedic rounded-2xl p-7 text-center transition-all duration-300 hover:-translate-y-1 hover:border-gold-flute/50" data-testid={`stat-card-${i}`}>
              <CountUp value={s.value} suffix={s.suffix} decimals={s.decimals} />
              <p className="font-sans font-semibold text-slate-100 mt-3">{s.label}</p>
              <p className="text-xs font-mono tracking-wider text-slate-500 mt-1">{s.sub}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
