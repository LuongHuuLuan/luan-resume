"use client";
import React, { useEffect } from "react";
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
        <div className="justify-center items-center h-full">
          {/* text */}
          <div className="grid gap-4 grid-cols-1 lg:grid-cols-2 absolute top-[140px] w-full">
            
            
          <motion.div
              className="pt-4 lg:pt-14 flex flex-col items-center"
              initial={{ opacity: 0, y: "-50%" }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: "-50%" }}
              transition={transition1}
            >
              <h1 className="h1">Portfolio</h1>
              <a
                href={"/WebDeveloper_LuongHuuLuan.pdf"}
                className="btn"
                download
              >
                Download CV
              </a>
            </motion.div>

            <motion.div
            className="overflow-y-scroll h-[calc(100vh-40vh)] lg:h-[calc(100vh-140px)]"
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "100%" }}
              transition={transition1}
            >
              <div className="max-w-4xl mx-auto p-4">
                <section className="bg-white shadow-md rounded-lg p-6 mb-6">
                  <h2 className="text-2xl font-semibold mb-4">Profile</h2>
                  <p>
                    <strong>Date/Place Of Birth:</strong> July 27, 2001, Tien
                    Giang
                  </p>
                  <p>
                    <strong>Address:</strong> 409 Hoang Huu Nam, Thu Duc, Ho Chi
                    Minh City
                  </p>
                  <p>
                    <strong>Phone:</strong> 0914067629
                  </p>
                  <p>
                    <strong>Email:</strong>{" "}
                    <a
                      href="mailto:luongluanmpt@gmail.com"
                      className="text-blue-500"
                    >
                      luongluanmpt@gmail.com
                    </a>
                  </p>
                </section>
                <section className="bg-white shadow-md rounded-lg p-6 mb-6">
                  <h2 className="text-2xl font-semibold mb-4">Education</h2>
                  <p>
                    <strong>Nong Lam University at Ho Chi Minh</strong>
                  </p>
                  <p>Engineer 2019 – 2024</p>
                  <p>
                    <strong>GPA:</strong> 3.11
                  </p>
                </section>
                <section className="bg-white shadow-md rounded-lg p-6 mb-6">
                  <h2 className="text-2xl font-semibold mb-4">Skills</h2>
                  <p>
                    <strong>Technical Skills:</strong> HTML, CSS,
                    JavaScript/TypeScript, ReactJS, NextJS, Tailwind, Bootstrap,
                    Java, Django, ASP.NET Core.
                  </p>
                  <p>
                    <strong>Source Control:</strong> Git, GitHub, GitLab,
                    Bitbucket.
                  </p>
                  <p>
                    <strong>IDEs & Editors:</strong> Eclipse, Visual Studio
                    Code, IntelliJ, Webstorm, Postman.
                  </p>
                  <p>
                    <strong>DBMS:</strong> MySQL, MS SQL SERVER, PostgreSQL.
                  </p>
                  <p>
                    <strong>Soft Skills:</strong> Problem solving,
                    self-learning, working independently, teamwork.
                  </p>
                </section>
                <section className="bg-white shadow-md rounded-lg p-6 mb-6">
                  <h2 className="text-2xl font-semibold mb-4">Experience</h2>
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold">
                      Lectronic Library (ECEPVN) - Ho Chi Minh
                    </h3>
                    <p className="italic">December 2022 – September 2023</p>
                    <p>
                      <strong>Team Size:</strong> 4
                    </p>
                    <p>
                      <strong>Main Responsibilities:</strong>
                    </p>
                    <ul className="list-disc list-inside ml-4">
                      <li>
                        Crawling data from online sources and constructing a
                        digital library on Chinese characters, as well as
                        searching for Vietnamese-Chinese and Chinese-Vietnamese
                        dictionaries.
                      </li>
                      <li>
                        <strong>Technology:</strong> Python (Django), NextJS,
                        Tailwind CSS.
                      </li>
                      <li>
                        <strong>Features:</strong> Look up Sino-Vietnamese words
                        (radical, strokes), find books, reading PDF books.
                      </li>
                    </ul>
                  </div>
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold">
                      Student Job Recruitment Website (Project inside school) -
                      Ho Chi Minh
                    </h3>
                    <p className="italic">April 2023 – July 2023</p>
                    <p>
                      <strong>Team Size:</strong> 2
                    </p>
                    <p>
                      <strong>Main Responsibilities:</strong>
                    </p>
                    <ul className="list-disc list-inside ml-4">
                      <li>Using ReactJS to build a recruitment website.</li>
                      <li>
                        <strong>Technology:</strong> ReactJS, Axios, Redux
                        Toolkit, Bootstrap, SCSS.
                      </li>
                      <li>
                        <strong>Features:</strong> Create CV, post job
                        recruitment, job suggestions.
                      </li>
                    </ul>
                  </div>
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold">
                      Fashion Store (Project inside school)
                    </h3>
                    <p className="italic">April 2022 – June 2022</p>
                    <p>
                      <strong>Team Size:</strong> 3
                    </p>
                    <p>
                      <strong>Main Responsibilities:</strong>
                    </p>
                    <ul className="list-disc list-inside ml-4">
                      <li>Using Bootstrap to implement UI.</li>
                      <li>Discussed with the team to find solutions.</li>
                      <li>
                        <strong>Feature Responsibilities:</strong>
                      </li>
                      <ul className="list-disc list-inside ml-8">
                        <li>
                          Manage products such as color, upload images, tag
                          products, etc.
                        </li>
                        <li>Add products.</li>
                        <li>Product details.</li>
                        <li>Forgot password functionality.</li>
                      </ul>
                    </ul>
                  </div>
                </section>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
