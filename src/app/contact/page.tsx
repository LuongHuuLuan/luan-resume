"use client";
import React from "react";
import { motion } from "framer-motion";
import { transition1 } from "@/app/transition";

type Props = {}

export default function Contact({}: Props) {
  return (
<motion.section
      className="section bg-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={transition1}
    >
      {/* text and image wrapper */}
      <div className="container mx-auto h-full relative">
        <div className="flex flex-col lg:flex-row h-full items-center justify-start pt-36 gap-x-8 text-center lg:text-left">
          <div>bg</div>
          {/* text & form */}
          <div className="lg:flex-1 lg:pt-32 px-4">
            <h1 className="h1">Contact me</h1>
            <p className="mb-12">I would love to get suggestions from you</p>
            <form className="bg-pink-200">
              <div>
                <input className="outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]" type="text" placeholder="Yourname"/>
              </div>
            </form>
          </div>
          <div>image</div>
          {/* text */}
          {/* <motion.div
            className="w-full pt-36 pb-14 lg:pt-0 lg:pb-0 lg:w-auto z-10 lg:absolute flex flex-col justify-center items-center lg:items-start"
            initial={{ opacity: 0, y: "-50%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-50%" }}
            transition={transition1}
          >
            <h1 className="h1">Contact</h1>
          </motion.div> */}
        </div>
      </div>
    </motion.section>
  )
}