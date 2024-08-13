import React from "react";
import Image from "next/image";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { MdOutlineLocationOn } from "react-icons/md";
import { MdOutlineAttachEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const ContactUs = () => {
    const team = [
        { id: 0, name: 'Arthur', role: 'CTO', img: 'Team/Fedya.svg' },
        { id: 0, name: 'Maggie', role: 'Eng teacher', img: 'Team/Maggie.svg' },
        { id: 0, name: 'Alejandro', role: 'COO', img: 'Team/Alejandro.svg' },
        { id: 0, name: 'Maggie', role: 'Eng teacher', img: 'Team/Maggie.svg' },
        { id: 0, name: 'Alejandro', role: 'COO', img: 'Team/Alejandro.svg' }
    ]

    return (
        <div className="md:px-5 Font2 gap-20 lg:gap-5 lg:px-10 w-full h-full flex justify-center items-center flex-col px-20">
            <section className="w-full flex-col gap-20 lg:gap-10 h-auto flex justify-center items-center">
                <h1 className="w-[80%] sm:w-full mt-5 sm:mt-0 sm:text-[23px] lg:text-[30px] text-center text-[3vw]">
                    We've got an entire team dedicated to supporting you and your child
                </h1>
                <div className="w-full h-auto justify-center lg:justify-start items-center flex lg:overflow-x-scroll">
                    <div className="w-auto h-auto justify-center items-center flex">
                        {team.map((member, index) => {
                            return (
                                <div key={index} className="lg:w-[180px] relative p-3 justify-center items-center rounded-[15px] w-[19vw] h-auto">
                                    <Image className="w-full rounded-[15px]" src={member.img} alt={member.name} width={300} height={130} />
                                    <div className="bg-white sm:gap-0 text-left flex justify-start flex-col items-start gap-1 w-[80%] p-2 left-[10%] rounded-[10px] absolute bottom-[8%]">
                                        <h1 className="text-[1vw] lg:text-[10px] text-center">{member.name}</h1>
                                        <p className="text-[.7vw] lg:text-[7px] text-center">{member.role}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className="w-full pb-5 h-auto lg:gap-7 lg:flex-col flex justify-between items-center">
                    <div className="w-[45%] lg:gap-7 lg:w-full flex flex-col gap-10 h-auto">
                        <div className="flex w-full flex-col gap-3">
                            <h2 className="text-[1.2vw] lg:text-[16px]">Call us</h2>
                            <p className="text-[.9vw] lg:text-[12px] font-extralight text-gray-500">Call our team anyday!</p>
                            <span className="flex lg:text-[14px] text-[1.2vw] items-center justify-start gap-2"><MdOutlinePhoneInTalk className="text-[1.89vw] sm:text-[20px] lg:text-[23px]" />+234-123-2321</span>
                        </div>
                        <div className="flex w-full flex-col gap-3">
                            <h2 className="text-[1.2vw] lg:text-[16px]">Chat with us</h2>
                            <p className="text-[.9vw] lg:text-[12px] font-extralight text-gray-500">Speak to our friendly team now!</p>
                            <span className="flex lg:text-[14px] text-[1.2vw] items-center justify-start gap-2"><FaWhatsapp className="text-[1.89vw] sm:text-[20px] lg:text-[23px]" />Start a chat</span>
                            <span className="flex lg:text-[14px] text-[1.2vw] items-center justify-start gap-2"><MdOutlineAttachEmail className="text-[1.89vw] sm:text-[20px] lg:text-[23px]" />Shoot an email</span>
                            <span className="flex lg:text-[14px] text-[1.2vw] items-center justify-start gap-2"><FaInstagram className="text-[1.89vw] sm:text-[20px] lg:text-[23px]" />Message us on Instagram</span>
                        </div>
                        <div className="flex w-full flex-col gap-3">
                            <h2 className="text-[1.2vw] lg:text-[16px]">Visit us</h2>
                            <p className="text-[.9vw] lg:text-[12px] font-extralight text-gray-500">Chat to us in person!</p>
                            <span className="flex lg:text-[14px] text-[1.2vw] items-center justify-start gap-2"><MdOutlineLocationOn className="text-[1.89vw] sm:text-[20px] lg:text-[23px]" />100 Smith Street, Collingwood VIC</span>
                        </div>
                    </div>
                    <div className="w-[45%] lg:gap-3 lg:w-full h-suto flex flex-col gap-5">
                        <label className="flex lg:gap-1 lg:text-[14px] text-[1vw] text-gray-600 flex-col gap-2">
                            Full name
                            <input className="w-full border outline-none big:p-7 p-3 rounded-[15px]" type="text" placeholder="Lionel Messi"/>
                        </label>
                        <label className="flex lg:gap-1 lg:text-[14px] text-[1vw] text-gray-600 flex-col gap-2">
                            Email
                            <input className="w-full border outline-none big:p-7 p-3 rounded-[15px]" type="email" placeholder="you@gmail.com"/>
                        </label>
                        <label className="flex lg:gap-1 lg:text-[14px] text-[1vw] text-gray-600 flex-col gap-2">
                            Message
                            <textarea className="w-full lg:h-[200px] h-[11vw] big:p-7 resize-none border outline-none p-3 rounded-[15px]" placeholder="Leave us a message here..."></textarea>
                        </label>
                        <div className="h-auto w-full flex justify-center items-center">
                            <button className="lg:text-[14px] w-[99%] button3d text-white bg-[#2CB5E8] text-[1vw] rounded-full p-3">Send message</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default ContactUs