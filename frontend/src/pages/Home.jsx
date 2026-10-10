import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { OttPlatform } from "@/components/OttPlatform";
import { CrmIntelligence } from "@/components/CrmIntelligence";
import { Capabilities } from "@/components/Capabilities";
import { LivQure } from "@/components/LivQure";
import { Stats } from "@/components/Stats";
import { CtaBanner } from "@/components/CtaBanner";

export const Home = () => (
  <>
    <Hero />
    <Marquee />
    <OttPlatform />
    <CrmIntelligence />
    <Capabilities />
    <LivQure />
    <Stats />
    <CtaBanner />
  </>
);
