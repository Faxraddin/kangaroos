"use client";

import React, { useRef, useEffect } from "react";
import { IoCheckmarkOutline } from "react-icons/io5";

const Price = () => {
  const scrollRef = useRef(null);

  const prices = [
    { id: 0, cost: "$7", duration: "6 months", color: "#6A2985" },
    { id: 2, cost: "$7", duration: "3 months", color: "#f55712" },
    { id: 3, cost: "$7", duration: "1 month", color: "#fdc110" },
    { id: 4, cost: "$7", duration: "2 months", color: "#2CB5E9" },
    { id: 5, cost: "$7", duration: "12 months", color: "#FE2068" },
  ];

  useEffect(() => {
    const container = scrollRef.current;
    if (container) {
      container.scrollLeft =
        (container.scrollWidth - container.clientWidth) / 2;
    }
  }, []);

  return (
    <div className="Font2 gap-20 lg:gap-5 w-full h-full flex justify-center items-center flex-col px-0">
      <section className="w-full sm:mt-5 sm:gap-5 h-auto gap-10 flex justify-center flex-col items-center">
        <h1 className="w-full sm:text-[23px] lg:text-[30px] text-center text-[3vw]">
          Best Prices For You!
        </h1>
        <div
          ref={scrollRef}
          className="w-full flex justify-start items-start overflow-x-scroll"
        >
          <div className="w-auto h-auto mx-5 sm:gap-3 lg:gap-5 flex gap-5 justify-center items-center">
            {prices.map((price, index) => (
              <div
                className="rounded-[20px] sm:w-[250px] lg:p-5 lg:w-[300px] border bg-white p-10 flex flex-col gap-3 justify-center items-center w-[28vw] h-auto scroll-snap-center"
                key={index}
                style={{ borderColor: price.color }}
              >
                <h1 className="text-[2vw] lg:text-[20px] font-bold">
                  {price.duration}
                </h1>
                <div className="w-full sm:gap-1 bg-gray-200/30 justify-center items-center sm:rounded-[10px] flex h-auto rounded-[20px] p-3 flex-col gap-3">
                  <h3 className="text-[1vw] lg:text-[13px] text-gray-500">
                    from
                  </h3>
                  <span className="text-[1.2vw] lg:text-[18px] font-semibold">
                    {price.cost}
                  </span>
                  <h3
                    style={{ color: price.color }}
                    className="text-[1vw] lg:text-[13px]"
                  >
                    per lesson
                  </h3>
                </div>
                <div className="w-full sm:gap-1 justify-start flex flex-col gap-3 items-start">
                  <h2 className="flex text-[1.2vw] lg:text-[13px] justify-center items-center gap-3">
                    <IoCheckmarkOutline
                      style={{ color: price.color }}
                      className="text-[2.5vw] lg:text-[23px]"
                    />{" "}
                    3 times a week
                  </h2>
                  <h2 className="flex text-[1.2vw] lg:text-[13px] justify-center items-center gap-3">
                    <IoCheckmarkOutline
                      style={{ color: price.color }}
                      className="text-[2.5vw] lg:text-[23px]"
                    />{" "}
                    can pay part by part
                  </h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Price;
