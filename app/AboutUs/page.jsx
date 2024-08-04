import Image from "next/image";
import React from "react";

const AboutUs = () => {
    return (
        <div className="md:px-5 Font2 gap-20 lg:gap-5 lg:px-10 w-full h-full flex justify-center items-center flex-col px-20">
            <section className="w-full h-auto gap-10 flex justify-center flex-col items-center">
                <div className="w-full gap-10 h-auto flex justify-between items-center">
                    <p className="Font2 w-[30%] uppercase text-[1.6vw] text-left">Children must <br/> learn from <br/> native speaksers!</p>
                    <Image className="w-[17vw] h-auto" alt="hero h1 about us" width={500} height={500} src={'/About/h1.svg'}/>
                    <p className="Font1 w-[30%] text-[1.5vw] text-right">The first lesson for children serves as a trial session, and it's completely complimentary!</p>
                </div>
                <div className="flex flex-col w-full justify-center items-center h-auto">
                    <h1 className="uppercase text-[12vw]">Kangaroos</h1>
                    <Image className="w-[65%] relative -top-[6vw] rounded-[15px] h-auto" alt="hero about us" width={500} height={500} src={'/About/Hero.png'}/>
                </div>
            </section>
        </div>
    )
}
export default AboutUs