import { useEffect } from "react";
import Lenis from "lenis";
import { motion, useScroll, useSpring } from "framer-motion";
import "@/App.css";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { OttPlatform } from "@/components/OttPlatform";
import { CrmIntelligence } from "@/components/CrmIntelligence";
import { Capabilities } from "@/components/Capabilities";
import { LivQure } from "@/components/LivQure";
import { Stats } from "@/components/Stats";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

function App() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 24 });

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    let rafId;
    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    const onClick = (e) => {
      const anchor = e.target.closest('a[href^="#"]');
      if (!anchor) return;
      const target = document.querySelector(anchor.getAttribute("href"));
      if (target) {
        e.preventDefault();
        lenis.scrollTo(target, { offset: -72 });
      }
    };
    document.addEventListener("click", onClick);
    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      document.removeEventListener("click", onClick);
    };
  }, []);

  return (
    <div className="App relative">
      <motion.div
        className="fixed top-0 inset-x-0 h-[2px] z-[60] origin-left bg-gradient-to-r from-gold via-gold-flute to-peacock-cyan"
        style={{ scaleX: progress }}
      />
      <div className="fixed inset-0 grain-overlay z-[55]" />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <OttPlatform />
        <CrmIntelligence />
        <Capabilities />
        <LivQure />
        <Stats />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
