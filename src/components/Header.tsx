import Link from "next/link";
import React from "react";
import HLLogo from "@/components/svgIcons/HLlogoIcon";
import Social from "./Social";
import MobileNav from "./MobileNav";

type Props = {};

export default function Header({}: Props) {
  return (
    <header className="fixed w-full px-[30px] lg:px-[100px] z-30 h-[100px] lg:h-[140px] flex items-center justify-between">
      <a href={"/"} className="flex justify-center items-center gap-2">
        <HLLogo width={50} height={50} />
        {/* <p className={`${playfairDisplay.className} font-semibold text-2xl`}>
          Huu Luan Luong
        </p> */}
        <p className={`font-semibold text-2xl`}>
          Micheal Alin
        </p>
      </a>
      {/* show on desktop mode */}
      <nav className="hidden xl:flex gap-x-12 font-semibold">
        <Link
          href={"/Home"}
          className="text-[#696c6d] hover:text-primary transition"
        >
          Home
        </Link>
        <Link
          href={"/About"}
          className="text-[#696c6d] hover:text-primary transition"
        >
          About
        </Link>
        <Link
          href={"/Contact"}
          className="text-[#696c6d] hover:text-primary transition"
        >
          Contact
        </Link>
        <Link
          href={"/Portfolio"}
          className="text-[#696c6d] hover:text-primary transition"
        >
          Portfolio
        </Link>
      </nav>
      {/* socials */}
      <Social />
      {/* show on mobile mode */}
      <MobileNav />
    </header>
  );
}
