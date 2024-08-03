import React from "react";
import Image from "next/image";
import Link from "next/link";

import { LuInstagram } from "react-icons/lu";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full md:px-5 lg:px-10 flex-col gap-10 sm:gap-5 flex h-auto sm:py-5 py-10 mt-10 px-20 border-t">
      <div className="w-full lg:flex-col lg:gap-5 lg:justify-start lg:items-start h-auto flex justify-between items-center">
        <Image width={500} height={500} alt="logo" src={'/Logo.png'} className="w-[6vw] sm:w-[80px] sm:-ml-2 lg:w-[90px] h-auto" />
        <ul className="text-[1.1vw] sm:text-[16px] sm:flex-col sm:items-start lg:text-[14px] w-auto font-light flex justify-center gap-10 items-center">
          <Link className="font-bold scale-125" href={'/'}>Home</Link>
          <Link className="text-gray-400" href={'/'}>About Us</Link>
          <Link className="text-gray-400" href={'/'}>Education</Link>
          <Link className="text-gray-400" href={'/'}>Pricing</Link>
          <Link className="text-gray-400" href={'/'}>Contact Us</Link>
        </ul>
        <button className="btn-animation sm:px-0 sm:w-full lg:text-[18px] lg:mt-0 mt-5 py-3 px-20 text-[1.3vw] text-white rounded-r-[20px] rounded-t-[20px]">Get Started</button>
      </div>
      <div className="w-full sm:flex-col sm:gap-5 sm:items-start h-auto flex justify-between items-center">
        <span className="text-gray-400 lg:text-[16px] text-[1.1vw]">@Copyright 2024. All Right Reserved</span>
        <div className="text-[2vw] xs:w-full xs:justify-between flex justify-center gap-11 items-center">
          <span className="text-white cursor-pointer group border-2 relative border-[#FDC110] lg:text-[26px] rounded-full w-[3.5vw] lg:w-[50px] lg:h-[50px] h-[3.5vw] flex justify-center items-center">
            <LuInstagram className="z-10 group-hover:text-black ease-linear transition-all duration-200" />
            <div className="w-full h-full ease-linear transition-all duration-200 group-hover:-translate-y-[90%] yellow rounded-full absolute left-0 top-0 z-0"></div>
          </span>
          <span className="text-white cursor-pointer group border-2 relative border-[#FDC110] lg:text-[26px] rounded-full w-[3.5vw] lg:w-[50px] lg:h-[50px] h-[3.5vw] flex justify-center items-center">
            <FaFacebook className="z-10 group-hover:text-black ease-linear transition-all duration-200" />
            <div className="w-full h-full ease-linear transition-all duration-200 group-hover:-translate-y-[90%] yellow rounded-full absolute left-0 top-0 z-0"></div>
          </span>
          <span className="text-white cursor-pointer group border-2 relative border-[#FDC110] lg:text-[26px] rounded-full w-[3.5vw] lg:w-[50px] lg:h-[50px] h-[3.5vw] flex justify-center items-center">
            <FaLinkedin className="z-10 group-hover:text-black ease-linear transition-all duration-200" />
            <div className="w-full h-full ease-linear transition-all duration-200 group-hover:-translate-y-[90%] yellow rounded-full absolute left-0 top-0 z-0"></div>
          </span>
        </div>
      </div>
    </footer>
  )
}
export default Footer