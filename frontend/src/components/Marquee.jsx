const TECH = ["Go", "Kubernetes", "React 19", "Next.js", "Flutter", "Swift", "TypeScript", "Redis", "Kafka", "AWS Elemental", "FFmpeg", "Node.js", "Docker", "Java", "Python"];

export const Marquee = () => (
  <div className="relative border-y border-gold/15 bg-krishna-midnight/60 py-5 overflow-hidden" data-testid="tech-marquee">
    <div className="flex w-max animate-marquee-drift">
      {[0, 1].map((copy) => (
        <div key={copy} className="flex items-center shrink-0">
          {TECH.map((t) => (
            <span key={`${copy}-${t}`} className="flex items-center">
              <span className="font-mono text-sm tracking-[0.2em] text-slate-400 hover:text-gold-flute transition-colors duration-300 px-8">
                {t}
              </span>
              <span className="w-1.5 h-1.5 rotate-45 bg-gold/50" />
            </span>
          ))}
        </div>
      ))}
    </div>
  </div>
);
