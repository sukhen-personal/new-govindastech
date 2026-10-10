import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const DEFAULT_DESC =
  "GovindasTech — Driven By Purpose. Powered by Intelligence. End-to-end OTT streaming platforms, cloud engineering and Sudarshana CRM intelligence, crafted with Vedic precision.";

const META = {
  "/": ["GovindasTech — Driven By Purpose. Powered by Intelligence.", DEFAULT_DESC],
  "/services": ["Services — GovindasTech", "Ten engineering disciplines end to end: product, cloud, backend, mobile, web, OTT & streaming, TV apps, IoT, AI and quality assurance."],
  "/services/:slug": ["Service — GovindasTech", "A deep dive into one of GovindasTech's ten engineering disciplines — deliverables, approach and technology."],
  "/products": ["Products — GovindasTech", "LivQure, Govindas AI, Govindas Cloud, Govindas IoT and Govindas Labs — innovative products that create real impact."],
  "/case-studies": ["Case Studies — GovindasTech", "Architectures, engineering decisions and measurable results from the platforms GovindasTech has forged."],
  "/case-studies/:slug": ["Case Study — GovindasTech", "A deep dive into a GovindasTech creation — challenge, architecture, results and the stack behind it."],
  "/tech-stack": ["Tech Stack — GovindasTech", "The instruments of our craft: Go, React, Next.js, Flutter, Kubernetes, FFmpeg, AWS Elemental and more."],
  "/contact": ["Contact — GovindasTech", "Let's build something extraordinary together. Reach the GovindasTech team for your next digital platform."],
};

export const Seo = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    let key = pathname;
    if (!(key in META)) {
      if (key.startsWith("/services/")) key = "/services/:slug";
      else if (key.startsWith("/case-studies/")) key = "/case-studies/:slug";
      else key = "/";
    }
    const [title, desc] = META[key];
    document.title = title;
    const set = (selector, value) => {
      const el = document.querySelector(selector);
      if (el) el.setAttribute("content", value);
    };
    set('meta[name="description"]', desc);
    set('meta[property="og:title"]', title);
    set('meta[property="og:description"]', desc);
    set('meta[name="twitter:title"]', title);
    set('meta[name="twitter:description"]', desc);
  }, [pathname]);

  return null;
};
