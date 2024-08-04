'use client'

import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "@/components/Button";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <header className="w-full h-auto p-2 flex justify-center items-center">
        <div className="md:px-5 lg:px-10 flex justify-between items-center h-auto w-full px-20">
            <Image width={500} height={500} alt="logo" src={'/Logo.png'} className="w-[6vw] sm:w-[60px] sm:-ml-2 lg:w-[90px] h-auto"/>
            <ul className="text-[1.1vw] lg:hidden Font2 w-auto font-light flex justify-center gap-10 items-center">
                <Link className={`${pathname==='/' ? 'font-bold scale-125' : 'text-gray-400 scale-100'}`} href={'/'}>Home</Link>
                <Link className={`${pathname==='/AboutUs' ? 'font-bold scale-125' : 'text-gray-400 scale-100'}`} href={'/AboutUs'}>About Us</Link>
                <Link className={`${pathname==='/Education' ? 'font-bold scale-125' : 'text-gray-400 scale-100'}`} href={'/'}>Education</Link>
                <Link className={`${pathname==='/Pricing' ? 'font-bold scale-125' : 'text-gray-400 scale-100'}`} href={'/'}>Pricing</Link>
                <Link className={`${pathname==='/ContactUs' ? 'font-bold scale-125' : 'text-gray-400 scale-100'}`} href={'/'}>Contact Us</Link>
            </ul>
            <Button className="py-3 px-7 lg:hidden  text-[1vw]" text={'Start Now!'}/>
            
        </div>
    </header>
  )
}
export default Navbar