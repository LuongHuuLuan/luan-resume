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
      className="section overflow-hidden"
      initial={{ opacity: 0, y: "100%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "100%" }}
      transition={transition1}
    >
      <div className="container mx-auto h-full relative">
        <div className="flex flex-col lg:flex-row h-full items-center justify-center gap-x-24 text-center lg:text-left lg:pt-16">
          {/* image */}
          <div className="hidden md:block w-full bg-[#eeeefa] flex items-end flex-1 max-h-max lg:mt-0 lg:max-h-max order-2 lg:order-none overflow-hidden">
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
              I am a web developer with over 1 year of experience in Django,
              Django Rest Framework, and frontend technologies like HTML, CSS,
              and JavaScript. I also have a solid background in ReactJS,
              TypeScript, Java, and ASP.NET, aiming to become a well-rounded
              full-stack developer.
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
