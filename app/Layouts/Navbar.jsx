import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <header className="w-full h-auto p-5 flex justify-center items-center">
        <div className="flex justify-between items-center w-[90%] h-auto">
            <Image width={500} height={500} alt="logo" src={'/Logo.png'} className="w-[5vw] h-auto"/>
            <ul className="text-[1.1vw] w-auto font-light flex justify-center gap-10 items-center">
                <Link className="font-bold scale-125" href={'/'}>Home</Link>
                <Link className="text-gray-400" href={'/'}>About Us</Link>
                <Link className="text-gray-400" href={'/'}>Education</Link>
                <Link className="text-gray-400" href={'/'}>Pricing</Link>
                <Link className="text-gray-400" href={'/'}>Contact Us</Link>
            </ul>
            <button className="py-3 px-7 rounded-[10px] font-light border border-black text-[1vw]">Make Appointment</button>
        </div>
    </header>
  )
}
export default Navbar