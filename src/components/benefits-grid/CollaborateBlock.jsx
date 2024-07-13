import React from "react";
import { FiEdit } from "react-icons/fi";
import { BsFillCursorFill } from "react-icons/bs";
import { Block } from "./Block";
import { twMerge } from "tailwind-merge";
import { CardTitle } from "./CardTitle";
import { CardSubtitle } from "./CardSubtitle";
import Image from "next/image";

export const CollaborateBlock = () => (
  <Block className="col-span-3 overflow-hidden md:col-span-1">
    <div className="flex h-full flex-col justify-between gap-6">
      <div className="relative -mx-6 -mt-6 grid h-full place-content-center overflow-hidden border-b-2 border-zinc-900 bg-zinc-100 shadow-inner shadow-zinc-500">
        <Image
          src="/ratata.gif"
          alt="Viddeo"
          // layout="fill"
          height={200}
          width={200}
          unoptimized
        />
      </div>
      <div>
        <CardTitle>Personalized Branding </CardTitle>
        <CardSubtitle>
          Meet Illustricity Studios, a creative agency crafting one-of-a-kind branding, packaging, and clothing that infuses your business with personality, blending artistry and expertise to elevate your brand's visual identity.
        </CardSubtitle>
      </div>
    </div>
  </Block>
);

const Cursor = ({
  wrapperClassName,
  cursorClassName,
  nameClassName,
  nameText,
}) => {
  return (
    <div className={twMerge("absolute left-[60%] top-[60%]", wrapperClassName)}>
      <BsFillCursorFill
        className={twMerge(
          "-rotate-90 text-4xl text-pink-500",
          cursorClassName
        )}
      />
      <span
        className={twMerge(
          "block translate-x-1/2 whitespace-nowrap rounded border border-pink-900 bg-pink-200 px-1.5 py-0.5 text-xs text-pink-900",
          nameClassName
        )}
      >
        {nameText}
      </span>
    </div>
  );
};
