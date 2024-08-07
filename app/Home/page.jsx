import Image from "next/image";
import React from "react";
import { RxArrowTopRight,RxStarFilled } from "react-icons/rx";
import { FaStar } from "react-icons/fa6";

const HomePage = () => {
    return (
        <div className="md:px-5 Font2 gap-20 lg:gap-5 lg:px-10 w-full h-full flex justify-center items-center flex-col px-20">
            <section className="lg:flex-col w-full h-auto flex justify-between items-center">
                <div className="lg:w-full lg:gap-5 flex gap-[2.5vw] flex-col h-auto w-1/2">
                    <div className="h-auto lg:w-full sm:text-left sm:items-start sm:justify-start lg:justify-center lg:items-center lg:text-center lg:gap-5 w-full flex-col flex">
                        <h1 className="font-bold sm:text-[35px] lg:text-[45px] text-[4.4vw]">Where <span className="relative">English <Image alt="underline" width={400} height={400} className="w-[30vw] sm:w-[230px] absolute sm:-bottom-3 -bottom-6 right-0 h-auto" src={'/Underline.png'} /></span> <br className="hidden sm:flex"/> Meets Creativity </h1>
                        <p className="text-[1.3vw] lg:w-full lg:text-[18px] sm:text-[13px] text-gray-400 w-[80%]">Traditional methods meet new and diverse creative to bring an empowering online English experience to your children and family. </p>
                        <button className="sm:w-full lg:text-[18px] sm:text-[13px] sm:py-2 lg:mt-0 mt-5 py-3 w-[50%] text-[1.3vw] text-white rounded-l-[20px] rounded-t-[20px] btn-animation">Get Started</button>
                    </div>
                    <div className="w-full h-auto gap-3 flex">
                        <div className="flex justify-end relative items-end w-[50%] h-auto">
                            <Image className="w-[auto] -left-7 bottom-0 absolute h-[95%]" src={'/Home/Woman.png'} width={2000} height={2000} alt="h1" />
                            <div className="p-5 sm:p-3 rounded-[20px] bg-[#EEEEED] w-[70%] flex flex-col justify-between h-full">
                                <h1 className="font-bold sm:ml-0 lg:ml-[5vw] lg:text-[4vw] text-[1.5vw]">Best <span className="yellow-text">Teachers</span> Worldwide</h1>
                                <p className="flex flex-col text-[0.7vw] lg:text-[1.5vw] text-gray-400 w-full justify-end items-end"><span className="font-bold yellow-text lg:text-[4vw] text-[2vw]">21+</span>experts already join us</p>
                            </div>
                        </div>
                        <div className="w-[50%] relative h-auto">
                            <Image className="w-[100%] h-auto" src={'/Home/h2.svg'} width={2000} height={2000} alt="h2" />
                            <p className="text-[1.2vw] sm:text-[2.8vw] lg:text-[3vw] sm:bottom-[2.5vw] font-bold w-[80%] left-3 bottom-6 absolute">- 15 MIN FREE, NOW?<br /> <br /></p>
                            <RxArrowTopRight className="text-[4vw] lg:text-[8vw] lg:top-[2.5vw] lg:right-[3.5vw] yellow-text absolute top-[1vw] right-[1.7vw]" />
                        </div>
                    </div>
                </div>
                <Image className="w-[50%] lg:w-[80%] sm:w-full h-auto" width={1000} height={1000} src={'/Home/Hero.svg'} alt="hero img 1" />
            </section>
            <section className="flex-col sm:gap-5 lg:gap-10 gap-28 big:gap-40 w-full h-auto flex justify-center items-center">
                <div className="lg:flex-col sm:gap-3 sm:text-left lg:text-center w-full relative flex items-center justify-between gap-10">
                    <h1 className="font-bold Font1 sm:text-[25px] lg:w-full w-[50%] lg:text-[45px] text-[3.5vw]">An <span className="relative">Easier <Image alt="underline" width={400} height={400} className="w-[45vw] sm:w-[230px] lg:w-[300px] sm:-bottom-2 lg:-bottom-4 absolute -bottom-6 right-0 h-auto" src={'/Underline.png'} /></span> Way to be Sub and Find Sub</h1>
                    <p className="text-[1.3vw] w-[45%] lg:w-full lg:text-[18px] sm:text-[13px] text-gray-400">When schools and districts have reliable access to substitute teachers and subs have the freedom to choose what and when they teach, more classes are covered and student learning stays on track.</p>
                    <Image src={'/Curve.svg'} alt="curve2" className="w-[10vw] scale-[-1] lg:-rotate-45 lg:w-[90px] sm:hidden lg:relative lg:top-0 lg:left-0 h-auto absolute left-[40%] top-[9vw]" width={400} height={400} />
                </div>
                <div className="w-full sm:gap-3 2lg:justify-center 2lg:flex-wrap flex h-auto justify-between items-center">
                    <div className="w-[31%] 2lg:w-[48%] h-auto relative">
                        <Image className="w-full h-auto" src={'/Home/h3.svg'} width={2000} height={2000} alt="h3" />
                        <div className="absolute sm:top-[3vw] sm:left-[3vw] w-full flex flex-col gap-2 h-auto left-8 top-8">
                            <h1 className="text-black 2lg:text-[4vw] sm:text-[3.7vw] text-[2.4vw] font-semibold">Teacher absences <span className="yellow-text">disrupt</span> student <br/> learning</h1>
                            <p className="text-[1.1vw] sm:hidden 2lg:text-[1.5vw] w-[80%] text-gray-400">When schools and districts have reliable access to teacher</p>
                        </div>
                        <RxArrowTopRight className="text-[4vw] 2lg:text-[7vw] 2lg:bottom-[2.5vw] 2lg:right-[2.5vw] md:right-[3vw] md:bottom-[3.5vw] yellow-text absolute bottom-[2vw] right-[2vw]" />
                    </div>
                    <div className="w-[31%] 2lg:w-[48%] h-auto relative">
                        <Image className="w-full h-auto" src={'/Home/h4.svg'} width={2000} height={2000} alt="h4" />
                        <div className="absolute w-full sm:bottom-[3vw] sm:left-[4vw] flex flex-col gap-2 h-auto left-10 bottom-8">
                            <h1 className="text-black 2lg:text-[4vw] sm:text-[3.7vw] w-[95%] text-[2.4vw] font-semibold">A better way to <span className="yellow-text">connect</span> subs and schools</h1>
                            <p className="text-[1.1vw] sm:hidden 2lg:text-[1.5vw] w-[80%] text-gray-400">When schools and districts have reliable access to teacher</p>
                        </div>
                        <RxArrowTopRight className="text-[4vw] 2lg:text-[7vw] 2lg:top-[3.5vw] 2lg:right-[2.5vw] md:right-[3vw] md:top-[4.5vw] yellow-text absolute top-[2.5vw] right-[2vw]" />
                    </div>
                    <div className="w-[31%] 2lg:w-[48%] h-auto relative">
                        <Image className="w-full h-auto" src={'/Home/h3.svg'} width={2000} height={2000} alt="h3" />
                        <div className="absolute w-full sm:top-[3vw] sm:left-[3vw] flex flex-col gap-2 h-auto left-8 top-8">
                            <h1 className="text-black 2lg:text-[4vw] sm:text-[3.7vw] w-[90%] text-[2.4vw] font-semibold">Student learning <span className="yellow-text">on track </span>stays to meet target</h1>
                            <p className="text-[1.1vw] sm:hidden 2lg:text-[1.5vw] w-[80%] text-gray-400">When schools and districts have reliable access to teacher</p>
                        </div>
                        <RxArrowTopRight className="text-[4vw] 2lg:text-[7vw] 2lg:bottom-[2.5vw] 2lg:right-[2.5vw] md:right-[3vw] md:bottom-[3.5vw] yellow-text absolute bottom-[2vw] right-[2vw]" />
                    </div>
                </div>
            </section>
            <section className="flex-col sm:gap-5 gap-10 big:gap-20 w-full h-auto flex justify-center items-center">
                <div className="lg:flex-col sm:gap-3 sm:text-left lg:text-center w-full relative flex items-center justify-between gap-10">
                    <div className="font-bold Font1 sm:flex-wrap sm:text-[25px] lg:flex lg:justify-center sm:justify-start lg:w-full w-[50%] lg:text-[45px] text-[3.5vw]">
                        <div className="flex sm:flex-wrap items-center gap-3">
                            Why <span className="relative">Choose <Image alt="underline" width={400} height={400} className="w-[45vw] sm:w-[230px] lg:w-[300px] sm:-bottom-1 lg:-bottom-4 absolute -bottom-3 right-0 h-auto" src={'/Underline.png'} /></span> 
                            <div className="flex sm:flex-wrap items-center gap-3"><span className="flex items-center gap-2">Our <RxStarFilled className="yellow-text text-[3vw"/> </span> </div>
                        </div>
                        Services
                    </div>
                    <p className="text-[1.3vw] w-[45%] lg:w-full lg:text-[18px] sm:text-[13px] text-gray-400">Schools and districts save time and money, so they can focus on full-time staff and student outcomes. Subs work on their own terms while making a difference in students' lives. The Swing platform makes it easy for administrators.</p>
                    <Image src={'/Curve2.svg'} alt="curve3" className="w-[12vw] lg:-rotate-45 lg:w-[90px] sm:hidden lg:relative lg:top-0 lg:left-0 h-auto absolute right-0 top-[11vw]" width={400} height={400} />
                </div>
                <div className="w-full flex h-auto justify-start items-center">
                    <Image className="w-[90%] lg:w-[80%] sm:w-full h-auto" width={1000} height={1000} src={'/Home/ThirdS.svg'} alt="hero img 2" />
                </div>
            </section>
            <section className="flex-col sm:gap-5 lg:gap-10 gap-28 big:gap-40 w-full h-auto flex justify-center items-center">
                <div className="lg:flex-col sm:gap-3 sm:text-left lg:text-center w-full relative flex items-center justify-between gap-10">
                    <h1 className="font-bold sm:text-[25px] lg:w-full w-[50%] Font1 lg:text-[45px] text-[3.5vw]">What Our <span className="relative">Lovely <Image alt="underline" width={400} height={400} className="w-[45vw] sm:w-[230px] lg:w-[300px] lg:-bottom-4 absolute -bottom-6 right-0 h-auto" src={'/Underline.png'} /></span> <br className="hidden sm:flex"/> Clients Say</h1>
                    <p className="text-[1.3vw] w-[45%] lg:w-full lg:text-[18px] sm:text-[13px] text-gray-400">We recently heard from Haining Wei, who started teaching with Swing in the spring of 2022. Below, she shares her story of how she was able to get into the classroom quickly.</p>
                    <Image src={'/Lines.png'} alt="lines" className="w-[15vw] -rotate-12 lg:w-[110px] lg:hidden h-auto absolute right-0 top-[12vw]" width={400} height={400} />
                </div>
                <div className="w-full sm:flex-col 2lg:justify-center 2lg:gap-5 2lg:flex-wrap flex h-auto justify-between items-center">
                    <div className="w-[31%] sm:w-full 2lg:w-[48%] h-auto relative">
                        <Image className="w-full h-auto" src={'/Home/Review.svg'} width={2000} height={2000} alt="h3" />
                        <div className="absolute w-auto sm:right-[5vw] sm:top-[5vw] flex flex-col gap-1 items-end h-auto right-[2vw] top-[1vw]">
                            <h2 className="font-semibold sm:text-[5vw] 2lg:text-[2vw] text-[1.7vw]">James Hoven</h2>
                            <div className="text-[2vw] sm:gap-[1vw] sm:right-[5vw] sm:text-[7vw] 2lg:text-[3vw] yellow-text flex justify-center items-start gap-3">
                                <FaStar/>
                                <FaStar/>
                                <FaStar/>
                                <FaStar/>
                                <FaStar/>
                            </div>
                        </div>
                        <p className="w-[80%] sm:text-[4vw] sm:left-[5vw] sm:bottom-[5vw] 2lg:w-[90%] 2lg:text-[2vw] text-[1.1vw] font-light absolute bottom-[3vw] left-[2vw]">Schools and districts save time and money, so they can focus on full-time staff and student outcomes. Subs work on their own terms while making a difference in students' lives. The Swing platform makes it easy for administrators to request subs.</p>
                    </div>
                    <div className="w-[31%] sm:w-full 2lg:w-[48%] h-auto relative">
                        <Image className="w-full h-auto" src={'/Home/Review.svg'} width={2000} height={2000} alt="h3" />
                        <div className="absolute w-auto sm:right-[5vw] sm:top-[5vw] flex flex-col gap-1 items-end h-auto right-[2vw] top-[1vw]">
                            <h2 className="font-semibold sm:text-[5vw] 2lg:text-[2vw] text-[1.7vw]">James Hoven</h2>
                            <div className="text-[2vw] sm:gap-[1vw] sm:right-[5vw] sm:text-[7vw] 2lg:text-[3vw] yellow-text flex justify-center items-start gap-3">
                                <FaStar/>
                                <FaStar/>
                                <FaStar/>
                                <FaStar/>
                                <FaStar/>
                            </div>
                        </div>
                        <p className="w-[80%] sm:text-[4vw] sm:left-[5vw] sm:bottom-[5vw] 2lg:w-[90%] 2lg:text-[2vw] text-[1.1vw] font-light absolute bottom-[3vw] left-[2vw]">Schools and districts save time and money, so they can focus on full-time staff and student outcomes. Subs work on their own terms while making a difference in students' lives. The Swing platform makes it easy for administrators to request subs.</p>
                    </div>
                    <div className="w-[31%] sm:w-full 2lg:w-[48%] h-auto relative">
                        <Image className="w-full h-auto" src={'/Home/Review.svg'} width={2000} height={2000} alt="h3" />
                        <div className="absolute w-auto sm:right-[5vw] sm:top-[5vw] flex flex-col gap-1 items-end h-auto right-[2vw] top-[1vw]">
                            <h2 className="font-semibold sm:text-[5vw] 2lg:text-[2vw] text-[1.7vw]">James Hoven</h2>
                            <div className="text-[2vw] sm:gap-[1vw] sm:right-[5vw] sm:text-[7vw] 2lg:text-[3vw] yellow-text flex justify-center items-start gap-3">
                                <FaStar/>
                                <FaStar/>
                                <FaStar/>
                                <FaStar/>
                                <FaStar/>
                            </div>
                        </div>
                        <p className="w-[80%] sm:text-[4vw] sm:left-[5vw] sm:bottom-[5vw] 2lg:w-[90%] 2lg:text-[2vw] text-[1.1vw] font-light absolute bottom-[3vw] left-[2vw]">Schools and districts save time and money, so they can focus on full-time staff and student outcomes. Subs work on their own terms while making a difference in students' lives. The Swing platform makes it easy for administrators to request subs.</p>
                    </div>
                </div>
            </section>
            
        </div>
    )
}
export default HomePage