import FacebookIcon from "@/components/svgIcons/FacebookIcon";
import GithubIcon from "@/components/svgIcons/GithubIcon";
import InstagramIcon from "@/components/svgIcons/InstagramIcon";
import LinkedinIcon from "@/components/svgIcons/LinkedinIcon";
import React from "react";

type Props = {};

export default function Social({}: Props) {
  return (
    <div className="hidden gap-x-4 xl:flex ml-24 text-[#696c6d]">
      <a href="https://www.facebook.com/luongluanmpt" target="_blank" className="cursor-pointer hover:opacity-80">
        <FacebookIcon width={20} height={20} />
      </a>
      {/* <a href="#" target="_blank" className="cursor-pointer hover:opacity-80">
        <InstagramIcon width={20} height={20} />
      </a> */}
      <a href="https://www.linkedin.com/in/luonghuuluan" target="_blank" className="cursor-pointer hover:opacity-80">
        <LinkedinIcon width={20} height={20} />
      </a>
      <a href="https://github.com/LuongHuuLuan" target="_blank" className="cursor-pointer hover:opacity-80">
        <GithubIcon width={20} height={20} />
      </a>
    </div>
  );
}
