export const LogoMark = ({ size = 38 }) => (
  <svg viewBox="0 0 64 64" width={size} height={size} aria-hidden="true">
    <defs>
      <radialGradient id="lm-eye" cx="50%" cy="45%" r="60%">
        <stop offset="0%" stopColor="#06B6D4" />
        <stop offset="45%" stopColor="#2563EB" />
        <stop offset="100%" stopColor="#0B1536" />
      </radialGradient>
    </defs>
    <g stroke="#D4AF37" strokeWidth="1.4" opacity="0.9">
      <circle cx="32" cy="32" r="26" fill="none" />
      <path d="M32 6v8M32 50v8M6 32h8M50 32h8M13.6 13.6l5.7 5.7M44.7 44.7l5.7 5.7M50.4 13.6l-5.7 5.7M19.3 44.7l-5.7 5.7" />
    </g>
    <ellipse cx="32" cy="32" rx="11" ry="15" fill="url(#lm-eye)" stroke="#D4AF37" strokeWidth="1.6" />
    <ellipse cx="32" cy="32" rx="5" ry="7.5" fill="#030712" />
    <circle cx="32" cy="30" r="2.4" fill="#FBBF24" />
  </svg>
);

export const SudarshanaRing = ({ className = "", fast = false }) => (
  <svg
    viewBox="0 0 200 200"
    className={`${fast ? "animate-chakra-spin-fast" : "animate-chakra-spin"} ${className}`}
    aria-hidden="true"
  >
    <defs>
      <radialGradient id="sd-core" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#FBBF24" stopOpacity="0.9" />
        <stop offset="55%" stopColor="#D4AF37" stopOpacity="0.25" />
        <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
      </radialGradient>
    </defs>
    <circle cx="100" cy="100" r="88" fill="none" stroke="#D4AF37" strokeOpacity="0.35" strokeWidth="1" strokeDasharray="3 7" />
    <circle cx="100" cy="100" r="70" fill="none" stroke="#F59E0B" strokeOpacity="0.5" strokeWidth="1.2" />
    <g stroke="#D4AF37" strokeOpacity="0.7" strokeWidth="1.4">
      {Array.from({ length: 8 }).map((_, i) => {
        const a = (i * Math.PI) / 4;
        const x1 = 100 + Math.cos(a) * 30, y1 = 100 + Math.sin(a) * 30;
        const x2 = 100 + Math.cos(a) * 70, y2 = 100 + Math.sin(a) * 70;
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />;
      })}
    </g>
    <circle cx="100" cy="100" r="26" fill="url(#sd-core)" />
    <circle cx="100" cy="100" r="10" fill="#FBBF24" opacity="0.9" />
  </svg>
);

export const FluteWave = ({ className = "" }) => (
  <svg viewBox="0 0 320 40" className={className} fill="none" aria-hidden="true">
    <path
      d="M0 20 Q 20 4, 40 20 T 80 20 T 120 20 T 160 20 T 200 20 T 240 20 T 280 20 T 320 20"
      stroke="url(#fw-g)"
      strokeWidth="1.6"
    />
    <defs>
      <linearGradient id="fw-g" x1="0" x2="320" gradientUnits="userSpaceOnUse">
        <stop stopColor="#D4AF37" stopOpacity="0" />
        <stop offset="0.35" stopColor="#FBBF24" />
        <stop offset="0.65" stopColor="#06B6D4" />
        <stop offset="1" stopColor="#0D9488" stopOpacity="0" />
      </linearGradient>
    </defs>
  </svg>
);
