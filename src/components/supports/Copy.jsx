import React from "react";
import { CheckPill } from "./CheckPill";
import { OPTIONS } from "./options";

export const Copy = ({ selected, setSelected }) => {
  return (
    <div className="w-full">
      <span className="mb-1.5 block text-center text-indigo-600 md:text-start">
        Show who it's for
      </span>
      <h2 className="mb-3 text-center text-4xl font-bold leading-tight md:text-start md:text-5xl md:leading-tight">
        Our Services
      </h2>
      <p className="mb-6 text-center text-base leading-relaxed md:text-start md:text-lg md:leading-relaxed">
        We offer a wide range of services, including web design and development, Social Media mangement, Product Photography, and Influence Marketing, Seo and Content Creation. Our services are tailored to meet the unique needs of each client, ensuring that we deliver effective solutions that help businesses grow.
      </p>
      <div className="mb-6 flex flex-wrap justify-center gap-3 md:justify-start">
        {OPTIONS.map((o, i) => {
          return (
            <CheckPill
              key={o.title}
              index={i}
              selected={i === selected}
              setSelected={setSelected}
            >
              {o.title}
            </CheckPill>
          );
        })}
      </div>
    </div>
  );
};
