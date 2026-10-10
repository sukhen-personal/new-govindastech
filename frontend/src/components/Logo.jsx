export const LogoMark = ({ size = 38 }) => (
  <img src="/logo.png" alt="GovindasTech" width={size} height={size} className="object-contain" />
);

const flame = (i, n) => (360 / n) * i;

export const SudarshanaRing = ({ className = "", fast = false }) => {
  const flames = Array.from({ length: 24 });
  const spokes = Array.from({ length: 16 });
  const petals = Array.from({ length: 8 });

  return (
    <svg
      viewBox="0 0 240 240"
      className={`${fast ? "animate-chakra-spin-fast" : "animate-chakra-spin"} ${className}`}
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="sk-core" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FDE68A" stopOpacity="1" />
          <stop offset="40%" stopColor="#FBBF24" stopOpacity="0.85" />
          <stop offset="75%" stopColor="#D4AF37" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="sk-flame" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FDE68A" />
          <stop offset="55%" stopColor="#F59E0B" />
          <stop offset="100%" stopColor="#B45309" />
        </linearGradient>
        <linearGradient id="sk-ring" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FBBF24" />
          <stop offset="50%" stopColor="#D4AF37" />
          <stop offset="100%" stopColor="#F59E0B" />
        </linearGradient>
      </defs>

      {/* fiery serrated rim */}
      <g opacity="0.95">
        {flames.map((_, i) => (
          <g key={i} transform={`rotate(${flame(i, 24)} 120 120)`}>
            <path d="M120 2 C 126 12, 129 22, 123 32 L 117 32 C 111 22, 114 12, 120 2 Z" fill="url(#sk-flame)" />
          </g>
        ))}
      </g>

      {/* engraved rings */}
      <circle cx="120" cy="120" r="102" fill="none" stroke="url(#sk-ring)" strokeWidth="5" />
      <circle cx="120" cy="120" r="102" fill="none" stroke="#FDE68A" strokeWidth="1" strokeDasharray="2 10" opacity="0.8" />
      <circle cx="120" cy="120" r="92" fill="none" stroke="#D4AF37" strokeWidth="1.2" opacity="0.75" />

      {/* counter-rotating engraved dash ring */}
      <g style={{ transformBox: "fill-box", transformOrigin: "center" }} className={fast ? "animate-chakra-spin" : "animate-chakra-spin-rev"}>
        <circle cx="120" cy="120" r="82" fill="none" stroke="#F59E0B" strokeWidth="1.4" strokeDasharray="1 8" opacity="0.7" />
      </g>

      {/* spokes with flame tips */}
      <g stroke="#D4AF37" strokeWidth="1.6" opacity="0.9">
        {spokes.map((_, i) => {
          const a = (i * Math.PI) / 8;
          const x1 = 120 + Math.cos(a) * 40, y1 = 120 + Math.sin(a) * 40;
          const x2 = 120 + Math.cos(a) * 88, y2 = 120 + Math.sin(a) * 88;
          return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />;
        })}
        {spokes.map((_, i) => {
          const a = (i * Math.PI) / 8;
          const x = 120 + Math.cos(a) * 88, y = 120 + Math.sin(a) * 88;
          return <circle key={`t${i}`} cx={x} cy={y} r="2.4" fill="#FBBF24" stroke="none" />;
        })}
      </g>

      {/* lotus petals */}
      <g fill="rgba(212,175,55,0.08)" stroke="#D4AF37" strokeWidth="1.1" opacity="0.95">
        {petals.map((_, i) => (
          <g key={i} transform={`rotate(${flame(i, 8) + 22.5} 120 120)`}>
            <ellipse cx="120" cy="68" rx="10" ry="24" />
          </g>
        ))}
      </g>
      <circle cx="120" cy="120" r="42" fill="none" stroke="#F59E0B" strokeWidth="1.3" opacity="0.85" />

      {/* glowing core */}
      <circle cx="120" cy="120" r="34" fill="url(#sk-core)" />
      <circle cx="120" cy="120" r="11" fill="#FDE68A" />
      <circle cx="120" cy="120" r="11" fill="none" stroke="#B45309" strokeWidth="1" opacity="0.7" />
    </svg>
  );
};

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
