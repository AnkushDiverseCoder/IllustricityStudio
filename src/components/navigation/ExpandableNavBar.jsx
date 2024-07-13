import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { FiArrowRight, FiMenu } from "react-icons/fi";
import { Button } from "../shared/Button";
import { Announcement } from "./Announcement";

export const ExpandableNavBar = ({ children }) => {
  return (
    <>
      <div className="bg-black pt-2">
        <Announcement />
        <FlipNav />
      </div>
      <motion.main layout>
        <div >{children}</div>
      </motion.main>
    </>
  );
};

const FlipNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-white p-4 border-b-[1px] border-gray-200 flex items-center justify-between relative">
      <NavLeft setIsOpen={setIsOpen} />
      <NavRight />
      <NavMenu isOpen={isOpen} />
    </nav>
  );
};

const NavLeft = ({ setIsOpen }) => {
  return (
    <div className="flex items-center gap-6">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="block lg:hidden text-gray-950 text-2xl"
        onClick={() => setIsOpen((pv) => !pv)}
      >
        <FiMenu />
      </motion.button>
      <img src="/Logo.svg" alt="Logo" className="h-8 w-28 object-cover" />
      <NavLink text="About" />
      <NavLink text="Quotation" />
      <NavLink text="Contact" />
    </div>
  );
};

const NavLink = ({ text }) => {
  return (
    <a
      href="#"
      rel="nofollow"
      className="hidden lg:block h-[30px] overflow-hidden font-medium"
    >
      <motion.div whileHover={{ y: -30 }}>
        <span className="flex items-center h-[30px] text-gray-500">{text}</span>
        <span className="flex items-center h-[30px] text-indigo-600">
          {text}
        </span>
      </motion.div>
    </a>
  );
};

const NavRight = () => {
  return (
    <div className="flex items-center gap-4">
      <Link href="/Download.pdf" download="Illustricity_Brochure" target="_blank">
        <Button className="hidden md:block relative" intent="secondary" size="small">
          <span className="font-bold">Download Brochure </span>
          <span class="flex h-3 w-3 absolute top-[-2px] right-[-2px]">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
          </span>
        </Button>
      </Link>
      {/* <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="px-4 py-2 bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent font-medium rounded-md whitespace-nowrap"
      >
        Sign in
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="px-4 py-2 bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-medium rounded-md whitespace-nowrap"
      >
        Sign up
      </motion.button> */}
    </div>
  );
};

const NavMenu = ({ isOpen }) => {
  return (
    <motion.div
      variants={menuVariants}
      initial="closed"
      animate={isOpen ? "open" : "closed"}
      className="absolute p-4 bg-white shadow-lg left-0 right-0 top-full origin-top flex flex-col gap-4 z-50 "
    >
      <MenuLink text="About" />
      <MenuLink text="Quotation" />
      <MenuLink text="Contact" />
      <Link href="/download.pdf" download="Illustricity_Brochure" target="_blank">
        <motion.a
          variants={menuLinkVariants}
          rel="nofollow"
          href="/Download.pdf"
          download="Brochure"
          target="_blank"
          className="h-[30px] overflow-hidden font-medium text-lg flex items-start gap-2"
        >
          <motion.span variants={menuLinkArrowVariants}>
            <FiArrowRight className="h-[30px] text-gray-950" />
          </motion.span>
          <motion.div whileHover={{ y: -30 }}>
            <span className="flex items-center h-[30px] text-gray-500">
              Download Brochure
            </span>
          </motion.div>
        </motion.a>
      </Link>
    </motion.div>
  );
};

const MenuLink = ({ text }) => {
  return (
    <motion.a
      variants={menuLinkVariants}
      rel="nofollow"
      href="#"
      className="h-[30px] overflow-hidden font-medium text-lg flex items-start gap-2"
    >
      <motion.span variants={menuLinkArrowVariants}>
        <FiArrowRight className="h-[30px] text-gray-950" />
      </motion.span>
      <motion.div whileHover={{ y: -30 }}>
        <span className="flex items-center h-[30px] text-gray-500">{text}</span>
        <span className="flex items-center h-[30px] text-indigo-600">
          {text}
        </span>
      </motion.div>
    </motion.a>
  );
};

const menuVariants = {
  open: {
    scaleY: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  closed: {
    scaleY: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.1,
    },
  },
};

const menuLinkVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: -10,
    opacity: 0,
  },
};

const menuLinkArrowVariants = {
  open: {
    x: 0,
  },
  closed: {
    x: -4,
  },
};
