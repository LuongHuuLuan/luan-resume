"use client";
import Link from "next/link";
import React from "react";
import MePhoto from "@/images/me-home.jpg";
import { motion } from "framer-motion";
import { transition1 } from "@/app/transition";

type Props = {};

export default function Home({}: Props) {
  return (
    <motion.section
      className="section overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={transition1}
    >
      {/* text and image wrapper */}
      <div className="container mx-auto h-full relative">
        <div className="flex flex-col justify-center">
          {/* text */}
          <motion.div
            className="w-full pt-36 pb-14 lg:pt-0 lg:pb-0 lg:w-auto z-10 lg:absolute flex flex-col justify-center items-center lg:items-start"
            initial={{ opacity: 0, y: "-50%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-50%" }}
            transition={transition1}
          >
            <h1 className="h1">Web Developer</h1>
            <p className="text-[26px] lg:text-[36px] font-primary mb-4 lg:mb-12">
              Thu Duc, Ho Chi Minh city
            </p>
            <Link href={"/contact"} className="btn mb-[30px]">
              Hire me
            </Link>
          </motion.div>
          {/* image */}
          <div className="flex justify-end max-h-96 lg:max-h-max">
            <motion.div
              className="relative lg:-right-40 overflow-hidden"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              transition={transition1}
            >
              <motion.img
                src={MePhoto.src}
                alt="woman-img"
                whileHover={{ scale: 1.1 }}
                transition={transition1}
                className="lg:max-w-[760px]"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
