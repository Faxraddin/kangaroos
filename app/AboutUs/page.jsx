'use client'

import Image from "next/image";
import React, { useState } from "react";

import { RxArrowTopRight } from "react-icons/rx";
import { PiShootingStarFill } from "react-icons/pi";
import { AiFillStar } from "react-icons/ai";
import { FaHandPointLeft, FaHandPointRight } from "react-icons/fa";

const AboutUs = () => {
    const facts = [
        { id: 0, fact: '50+ Teachers' },
        { id: 1, fact: '500+ Students' },
        { id: 2, fact: 'Native Speakers' },
        { id: 3, fact: '50+ Teachers' },
        { id: 2, fact: 'Native Speakers' },
        { id: 3, fact: '50+ Teachers' }
    ]

    const questions = [
        { id: 0, question: ' When do classes start?', answer: 'askjnda sadas sad asd  sada sd asd kjsndajndakjsdanssladnlaskdnas', color: '#6A2985' },
        { id: 1, question: 'question 1', answer: 'askjndakjsndajndakjsdanssladnlaskdnas', color: '#f55712' },
        { id: 2, question: 'question 1', answer: 'askjndakjsndajndakjsdanssladnlaskdnas', color: '#fdc110' }
    ]

    const [opened, setOpened] = useState(false);
    const [Id, setId] = useState(0);

    const teachers = [
        { id: 0, name: 'Hannah', text: 'Lalsal wedknf ksdlk lakdmlkmd kndçokd sdkmld lkdm, lorem ipsum kdnkskd dcwdc wedfwed', img: 'About/T.png', role: 'English Teacher' }
    ]

    return (
        <div className="md:px-5 Font2 gap-20 lg:gap-5 lg:px-10 w-full h-full flex justify-center items-center flex-col px-20">
            <section className="w-full sm:mt-5 h-auto gap-10 flex justify-center flex-col items-center">
                <div className="md:flex-col md:gap-5 md:justify-center w-full gap-10 h-auto flex justify-between items-center">
                    <p className="md:w-full sm:text-[23px] md:text-[30px] w-[30%] uppercase text-[1.6vw] md:text-center  text-left">Children must <br className="md:hidden" /> learn from <br className="md:hidden" /> native speaksers!</p>
                    <Image className="w-[17vw] sm:w-[200px] md:w-[300px] h-auto" alt="hero h1 about us" width={500} height={500} src={'/About/h1.svg'} />
                    <p className="md:text-[30px] uppercase sm:text-[13px] sm:text-gray-400 md:w-full w-[30%] text-[1.5vw] md:text-center text-right">The first lesson for children serves as a trial session, and it's completely complimentary!</p>
                </div>
                <div className="flex flex-col w-full justify-center items-center h-auto">
                    <h1 className="uppercase md:text-[13vw] text-[12vw]">Kangaroos</h1>
                    <Image className="w-[65%] sm:w-[75%] sm:-top-[9vw] relative -top-[6vw] rounded-[15px] h-auto" alt="hero about us" width={500} height={500} src={'/About/Hero.png'} />
                </div>
            </section>

            <section className="flex border-t border-b border-[#6A2985] flex-col w-full h-auto">
                <div className="slider-container sm:pb-0 lg:py-5 pt-10">
                    <div className="slider">
                        <div className="slide-track">
                            {facts.map((fact, index) => {
                                return (
                                    <div key={index} className="slide w-[15%] sm:w-max sm:mx-5">
                                        <h1 className="text-[2vw] lg:text-[20px] uppercase">{fact.fact}</h1>
                                    </div>
                                )
                            })}
                            {/* Repeat the slides to create the infinite effect */}
                            {facts.map((fact, index) => {
                                return (
                                    <div key={index} className="slide w-[15%] sm:w-max sm:mx-5">
                                        <h1 className="text-[2vw] lg:text-[20px] uppercase">{fact.fact}</h1>
                                    </div>
                                )
                            })}
                            {/* Repeat the slides to create the infinite effect */}
                            {facts.map((fact, index) => {
                                return (
                                    <div key={index} className="slide w-[15%] sm:w-max sm:mx-5">
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
                            {facts.map((fact, index) => {
                                return (
                                    <div key={index} className="slide w-[15%] sm:w-max sm:mx-5">
                                        <h1 className="text-[2vw] lg:text-[20px] uppercase">{fact.fact}</h1>
                                    </div>
                                )
                            })}
                            {/* Repeat the slides to create the infinite effect */}
                            {facts.map((fact, index) => {
                                return (
                                    <div key={index} className="slide w-[15%] sm:w-max sm:mx-5">
                                        <h1 className="text-[2vw] lg:text-[20px] uppercase">{fact.fact}</h1>
                                    </div>
                                )
                            })}
                            {/* Repeat the slides to create the infinite effect */}
                            {facts.map((fact, index) => {
                                return (
                                    <div key={index} className="slide w-[15%] sm:w-max sm:mx-5">
                                        <h1 className="text-[2vw] lg:text-[20px] uppercase">{fact.fact}</h1>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </section>

            <section className="w-full md:flex-col md:justify-center h-auto flex justify-between items-center">
                <div className="w-[45%] md:w-full h-[38vw] lg:h-auto flex-col lg:gap-3 pb-3 flex justify-between items-start">
                    <h1 className="md:text-[30px] text-[4.5vw] Font1">Sign Up for a free lesson now!</h1>
                    <p className="text-[2vw] md:text-[13px] text-gray-400">start now and see what suits your child the best!</p>
                    <button className="btn-animation md:hidden md:text-[13px] sm:px-0 sm:w-full  sm:text-[13px] lg:py-2 py-3 px-20 text-[1.3vw] text-white rounded-r-[20px] rounded-t-[20px]">Get Started</button>
                </div>
                <div className="w-[50%] md:w-full md:flex md:gap-4 lg:h-auto h-[38vw] rounded-[15px]">
                    <button className="btn-animation hidden md:inline-block w-[20%] items-center text-center justify-center vertical-text text-[4vw] sm:px-0 p-2 text-white rounded-l-[20px]">Get Started</button>
                    <Image className="w-[100%] md:rounded-l-[0px] md:w-[80%] object-cover rounded-[15px] h-full" alt="hero about us" width={500} height={500} src={'/About/h2.svg'} />
                </div>
            </section>

            <section className="flex-col sm:gap-1 lg:gap-10 gap-28 big:gap-40 w-full h-auto flex justify-center items-center">
                <div className="lg:flex-col sm:gap-3 sm:text-left lg:text-center w-full relative flex items-center justify-between gap-10">
                    <h1 className="font-bold Font1 sm:text-[25px] lg:w-full w-[50%] lg:text-[45px] text-[3.5vw]">FAQ</h1>
                    <p className="text-[1.3vw] w-[45%] lg:w-full lg:text-[18px] sm:text-[13px] text-gray-400">When schools and districts have reliable access to substitute teachers and subs have the freedom to choose what and when they teach, more classes are covered and student learning stays on track.</p>
                    <Image src={'/Curve.svg'} alt="curve2" className="w-[10vw] scale-[-1] lg:-rotate-45 lg:w-[90px] sm:hidden lg:relative lg:top-0 lg:left-0 h-auto absolute left-[30%] top-[9vw]" width={400} height={400} />
                </div>
                <div className="w-full pt-5 sm:pt-0 h-auto flex flex-col justify-center items-center">
                    {questions.map((question) => {
                        return (
                            <div key={question.id} onClick={() => { setOpened(!opened); setId(question.id) }} className={`flex sm:py-4 sm:gap-2 cursor-pointer flex-col justify-center gap-5 items-center w-full h-auto py-8 border-b`} style={{ borderColor: question.color }}>
                                <div className="w-full h-auto flex justify-between items-center">
                                    <h1 className="text-[2.5vw] sm:w-[80%] sm:text-[20px] lg:text-[25px]">{question.question}</h1>
                                    <a style={{ background: question.color }} className="rounded-full p-2"><RxArrowTopRight className="text-[3.5vw] sm:text-[20px] lg:text-[28px] text-white" /></a>
                                </div>
                                {opened && Id === question.id ?
                                    <p className="w-full text-left text-[1.3vw] lg:text-[18px] sm:text-[12px]">{question.answer}</p>
                                    : ''}
                            </div>
                        )
                    })}
                </div>
            </section>

            <section className="flex-col gap-10 sm:gap-5 w-full h-auto flex justify-center items-center">
                <h1 className="font-bold Font1 sm:text-[25px] uppercase lg:w-full w-[100%] text-center lg:text-[45px] text-[3.5vw]">Why Choose Us ?</h1>
                <div className="flex justify-between lg:gap-5 lg:flex-col lg:justify-center items-center w-full h-auto">
                    <div className="w-[30%] sm:p-5 lg:w-[100%] text-white bg-[#f55712] flex rounded-[10px] flex-col justify-center items-center gap-5 h-auto p-10">
                        <PiShootingStarFill className="text-[5vw] lg:text-[42px] sm:text-[36px]" />
                        <h1 className="uppercase lg:text-[22px] sm:text-[16px] text-[2vw] text-center">Comprehensive Growth</h1>
                        <p className="text-[1.2vw] lg:text-[18px] sm:text-[13px] w-full text-center">"Comprehensive growth encompasses the holistic development"</p>
                    </div>
                    <div className="w-[30%] lg:gap-3 lg:w-[100%] h-auto justify-center items-center flex flex-col gap-5">
                        <button className="btn-animation py-3 lg:text-[18px] sm:text-[13px] lg:w-full px-20 text-[1.3vw] w-[80%] text-white rounded-t-[20px]">Get Started</button>
                        <div className="text-white sm:p-5 bg-[#fdc110] w-full flex rounded-[10px] flex-col justify-center items-center gap-5 h-auto p-10">
                            <PiShootingStarFill className="text-[5vw] lg:text-[42px] sm:text-[36px]" />
                            <h1 className="uppercase lg:text-[22px] sm:text-[16px] text-[2vw] text-center">Comprehensive Growth</h1>
                            <p className="text-[1.2vw] lg:text-[18px] sm:text-[13px] w-full text-center">"Comprehensive growth encompasses the holistic development"</p>
                        </div>
                    </div>
                    <div className="w-[30%] lg:w-[100%] sm:p-5 text-white bg-[#6A2985] flex rounded-[10px] flex-col justify-center items-center gap-5 h-auto p-10">
                        <PiShootingStarFill className="text-[5vw] lg:text-[42px] sm:text-[36px]" />
                        <h1 className="uppercase lg:text-[22px] sm:text-[16px] text-[2vw] text-center">Comprehensive Growth</h1>
                        <p className="text-[1.2vw] lg:text-[18px] sm:text-[13px] w-full text-center">"Comprehensive growth encompasses the holistic development"</p>
                    </div>
                </div>
            </section>

            <section className="w-full bg-[#eeeded] rounded-[10px] flex justify-center items-center h-auto">
                {teachers.map((teacher, index) => {
                    return (
                        <div key={index} className="w-full md:p-3 md:pt-3 md:flex-col gap-5 p-14 bg-[#eeeded] rounded-[10px] h-auto flex justify-between items-center">
                            <div className="w-[40%] md:w-full md:h-auto h-[30vw] flex justify-between items-center">
                                <Image className="w-full h-auto object-cover rounded-[10px]" alt="teacher" src={`/${teacher.img}`} width={500} height={500} />
                            </div>
                            <div className="w-[55%] md:gap-3 md:w-full md:h-auto h-[30vw] items-start justify-center gap-5 flex flex-col">
                                <h1 className="flex md:text-[20px] md:justify-between md:w-full justify-center items-center gap-5 text-[2vw]"><div className="flex md:text-[30px] text-[2.5vw] justify-center items-center gap-3 yellow-text"><AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar /></div> 5.0</h1>
                                <p className="text-[1.2vw] md:text-[13px] text-gray-400">{teacher.text}</p>
                                <div className="flex flex-col gap-1">
                                    <h1 className="text-[3vw] md:text-[29px] Font1">{teacher.name}</h1>
                                    <span className="text-[1.2vw] md:text-[13px] text-gray-400">{teacher.role}</span>
                                </div>
                                <div className="w-full text-white gap-5 justify-end items-end flex h-suto">
                                    <span className="bg-[#f55712] md:p-3 cursor-pointer rounded-full p-5">
                                        <FaHandPointLeft className="text-[3vw] md:text-[26px]" />
                                    </span>
                                    <span className="rounded-full md:p-3 cursor-pointer yellow p-5">
                                        <FaHandPointRight className="text-[3vw] md:text-[26px]" />
                                    </span>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </section>

        </div>
    )
}
export default AboutUs