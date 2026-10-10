import { useEffect } from "react";
import Lenis from "lenis";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { motion, useScroll, useSpring } from "framer-motion";
import "@/App.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Home } from "@/pages/Home";
import { Services } from "@/pages/Services";
import { Products } from "@/pages/Products";
import { CaseStudies } from "@/pages/CaseStudies";
import { GovindasStreamCase } from "@/pages/case-studies/GovindasStream";
import { LivQureCase } from "@/pages/case-studies/LivQureCase";
import { SudarshanaCrmCase } from "@/pages/case-studies/SudarshanaCrm";
import { TechStack } from "@/pages/TechStack";
import { ContactPage } from "@/pages/ContactPage";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    if (window.__lenis) window.__lenis.scrollTo(0, { immediate: true });
    else window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function Shell() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 24 });

  return (
    <div className="App relative">
      <motion.div
        className="fixed top-0 inset-x-0 h-[2px] z-[60] origin-left bg-gradient-to-r from-gold via-gold-flute to-peacock-cyan"
        style={{ scaleX: progress }}
      />
      <div className="fixed inset-0 grain-overlay z-[55]" />
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/products" element={<Products />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/case-studies/govindas-stream" element={<GovindasStreamCase />} />
          <Route path="/case-studies/livqure" element={<LivQureCase />} />
          <Route path="/case-studies/sudarshana-crm" element={<SudarshanaCrmCase />} />
          <Route path="/tech-stack" element={<TechStack />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    window.__lenis = lenis;
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
      window.__lenis = null;
      document.removeEventListener("click", onClick);
    };
  }, []);

  return (
    <BrowserRouter>
      <Shell />
    </BrowserRouter>
  );
}

export default App;
