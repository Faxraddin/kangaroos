"use client"

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname,useRouter } from "next/navigation";

import { LuInstagram } from "react-icons/lu";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const pathname = usePathname();
  const navigate = useRouter();
  return (
    <footer className="w-full md:px-5 Font2 lg:px-10 flex-col gap-10 sm:gap-5 flex h-auto sm:py-5 py-10 mt-10 px-20 border-t">
      <div className="w-full lg:flex-col lg:gap-5 lg:justify-start lg:items-start h-auto flex justify-between items-center">
      <Image onClick={()=>{navigate('/')}} width={500} height={500} alt="logo" src={'/Logo.svg'} className="w-[6vw] border-[#fdc110] border-2 rounded-full sm:w-[70px] sm:-ml-2 lg:w-[90px] h-auto" />
        <ul className="text-[1.1vw] sm:text-[13px] sm:gap-5 sm:flex-col sm:items-start lg:text-[14px] w-auto font-light flex justify-center gap-10 items-center">
          <Link className={`${pathname === '/' ? 'font-bold scale-125' : 'text-gray-400 scale-100'}`} href={'/'}>Home</Link>
          <Link className={`${pathname === '/AboutUs' ? 'font-bold scale-125' : 'text-gray-400 scale-100'}`} href={'/AboutUs'}>About Us</Link>
          <Link className={`${pathname === '/Education' ? 'font-bold scale-125' : 'text-gray-400 scale-100'}`} href={'/'}>Education</Link>
          <Link className={`${pathname === '/Price' ? 'font-bold scale-125' : 'text-gray-400 scale-100'}`} href={'/Price'}>Pricing</Link>
          <Link className={`${pathname === '/ContactUs' ? 'font-bold scale-125' : 'text-gray-400 scale-100'}`} href={'/ContactUs'}>Contact Us</Link>
        </ul>
        <button className="btn-animation w-[25%] lg:w-1/2 sm:px-0 sm:w-full lg:text-[18px] sm:text-[13px] sm:py-2 lg:mt-0 mt-5 py-3 px-20 text-[1.3vw] text-white rounded-r-[20px] rounded-t-[20px]">Get Started</button>
      </div>
      <div className="w-full sm:flex-col sm:gap-5 sm:items-start h-auto flex justify-between items-center">
        <span className="text-gray-400 sm:text-[12px] lg:text-[16px] text-[1.1vw]">@Copyright 2024. All Right Reserved</span>
        <div className="text-[2vw] lg:w-auto w-[25%] sm:w-full justify-between flex gap-11 items-center">
          <span className="text-white sm:h-[35px] sm:text-[20px] sm:w-[35px] cursor-pointer group border-2 relative border-[#FDC110] lg:text-[26px] rounded-full w-[3.5vw] lg:w-[50px] lg:h-[50px] h-[3.5vw] flex justify-center items-center">
            <LuInstagram className="z-10 group-hover:text-black ease-linear transition-all duration-200" />
            <div className="w-full h-full ease-linear transition-all duration-200 group-hover:-translate-y-[90%] yellow rounded-full absolute left-0 top-0 z-0"></div>
          </span>
          <span className="text-white sm:h-[35px] sm:text-[20px] sm:w-[35px] cursor-pointer group border-2 relative border-[#FDC110] lg:text-[26px] rounded-full w-[3.5vw] lg:w-[50px] lg:h-[50px] h-[3.5vw] flex justify-center items-center">
            <FaFacebook className="z-10 group-hover:text-black ease-linear transition-all duration-200" />
            <div className="w-full h-full ease-linear transition-all duration-200 group-hover:-translate-y-[90%] yellow rounded-full absolute left-0 top-0 z-0"></div>
          </span>
          <span className="text-white sm:h-[35px] sm:text-[20px] sm:w-[35px] cursor-pointer group border-2 relative border-[#FDC110] lg:text-[26px] rounded-full w-[3.5vw] lg:w-[50px] lg:h-[50px] h-[3.5vw] flex justify-center items-center">
            <FaLinkedin className="z-10 group-hover:text-black ease-linear transition-all duration-200" />
            <div className="w-full h-full ease-linear transition-all duration-200 group-hover:-translate-y-[90%] yellow rounded-full absolute left-0 top-0 z-0"></div>
          </span>
        </div>
      </div>
    </footer>
  )
}
export default Footer