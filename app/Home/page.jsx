import Image from "next/image";
import React from "react";
import { RxArrowTopRight,RxStarFilled } from "react-icons/rx";

const HomePage = () => {
    return (
        <div className="md:px-5 gap-20 lg:gap-5 lg:px-10 w-full h-full flex justify-center items-center flex-col px-20">
            <section className="lg:flex-col w-full h-auto flex justify-between items-center">
                <div className="lg:w-full lg:gap-5 flex gap-[2.5vw] flex-col h-auto w-1/2">
                    <div className="h-auto lg:w-full sm:text-left sm:items-start sm:justify-start lg:justify-center lg:items-center lg:text-center lg:gap-5 w-full flex-col flex">
                        <h1 className="font-bold lg:text-[45px] text-[6vw]">Keep <span className="relative">Learning <Image alt="underline" width={400} height={400} className="w-[30vw] sm:w-[230px] absolute -bottom-6 right-0 h-auto" src={'/Underline.png'} /></span> <br className="hidden sm:flex"/> on Track</h1>
                        <p className="text-[1.3vw] lg:w-full lg:text-[18px] sm:text-[15px] text-gray-400 w-[80%]">When schools and districts have reliable access to substitute teachers and subs have the freedom to choose what and when they teach.</p>
                        <button className="bg-[#FF9D04] sm:w-full lg:text-[18px] lg:mt-0 mt-5 py-3 w-[50%] text-[1.3vw] text-white rounded-l-[20px] rounded-t-[20px]">Get Started</button>
                    </div>
                    <div className="w-full h-auto gap-3 flex">
                        <div className="flex justify-end relative items-end w-[50%] h-auto">
                            <Image className="w-[auto] -left-5 bottom-2 absolute h-[90%]" src={'/Home/Woman.svg'} width={2000} height={2000} alt="h1" />
                            <div className="p-5 sm:p-3 rounded-[20px] bg-[#EEEEED] w-[70%] flex flex-col justify-between h-full">
                                <h1 className="font-bold sm:ml-0 lg:ml-[5vw] lg:text-[4vw] text-[1.5vw]">Best <span className="text-[#337A74]">Teachers</span> Worldwide</h1>
                                <p className="flex flex-col text-[0.7vw] lg:text-[1.5vw] text-gray-400 w-full justify-end items-end"><span className="font-bold text-[#337A74] lg:text-[4vw] text-[2vw]">21+</span>experts already join us</p>
                            </div>
                        </div>
                        <div className="w-[50%] relative h-auto">
                            <Image className="w-[100%] h-auto" src={'/Home/h2.svg'} width={2000} height={2000} alt="h2" />
                            <p className="text-[1.2vw] lg:text-[3vw] sm:bottom-[2vw] font-bold w-[80%] left-3 bottom-6 absolute">Transforming schools <br /> and substitute <br /> teachers</p>
                            <RxArrowTopRight className="text-[4vw] lg:text-[8vw] lg:top-[2.5vw] lg:right-[3.5vw] text-[#FF9D04] absolute top-[1vw] right-[1.7vw]" />
                        </div>
                    </div>
                </div>
                <Image className="w-[50%] lg:w-[80%] sm:w-full h-auto" width={1000} height={1000} src={'/Home/Hero.svg'} alt="hero img 1" />
            </section>
            <section className="flex-col sm:gap-5 lg:gap-10 gap-28 big:gap-40 w-full h-auto flex justify-center items-center">
                <div className="lg:flex-col sm:gap-3 sm:text-left lg:text-center w-full relative flex items-center justify-between gap-10">
                    <h1 className="font-bold sm:text-[35px] lg:w-full w-[50%] lg:text-[45px] text-[4vw]">An <span className="relative">Easier <Image alt="underline" width={400} height={400} className="w-[45vw] sm:w-[230px] lg:w-[300px] lg:-bottom-4 absolute -bottom-6 right-0 h-auto" src={'/Underline.png'} /></span> Way to be Sub and Find Sub</h1>
                    <p className="text-[1.3vw] w-[45%] lg:w-full lg:text-[18px] sm:text-[15px] text-gray-400">When schools and districts have reliable access to substitute teachers and subs have the freedom to choose what and when they teach, more classes are covered and student learning stays on track.</p>
                    <Image src={'/Curve2.png'} alt="curve2" className="w-[10vw] lg:-rotate-45 lg:w-[90px] sm:hidden lg:relative lg:top-0 lg:left-0 h-auto absolute left-[40%] top-[9vw]" width={400} height={400} />
                </div>
                <div className="w-full sm:gap-3 2lg:justify-center 2lg:flex-wrap flex h-auto justify-between items-center">
                    <div className="w-[31%] 2lg:w-[48%] h-auto relative">
                        <Image className="w-full h-auto" src={'/Home/h3.svg'} width={2000} height={2000} alt="h3" />
                        <div className="absolute sm:top-[3vw] sm:left-[3vw] w-full flex flex-col gap-2 h-auto left-8 top-8">
                            <h1 className="text-black 2lg:text-[4vw] text-[2.4vw] font-semibold">Teacher absences <span className="text-[#FF9D04]">disrupt</span> student <br/> learning</h1>
                            <p className="text-[1.1vw] sm:hidden 2lg:text-[1.5vw] w-[80%] text-gray-400">When schools and districts have reliable access to teacher</p>
                        </div>
                        <RxArrowTopRight className="text-[4vw] 2lg:text-[7vw] 2lg:bottom-[2.5vw] 2lg:right-[2.5vw] md:right-[3vw] md:bottom-[3.5vw] text-[#FF9D04] absolute bottom-[2vw] right-[2vw]" />
                    </div>
                    <div className="w-[31%] 2lg:w-[48%] h-auto relative">
                        <Image className="w-full h-auto" src={'/Home/h4.svg'} width={2000} height={2000} alt="h4" />
                        <div className="absolute w-full sm:bottom-[3vw] sm:left-[4vw] flex flex-col gap-2 h-auto left-10 bottom-8">
                            <h1 className="text-black 2lg:text-[4vw] w-[95%] text-[2.4vw] font-semibold">A better way to <span className="text-[#FF9D04]">connect</span> subs and schools</h1>
                            <p className="text-[1.1vw] sm:hidden 2lg:text-[1.5vw] w-[80%] text-gray-400">When schools and districts have reliable access to teacher</p>
                        </div>
                        <RxArrowTopRight className="text-[4vw] 2lg:text-[7vw] 2lg:top-[3.5vw] 2lg:right-[2.5vw] md:right-[3vw] md:top-[4.5vw] text-[#FF9D04] absolute top-[2.5vw] right-[2vw]" />
                    </div>
                    <div className="w-[31%] 2lg:w-[48%] h-auto relative">
                        <Image className="w-full h-auto" src={'/Home/h3.svg'} width={2000} height={2000} alt="h3" />
                        <div className="absolute w-full sm:top-[3vw] sm:left-[3vw] flex flex-col gap-2 h-auto left-8 top-8">
                            <h1 className="text-black 2lg:text-[4vw] w-[90%] text-[2.4vw] font-semibold">Student learning <span className="text-[#FF9D04]">on track </span>stays to meet target</h1>
                            <p className="text-[1.1vw] sm:hidden 2lg:text-[1.5vw] w-[80%] text-gray-400">When schools and districts have reliable access to teacher</p>
                        </div>
                        <RxArrowTopRight className="text-[4vw] 2lg:text-[7vw] 2lg:bottom-[2.5vw] 2lg:right-[2.5vw] md:right-[3vw] md:bottom-[3.5vw] text-[#FF9D04] absolute bottom-[2vw] right-[2vw]" />
                    </div>
                </div>
            </section>
            <section className="flex-col sm:gap-5 gap-10 big:gap-40 w-full h-auto flex justify-center items-center">
                <div className="lg:flex-col sm:gap-3 sm:text-left lg:text-center w-full relative flex items-center justify-between gap-10">
                    <div className="font-bold sm:flex-wrap sm:text-[35px] lg:flex lg:justify-center sm:justify-start lg:w-full w-[50%] lg:text-[45px] text-[4vw]">
                        <div className="flex sm:flex-wrap items-center gap-3">
                            Why <span className="relative">Choose <Image alt="underline" width={400} height={400} className="w-[45vw] sm:w-[230px] lg:w-[300px] lg:-bottom-4 absolute -bottom-3 right-0 h-auto" src={'/Underline.png'} /></span> 
                            <div className="flex sm:flex-wrap items-center gap-3"><span className="flex items-center gap-2">Our <RxStarFilled className="text-[#FF9D04] text-[3vw"/> </span> </div>
                        </div>
                        Services
                    </div>
                    <p className="text-[1.3vw] w-[45%] lg:w-full lg:text-[18px] sm:text-[15px] text-gray-400">Schools and districts save time and money, so they can focus on full-time staff and student outcomes. Subs work on their own terms while making a difference in students' lives. The Swing platform makes it easy for administrators.</p>
                    <Image src={'/Curve3.png'} alt="curve3" className="w-[10vw] lg:-rotate-45 lg:w-[90px] sm:hidden lg:relative lg:top-0 lg:left-0 h-auto absolute right-0 top-[9vw]" width={400} height={400} />
                </div>
                <div className="w-full flex h-auto justify-center items-center">
                    <Image className="w-[100%] lg:w-[80%] sm:w-full h-auto" width={1000} height={1000} src={'/Home/ThirdS.svg'} alt="hero img 2" />
                </div>
            </section>
        </div>
    )
}
export default HomePage