import Image from "next/image";
import React from "react";

const HomePage = () => {
  return (
    <div className="w-full h-full flex justify-center items-center flex-col px-20">
        <section className="w-full h-auto flex justify-between items-center">
            <div className="flex gap-14 flex-col h-auto w-1/2">
                <div className="h-auto w-full flex-col flex">
                    <h1 className="font-bold text-[6vw]">Keep <span className="relative">Learning <Image alt="underline" width={400} height={400} className="w-[30vw] absolute -bottom-6 right-0 h-auto" src={'/Underline.png'}/></span> on Track</h1>
                    <p className="text-[1.3vw] text-gray-400 w-[80%]">When schools and districts have reliable access to substitute teachers and subs have the freedom to choose what and when they teach.</p>
                    <button className="bg-[#FF9D04] mt-5 py-3 w-[50%] text-[1.3vw] text-white rounded-l-[20px] rounded-t-[20px]">Get Started</button>
                </div>
                <div className="w-full h-auto gap-3 flex">
                    <div className="flex h-auto">
                        <Image className="w-[11vw] h-auto" src={'/Home/Woman.svg'} width={2000} height={2000} alt="h1"/>
                        <div className="p-5 rounded-[20px] bg-[#EEEEED] w-auto flex flex-col justify-between h-full">
                            <h1 className="font-bold text-[1.5vw]">Best <span className="text-[#337A74]">Teachers</span> Worldwide</h1>
                            <p className="flex flex-col text-[0.7vw] text-gray-400"><span className="font-bold text-[#337A74] text-[2vw]">21+</span>experts already join us</p>
                        </div>
                    </div>
                    <div className="w-[50%] relative h-auto">
                        <Image className="w-[100%] h-auto" src={'/Home/h2.svg'} width={2000} height={2000} alt="h2"/>
                        <p className="text-[1.2vw] font-bold w-[80%] left-3 bottom-6 absolute">Transforming schools <br/> and substitute <br/> teachers</p>
                    </div>
                </div>
            </div>
            <Image className="w-[50%] h-auto" width={1000} height={1000} src={'/Home/Hero.svg'} alt="hero img 1"/>
        </section>
    </div>
  )
}
export default HomePage