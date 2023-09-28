// import React from "react";
import { MustHave1 } from "../../../../../assets/images";
import { MustCardTab } from "../../../../../assets/images";
import "./Card.css";

export default function Card() {
  return (
    <div className=" shadow-none sm:w-[100%] lg:h-[550px] lg:w-[570px] rounded-[20px]">
      <img className="h-[350px] shadow-none sm:h-[450px] block sm:hidden lg:block w-[570px] lg:w-[570px] rounded-t-[20px]" src={ MustHave1} alt="" />
      <img className="w-[100%] shadow-none hidden sm:block lg:hidden rounded-t-[20px]" src={MustCardTab} alt="" />
      {/* <div className={`bg-musthvbig h-[400px] w-[400px]`}></div> */}
      <div className="flex bg-black rounded-b-[20px] justify-between  items-center h-[100px] p-[20px]">
        <div className="flex flex-col gap-[10px]">
          <p className="text-white font-lato text-base font-bold leading-6">
            Cool & Sexy Calvin Klein
          </p>
          <p className="text-gray-400 font-lato text-base font-normal leading-5">
            Dotted dress-Casual
          </p>
        </div>
        <button className="flex border-white w-[150px] rounded-[20px]  border-2 justify-center items-center gap-[10px] h-[50px] rounded-3">
          <p className="text-white font-lato text-base font-bold leading-5">
            $89
          </p>
          <p className="text-white text-right font-lato text-base font-semibold leading-5">
            Shop Now
          </p>
        </button>
      </div>
    </div>
  );
}
