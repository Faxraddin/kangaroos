import Image from "next/image";
import React from "react";
import { RxArrowTopRight } from "react-icons/rx";

const HomePage = () => {
  return (
    <div className="md:px-5 lg:px-10 w-full h-full flex justify-center items-center flex-col px-20">
        <section className="lg:flex-col w-full h-auto flex justify-between items-center">
            <div className="lg:w-full lg:gap-5 flex gap-14 flex-col h-auto w-1/2">
                <div className="h-auto lg:w-full sm:text-left sm:justify-start lg:justify-center lg:items-center lg:text-center lg:gap-5 w-full flex-col flex">
                    <h1 className="font-bold lg:text-[45px] sm:text-[45px] text-[6vw]">Keep <span className="relative">Learning <Image alt="underline" width={400} height={400} className="w-[30vw] sm:w-[230px] absolute -bottom-6 right-0 h-auto" src={'/Underline.png'}/></span> on Track</h1>
                    <p className="text-[1.3vw] lg:w-full lg:text-[18px] sm:text-[15px] text-gray-400 w-[80%]">When schools and districts have reliable access to substitute teachers and subs have the freedom to choose what and when they teach.</p>
                    <button className="bg-[#FF9D04] sm:w-full lg:text-[18px] lg:mt-0 mt-5 py-3 w-[50%] text-[1.3vw] text-white rounded-l-[20px] rounded-t-[20px]">Get Started</button>
                </div>
                <div className="w-full h-auto gap-3 flex">
                    <div className="flex justify-end relative items-end w-[50%] h-auto">
                        <Image className="w-[auto] -left-5 bottom-2 absolute h-[90%]" src={'/Home/Woman.svg'} width={2000} height={2000} alt="h1"/>
                        <div className="p-5 sm:p-3 rounded-[20px] bg-[#EEEEED] w-[70%] flex flex-col justify-between h-full">
                            <h1 className="font-bold sm:ml-0 lg:ml-[5vw] lg:text-[4vw] text-[1.5vw]">Best <span className="text-[#337A74]">Teachers</span> Worldwide</h1>
                            <p className="flex flex-col text-[0.7vw] lg:text-[1.5vw] text-gray-400 w-full justify-end items-end"><span className="font-bold text-[#337A74] lg:text-[4vw] text-[2vw]">21+</span>experts already join us</p>
                        </div>
                    </div>
                    <div className="w-[50%] relative h-auto">
                        <Image className="w-[100%] h-auto" src={'/Home/h2.svg'} width={2000} height={2000} alt="h2"/>
                        <p className="text-[1.2vw] lg:text-[3vw] sm:bottom-[2vw] font-bold w-[80%] left-3 bottom-6 absolute">Transforming schools <br/> and substitute <br/> teachers</p>
                        <RxArrowTopRight className="text-[4vw] lg:text-[8vw] lg:top-[2.5vw] lg:right-[3.5vw] text-[#FF9D04] absolute top-[1vw] right-[1.7vw]"/>
                    </div>
                </div>
            </div>
            <Image className="w-[50%] lg:w-[80%] sm:w-full h-auto" width={1000} height={1000} src={'/Home/Hero.svg'} alt="hero img 1"/>
        </section>
    </div>
  )
}
export default HomePage