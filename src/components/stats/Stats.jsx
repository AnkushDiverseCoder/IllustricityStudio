import React, { useEffect, useRef } from "react";
import { animate, useInView } from "framer-motion";

export const Stats = () => {
  return (
    <section className="mx-auto max-w-5xl h-1/2 px-4">
      <div className="flex flex-col items-center justify-center gap-12 sm:flex-row sm:gap-0">
        <Stat num={25}  subheading="Client Served" />
        {/* <Stat num={2} suffix="M" subheading="Accounts Reached Overall" /> */}
        {/* <Stat num={100} suffix="M" subheading="Tasks tracked so far" /> */}
      </div>
    </section>
  );
};

const Stat = ({ num, suffix, decimals = 0, subheading }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    animate(0, num, {
      duration: 1.5,
      onUpdate(value) {
        if (!ref.current) return;

        ref.current.textContent = value.toFixed(decimals);
      },
    });
  }, [num, decimals, isInView]);

  return (
    <div className="flex w-full flex-col items-center">
      <p className="mb-2 text-center text-7xl font-medium">
        <span ref={ref}></span>
        {suffix}
      </p>
      <p className="text-center text-xl font-medium">{subheading}</p>
    </div>
  );
};
