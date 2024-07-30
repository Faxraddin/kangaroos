'use client';

// import { Reveal } from "@/components/Reveal";
import React,{useEffect, useState} from "react";

const Layout = ({ children }) => {
    const [showReveal, setShowReveal] = useState(false);
    const [childrenVisible, setChildrenVisible] = useState(true);

    // useEffect(() => {
    //     const hasVisitedBefore = localStorage.getItem('hasVisitedBefore');

    //     if (!hasVisitedBefore) {
    //         setShowReveal(true);
    //         localStorage.setItem('hasVisitedBefore', 'true');
    //         setTimeout(() => {
    //             setChildrenVisible(true);
    //         }, 2400); 
    //     } else {
    //         setChildrenVisible(true); 
    //     }
    // }, []);

    return (
            <div className="w-full h-auto overflow-hidden">
                {/* {showReveal && <Reveal />} */}
                {/* <Reveal/> */}
                <div className={`transition-opacity duration-200 ${childrenVisible ? 'opacity-100' : 'opacity-0 delay-2400'}`}>
                    {children}
                </div>
            </div>
    );
};

export default Layout;