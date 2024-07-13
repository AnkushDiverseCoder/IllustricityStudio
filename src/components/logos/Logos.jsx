import React from "react";
import { motion } from "framer-motion";
import {
  SiNike,
  Si3M,
  SiAbstract,
  SiAdobe,
  SiAirtable,
  SiAmazon,
  SiBox,
  SiBytedance,
  SiChase,
  SiCloudbees,
  SiBurton,
  SiBmw,
  SiHeroku,
  SiBuildkite,
  SiCouchbase,
  SiDailymotion,
  SiDeliveroo,
  SiEpicgames,
  SiGenius,
  SiGodaddy,
} from "react-icons/si";
import { IconType } from "react-icons";
import Image from "next/image";

export const Logos = () => {
  return (
    <section className="relative -mt-2 -rotate-1 scale-[1.01] border-y-2 border-zinc-900 bg-white">
      <div className="relative z-0 flex overflow-hidden border-b-2 border-zinc-900">
        <TranslateWrapper>
          <LogoItemsTop />
        </TranslateWrapper>
        <TranslateWrapper>
          <LogoItemsTop />
        </TranslateWrapper>
        <TranslateWrapper>
          <LogoItemsTop />
        </TranslateWrapper>
      </div>
      <div className="relative z-0 flex overflow-hidden">
        <TranslateWrapper reverse>
          <LogoItemsBottom />
        </TranslateWrapper>
        <TranslateWrapper reverse>
          <LogoItemsBottom />
        </TranslateWrapper>
        <TranslateWrapper reverse>
          <LogoItemsBottom />
        </TranslateWrapper>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-10 w-32 bg-gradient-to-r from-white to-white/0" />
      <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-10 w-32 bg-gradient-to-l from-white to-white/0" />
    </section>
  );
};

const TranslateWrapper = ({ children, reverse }) => {
  return (
    <motion.div
      initial={{ translateX: reverse ? "-100%" : "0%" }}
      animate={{ translateX: reverse ? "0%" : "-100%" }}
      transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
      className="flex px-2"
    >
      {children}
    </motion.div>
  );
};

const LogoItem = ({ Icon, name }) => {
  return (
    <span className="flex items-center justify-center gap-4 px-4 py-2 md:py-4">
      <span className="w-6 h-6 md:w-2 md:h-2 bg-black rounded-full" />
      <span className="whitespace-nowrap text-xl font-semibold uppercase md:text-2xl">
        {name}
      </span>
    </span>
  );
};

const LogoItemsTop = () => (
  <>
    <LogoItem Icon={"/logos/8.png"} name="LITTLE WARRIOR CDC" />
    <LogoItem Icon={"/logos/8.png"} name="VYOM" />
    <LogoItem Icon={"/logos/8.png"} name="EThames" />
    <LogoItem Icon={"/logos/8.png"} name="BREW HAVEN CAFE" />
    <LogoItem Icon={"/logos/8.png"} name="RL FITNESS" />
    <LogoItem Icon={"/logos/8.png"} name="PUSHKAR OPTICALS" />
    
  </>
);

const LogoItemsBottom = () => (
  <>
    <LogoItem Icon={"/logos/8.png"} name="RAJKAMAL BOOK STORE" />
    <LogoItem Icon={"/logos/8.png"} name="THE WILSON'S" />
    <LogoItem Icon={"/logos/8.png"} name="NAME SURNAME" />
    <LogoItem Icon={"/logos/8.png"} name="BAFNA DISTRIBUTORS" />
    <LogoItem Icon={"/logos/8.png"} name="SANDWICH EATERY" />
    <LogoItem Icon={"/logos/8.png"} name="RL FITNESS" />
    <LogoItem Icon={"/logos/8.png"} name="NEETZ DESIGN STUDIO" />
    
  </>
);
