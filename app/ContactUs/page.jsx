import React from "react";
import Image from "next/image";

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
                                    <Image className="w-[] rounded-[15px]" src={member.img} alt={member.name} width={300} height={130} />
                                    <div className="bg-white sm:gap-0 text-left flex justify-start flex-col items-start gap-1 w-[80%] p-2 left-[10%] rounded-[10px] absolute bottom-[8%]">
                                        <h1 className="text-[1vw] lg:text-[10px] text-center">{member.name}</h1>
                                        <p className="text-[.7vw] lg:text-[7px] text-center">{member.role}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
        </div>
    )
}
export default ContactUs