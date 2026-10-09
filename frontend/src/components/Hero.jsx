import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { SudarshanaRing, FluteWave } from "./Logo";

const FEATHER_IMG =
  "https://images.unsplash.com/photo-1578885564199-db62248858cf?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMzN8MHwxfHNlYXJjaHwxfHxwZWFjb2NrJTIwZmVhdGhlciUyMG1hY3JvfGVufDB8fHx8MTc5MTU2ODc0MXww&ixlib=rb-4.1.0&q=85";

const MaskedLine = ({ children, delay }) => (
  <span className="block overflow-hidden pb-2 -mb-2">
    <motion.span
      className="block"
      initial={{ y: "115%" }}
      animate={{ y: 0 }}
      transition={{ duration: 1.1, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.span>
  </span>
);

const TICKER = ["32+ Projects Delivered", "24+ Products Engineered", "99.99% Uptime Focus", "15M+ Stream Minutes", "Global CDN Nodes"];

export const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yImg = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const yRing = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const fade = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <section id="top" ref={ref} className="relative min-h-screen flex flex-col justify-center overflow-hidden starfield pt-28 pb-16">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_70%_20%,rgba(37,99,235,0.16),transparent),radial-gradient(ellipse_50%_40%_at_15%_80%,rgba(13,148,136,0.12),transparent),radial-gradient(ellipse_40%_35%_at_50%_50%,rgba(212,175,55,0.06),transparent)]" />

      <motion.div style={{ y: yRing }} className="absolute -right-32 top-24 w-[520px] h-[520px] opacity-40 hidden md:block">
        <SudarshanaRing className="w-full h-full" />
      </motion.div>

      <motion.div style={{ opacity: fade }} className="relative max-w-7xl mx-auto px-6 lg:px-10 w-full grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="flex items-center gap-3 mb-8"
          >
            <Sparkles size={14} className="text-gold-flute" />
            <span className="text-xs uppercase tracking-[0.35em] font-mono text-gold-flute/90">GovindasTech · Divine Engineering</span>
          </motion.div>

          <h1 className="font-serif tracking-tight leading-[1.05] text-4xl sm:text-5xl lg:text-[4.4rem] text-slate-50" data-testid="hero-headline">
            <MaskedLine delay={0.3}>Driven By Purpose.</MaskedLine>
            <MaskedLine delay={0.48}>
              <span className="text-gold-gradient italic">Powered by Intelligence.</span>
            </MaskedLine>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="font-mantra text-xl text-gold/80 mt-7"
            data-testid="hero-mantra"
          >
            योगः कर्मसु कौशलम् — Excellence in action is Yoga
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.05 }}
            className="text-base sm:text-lg text-slate-300 font-light leading-relaxed mt-5 max-w-xl"
          >
            We engineer end-to-end OTT streaming ecosystems, high-availability cloud platforms and AI-driven
            telemetry — crafted with the precision of a divine creation, delivered for the modern world.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.2 }}
            className="flex flex-wrap items-center gap-4 mt-10"
          >
            <a
              href="#ott-platform"
              data-testid="hero-cta-ott"
              className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-gold to-gold-glow text-krishna-void font-semibold halo-gold transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110"
            >
              Explore the OTT Platform
              <ArrowRight size={17} className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              data-testid="hero-cta-consult"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-gold/40 text-gold-flute font-medium glass-vedic transition-all duration-300 hover:border-gold-flute/70 hover:-translate-y-0.5"
            >
              Initiate Consultation
            </a>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5, duration: 1 }}>
            <FluteWave className="w-72 mt-12 opacity-80" />
          </motion.div>
        </div>

        <div className="lg:col-span-5 relative hidden lg:block">
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.3, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
            style={{ y: yImg }}
            className="relative"
          >
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-gold/25 via-peacock-cyan/10 to-transparent blur-xl animate-glow-pulse" />
            <div className="relative rounded-[2rem] overflow-hidden border border-gold/30 halo-gold">
              <img src={FEATHER_IMG} alt="Peacock feather — the Mayur Pankh, crown of Krishna" className="w-full h-[520px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-krishna-void/85 via-transparent to-krishna-midnight/30" />
              <div className="absolute bottom-5 left-5 right-5 glass-vedic rounded-xl px-4 py-3 flex items-center justify-between">
                <span className="text-xs font-mono tracking-wider text-amber-200/80">MAYUR PANKH · SIGNAL FIDELITY</span>
                <span className="flex items-center gap-2 text-xs font-mono text-peacock-cyan">
                  <span className="w-1.5 h-1.5 rounded-full bg-peacock-cyan animate-glow-pulse" /> 4K UHD · DOLBY ATMOS
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.6 }}
        className="relative max-w-7xl mx-auto px-6 lg:px-10 w-full mt-16"
      >
        <div className="glass-vedic rounded-2xl px-6 py-4 flex flex-wrap items-center justify-between gap-x-8 gap-y-3" data-testid="hero-telemetry-ticker">
          {TICKER.map((t) => (
            <span key={t} className="text-xs font-mono tracking-wider text-amber-200/75 flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-gold-flute" />
              {t}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
