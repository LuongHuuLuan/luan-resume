"use client";
import React from "react";
import { motion } from "framer-motion";
import { transition1 } from "@/app/transition";
import Link from "next/link";

type Props = {};

export default function Portfolio({}: Props) {
  return (
    <motion.section
      className="section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={transition1}
    >
      {/* text and image wrapper */}
      <div className="container mx-auto h-full relative">
        <div className="flex flex-col justify-center items-center h-full">
          {/* text */}
          <motion.div
            className="w-full pt-36 pb-14 lg:pt-0 lg:pb-0 lg:w-auto z-10 lg:absolute flex flex-col justify-center items-center lg:items-start"
            initial={{ opacity: 0, y: "-50%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-50%" }}
            transition={transition1}
          >
            <h1 className="h1">Portfolio</h1>
            <a href={"/WebDeveloper_LuongHuuLuan.pdf"} className="btn" download>
              Download CV
            </a>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
