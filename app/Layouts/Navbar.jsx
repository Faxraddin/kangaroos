'use client'

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import Button from "@/components/Button";
import { usePathname,useRouter } from "next/navigation";

const Navbar = () => {
  const navigate = useRouter();
  const pathname = usePathname();
  const [navActive,setNavActive] = useState(false)
  const [color, setColor] = useState('#f55712');

  useEffect(() => {
    switch (pathname) {
      case '/':
        setColor('#f55712');
        break;
      case '/AboutUs':
        setColor('#6A2985');
        break;
      default:
        setColor('#f55712'); 
    }
  }, [pathname]);

  const handleClick = () => {
    setNavActive(!navActive)
  }

  return (
    <header className="w-full h-auto p-2 flex justify-center items-center">
      <div className="md:px-5 lg:px-10 flex justify-between items-center h-auto w-full px-20">
        <Image onClick={()=>{navigate('/')}} width={500} height={500} alt="logo" src={'/Logo.svg'} className="w-[6vw] border-[#fdc110] border-2 rounded-full sm:w-[70px] sm:-ml-2 lg:w-[90px] h-auto" />
        <ul className="text-[1.1vw] lg:hidden Font2 w-auto font-light flex justify-center gap-10 items-center">
          <Link className={`${pathname === '/' ? 'font-bold scale-125' : 'text-gray-400 scale-100'}`} href={'/'}>Home</Link>
          <Link className={`${pathname === '/AboutUs' ? 'font-bold scale-125' : 'text-gray-400 scale-100'}`} href={'/AboutUs'}>About Us</Link>
          <Link className={`${pathname === '/Education' ? 'font-bold scale-125' : 'text-gray-400 scale-100'}`} href={'/'}>Education</Link>
          <Link className={`${pathname === '/Price' ? 'font-bold scale-125' : 'text-gray-400 scale-100'}`} href={'/Price'}>Pricing</Link>
          <Link className={`${pathname === '/ContactUs' ? 'font-bold scale-125' : 'text-gray-400 scale-100'}`} href={'/ContactUs'}>Contact Us</Link>
        </ul>
        <Button className="py-3 px-7 lg:hidden  text-[1vw]" text={'Start Now!'} />
        <div className="w-auto h-auto z-30 hidden rounded-full p-3 sm:bg-transparent yellow lg:flex">
          <label className="hamburger">
            <input onClick={handleClick} type="checkbox" />
            <svg viewBox="0 0 32 32">
              <path className={`line line-top-bottom`} stroke={color} d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"></path>
              <path className={`line`} stroke={color} d="M7 16 27 16"></path>
            </svg>
          </label>
        </div>

        <div className={`${navActive ? 'translate-x-[-5%] sm:translate-x-[-8%]' : 'translate-x-[100%]'} overflow-hidden w-[110vw] ease-linear duration-300 transition-all h-screen bg-[black] top-0 z-20 fixed`}>

        </div>
      </div>
    </header>
  )
}
export default Navbar