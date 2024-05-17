"use client";
import React from "react";
import MePhoto from "@/images/me-about2.jpg";
import Link from "next/link";
import { motion } from "framer-motion";
import { transition1 } from "@/app/transition";

type Props = {};

export default function About({}: Props) {
  return (
    <motion.section
      className="section"
      initial={{ opacity: 0, y: "100%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "100%" }}
      transition={transition1}
    >
      <div className="container mx-auto h-full relative">
        <div className="flex flex-col lg:flex-row h-full items-center justify-center gap-x-24 text-center lg:text-left lg:pt-16">
          {/* image */}
          <div className="w-full bg-[#eeeefa] flex items-end flex-1 max-h-max lg:mt-0 lg:max-h-max order-2 lg:order-none overflow-hidden">
            <img
              src={MePhoto.src}
              alt="me-pic"
              className="h-[400px] md:h-full lg:h-full"
            />
          </div>
          {/* text */}
          <motion.div
            className="flex-1 pt-20 pb-4 lg:pt-0 lg:w-auto z-10 flex flex-col justify-center items-center lg:items-start"
            initial={{ opacity: 0, y: "-80%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-80%" }}
            transition={transition1}
          >
            <h1 className="h1">About me</h1>
            <p>
              I am a passionate web developer with experience working with
              ReactJS, Typescript, Angular, Java, ASP.NET, and various other
              technologies. I am always seeking opportunities to develop my
              skills and knowledge, with the goal of becoming a full-stack
              developer. I am eager to join a positive work environment where I
              can grow personally and contribute to the success of projects.
            </p>
            <br />
            <Link href={"/portfolio"} className="btn">
              View my work
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
