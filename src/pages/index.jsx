import { BenefitsGrid } from "@/components/benefits-grid/BenefitsGrid";
import { BlogCarousel } from "@/components/blog/BlogCarousel";
import { EmailCapture } from "@/components/email-capture/EmailCapture";
import { FeatureToggles } from "@/components/feature-toggles/FeatureToggles";
import { FinalCTA } from "@/components/final-cta/FinalCTA";
import { Footer } from "@/components/footer/Footer";
import { Hero } from "@/components/hero/Hero";
import { Logos } from "@/components/logos/Logos";
import { ExpandableNavBar } from "@/components/navigation/ExpandableNavBar";
import { NAV_LINKS } from "@/components/navigation/constants";
import { Pricing } from "@/components/pricing/Pricing";
import { Stats } from "@/components/stats/Stats";
import { Supports } from "@/components/supports/Supports";
import { font } from "@/fonts";
import React from "react";

function LoadingAnimation() {
  return (
    <div className="h-screen w-screen flex justify-center items-center bg-[#DEDCD3]">
      <img src="/logo.gif" alt="Loading..." />
    </div>
  );
}

export default function Home() {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000); // 3 seconds
  }, []);
  return (
    <>
      {loading ? (
        <LoadingAnimation />
      ) : (
        <main className={`${font.className} overflow-hidden`}>
          <ExpandableNavBar links={NAV_LINKS}>
            <Hero />
          </ExpandableNavBar>
          <Logos />
          <div className="space-y-36 bg-[#DEDCD3] pb-24 pt-24 md:pt-32">
            <FeatureToggles />
            <Stats />
            <Supports />
            <BenefitsGrid />
            <Pricing />
            <BlogCarousel />
          </div>
          <EmailCapture />
          <FinalCTA />
          <Footer/>
        </main>
      )}
    </>
  );
}
