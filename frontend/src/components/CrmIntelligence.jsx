import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Feather, Radar, HeartPulse, TicketCheck } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";

const SENTIMENTS = ["Restless", "Curious", "Pleased", "Delighted", "Divine Bliss"];

export const CRM_FEATURES = [
  { icon: HeartPulse, title: "Vedic Sentiment Telemetry", desc: "Real-time viewer emotion & NPS scoring with AI categorization across every stream touchpoint." },
  { icon: TicketCheck, title: "Omnichannel Viewer Support", desc: "Instant ticketing, live-stream glitch diagnostics, automatic refund & entitlement sync." },
  { icon: Radar, title: "Predictive Churn Radar", desc: "Early alerts before viewer drop-off, with algorithmic re-engagement triggers." },
];

export const FeedbackWidget = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const active = hover || rating;

  return (
    <div className="glass-vedic rounded-3xl p-7 halo-gold relative overflow-hidden" data-testid="feedback-widget">
      <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-gold/10 blur-3xl" />
      <p className="text-xs uppercase tracking-[0.3em] font-mono text-gold-flute mb-2">Live Telemetry Demo</p>
      <h3 className="font-serif text-2xl text-slate-50 mb-1">How divine is your experience?</h3>
      <p className="text-sm text-slate-400 font-light mb-7">Touch a feather — watch Sudarshana read the signal instantly.</p>

      <div className="flex items-center gap-3 mb-6">
        {[1, 2, 3, 4, 5].map((n) => (
          <button
            key={n}
            data-testid={`feedback-feather-${n}`}
            onMouseEnter={() => setHover(n)}
            onMouseLeave={() => setHover(0)}
            onClick={() => setRating(n)}
            aria-label={`Rate ${n} of 5`}
            className="transition-transform duration-200 hover:scale-125"
          >
            <Feather
              size={30}
              className={`transition-colors duration-200 ${active >= n ? "text-gold-flute fill-gold-flute/30" : "text-slate-600"}`}
            />
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={rating || "idle"}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
          className="rounded-xl border border-gold/15 bg-krishna-navy/60 p-4 font-mono text-xs space-y-2"
          data-testid="feedback-telemetry"
        >
          {rating ? (
            <>
              <p className="text-peacock-cyan">▸ signal captured · {new Date().toLocaleTimeString()}</p>
              <p className="text-slate-300">sentiment_score: <span className="text-gold-flute">{(rating * 0.2).toFixed(2)}</span></p>
              <p className="text-slate-300">nps_bucket: <span className="text-gold-flute">{rating >= 4 ? "promoter" : rating === 3 ? "passive" : "detractor"}</span></p>
              <p className="text-slate-300">mood: <span className="text-gold-flute">{SENTIMENTS[rating - 1]}</span></p>
              <p className="text-emerald-400">✓ routed to Sudarshana CRM — acknowledgement dispatched</p>
            </>
          ) : (
            <p className="text-slate-500">▸ awaiting signal… Sudarshana ring is listening</p>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export const CrmIntelligence = () => (
  <section id="crm" className="relative py-28 lg:py-36 bg-krishna-midnight/40">
    <div className="max-w-7xl mx-auto px-6 lg:px-10">
      <Reveal>
        <SectionHeading
          eyebrow="Sudarshana CRM · Feedback Intelligence"
          title={<>The chakra that <span className="text-gold-gradient italic">never misses</span> a signal</>}
          mantra="सर्वे भवन्तु सुखिनः · May every viewer be delighted"
        />
        <Link
          to="/case-studies/sudarshana-crm"
          data-testid="crm-case-study-link"
          className="group inline-flex items-center gap-2 mt-6 text-sm font-mono tracking-wider text-gold-flute hover:text-gold transition-colors"
        >
          Read the Sudarshana CRM case study
          <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </Reveal>

      <div className="grid lg:grid-cols-12 gap-10 mt-14 items-start">
        <div className="lg:col-span-7 space-y-4">
          {CRM_FEATURES.map((f, i) => (
            <Reveal key={f.title} delay={0.08 * i}>
              <div className="group glass-vedic rounded-2xl p-6 flex gap-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-gold-flute/50 hover:shadow-[0_0_40px_-12px_rgba(212,175,55,0.4)]" data-testid={`crm-feature-${i}`}>
                <div className="w-11 h-11 rounded-xl bg-gold/10 border border-gold/25 flex items-center justify-center shrink-0">
                  <f.icon size={20} className="text-gold-flute" />
                </div>
                <div>
                  <h3 className="font-sans font-semibold text-lg text-slate-100">{f.title}</h3>
                  <p className="text-sm sm:text-base text-slate-400 font-light mt-1.5 leading-relaxed">{f.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="lg:col-span-5" delay={0.15}>
          <FeedbackWidget />
        </Reveal>
      </div>
    </div>
  </section>
);
