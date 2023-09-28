// import React from "react";

import { TrendingCardProps } from "../../../utils/DummyData";

export default function Card({ heading, desc, color, img }: TrendingCardProps) {
  return (
    <div className={`${color} h-[300px]     lg:h-[440px]  md:w-[50%] flex justify-between`}>
      <div className="flex justify-center px-[20px] w-[52%] gap-[20px] sm:gap-[30px] flex-col">
        <h2 className="text-white w-[80%] font-lato text-2xl lg:text-4xl font-extrabold leading-6 lg:leading-8">
          {heading}
        </h2>
        <h4 className="text-white w-[80%] font-lato text-xl lg:text-3xl font-normal leading-6 lg:leading-9">
          {desc}
        </h4>
        <a
          className="text-white w-[80%] font-lato text-md  lg:text-lg font-normal leading-5 lg:leading-9 underline"
          href=""
        >
          Explore all category
        </a>
      </div>
      <div className="w-[48%]">
        <img className="w-[100%] h-[100%]" src={img} alt="" />
      </div>
    </div>
  );
}
