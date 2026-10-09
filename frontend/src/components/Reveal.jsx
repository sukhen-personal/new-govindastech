import { motion } from "framer-motion";

export const Reveal = ({ children, delay = 0, className = "", y = 26 }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-70px" }}
    transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
  >
    {children}
  </motion.div>
);

export const SectionHeading = ({ eyebrow, title, mantra, align = "left" }) => (
  <div className={align === "center" ? "text-center" : "text-left"} data-testid="section-heading">
    <p className="text-xs uppercase tracking-[0.3em] font-mono text-gold-flute/90 mb-4">{eyebrow}</p>
    <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl tracking-tight text-slate-50 leading-[1.1]">{title}</h2>
    {mantra && <p className="font-mantra text-gold/70 mt-4 text-lg">{mantra}</p>}
    <div className={`gold-hairline mt-6 w-40 ${align === "center" ? "mx-auto" : ""}`} />
  </div>
);
