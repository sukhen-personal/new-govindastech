import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { FluteWave } from "./Logo";

export const CtaBanner = ({ title = "Have a Project in Mind?", desc = "Let's build something extraordinary together. We're ready to turn your idea into a successful digital product." }) => (
  <section className="relative py-24 overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_70%_at_50%_100%,rgba(212,175,55,0.1),transparent)]" />
    <div className="relative max-w-4xl mx-auto px-6 text-center">
      <Reveal>
        <FluteWave className="w-64 mx-auto mb-8 opacity-80" />
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl tracking-tight text-slate-50 leading-tight" data-testid="cta-title">
          {title.split("Project").length > 1 ? (
            <>Have a <span className="text-gold-gradient italic">Project</span> in Mind?</>
          ) : title}
        </h2>
        <p className="text-base sm:text-lg text-slate-300 font-light mt-5 max-w-xl mx-auto">{desc}</p>
        <div className="flex flex-wrap justify-center gap-4 mt-9">
          <Link
            to="/contact"
            data-testid="cta-start-project"
            className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-gold to-gold-glow text-krishna-void font-semibold halo-gold transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110"
          >
            Start a Project
            <ArrowRight size={17} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          <Link
            to="/contact"
            data-testid="cta-consultation"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-gold/40 text-gold-flute font-medium glass-vedic transition-all duration-300 hover:border-gold-flute/70 hover:-translate-y-0.5"
          >
            Schedule a Consultation
          </Link>
        </div>
      </Reveal>
    </div>
  </section>
);
