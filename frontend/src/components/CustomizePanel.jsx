import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SlidersHorizontal, X, RotateCcw, Zap, ZapOff, SunMoon } from "lucide-react";

const ACCENTS = [
  { id: "gold", label: "Sacred Gold", swatch: "#D4AF37" },
  { id: "peacock", label: "Peacock Teal", swatch: "#0D9488" },
  { id: "crimson", label: "Divine Crimson", swatch: "#E11D48" },
];

const SIZES = [
  { id: "normal", label: "A" },
  { id: "large", label: "A+" },
  { id: "larger", label: "A++" },
];

export const daypartAccent = () => {
  const h = new Date().getHours();
  if (h >= 5 && h < 12) return { accent: "gold", part: "morning" };
  if (h >= 12 && h < 17) return { accent: "peacock", part: "afternoon" };
  if (h >= 17 && h < 21) return { accent: "crimson", part: "evening" };
  return { accent: "gold", part: "night" };
};

export const resolveAccent = () => {
  const stored = localStorage.getItem("gt-accent") || "gold";
  return stored === "auto" ? daypartAccent().accent : stored;
};

export const applySettings = () => {
  const root = document.documentElement;
  root.dataset.accent = resolveAccent();
  root.dataset.textsize = localStorage.getItem("gt-textsize") || "normal";
  root.classList.toggle("reduce-motion", localStorage.getItem("gt-motion") === "reduced");
};

export const CustomizePanel = () => {
  const [open, setOpen] = useState(false);
  const [accent, setAccent] = useState(() => localStorage.getItem("gt-accent") || "gold");
  const [textsize, setTextsize] = useState(() => localStorage.getItem("gt-textsize") || "normal");
  const [motionPref, setMotionPref] = useState(() => localStorage.getItem("gt-motion") || "full");

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    const sync = () => {
      setAccent(localStorage.getItem("gt-accent") || "gold");
      setTextsize(localStorage.getItem("gt-textsize") || "normal");
      setMotionPref(localStorage.getItem("gt-motion") || "full");
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("gt-settings", sync);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("gt-settings", sync);
    };
  }, []);

  const save = (key, value, setter) => {
    setter(value);
    localStorage.setItem(key, value);
    applySettings();
    window.dispatchEvent(new Event("gt-settings"));
  };

  const reset = () => {
    ["gt-accent", "gt-textsize", "gt-motion"].forEach((k) => localStorage.removeItem(k));
    applySettings();
    window.dispatchEvent(new Event("gt-settings"));
  };

  const auto = daypartAccent();
  const accentLabel =
    accent === "auto"
      ? `Auto · ${ACCENTS.find((a) => a.id === auto.accent)?.label} (${auto.part})`
      : ACCENTS.find((a) => a.id === accent)?.label;

  return (
    <>
      <button
        data-testid="customize-toggle"
        onClick={() => setOpen(!open)}
        aria-label="Customise appearance"
        className="fixed bottom-6 right-6 z-[70] w-14 h-14 rounded-full bg-gradient-to-r from-gold to-gold-glow text-krishna-void halo-gold flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:brightness-110"
      >
        {open ? <X size={22} /> : <SlidersHorizontal size={22} />}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.96 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed bottom-24 right-6 z-[70] w-80 glass-vedic rounded-3xl p-6 halo-gold"
            data-testid="customize-panel"
          >
            <p className="text-xs uppercase tracking-[0.3em] font-mono text-gold-flute mb-1">Make It Yours</p>
            <p className="text-sm text-slate-400 font-light mb-6">Tune the experience like an app — saved on this device.</p>

            <p className="text-[10px] font-mono tracking-[0.25em] uppercase text-slate-500 mb-3">Accent</p>
            <div className="flex items-center gap-3 mb-1.5">
              {ACCENTS.map((a) => (
                <button
                  key={a.id}
                  data-testid={`accent-${a.id}`}
                  onClick={() => save("gt-accent", a.id, setAccent)}
                  aria-label={`${a.label} accent`}
                  title={a.label}
                  className={`w-10 h-10 rounded-full transition-all duration-300 hover:scale-110 ${accent === a.id ? "ring-2 ring-offset-2 ring-offset-krishna-midnight ring-gold-flute" : "opacity-70"}`}
                  style={{ background: a.swatch }}
                />
              ))}
              <button
                data-testid="accent-auto"
                onClick={() => save("gt-accent", "auto", setAccent)}
                aria-label="Auto accent by time of day"
                title="Auto — shifts with the time of day"
                className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-300 hover:scale-110 ${
                  accent === "auto" ? "border-gold-flute bg-gold/15 text-gold-flute" : "border-slate-700 text-slate-400"
                }`}
              >
                <SunMoon size={18} />
              </button>
            </div>
            <p className="text-xs font-mono tracking-wider text-gold-flute/80 mb-5" data-testid="accent-label">{accentLabel}</p>

            <p className="text-[10px] font-mono tracking-[0.25em] uppercase text-slate-500 mb-3">Text Size</p>
            <div className="flex gap-2 mb-6">
              {SIZES.map((s) => (
                <button
                  key={s.id}
                  data-testid={`textsize-${s.id}`}
                  onClick={() => save("gt-textsize", s.id, setTextsize)}
                  className={`flex-1 py-2.5 rounded-xl border font-sans font-semibold transition-all duration-300 ${
                    textsize === s.id
                      ? "border-gold-flute/70 bg-gold/15 text-gold-flute"
                      : "border-slate-700 text-slate-400 hover:border-gold/40"
                  }`}
                >
                  {s.label}
                </button>
              ))}
            </div>

            <p className="text-[10px] font-mono tracking-[0.25em] uppercase text-slate-500 mb-3">Motion</p>
            <div className="flex gap-2 mb-6">
              <button
                data-testid="motion-full"
                onClick={() => save("gt-motion", "full", setMotionPref)}
                className={`flex-1 py-2.5 rounded-xl border text-sm font-medium flex items-center justify-center gap-2 transition-all duration-300 ${
                  motionPref === "full" ? "border-gold-flute/70 bg-gold/15 text-gold-flute" : "border-slate-700 text-slate-400 hover:border-gold/40"
                }`}
              >
                <Zap size={15} /> Full
              </button>
              <button
                data-testid="motion-reduced"
                onClick={() => save("gt-motion", "reduced", setMotionPref)}
                className={`flex-1 py-2.5 rounded-xl border text-sm font-medium flex items-center justify-center gap-2 transition-all duration-300 ${
                  motionPref === "reduced" ? "border-gold-flute/70 bg-gold/15 text-gold-flute" : "border-slate-700 text-slate-400 hover:border-gold/40"
                }`}
              >
                <ZapOff size={15} /> Calm
              </button>
            </div>

            <button
              data-testid="customize-reset"
              onClick={reset}
              className="w-full py-2.5 rounded-xl border border-slate-700 text-slate-400 text-sm font-mono tracking-wider flex items-center justify-center gap-2 hover:border-gold/40 hover:text-slate-200 transition-all duration-300"
            >
              <RotateCcw size={14} /> Reset to default
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
