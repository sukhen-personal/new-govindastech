import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Radio, PlaySquare, BarChart3, ShieldCheck, Tv, AudioLines } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";
import { SudarshanaRing } from "./Logo";

const COSMOS_IMG =
  "https://images.unsplash.com/photo-1597773150796-e5c14ebecbf5?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwYmx1ZSUyMGFic3RyYWN0JTIwd2F2ZXxlbnwwfHx8fDE3OTE1Njg3NDF8MA&ixlib=rb-4.1.0&q=85";
const FEATHER_DETAIL =
  "https://images.unsplash.com/photo-1596423748098-c22861e3034e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMzN8MHwxfHNlYXJjaHwzfHxwZWFjb2NrJTIwZmVhdGhlciUyMG1hY3JvfGVufDB8fHx8MTc5MTU2ODc0MXww&ixlib=rb-4.1.0&q=85";

const MODES = {
  live: { label: "4K Live Broadcast", icon: Radio, viewers: 128430, latency: "0.38s", bitrate: "18.4 Mbps", nodes: 42, drm: "Widevine · FairPlay" },
  fast: { label: "FAST Play-out", icon: PlaySquare, viewers: 86210, latency: "1.2s", bitrate: "12.1 Mbps", nodes: 38, drm: "SSAI Enabled" },
  analytics: { label: "Analytics Engine", icon: BarChart3, viewers: 214640, latency: "Realtime", bitrate: "QoS 99.98%", nodes: 56, drm: "Geo-fenced" },
};

const FEATURES = [
  { icon: Radio, title: "Ultra-Low Latency Live", desc: "Sub-500ms HLS/DASH live streaming at planetary scale." },
  { icon: PlaySquare, title: "VOD Transcoding Pipeline", desc: "Cloud-native transcoding, storage & instant global delivery." },
  { icon: Tv, title: "FAST Channels + SSAI", desc: "Linear channel orchestration with server-side ad insertion." },
  { icon: ShieldCheck, title: "DRM & Geo-fencing", desc: "Widevine, FairPlay, PlayReady with entitlement sync." },
  { icon: AudioLines, title: "Dolby Atmos · 4K UHD", desc: "Multi-audio tracks, live chat, polls & interactive overlays." },
  { icon: Tv, title: "Every Screen, One SDK", desc: "Android TV, Apple TV, FireTV, Tizen, WebOS & mobile SDKs." },
];

export const OttPlatform = () => {
  const [mode, setMode] = useState("live");
  const [tick, setTick] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setTick((t) => t + 1), 1600);
    return () => clearInterval(id);
  }, []);
  const m = MODES[mode];
  const viewers = Math.round(m.viewers * (1 + 0.03 * Math.sin(tick * 1.3)));

  return (
    <section id="ott-platform" className="relative py-28 lg:py-36 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.14]">
        <img src={COSMOS_IMG} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-krishna-void via-krishna-void/60 to-krishna-void" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <Reveal>
          <SectionHeading
            eyebrow="Flagship Creation"
            title={<>GovindasStream — the end-to-end <span className="text-gold-gradient italic">OTT universe</span></>}
            mantra="एकं सत् विप्रा बहुधा वदन्ति · One truth, streamed to every screen"
          />
        </Reveal>

        <div className="grid lg:grid-cols-12 gap-10 mt-14">
          <Reveal className="lg:col-span-7" delay={0.1}>
            <div className="relative glass-vedic rounded-3xl p-6 sm:p-8 halo-gold" data-testid="ott-console">
              <div className="flex flex-wrap gap-2 mb-7">
                {Object.entries(MODES).map(([key, v]) => (
                  <button
                    key={key}
                    data-testid={`ott-mode-${key}`}
                    onClick={() => setMode(key)}
                    className={`px-4 py-2 rounded-full text-xs font-mono tracking-wider transition-all duration-300 border ${
                      mode === key
                        ? "bg-gold/15 border-gold-flute/70 text-gold-flute"
                        : "border-slate-700 text-slate-400 hover:border-gold/40 hover:text-slate-200"
                    }`}
                  >
                    {v.label}
                  </button>
                ))}
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={mode}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.45 }}
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <m.icon size={20} className="text-gold-flute" />
                      <span className="font-royal text-lg text-slate-100">{m.label}</span>
                    </div>
                    <span className="flex items-center gap-2 text-xs font-mono text-rose-400" data-testid="ott-live-badge">
                      <span className="w-2 h-2 rounded-full bg-rose-500 animate-glow-pulse" /> LIVE
                    </span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-7">
                    {[
                      { k: "Viewers", v: viewers.toLocaleString("en-IN") },
                      { k: "Latency", v: m.latency },
                      { k: "Bitrate", v: m.bitrate },
                      { k: "CDN Nodes", v: m.nodes },
                    ].map((s) => (
                      <div key={s.k} className="rounded-xl border border-gold/15 bg-krishna-navy/50 px-4 py-3">
                        <p className="text-[10px] uppercase tracking-[0.2em] font-mono text-slate-500">{s.k}</p>
                        <p className="font-mono text-lg text-gold-flute mt-1" data-testid={`ott-stat-${s.k.toLowerCase().replace(/\s/g, "-")}`}>{s.v}</p>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-end gap-1.5 h-20 mb-5" aria-hidden="true">
                    {Array.from({ length: 32 }).map((_, i) => {
                      const h = 22 + 58 * Math.abs(Math.sin(i * 0.7 + tick * 0.9));
                      return (
                        <div
                          key={i}
                          className="flex-1 rounded-sm bg-gradient-to-t from-peacock-emerald/60 via-peacock-cyan/70 to-gold-flute/80 transition-all duration-700"
                          style={{ height: `${h}%` }}
                        />
                      );
                    })}
                  </div>

                  <div className="flex items-center justify-between text-xs font-mono text-slate-500">
                    <span>Protection · {m.drm}</span>
                    <span>Transcode ring · spinning</span>
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="absolute -top-8 -right-8 w-24 h-24 opacity-70 hidden sm:block">
                <SudarshanaRing fast className="w-full h-full" />
              </div>
            </div>
          </Reveal>

          <div className="lg:col-span-5 grid sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {FEATURES.slice(0, 3).map((f, i) => (
              <Reveal key={f.title} delay={0.12 + i * 0.08}>
                <div className="group glass-vedic rounded-2xl p-5 flex gap-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-gold-flute/50 hover:shadow-[0_0_40px_-12px_rgba(212,175,55,0.4)]" data-testid={`ott-feature-${i}`}>
                  <f.icon size={22} className="text-gold-flute shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-sans font-semibold text-slate-100">{f.title}</h3>
                    <p className="text-sm text-slate-400 font-light mt-1">{f.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-3 gap-4 mt-4">
          {FEATURES.slice(3).map((f, i) => (
            <Reveal key={f.title} delay={0.1 + i * 0.08}>
              <div className="group glass-vedic rounded-2xl p-5 flex gap-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-gold-flute/50 hover:shadow-[0_0_40px_-12px_rgba(212,175,55,0.4)]" data-testid={`ott-feature-${i + 3}`}>
                <f.icon size={22} className="text-gold-flute shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-sans font-semibold text-slate-100">{f.title}</h3>
                  <p className="text-sm text-slate-400 font-light mt-1">{f.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15} className="mt-14">
          <div className="relative rounded-3xl overflow-hidden border border-gold/25 halo-gold">
            <img src={FEATHER_DETAIL} alt="Peacock feather eye — visual fidelity of GovindasStream" className="w-full h-56 sm:h-64 object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-krishna-void/90 via-krishna-void/40 to-transparent flex items-center">
              <div className="px-8 sm:px-12 max-w-lg">
                <p className="text-xs uppercase tracking-[0.3em] font-mono text-gold-flute mb-2">Visual Fidelity</p>
                <p className="font-serif text-2xl sm:text-3xl text-slate-50 leading-snug">
                  Every pixel rendered with the iridescence of the <span className="text-gold-gradient italic">Mayur Pankh</span>
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
