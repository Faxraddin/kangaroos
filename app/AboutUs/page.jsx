import Image from "next/image";
import React from "react";

const AboutUs = () => {
    const facts = [
        { id: 0, fact: '50+ Teachers' },
        { id: 1, fact: '500+ Students' },
        { id: 2, fact: 'Native Speakers' },
        { id: 3, fact: '50+ Teachers' },
        { id: 2, fact: 'Native Speakers' },
        { id: 3, fact: '50+ Teachers' }
    ]
    return (
        <div className="md:px-5 Font2 gap-20 lg:gap-5 lg:px-10 w-full h-full flex justify-center items-center flex-col px-20">
            <section className="w-full sm:mt-5 h-auto gap-10 flex justify-center flex-col items-center">
                <div className="md:flex-col md:gap-5 md:justify-center w-full gap-10 h-auto flex justify-between items-center">
                    <p className="md:w-full sm:text-[20px] md:text-[30px] Font2 w-[30%] uppercase text-[1.6vw] md:text-center  text-left">Children must <br className="md:hidden" /> learn from <br className="md:hidden" /> native speaksers!</p>
                    <Image className="w-[17vw] sm:w-[200px] md:w-[300px] h-auto" alt="hero h1 about us" width={500} height={500} src={'/About/h1.svg'} />
                    <p className="md:text-[30px] sm:text-[19px] md:w-full Font1 w-[30%] text-[1.5vw] md:text-center text-right">The first lesson for children serves as a trial session, and it's completely complimentary!</p>
                </div>
                <div className="flex flex-col w-full justify-center items-center h-auto">
                    <h1 className="uppercase md:text-[13vw] text-[12vw]">Kangaroos</h1>
                    <Image className="w-[65%] relative -top-[6vw] rounded-[15px] h-auto" alt="hero about us" width={500} height={500} src={'/About/Hero.png'} />
                </div>
            </section>

            <section className="flex border-t border-b border-[#6A2985] flex-col w-full h-auto">
                <div className="slider-container sm:pb-0 lg:py-5 py-10">
                    <div className="slider">
                        <div className="slide-track">
                            {facts.map((fact) => {
                                return (
                                    <div key={fact.id} className="slide w-[21%] sm:w-max sm:mx-5">
                                        <h1 className="text-[2vw] lg:text-[20px] uppercase">{fact.fact}</h1>
                                    </div>
                                )
                            })}
                            {/* Repeat the slides to create the infinite effect */}
                            {facts.map((fact) => {
                                return (
                                    <div key={fact.id} className="slide w-[21%] sm:w-max sm:mx-5">
                                        <h1 className="text-[2vw] lg:text-[20px] uppercase">{fact.fact}</h1>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
                <div className="slider-container sm:pt-2 lg:py-5 py-10">
                    <div className="slider">
                        <div className="slide-track2">
                            {facts.map((fact) => {
                                return (
                                    <div key={fact.id} className="slide w-[21%] sm:w-max sm:mx-5">
                                        <h1 className="text-[2vw] lg:text-[20px] uppercase">{fact.fact}</h1>
                                    </div>
                                )
                            })}
                            {/* Repeat the slides to create the infinite effect */}
                            {facts.map((fact) => {
                                return (
                                    <div key={fact.id} className="slide w-[21%] sm:w-max sm:mx-5">
                                        <h1 className="text-[2vw] lg:text-[20px] uppercase">{fact.fact}</h1>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default AboutUs