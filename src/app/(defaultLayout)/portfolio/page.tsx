"use client";
import React from "react";
import { motion } from "framer-motion";
import { transition1 } from "@/app/transition";

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
                  <h2 className="text-2xl font-semibold mb-2">My name is Luan</h2>
                  <p>
                    I was born in July 27, 2001, Tien
                    Giang
                  </p>
                  <p>
  I&apos;m based in {' '}
  <a
    className="text-blue-500 hover:underline"
    href="https://www.google.com/maps/search/?api=1&query=409+Hoang+Huu+Nam,+Thu+Duc,+Ho+Chi+Minh+City"
    target="_blank"
    rel="noopener noreferrer"
  >
    409 Hoang Huu Nam, Thu Duc, Ho Chi Minh City
  </a>
</p>
                  <p>
                  You can contact me at{' '}
                    <a
                      href="mailto:luongluanmpt@gmail.com"
                      className="text-blue-500 hover:underline"
                    >
                      luongluanmpt@gmail.com
                    </a>
                  </p>
                  <p className="mb-2">
                  I&apos;m currently working on {' '}
                  <a
                      href="https://ecepvn.org/"
                      className="text-blue-500 hover:underline"
                    >
                      ECEPVN
                    </a>
                  </p>

                  <hr/>

                  <h2 className="mt-4 text-2xl font-semibold mb-2">* Education</h2>
                  <p>
                    <strong>Nong Lam University at Ho Chi Minh</strong>
                  </p>
                  <p>Engineer 2019 – 2024</p>
                  <p className="mb-2">
                    GPA: 3.11
                  </p>

                  <hr/>

                  <h2 className="mt-4 text-2xl font-semibold mb-2">* Skills</h2>
                  
                  <div className="mb-2">
                    Technical Skills:
                    <ul>
                      <li>
                        <p className="flex gap-2 mt-2 items-center">
                          Back-end:
                          <a
                            href="https://www.oracle.com/java/"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <img
                              src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/java-colored.svg"
                              width="36"
                              height="36"
                              alt="Java"
                            />
                          </a>
                          <a
                            href="https://www.python.org/"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <img
                              src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/python-colored.svg"
                              width="36"
                              height="36"
                              alt="Python"
                            />
                          </a>
                          <a
                            href="https://docs.microsoft.com/en-us/dotnet/csharp/"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <img
                              src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/csharp-colored.svg"
                              width="36"
                              height="36"
                              alt="C#"
                            />
                          </a>
                          <a
                            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <img
                              src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/javascript-colored.svg"
                              width="36"
                              height="36"
                              alt="JavaScript"
                            />
                          </a>
                          <a
                            href="https://www.typescriptlang.org/"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <img
                              src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/typescript-colored.svg"
                              width="36"
                              height="36"
                              alt="TypeScript"
                            />
                          </a>
                          <a
                            href="https://dotnet.microsoft.com/en-us/"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <img
                              src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/dot-net-colored.svg"
                              width="36"
                              height="36"
                              alt=".NET"
                            />
                          </a>
                          <a
                            href="https://www.djangoproject.com/"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <img
                              src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/django-colored.svg"
                              width="36"
                              height="36"
                              alt="Django"
                            />
                          </a>
                        </p>
                      </li>
                      <li>
                        <p className="flex gap-2 mt-2 items-center">
                          <strong>Front-end:</strong>
                          <a
                            href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <img
                              src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/html5-colored.svg"
                              width="36"
                              height="36"
                              alt="HTML5"
                            />
                          </a>
                          <a
                            href="https://www.w3.org/TR/CSS/#css"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <img
                              src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/css3-colored.svg"
                              width="36"
                              height="36"
                              alt="CSS3"
                            />
                          </a>
                          <a
                            href="https://jquery.com/"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <img
                              src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/jquery-colored.svg"
                              width="36"
                              height="36"
                              alt="JQuery"
                            />
                          </a>
                          <a
                            href="https://sass-lang.com/"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <img
                              src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/sass-colored.svg"
                              width="36"
                              height="36"
                              alt="Sass"
                            />
                          </a>
                          <a
                            href="https://tailwindcss.com/"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <img
                              src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/tailwindcss-colored.svg"
                              width="36"
                              height="36"
                              alt="TailwindCSS"
                            />
                          </a>
                          <a
                            href="https://getbootstrap.com/"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <img
                              src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/bootstrap-colored.svg"
                              width="36"
                              height="36"
                              alt="Bootstrap"
                            />
                          </a>
                          <a
                            href="https://reactjs.org/"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <img
                              src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg"
                              width="36"
                              height="36"
                              alt="React"
                            />
                          </a>
                          <a
                            href="https://nextjs.org/docs"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <img
                              src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nextjs-colored.svg"
                              width="36"
                              height="36"
                              alt="NextJs"
                            />
                          </a>
                          <a
                            href="https://angular.io/"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <img
                              src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/angularjs-colored.svg"
                              width="36"
                              height="36"
                              alt="Angular"
                            />
                          </a>
                        </p>
                      </li>
                    </ul>
                  </div>

                  <hr/>

                  <p className="flex gap-2 mt-2 items-center mb-2">
                    Source Control:
                    <a
                      href="https://git-scm.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src="https://www.svgrepo.com/show/303548/git-icon-logo.svg"
                        width="36"
                        height="36"
                        alt="Git"
                      />
                    </a>
                    <a
                      href="https://github.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src="https://www.svgrepo.com/show/512317/github-142.svg"
                        width="36"
                        height="36"
                        alt="Github"
                      />
                    </a>
                    <a
                      href="https://bitbucket.org/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src="https://www.svgrepo.com/show/452166/bitbucket.svg"
                        width="36"
                        height="36"
                        alt="Bitbucket"
                      />
                    </a>
                  </p>
                  <hr/>

                  <p className="flex gap-2 mt-2 items-center mb-2">
                    IDEs & Editors:
                    <a
                      href="https://www.eclipse.org/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src="https://www.svgrepo.com/show/353685/eclipse-icon.svg"
                        width="36"
                        height="36"
                        alt="Eclipse"
                      />
                    </a>
                    <a
                      href="https://code.visualstudio.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src="https://www.svgrepo.com/show/354522/visual-studio-code.svg"
                        width="36"
                        height="36"
                        alt="VisualStudioCode"
                      />
                    </a>
                    <a
                      href="https://visualstudio.microsoft.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src="https://www.svgrepo.com/show/354520/visual-studio.svg"
                        width="36"
                        height="36"
                        alt="VisualStudio"
                      />
                    </a>
                    <a
                      href="https://www.jetbrains.com/idea/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src="https://www.svgrepo.com/show/353906/intellij-idea.svg"
                        width="36"
                        height="36"
                        alt="Intellij"
                      />
                    </a>
                    <a
                      href="https://www.jetbrains.com/webstorm/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src="https://www.svgrepo.com/show/354555/webstorm.svg"
                        width="36"
                        height="36"
                        alt="Webstorm"
                      />
                    </a>
                    <a
                      href="https://www.postman.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src="https://www.svgrepo.com/show/354202/postman-icon.svg"
                        width="36"
                        height="36"
                        alt="Postman"
                      />
                    </a>
                  </p>
                  <hr/>
                  <p className="flex gap-2 mt-2 items-center mb-2">
                    DBMS:
                    <a
                      href="https://www.mysql.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/mysql-colored.svg"
                        width="36"
                        height="36"
                        alt="MySQL"
                      />
                    </a>
                    <a
                      href="https://www.microsoft.com/en-us/sql-server/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src="https://www.svgrepo.com/show/303229/microsoft-sql-server-logo.svg"
                        width="36"
                        height="36"
                        alt="MicrosoftSqlServer"
                      />
                    </a>
                    <a
                      href="https://www.postgresql.org/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/postgresql-colored.svg"
                        width="36"
                        height="36"
                        alt="PostgreSQL"
                      />
                    </a>
                    <a
                      href="https://firebase.google.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/firebase-colored.svg"
                        width="36"
                        height="36"
                        alt="Firebase"
                      />
                    </a>
                  </p>
                  <hr/>
                  <p className="mb-2 mt-2">
                    Soft Skills: Problem solving,
                    self-learning, working independently, teamwork.
                  </p>
                  <hr/>

                  <h2 className="mt-4 text-2xl font-semibold mb-4">* Experience</h2>
                  <div className="mb-2">
                    <h3 className="text-xl font-semibold">
                      Lectronic Library (ECEPVN) - Ho Chi Minh
                    </h3>
                    <p className="italic">December 2022 – September 2023</p>
                    <p>
                      Team Size: 4
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
                  <hr/>
                  <div className="mt-4 mb-2">
                    <h3 className="text-xl font-semibold">
                      Student Job Recruitment Website
                    </h3>
                    <p className="italic">April 2023 – July 2023</p>
                    <p>
                      Team Size: 2
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
                  <hr/>
                  <div className="mt-4 mb-2">
                    <h3 className="text-xl font-semibold">
                      Fashion Store
                    </h3>
                    <p className="italic">April 2022 – June 2022</p>
                    <p>
                      Team Size: 3
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
                  <hr/>
                  <div className="mt-4 mb-2">
                    <h3 className="cursor-pointer text-xl font-semibold hover:text-blue-500 hover:underline">
                      <a href="/project/snake-js">
                      Snake game
                      </a>
                    </h3>
                    <p className="italic">Jun 2, 2022 – Jun 21, 2022</p>
                    <p>
                      Personal project
                    </p>
                    <p>
                      <strong>Main Responsibilities:</strong>
                    </p>
                    <ul className="list-disc list-inside ml-4">
                    <li>Building a classic Snake game using HTML, CSS, and JavaScript. The game features basic mechanics where the player controls a snake to eat food, growing in length while avoiding collisions with walls or itself.</li>
                      <li>
                        <strong>Technology:</strong> HTML, CSS, JS
                      </li>
                      <li>
                        <strong>Features:</strong> Control the snake using <span>&larr;&uarr;&rarr;&darr;</span> arrow keys and eat food to grow longer.
                      </li>
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
