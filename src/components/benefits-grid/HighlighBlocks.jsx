import React from "react";
import { Block } from "./Block";
import {
  FiArrowUpRight,
  FiClipboard,
  FiCoffee,
  FiDollarSign,
  FiFeather,
  FiInbox,
  FiMove,
  FiRepeat,
  FiSmile,
} from "react-icons/fi";
import Image from "next/image";
// import { twMerge } from "tailwind-merge";
// import { CardTitle } from "./CardTitle";
// import { CardSubtitle } from "./CardSubtitle";

export const HighlighBlocks = () => {
  return (
    <>
      <HighlightBlock
        Img="/gallery/gallery1.jpeg"
      />
      <HighlightBlock
        Img="/gallery/gallery2.jpeg"
      />
      <HighlightBlock
        Img="/gallery/gallery3.jpeg"
      />
      <HighlightBlock
        Img="/gallery/gallery4.jpeg"
      />
      <HighlightBlock
        Img="/gallery/gallery5.jpeg"
      />
      <HighlightBlock
        Img="/gallery/gallery6.jpeg"
      />
      <HighlightBlock
        Img="/gallery/gallery7.jpeg"
      />
      <HighlightBlock
        Img="/gallery/gallery8.jpeg"
      />
      <HighlightBlock
        Img="/gallery/gallery9.jpeg"
      />

    </>
  );
};

const HighlightBlock = ({ Img, Icon, title, subtitle }) => (
  <Block className="col-span-3 space-y-1.5 md:col-span-1">
    <Image
       src={Img}
       alt="Error"
       width={400}
       height={400}
       className="w-full h-full"
  />
  </Block>
);
