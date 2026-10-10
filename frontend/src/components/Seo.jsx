import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { SERVICES } from "@/data/services";

const ORIGIN = "https://govindastech.com";
const DEFAULT_DESC =
  "GovindasTech — Driven By Purpose. Powered by Intelligence. End-to-end OTT streaming platforms, cloud engineering and Sudarshana CRM intelligence, crafted with Vedic precision.";
const DEFAULT_IMG = `${ORIGIN}/og-image.png`;
const og = (name) => `${ORIGIN}/og/${name}.png`;

const STATIC_META = {
  "/": ["GovindasTech — Driven By Purpose. Powered by Intelligence.", DEFAULT_DESC, DEFAULT_IMG],
  "/services": ["Services — GovindasTech", "Ten engineering disciplines end to end: product, cloud, backend, mobile, web, OTT & streaming, TV apps, IoT, AI and quality assurance.", DEFAULT_IMG],
  "/products": ["Products — GovindasTech", "LivQure, Govindas AI, Govindas Cloud, Govindas IoT and Govindas Labs — innovative products that create real impact.", DEFAULT_IMG],
  "/case-studies": ["Case Studies — GovindasTech", "Architectures, engineering decisions and measurable results from the platforms GovindasTech has forged.", DEFAULT_IMG],
  "/tech-stack": ["Tech Stack — GovindasTech", "The instruments of our craft: Go, React, Next.js, Flutter, Kubernetes, FFmpeg, AWS Elemental and more.", DEFAULT_IMG],
  "/contact": ["Contact — GovindasTech", "Let's build something extraordinary together. Reach the GovindasTech team for your next digital platform.", DEFAULT_IMG],
};

const CASE_META = {
  "govindas-stream": ["GovindasStream — End-to-End OTT Platform | GovindasTech", "Case study: live, VOD & FAST streaming at sub-second latency — architecture, features and results.", og("og-case-govindas-stream")],
  "livqure": ["LivQure — Digital Healthcare Platform | GovindasTech", "Case study: patients, doctors and pharmacies united through telemedicine, e-prescriptions and secure payments.", og("og-case-livqure")],
  "sudarshana-crm": ["Sudarshana CRM — Feedback Intelligence | GovindasTech", "Case study: real-time sentiment telemetry, omnichannel support and a predictive churn radar.", og("og-case-sudarshana-crm")],
};

const resolve = (pathname) => {
  if (STATIC_META[pathname]) return STATIC_META[pathname];
  if (pathname.startsWith("/services/")) {
    const s = SERVICES.find((x) => pathname === `/services/${x.slug}`);
    if (s) return [`${s.title} — GovindasTech`, s.tagline, og(`og-service-${s.slug}`)];
    return STATIC_META["/services"];
  }
  if (pathname.startsWith("/case-studies/")) {
    const slug = pathname.split("/").pop();
    return CASE_META[slug] || STATIC_META["/case-studies"];
  }
  return STATIC_META["/"];
};

export const Seo = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const [title, desc, image] = resolve(pathname);
    document.title = title;
    const set = (selector, value) => {
      const el = document.querySelector(selector);
      if (el) el.setAttribute("content", value);
    };
    set('meta[name="description"]', desc);
    set('meta[property="og:title"]', title);
    set('meta[property="og:description"]', desc);
    set('meta[property="og:image"]', image);
    set('meta[property="og:url"]', `${ORIGIN}${pathname}`);
    set('meta[name="twitter:title"]', title);
    set('meta[name="twitter:description"]', desc);
    set('meta[name="twitter:image"]', image);
  }, [pathname]);

  return null;
};
