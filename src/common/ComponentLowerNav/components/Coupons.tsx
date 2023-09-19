import React from "react";
import { MenCosmetic } from "../../../assets/images";

export default function Coupons() {
  return (
    <div className="coupons w-[25%] invisible xl:visible flex justify-between items-center">
      <img className="w-[80px] h-[80px]" src={MenCosmetic} alt="" />
      <div className="flex flex-col justify-start">
        <h3 className="text-white font-lato text-xs font-bold leading-6">
          Weekly Men's Toiletries Coupons.
        </h3>
        <p className="text-gray-400 font-lato text-xs font-normal leading-6">
          We extend exclusive discounts to our male clientele
        </p>
      </div>
    </div>
  );
}
