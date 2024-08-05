import React from "react";
import { GiTakeMyMoney } from "react-icons/gi";
import { Button } from "../shared/Button";
import { FaDollarSign } from "react-icons/fa";

export const Copy = () => {
  return (
    <>
      <div className="mb-1.5 rounded-full bg-zinc-600">

      </div>
      <h1 className="max-w-4xl text-center text-4xl font-black leading-[1.15] md:text-7xl md:leading-[1.15]">
        Welcome to Illustricity Studios
      </h1>
      <p className="mx-auto my-4 max-w-3xl text-center text-base leading-relaxed md:my-6 md:text-2xl md:leading-relaxed">
      We specialize in comprehensive social media management sclutions designed to enhance your Inand's online presence and dive meaningful engagement
      </p>
      <Button className={"cursor-pointer"}>
        <span className="font-bold flex gap-2 items-center"> <FaDollarSign className="text-lg"/> Get Quatation </span>
      </Button>
    </>
  );
};
