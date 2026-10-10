import { Code2, MonitorSmartphone, Server, Cloud, Clapperboard, Wand2 } from "lucide-react";
import { PageHero, Tag } from "@/components/PageHero";
import { Reveal, SectionHeading } from "@/components/Reveal";
import { Marquee } from "@/components/Marquee";
import { CtaBanner } from "@/components/CtaBanner";

const STACKS = [
  { icon: Code2, title: "Languages", items: ["Go", "Java", "JavaScript", "TypeScript", "Python", "Swift", "Kotlin", "HTML5", "CSS3"] },
  { icon: Wand2, title: "Web & Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"] },
  { icon: MonitorSmartphone, title: "Mobile & Connected TV", items: ["React Native", "Flutter", "Swift", "Kotlin", "tvOS", "Android TV", "Fire TV", "Roku", "Tizen", "WebOS"] },
  { icon: Server, title: "Backend & Data", items: ["Node.js", "Go", "Java", "Redis", "Kafka", "GraphQL", "REST"] },
  { icon: Cloud, title: "Cloud & Platform", items: ["Kubernetes", "Docker", "AWS", "GCP", "Terraform", "CI/CD"] },
  { icon: Clapperboard, title: "Media & Streaming", items: ["FFmpeg", "AWS Elemental", "HLS", "DASH", "Widevine", "FairPlay", "PlayReady", "SSAI"] },
];

export const TechStack = () => (
  <>
    <PageHero
      eyebrow="Technologies We Trust"
      title={<>The instruments of our <span className="text-gold-gradient italic">craft</span></>}
      mantra="यन्त्राणि साधनानि सन्ति · Tools are instruments of accomplishment"
      desc="Every technology in our arsenal is chosen deliberately — battle-tested in production, tuned for scale, and mastered end to end."
    />

    <Marquee />

    <section className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
      <Reveal>
        <SectionHeading eyebrow="The Arsenal" title={<>Six realms of <span className="text-gold-gradient italic">mastery</span></>} />
      </Reveal>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12" data-testid="tech-stack-grid">
        {STACKS.map((s, i) => (
          <Reveal key={s.title} delay={0.05 * (i % 3)}>
            <div className="group glass-vedic rounded-2xl p-7 h-full transition-all duration-300 hover:-translate-y-1 hover:border-gold-flute/50 hover:shadow-[0_0_50px_-14px_rgba(212,175,55,0.45)]" data-testid={`tech-realm-${i}`}>
              <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/25 flex items-center justify-center mb-5">
                <s.icon size={22} className="text-gold-flute" />
              </div>
              <h3 className="font-sans font-semibold text-xl text-slate-100 mb-5">{s.title}</h3>
              <div className="flex flex-wrap gap-2">
                {s.items.map((t) => <Tag key={t}>{t}</Tag>)}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>

    <section className="max-w-5xl mx-auto px-6 lg:px-10 pb-20">
      <Reveal>
        <div className="glass-vedic rounded-3xl p-8 sm:p-10 halo-gold" data-testid="tech-philosophy">
          <p className="text-xs uppercase tracking-[0.3em] font-mono text-gold-flute mb-4">How We Choose</p>
          <p className="font-serif text-2xl sm:text-3xl text-slate-50 leading-snug">
            No tool enters our stack without proving itself in the fire of production.
          </p>
          <p className="text-base text-slate-300 font-light leading-relaxed mt-5">
            Like a temple architect selecting stone, we evaluate every framework for longevity, community strength,
            performance under load and the elegance it lends to the final creation. What survives becomes an
            instrument; what doesn't is respectfully returned to the cosmos.
          </p>
        </div>
      </Reveal>
    </section>

    <CtaBanner />
  </>
);
