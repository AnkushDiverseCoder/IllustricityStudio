import React from "react";
import {
  SiGithub,
  SiPlanetscale,
  SiPrisma,
  SiSupabase,
  SiZapier,
} from "react-icons/si";
import { Block } from "./Block";
import { CardTitle } from "./CardTitle";
import { CardSubtitle } from "./CardSubtitle";

export const IntegrationsBlock = () => (
  <Block className="col-span-3 overflow-hidden md:col-span-2">
    <CardTitle>Integrate with everything</CardTitle>
    <CardSubtitle>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus cum
      earum facilis sint ducimus nulla magnam eveniet a reprehenderit veniam.
    </CardSubtitle>

    <div className="relative -mx-6 -mb-6 mt-6 grid grid-cols-3 place-content-center rounded-t-none border-t-2 border-zinc-900">
      <div className="grid w-full place-content-center border-r-2 border-[#DEDCD3] bg-zinc-900 py-8 text-white">
      <img src={"/logos/8.png"} className="w-6 h-6 md:w-24 object-cover md:h-24" alt={"ERROR "} />
      </div>
      <div className="grid w-full place-content-center border-r-2 border-[#DEDCD3] bg-zinc-900 py-8 text-white">
      <img src={"/logos/9.png"} className="w-6 h-6 md:w-24 object-cover md:h-24" alt={"ERROR "} />
      </div>
      <div className="grid w-full place-content-center  bg-zinc-900 py-8 text-white">
      <img src={"/logos/10.png"} className="w-6 h-6 md:w-24 object-cover md:h-24" alt={"ERROR "} />
      </div>

      <div className="grid w-full place-content-center border-r-2 border-t-2 border-[#DEDCD3] bg-zinc-900 py-8 text-white">
      <img src={"/logos/5.png"} className="w-6 h-6 md:w-24 object-cover md:h-24" alt={"ERROR "} />
      </div>
      <div className="grid w-full place-content-center border-r-2 border-t-2 border-[#DEDCD3] bg-zinc-900 py-8 text-white">
      <img src={"/logos/6.jpg"} className="w-6 h-6 md:w-24 object-cover md:h-24" alt={"ERROR "} />
      </div>
      <div className="grid w-full place-content-center border-t-2 border-[#DEDCD3] bg-zinc-900 py-8">
      <img src={"/logos/3.png"} className="w-6 h-6 md:w-24 object-cover md:h-24" alt={"ERROR "} />
      </div>
    </div>
  </Block>
);
