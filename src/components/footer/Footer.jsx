import React from "react";
import { SiInstagram, SiX, SiYoutube } from "react-icons/si";
import Link from "next/link";
import { LogoSmall } from "../navigation/Logo";
import { NAV_LINKS } from "../navigation/constants";

export const Footer = () => {
  return (
    <footer class="text-gray-600 body-font">
      <div class="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
          <img src="/Logo.svg" alt="Logo" className="h-60"/>
        </a>
        <p class="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2020 Tailblocks —
          <a href="https://twitter.com/knyttneve" class="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank">@knyttneve</a>
        </p>
        <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <a class="text-gray-500">
            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
            </svg>
          </a>
          <a class="ml-3 text-gray-500">
            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
            </svg>
          </a>
          <a class="ml-3 text-gray-500">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
            </svg>
          </a>
          <a class="ml-3 text-gray-500">
            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
              <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
              <circle cx="4" cy="4" r="2" stroke="none"></circle>
            </svg>
          </a>
        </span>
      </div>
    </footer>
  );
};

{/* <div className="bg-white">
      <footer className="relative mx-auto max-w-6xl overflow-hidden py-12">
        <div className="md:px4 grid grid-cols-12 gap-x-1.5 gap-y-6 px-2">
          <LogoColumn />
          <GenericColumn title="Product" links={NAV_LINKS[0].sublinks} />
          <GenericColumn
            title="Company"
            links={[...NAV_LINKS[3].sublinks, ...NAV_LINKS[4].sublinks]}
          />
          <GenericColumn
            title="Legal"
            links={[
              {
                title: "Terms & Conditions",
                href: "/#",
              },
              {
                title: "Privacy Policy",
                href: "/#",
              },
              {
                title: "Refund Policy",
                href: "/#",
              },
            ]}
          />

          <GenericColumn
            title="Socials"
            links={[
              {
                title: "Twitter",
                href: "/#",
                Icon: SiX,
              },
              {
                title: "Instagram",
                href: "/#",
                Icon: SiInstagram,
              },
              {
                title: "Youtube",
                href: "/#",
                Icon: SiYoutube,
              },
            ]}
          />
        </div>
      </footer>
    </div> */}
const LogoColumn = () => {
  return (
    <div className="col-span-6 md:col-span-4">
      <LogoSmall />
      <span className="mt-3 inline-block text-xs">
        © Hover.dev - All rights reserved.
      </span>
    </div>
  );
};

const GenericColumn = ({ title, links }) => {
  return (
    <div className="col-span-6 space-y-2 text-sm md:col-span-2">
      <span className="block font-bold">{title}</span>
      {links.map((l) => (
        <Link
          key={l.title}
          href={l.href}
          className="flex items-center gap-1.5 transition-colors hover:text-indigo-600 hover:underline"
        >
          {l.Icon && <l.Icon />}
          {l.title}
        </Link>
      ))}
    </div>
  );
};
