import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SendHorizonal, Mail, MapPin, Plus, Minus } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Reveal, SectionHeading } from "@/components/Reveal";

const INTERESTS = [
  "Product Engineering", "Cloud & Platform Engineering", "Web / Mobile App",
  "OTT & Streaming", "IoT Solutions", "AI & Automation", "Other",
];

const FAQS = [
  {
    q: "What services does GovindasTech offer?",
    a: "Nine engineering disciplines end to end — product engineering, cloud & platform engineering, backend and web engineering, mobile & connected devices, OTT & streaming, AI & automation, and IoT engineering. See the full breakdown on our Services page.",
  },
  {
    q: "How long does it take to develop a solution?",
    a: "It depends on scope. We'll give you a real timeline after the Discover and Plan & Architect stages, not a generic estimate up front.",
  },
  {
    q: "Do you provide post-launch support?",
    a: "Yes — Deploy & Scale is a stage in our delivery process, not an afterthought. We scope post-launch support as part of every engagement.",
  },
];

const inputCls =
  "w-full rounded-xl border border-gold/20 bg-krishna-navy/50 px-4 py-3.5 text-slate-100 placeholder:text-slate-500 font-light focus:border-gold-flute/70 focus:outline-none transition-colors duration-200";

export const ContactPage = () => {
  const [form, setForm] = useState({ name: "", email: "", company: "", phone: "", interest: INTERESTS[0], subject: "", message: "" });
  const [openFaq, setOpenFaq] = useState(0);

  const submit = (e) => {
    e.preventDefault();
    const body = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      form.company && `Company: ${form.company}`,
      form.phone && `Phone: ${form.phone}`,
      `Interested in: ${form.interest}`,
      "",
      form.message,
    ].filter(Boolean).join("\n");
    window.location.href = `mailto:hello@govindastech.com?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <>
      <PageHero
        eyebrow="Get in Touch"
        title={<>Let's build something <span className="text-gold-gradient italic">extraordinary</span> together</>}
        mantra="आ नो भद्राः क्रतवो यन्तु विश्वतः · May noble thoughts come from every direction"
        desc="Have a project in mind or need expert guidance? Our team is ready to listen, understand and help you turn your ideas into powerful digital solutions."
      />

      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-14 grid lg:grid-cols-12 gap-10 items-start">
        <Reveal className="lg:col-span-7">
          <form onSubmit={submit} className="glass-vedic rounded-3xl p-7 sm:p-10 halo-gold grid sm:grid-cols-2 gap-5" data-testid="contact-enquiry-form">
            <div>
              <label htmlFor="enquiry-name" className="block text-xs font-mono tracking-[0.2em] uppercase text-slate-400 mb-2">Full Name *</label>
              <input id="enquiry-name" data-testid="enquiry-name" required className={inputCls} placeholder="Arjuna Sharma"
                value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
            </div>
            <div>
              <label htmlFor="enquiry-email" className="block text-xs font-mono tracking-[0.2em] uppercase text-slate-400 mb-2">Email Address *</label>
              <input id="enquiry-email" data-testid="enquiry-email" type="email" required className={inputCls} placeholder="you@company.com"
                value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
            </div>
            <div>
              <label htmlFor="enquiry-company" className="block text-xs font-mono tracking-[0.2em] uppercase text-slate-400 mb-2">Company Name</label>
              <input id="enquiry-company" data-testid="enquiry-company" className={inputCls} placeholder="Your organisation"
                value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} />
            </div>
            <div>
              <label htmlFor="enquiry-phone" className="block text-xs font-mono tracking-[0.2em] uppercase text-slate-400 mb-2">Phone Number</label>
              <input id="enquiry-phone" data-testid="enquiry-phone" type="tel" className={inputCls} placeholder="+91 …"
                value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="enquiry-interest" className="block text-xs font-mono tracking-[0.2em] uppercase text-slate-400 mb-2">Service / Product of Interest</label>
              <select id="enquiry-interest" data-testid="enquiry-interest" className={inputCls}
                value={form.interest} onChange={(e) => setForm({ ...form, interest: e.target.value })}>
                {INTERESTS.map((r) => <option key={r} value={r} className="bg-krishna-navy">{r}</option>)}
              </select>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="enquiry-subject" className="block text-xs font-mono tracking-[0.2em] uppercase text-slate-400 mb-2">Subject *</label>
              <input id="enquiry-subject" data-testid="enquiry-subject" required className={inputCls} placeholder="What shall we create?"
                value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="enquiry-message" className="block text-xs font-mono tracking-[0.2em] uppercase text-slate-400 mb-2">Message *</label>
              <textarea id="enquiry-message" data-testid="enquiry-message" rows={5} required className={`${inputCls} resize-none`}
                placeholder="Describe the platform you dream of…"
                value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
            </div>
            <div className="sm:col-span-2">
              <button
                type="submit"
                data-testid="enquiry-submit"
                className="group inline-flex items-center gap-2 px-9 py-4 rounded-full bg-gradient-to-r from-gold to-gold-glow text-krishna-void font-semibold halo-gold transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110"
              >
                Send Message
                <SendHorizonal size={17} className="transition-transform duration-300 group-hover:translate-x-1" />
              </button>
              <p className="text-xs font-mono tracking-wider text-slate-500 mt-4">
                Submitting opens your email client with your details prefilled — nothing is sent automatically.
              </p>
            </div>
          </form>
        </Reveal>

        <div className="lg:col-span-5 space-y-5">
          <Reveal delay={0.1}>
            <div className="glass-vedic rounded-2xl p-7" data-testid="contact-email-card">
              <div className="w-11 h-11 rounded-xl bg-gold/10 border border-gold/25 flex items-center justify-center mb-4">
                <Mail size={20} className="text-gold-flute" />
              </div>
              <p className="text-xs font-mono tracking-[0.25em] uppercase text-slate-500 mb-1">Email</p>
              <a href="mailto:hello@govindastech.com" data-testid="contact-email-link" className="font-serif text-2xl text-gold-flute hover:text-gold transition-colors">
                hello@govindastech.com
              </a>
            </div>
          </Reveal>
          <Reveal delay={0.18}>
            <div className="glass-vedic rounded-2xl p-7" data-testid="contact-location-card">
              <div className="w-11 h-11 rounded-xl bg-gold/10 border border-gold/25 flex items-center justify-center mb-4">
                <MapPin size={20} className="text-gold-flute" />
              </div>
              <p className="text-xs font-mono tracking-[0.25em] uppercase text-slate-500 mb-1">Find Us</p>
              <p className="font-serif text-2xl text-slate-100">Bengaluru, Bharat</p>
              <p className="text-sm text-slate-400 font-light mt-1">Serving clients across global nodes</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 lg:px-10 py-16">
        <Reveal>
          <SectionHeading align="center" eyebrow="FAQ" title={<>Frequently asked <span className="text-gold-gradient italic">questions</span></>} />
        </Reveal>
        <div className="mt-12 space-y-4" data-testid="faq-list">
          {FAQS.map((f, i) => (
            <Reveal key={f.q} delay={0.06 * i}>
              <div className="glass-vedic rounded-2xl overflow-hidden">
                <button
                  data-testid={`faq-question-${i}`}
                  onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="font-sans font-medium text-slate-100">{f.q}</span>
                  {openFaq === i ? <Minus size={18} className="text-gold-flute shrink-0" /> : <Plus size={18} className="text-gold-flute shrink-0" />}
                </button>
                <AnimatePresence initial={false}>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <p className="px-6 pb-6 text-sm sm:text-base text-slate-400 font-light leading-relaxed" data-testid={`faq-answer-${i}`}>{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
};
