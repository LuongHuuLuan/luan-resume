"use client";
import CloseIcon from "@/components/svgIcons/CloseIcon";
import MenuAltIcon from "@/components/svgIcons/MenuAltIcon";
import Link from "next/link";
import React, { useState } from "react";
import { motion } from "framer-motion";

type Props = {};

const menuVariants = {
  hidden: {
    x: "100%",
  },
  show: {
    x: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.9],
    },
  },
};

export default function MobileNav({}: Props) {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <nav className={`xl:hidden`}>
      <div
        className="text-3xl cursor-pointer"
        onClick={() => setOpenMenu(true)}
      >
        <MenuAltIcon width={40} height={40} />
      </div>
      <motion.div
        variants={menuVariants}
        initial="hidden"
        animate={openMenu ? "show" : ""}
        className="bg-white shadow-2xl w-full absolute top-0 right-0 max-w-xs h-screen z-20"
      >
        <div
          className="absolute z-30 left-4 top-14 text-[#696c6d] cursor-pointer hover:text-primary"
          onClick={() => setOpenMenu(false)}
        >
          <CloseIcon width={40} height={40} />
        </div>
        <ul className="h-full flex flex-col justify-center items-center gap-y-8 font-bold text-primary text-3xl">
          <li>
            <Link
              href={"/home"}
              className="text-[#696c6d] hover:text-primary transition"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href={"/about"}
              className="text-[#696c6d] hover:text-primary transition"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href={"/blog"}
              className="text-[#696c6d] hover:text-primary transition"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              href={"/contact"}
              className="text-[#696c6d] hover:text-primary transition"
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              href={"/portfolio"}
              className="text-[#696c6d] hover:text-primary transition"
            >
              Portfolio
            </Link>
          </li>
        </ul>
      </motion.div>
    </nav>
  );
}
