import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, SendHorizonal } from "lucide-react";
import { SudarshanaRing } from "./Logo";

const CHIPS = [
  { id: "ott", label: "OTT Platform" },
  { id: "services", label: "Our Services" },
  { id: "cases", label: "Case Studies" },
  { id: "contact", label: "Talk to Humans" },
];

const REPLIES = [
  {
    keys: ["ott", "stream", "video", "live", "vod", "fast", "broadcast"],
    text: "GovindasStream is our flagship end-to-end OTT universe — sub-second live latency, VOD transcoding, FAST channels with ad insertion, DRM and apps for every screen. Shall I take you to its case study?",
    link: { to: "/case-studies/govindas-stream", label: "Enter the GovindasStream case study" },
  },
  {
    keys: ["service", "offer", "capabilit", "cloud", "backend", "mobile", "web", "iot", "qa", "quality", "tv app"],
    text: "We practice ten engineering disciplines — product, cloud, backend, mobile, web, OTT & streaming, TV apps, IoT, AI and quality assurance. Each has its own deep-dive page.",
    link: { to: "/services", label: "Explore the ten disciplines" },
  },
  {
    keys: ["case", "proof", "result", "work", "portfolio", "client"],
    text: "Proof is the lamp of knowledge. Our case studies reveal the architecture and results behind GovindasStream, LivQure and Sudarshana CRM.",
    link: { to: "/case-studies", label: "See the case studies" },
  },
  {
    keys: ["product", "livqure", "health"],
    text: "We build and scale our own products too — LivQure (live healthcare platform), Govindas AI, Govindas Cloud, Govindas IoT and Govindas Labs.",
    link: { to: "/products", label: "Meet the products" },
  },
  {
    keys: ["tech", "stack", "technology", "tools", "framework"],
    text: "Our arsenal spans Go, React, Next.js, Flutter, Kubernetes, FFmpeg, AWS Elemental and more — each tool battle-tested in production.",
    link: { to: "/tech-stack", label: "View the tech stack" },
  },
  {
    keys: ["price", "cost", "timeline", "budget", "estimate", "how long"],
    text: "Every creation is scoped honestly — after the Discover and Plan stages we give you a real timeline and estimate, never a generic guess. Share your vision and our architects will respond within one sunrise.",
    link: { to: "/contact", label: "Request an estimate" },
  },
  {
    keys: ["contact", "human", "email", "talk", "call", "consult"],
    text: "The humans await you at hello@govindastech.com — or leave your vision on our contact page and we shall respond within one sunrise.",
    link: { to: "/contact", label: "Open the contact page" },
  },
  {
    keys: ["crm", "sudarshana", "feedback", "sentiment", "churn"],
    text: "Sudarshana CRM is our feedback-intelligence chakra — real-time sentiment telemetry, omnichannel viewer support and a churn radar that never misses a signal.",
    link: { to: "/case-studies/sudarshana-crm", label: "Read the Sudarshana story" },
  },
  {
    keys: ["hi", "hello", "hey", "namaste", "pranam"],
    text: "प्रणाम! I am Sarthi, your charioteer through GovindasTech. Ask me about our OTT platform, services, products, case studies — or say 'contact' to reach the humans.",
  },
];

const DEFAULT_REPLY = {
  text: "A worthy question. I can guide you to our OTT platform, the ten service disciplines, products, case studies, tech stack — or connect you with the humans. Where shall we ride?",
};

const GREETING = {
  from: "sarthi",
  text: "प्रणाम · Namaste. I am Sarthi — your charioteer through GovindasTech. What do you seek today?",
};

export const Sarthi = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([GREETING]);
  const [input, setInput] = useState("");
  const [thinking, setThinking] = useState(false);
  const navigate = useNavigate();
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages, thinking, open]);

  const reply = (raw) => {
    const q = raw.toLowerCase();
    return REPLIES.find((r) => r.keys.some((k) => q.includes(k))) || DEFAULT_REPLY;
  };

  const send = (text) => {
    const clean = text.trim();
    if (!clean || thinking) return;
    setMessages((m) => [...m, { from: "you", text: clean }]);
    setInput("");
    setThinking(true);
    const r = reply(clean);
    setTimeout(() => {
      setMessages((m) => [...m, { from: "sarthi", text: r.text, link: r.link }]);
      setThinking(false);
    }, 850);
  };

  return (
    <>
      <button
        data-testid="sarthi-toggle"
        onClick={() => setOpen(!open)}
        aria-label="Chat with Sarthi"
        className="fixed bottom-6 left-6 z-[70] h-14 pl-4 pr-5 rounded-full glass-vedic halo-gold flex items-center gap-2.5 transition-all duration-300 hover:-translate-y-1 hover:border-gold-flute/60"
      >
        {open ? <X size={20} className="text-gold-flute" /> : <MessageCircle size={20} className="text-gold-flute" />}
        <span className="font-royal text-sm tracking-wide text-slate-100">Sarthi</span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.96 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed bottom-24 left-6 z-[70] w-[92vw] max-w-sm h-[520px] glass-vedic rounded-3xl halo-gold flex flex-col overflow-hidden"
            data-testid="sarthi-panel"
          >
            <div className="flex items-center gap-3 px-5 py-4 border-b border-gold/15 bg-krishna-navy/60">
              <div className="w-9 h-9 shrink-0">
                <SudarshanaRing fast className="w-full h-full" />
              </div>
              <div>
                <p className="font-royal font-bold text-slate-50 leading-none">Sarthi</p>
                <p className="text-[10px] font-mono tracking-[0.2em] text-peacock-cyan mt-1 uppercase">Your charioteer · always present</p>
              </div>
            </div>

            <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-4 space-y-3" data-testid="sarthi-messages">
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.from === "you" ? "justify-end" : "justify-start"}`}>
                  <div
                    data-testid={`sarthi-message-${i}`}
                    className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm font-light leading-relaxed ${
                      m.from === "you"
                        ? "bg-gold/15 border border-gold/30 text-slate-100 rounded-br-sm"
                        : "bg-krishna-navy/70 border border-gold/15 text-slate-300 rounded-bl-sm"
                    }`}
                  >
                    {m.text}
                    {m.link && (
                      <button
                        data-testid={`sarthi-link-${i}`}
                        onClick={() => { navigate(m.link.to); setOpen(false); }}
                        className="block mt-2.5 text-xs font-mono tracking-wider text-gold-flute hover:text-gold transition-colors"
                      >
                        ▸ {m.link.label}
                      </button>
                    )}
                  </div>
                </div>
              ))}
              {thinking && (
                <div className="flex justify-start">
                  <div className="bg-krishna-navy/70 border border-gold/15 rounded-2xl rounded-bl-sm px-4 py-3 text-xs font-mono text-gold-flute/80 animate-glow-pulse" data-testid="sarthi-thinking">
                    Sarthi is thinking…
                  </div>
                </div>
              )}
            </div>

            <div className="px-4 pb-2 flex flex-wrap gap-2">
              {CHIPS.map((c) => (
                <button
                  key={c.id}
                  data-testid={`sarthi-chip-${c.id}`}
                  onClick={() => send(c.label)}
                  className="text-[11px] font-mono tracking-wider px-3 py-1.5 rounded-full border border-gold/25 text-amber-200/80 hover:border-gold-flute/60 hover:text-gold-flute transition-colors"
                >
                  {c.label}
                </button>
              ))}
            </div>

            <form
              className="flex items-center gap-2 p-4 border-t border-gold/15"
              onSubmit={(e) => { e.preventDefault(); send(input); }}
            >
              <input
                data-testid="sarthi-input"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask Sarthi anything…"
                className="flex-1 rounded-xl border border-gold/20 bg-krishna-navy/50 px-4 py-2.5 text-sm text-slate-100 placeholder:text-slate-500 font-light focus:border-gold-flute/70 focus:outline-none transition-colors"
              />
              <button
                type="submit"
                data-testid="sarthi-send"
                aria-label="Send message"
                className="w-10 h-10 rounded-xl bg-gradient-to-r from-gold to-gold-glow text-krishna-void flex items-center justify-center transition-all duration-300 hover:brightness-110"
              >
                <SendHorizonal size={16} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
