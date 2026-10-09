import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SendHorizonal, CheckCircle2 } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";

const REQUIREMENTS = ["OTT Platform", "Cloud Engineering", "Sudarshana CRM", "Custom Engineering"];

const inputCls =
  "w-full rounded-xl border border-gold/20 bg-krishna-navy/50 px-4 py-3.5 text-slate-100 placeholder:text-slate-500 font-light focus:border-gold-flute/70 focus:outline-none transition-colors duration-200";

export const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", requirement: REQUIREMENTS[0], vision: "" });
  const [sent, setSent] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="relative py-28 lg:py-36 bg-krishna-midnight/40 overflow-hidden">
      <div className="absolute -right-40 bottom-0 w-[480px] h-[480px] rounded-full bg-gold/8 blur-3xl" />
      <div className="max-w-4xl mx-auto px-6 lg:px-10">
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="Begin the Creation"
            title={<>Share your <span className="text-gold-gradient italic">vision</span></>}
            mantra="आ नो भद्राः क्रतवो यन्तु विश्वतः · May noble thoughts come from every direction"
          />
        </Reveal>

        <Reveal delay={0.12} className="mt-14">
          <div className="glass-vedic rounded-3xl p-7 sm:p-10 halo-gold relative overflow-hidden">
            <AnimatePresence mode="wait">
              {sent ? (
                <motion.div
                  key="done"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="text-center py-12"
                  data-testid="contact-success"
                >
                  <CheckCircle2 size={48} className="text-gold-flute mx-auto mb-5" />
                  <p className="font-mantra text-2xl text-gold mb-3">प्रणाम</p>
                  <h3 className="font-serif text-2xl text-slate-50 mb-2">Your vision has been received</h3>
                  <p className="text-slate-400 font-light max-w-md mx-auto">
                    Our architects will respond within one sunrise — expect a divine consultation shortly.
                  </p>
                  <button
                    data-testid="contact-send-another"
                    onClick={() => { setSent(false); setForm({ name: "", email: "", requirement: REQUIREMENTS[0], vision: "" }); }}
                    className="mt-7 text-sm font-mono tracking-wider text-gold-flute hover:text-gold transition-colors"
                  >
                    ▸ dispatch another vision
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -12 }}
                  onSubmit={submit}
                  className="grid sm:grid-cols-2 gap-5"
                  data-testid="contact-enquiry-form"
                >
                  <div>
                    <label htmlFor="enquiry-name" className="block text-xs font-mono tracking-[0.2em] uppercase text-slate-400 mb-2">Full Name</label>
                    <input id="enquiry-name" data-testid="enquiry-name" required className={inputCls} placeholder="Arjuna Sharma"
                      value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                  </div>
                  <div>
                    <label htmlFor="enquiry-email" className="block text-xs font-mono tracking-[0.2em] uppercase text-slate-400 mb-2">Work Email</label>
                    <input id="enquiry-email" data-testid="enquiry-email" type="email" required className={inputCls} placeholder="you@company.com"
                      value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="enquiry-requirement" className="block text-xs font-mono tracking-[0.2em] uppercase text-slate-400 mb-2">Requirement</label>
                    <select id="enquiry-requirement" data-testid="enquiry-requirement" className={inputCls}
                      value={form.requirement} onChange={(e) => setForm({ ...form, requirement: e.target.value })}>
                      {REQUIREMENTS.map((r) => <option key={r} value={r} className="bg-krishna-navy">{r}</option>)}
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="enquiry-vision" className="block text-xs font-mono tracking-[0.2em] uppercase text-slate-400 mb-2">Project Vision</label>
                    <textarea id="enquiry-vision" data-testid="enquiry-vision" rows={4} required className={`${inputCls} resize-none`}
                      placeholder="Describe the platform you dream of…"
                      value={form.vision} onChange={(e) => setForm({ ...form, vision: e.target.value })} />
                  </div>
                  <div className="sm:col-span-2 flex justify-center mt-2">
                    <button
                      type="submit"
                      data-testid="enquiry-submit"
                      className="group inline-flex items-center gap-2 px-9 py-4 rounded-full bg-gradient-to-r from-gold to-gold-glow text-krishna-void font-semibold halo-gold transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110"
                    >
                      Dispatch Enquiry
                      <SendHorizonal size={17} className="transition-transform duration-300 group-hover:translate-x-1" />
                    </button>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
