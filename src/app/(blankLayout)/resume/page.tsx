import React from "react";
import MePhoto from "@/images/me-home-removebg.png";
import Image from "next/image";

type Props = {};

export default function Resume({}: Props) {
  return (
    <main className="font-jost hyphens-manual px-[15%] py-[50px]">
      {/* <!-- Page --------------------------------------------------------------------------------------------------------> */}
      <section className="p-3 my-auto mx-auto max-w-3xl bg-gray-100 rounded-2xl border-4 border-gray-700 sm:p-9 md:p-16 lg:mt-6 print:border-0 page print:max-w-letter print:max-h-letter print:mx-0 print:my-o xsm:p-8 print:bg-white md:max-w-letter md:h-letter lg:h-letter">
        {/* <!-- Name ----------------------------------------------------------------------------------------------------> */}
        <header className="inline-flex justify-between items-baseline mb-2 w-full align-top border-b-4 border-gray-300">
          <section className="block">
            <Image
              src={MePhoto}
              width={200}
              height={200}
              alt="Me"
            />
            <h1 className="mb-0 text-5xl font-bold text-gray-700">
              Huu Luan Luong
            </h1>
            {/* <!--Job Title---------------------------------------------------------------------------------------------------------> */}
            <h2 className="m-0 ml-2 text-2xl font-semibold text-gray-700 leading-snugish">
              Full Stack Web Development
            </h2>
            {/* <!--Location ---------------------------------------------------------------------------------------------------------> */}

            <h3 className="m-0 mt-2 ml-2 text-xl font-semibold text-gray-500 leading-snugish">
              Thu duc, Ho Chi Minh city
            </h3>
          </section>
          {/* <!--   Initials Block         --> */}
          <section
            className="justify-between px-3 mt-0 mb-5 text-4xl font-black leading-none text-white bg-gray-700 initials-container print:bg-black"
            style={{ paddingTop: "1.5rem", paddingBottom: "1.5rem" }}
          >
            <section className="text-center initial">H</section>
            <section className="text-center initial">L</section>
            <section className="text-center initial">L</section>
          </section>
        </header>
      </section>

      {/* <!-- Column --------------------------------------------------------------------------------------------------> */}
      <section className="col-gap-8 print:col-count-2 print:h-letter-col-full col-fill-balance md:col-count-2 md:h-letter-col-full">
        <section className="flex-col">
          {/* <!-- Contact Information -------------------------------------------------------------------------------------> */}
          <section className="pb-2 mt-4 mb-0 first:mt-0">
            {/* <!-- To keep in the same column --------------------------------------------------------------------------> */}
            <section className="break-inside-avoid">
              <section className="pb-4 mb-2 border-b-4 border-gray-300 break-inside-avoid">
                <ul className="pr-7 list-inside">
                  <li className="mt-1 leading-normal text-black text-gray-500 transition duration-100 ease-in hover:text-gray-700 text-md print:">
                    <a href="https://luan-resume.vercel.app/" className="group">
                      <span className="mr-2 text-lg font-semibold text-gray-700 leading-snugish">
                        Portfolio:
                      </span>
                      https://luan-resume.vercel.app/
                      <span className="inline-block font-normal text-black text-gray-500 transition duration-100 ease-in group-hover:text-gray-700 print:text-black print:">
                        ↗
                      </span>
                    </a>
                  </li>
                  <li className="mt-1 leading-normal text-gray-500 transition duration-100 ease-in hover:text-gray-700 text-md">
                    <a href="https://github.com/LuongHuuLuan" className="group">
                      <span className="mr-5 text-lg font-semibold text-gray-700 leading-snugish">
                        Github:
                      </span>
                      LuongHuuLuan
                      <span className="inline-block font-normal text-black text-gray-500 transition duration-100 ease-in group-hover:text-gray-700 print:text-black print:">
                        ↗
                      </span>
                    </a>
                  </li>

                  <li className="mt-1 leading-normal text-gray-500 transition duration-100 ease-in hover:text-gray-700 text-md">
                    <a href="mailto:luongluanmpt@gmail.com" className="group">
                      <span className="mr-8 text-lg font-semibold text-gray-700 leading-snugish">
                        Email:
                      </span>
                      luongluanmpt@gmail.com
                      <span className="inline-block font-normal text-gray-500 transition duration-100 ease-in group-hover:text-gray-700 print:text-black">
                        ↗
                      </span>
                    </a>
                  </li>
                  <li className="mt-1 leading-normal text-gray-500 transition duration-100 ease-in hover:text-gray-700 text-md">
                    <a href="tel:+15109070654">
                      <span className="mr-5 text-lg font-semibold text-gray-700 leading-snugish">
                        Phone:
                      </span>
                      +84914067629
                    </a>
                  </li>
                </ul>
              </section>
            </section>
          </section>
        </section>
      </section>
      {/* <!--Summary ----------------------------------------------------------------------------------------------------------> */}
      <section className="pb-2 pb-4 mt-0 border-b-4 border-gray-300 first:mt-0">
        {/* <!-- To keep in the same column --> */}
        <section className="break-inside-avoid">
          <h2 className="mb-2 text-xl font-bold tracking-widest text-gray-700 print:font-normal">
            SUMMARY
          </h2>

          <section className="mb-2 break-inside-avoid">
            <p className="mt-2 leading-normal text-gray-700 text-md">
              I am a web developer with over 1 year of experience in Django,
              Django Rest Framework, and frontend technologies like HTML, CSS,
              and JavaScript. I also have a solid background in ReactJS,
              TypeScript, Java, and ASP.NET, aiming to become a well-rounded
              full-stack developer.
            </p>
          </section>
        </section>
      </section>
      {/* <!--Education --------------------------------------------------------------------------------------------------------> */}
      <section className="pb-0 mt-2 border-b-4 border-gray-300 first:mt-0 break-inside-avoid">
        {/* <!-- To keep in the same column --> */}
        <section className="break-inside-avoid">
          <h2 className="mb-2 text-lg font-bold tracking-widest text-gray-700 print:font-normal">
            EDUCATION
          </h2>
          {/* <!-- school ---------------------------------------------------------------------------> */}
          <section className="mt-2 border-b-2 break-inside-avoid">
            <header>
              <h3 className="text-lg font-semibold text-gray-700 leading-snugish">
                Nong Lam University at Ho Chi Minh
              </h3>
              <p className="leading-normal text-gray-500 text-md">
                2019 &ndash; 2024 | Information technology Engineer
              </p>
            </header>
            <ul className="mt-2 list-disc list-inside text-gray-800 text-md">
              <li>
                <span className="font-semibold text-md">GPA:</span>
                3.11
              </li>
            </ul>
          </section>
        </section>
      </section>

      {/* <!--Begin Skills -----------------------------------------------------------------------------------------------------> */}
      <section className="pb-6 mt-0 mb-4 border-b-4 border-gray-300 first:mt-0 break-inside-avoid">
        {/* <!-- To keep in the same column --> */}
        <section className="break-inside-avoid">
          <h2 className="mb-2 text-lg font-bold tracking-widest text-gray-700 print:font-normal">
            SKILLS
          </h2>
          <section className="mb-0 break-inside-avoid">
            <section className="mt-1 last:pb-1">
              <div className="mb-2">
                Web development technologies:
                <ul className="list-disc ml-10">
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

              <hr />

              <p className="flex gap-2 mt-2 items-center mb-2">
                Source Control:
                <a href="https://git-scm.com/" target="_blank" rel="noreferrer">
                  <img
                    src="https://www.svgrepo.com/show/303548/git-icon-logo.svg"
                    width="36"
                    height="36"
                    alt="Git"
                  />
                </a>
                <a href="https://github.com/" target="_blank" rel="noreferrer">
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
              <hr />

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
              <hr />
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
              <hr />
              <p className="mb-2 mt-2">
                Soft Skills: Problem solving, self-learning, working
                independently, teamwork.
              </p>
              <hr />
            </section>
          </section>
        </section>
      </section>

      {/* <!--Experience ------------------------------------------------------------------------------------------------------> */}
      <section className="pb-2 pb-4 mt-4 border-b-4 border-gray-300 first:mt-0">
        {/* <!-- To keep in the same column -------------------------------------------------------------------------> */}
        <section className="break-inside-avoid">
          <h2 className="mb-2 text-xl font-black tracking-widest text-gray-800 print:font-normal">
            EXPERIENCE
          </h2>
          {/* <!--Job 1--> */}
          <section className="mb-2 border-b-2 border-gray-300 break-inside-avoid">
            <header>
              <h3 className="font-semibold text-gray-800 text-md leading-snugish">
                Full Stack Web Developer
              </h3>
              <p className="text-sm leading-normal text-gray-500">
                Jun 2018 &ndash; Present | Freelance
              </p>
            </header>
            <ul className="pl-3 mt-2 font-normal text-gray-700 text-md leading-snugish">
              <li>
                <span className="text-gray-500 transform -translate-y-px select-none">
                  &rsaquo;
                </span>
                Created high-quality, customized web applications from scratch,
                employing a diverse set of programming languages, including
                HTML, CSS, JavaScript, PHP, and Python, to fulfill unique client
                requirements.
              </li>
              <li>
                <span className="text-gray-500 transform -translate-y-px select-none">
                  &rsaquo;
                </span>
                Leveraged a range of bleeding edge front-end frameworks like
                React.js, Nullstack and Vue.js, as well as back-end frameworks
                such as Node.js and Express, to deliver robust and scalable web
                solutions.
              </li>
              <li>
                <span className="text-gray-500 transform -translate-y-px select-none">
                  &rsaquo;
                </span>
                Designed and implemented databases using SQL and NoSQL
                technologies like MySQL, PostgreSQL, MongoDB, and Firebase,
                optimizing data storage and management.
              </li>
            </ul>
          </section>
          {/* <!-- job 2  --> */}
          <section className="mb-2 border-b-2 border-gray-300 break-inside-avoid">
            <header>
              <h3 className="font-semibold text-gray-800 text-md leading-snugish">
                Computer Repair Technician
              </h3>
              <p className="text-sm text-gray-500 leading-snugish">
                Mar 2018 &ndash; Present | Freelance
              </p>
            </header>
            <ul className="pl-3 mt-2 font-normal text-gray-700 text-md leading-snugish">
              <li>
                <span className="text-gray-500 transform -translate-y-px select-none">
                  &rsaquo;
                </span>
                Provided expert computer repair services to individuals and
                businesses, diagnosing and resolving hardware and software
                issues effectively.
              </li>
              <li>
                <span className="text-gray-500 transform -translate-y-px select-none">
                  &rsaquo;
                </span>
                Demonstrated proficiency across diverse operating systems
                (Windows, macOS, Linux) and hardware components, offering
                tailored solutions, including hardware upgrades, software
                installations, and malware removal.
              </li>
            </ul>
          </section>
          {/* <!-- job 3 --> */}
          <section className="mb-2 border-b-2 border-gray-300 break-inside-avoid">
            <header>
              <h3 className="font-semibold text-gray-800 text-md leading-snugish">
                Assistant Manager
              </h3>
              <p className="text-sm text-gray-500 leading-snugish">
                May 2012 &ndash; Apr 2018 | Pet Food Express
              </p>
            </header>
            <ul className="pl-3 mt-2 font-normal text-gray-700 text-md leading-snugish">
              <li>
                <span className="text-gray-500 transform -translate-y-px select-none">
                  &rsaquo;
                </span>
                Trained and supervised staff in product knowledge, customer
                engagement, and sales techniques, ensuring a top-notch shopping
                experience for customers.
              </li>
              <li>
                <span className="text-gray-500 transform -translate-y-px select-none">
                  &rsaquo;
                </span>
                Maintained a pristine and organized store environment, fostering
                maximum customer satisfaction.
              </li>
              <li>
                <span className="text-gray-500 transform -translate-y-px select-none">
                  &rsaquo;
                </span>
                Demonstrated deep expertise in the pet food industry, including
                trends, products, and competitors, providing customers with
                informed recommendations and advice.
              </li>
            </ul>
          </section>
          {/* <!-- job 4 --> */}
          <section className="mb-2 border-b-0 border-gray-300 break-inside-avoid">
            <header>
              <h3 className="font-semibold text-gray-800 text-md leading-snugish">
                Executive Assistant
              </h3>
              <p className="text-sm text-gray-500 leading-snugish">
                Jun 2009 &ndash; Dec 2011 | 360 Custom Closets and Cabinets
              </p>
            </header>
            <ul className="pl-3 mt-2 font-normal text-gray-700 text-md leading-snugish">
              <li>
                <span className="text-gray-500 transform -translate-y-px select-none">
                  &rsaquo;
                </span>
                Provided high-level administrative support to the small business
                executive, managing schedules, travel arrangements, and
                coordinating meetings and events.
              </li>
              <li>
                <span className="text-gray-500 transform -translate-y-px select-none">
                  &rsaquo;
                </span>
                Managed communication on behalf of the executive, including
                answering phone calls and emails, ensuring timely and
                professional responses to inquiries and requests.
              </li>
              <li>
                <span className="text-gray-500 transform -translate-y-px select-none">
                  &rsaquo;
                </span>
                Maintained relationships with vendors, clients, and external
                stakeholders, ensuring professionalism and alignment with the
                business&apos;s values.
              </li>
            </ul>
          </section>
        </section>
      </section>

      {/* <!-- end Column --> */}
      {/* <!-- end Page --> */}
    </main>
  );
}
