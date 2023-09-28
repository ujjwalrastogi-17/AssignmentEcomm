// import React from "react";
import Timer from "../../../TopBanner/Timer";
import {PhotoBag } from "../../../../../../assets/images";

interface CardProps {
  title: string;
  desc: string;
  rating: number;
  offerPrice: string;
  price: string;
}

export default function Card({ title, desc, offerPrice, price }: CardProps) {
  return (
    <div className="flex gap-[10px] py-[20px] flex-col justify-center items-center min-w-[300px]  sm:min-w-[400px] border">
      <div className="flex flex-col sm:flex-row md:flex-col items-center gap-[15px] justify-center">
        <h5 className="text-gray-600 text-center font-lato font-extrabold text-xs leading-5 tracking-wide uppercase">
          DEAL OF THE DAY
        </h5>
        <Timer />
      </div>
      <img className="my-[15px]" src={PhotoBag} />
      <p className="font-lato text-[20px] font-bold">{title}</p>
      <p className="font-lato text-[16px] font-normal">{desc}</p>
      <div className="rating flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="13"
          height="12"
          viewBox="0 0 13 12"
          fill="none"
        >
          <path
            d="M5.51641 1.63571C5.91875 0.788099 7.08125 0.788098 7.48359 1.6357L8.17895 3.10059C8.33872 3.43717 8.64755 3.67047 9.00481 3.72444L10.5597 3.95935C11.4593 4.09527 11.8186 5.24477 11.1676 5.90454L10.0425 7.0448C9.78394 7.30679 9.66598 7.68427 9.72701 8.05421L9.99261 9.66427C10.1463 10.5959 9.20581 11.3063 8.40112 10.8665L7.01041 10.1063C6.69087 9.93164 6.30913 9.93164 5.98959 10.1063L4.59888 10.8665C3.7942 11.3063 2.85371 10.5959 3.00739 9.66428L3.27299 8.05421C3.33402 7.68427 3.21606 7.30679 2.95754 7.0448L1.83244 5.90454C1.18143 5.24477 1.54066 4.09527 2.44033 3.95935L3.99519 3.72444C4.35244 3.67047 4.66128 3.43717 4.82105 3.10059L5.51641 1.63571Z"
            fill="#FFC000"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="13"
          height="12"
          viewBox="0 0 13 12"
          fill="none"
        >
          <path
            d="M5.51641 1.63571C5.91875 0.788099 7.08125 0.788098 7.48359 1.6357L8.17895 3.10059C8.33872 3.43717 8.64755 3.67047 9.00481 3.72444L10.5597 3.95935C11.4593 4.09527 11.8186 5.24477 11.1676 5.90454L10.0425 7.0448C9.78394 7.30679 9.66598 7.68427 9.72701 8.05421L9.99261 9.66427C10.1463 10.5959 9.20581 11.3063 8.40112 10.8665L7.01041 10.1063C6.69087 9.93164 6.30913 9.93164 5.98959 10.1063L4.59888 10.8665C3.7942 11.3063 2.85371 10.5959 3.00739 9.66428L3.27299 8.05421C3.33402 7.68427 3.21606 7.30679 2.95754 7.0448L1.83244 5.90454C1.18143 5.24477 1.54066 4.09527 2.44033 3.95935L3.99519 3.72444C4.35244 3.67047 4.66128 3.43717 4.82105 3.10059L5.51641 1.63571Z"
            fill="#FFC000"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="13"
          height="12"
          viewBox="0 0 13 12"
          fill="none"
        >
          <path
            d="M5.51641 1.63571C5.91875 0.788099 7.08125 0.788098 7.48359 1.6357L8.17895 3.10059C8.33872 3.43717 8.64755 3.67047 9.00481 3.72444L10.5597 3.95935C11.4593 4.09527 11.8186 5.24477 11.1676 5.90454L10.0425 7.0448C9.78394 7.30679 9.66598 7.68427 9.72701 8.05421L9.99261 9.66427C10.1463 10.5959 9.20581 11.3063 8.40112 10.8665L7.01041 10.1063C6.69087 9.93164 6.30913 9.93164 5.98959 10.1063L4.59888 10.8665C3.7942 11.3063 2.85371 10.5959 3.00739 9.66428L3.27299 8.05421C3.33402 7.68427 3.21606 7.30679 2.95754 7.0448L1.83244 5.90454C1.18143 5.24477 1.54066 4.09527 2.44033 3.95935L3.99519 3.72444C4.35244 3.67047 4.66128 3.43717 4.82105 3.10059L5.51641 1.63571Z"
            fill="#FFC000"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="13"
          height="12"
          viewBox="0 0 13 12"
          fill="none"
        >
          <path
            d="M5.51641 1.63571C5.91875 0.788099 7.08125 0.788098 7.48359 1.6357L8.17895 3.10059C8.33872 3.43717 8.64755 3.67047 9.00481 3.72444L10.5597 3.95935C11.4593 4.09527 11.8186 5.24477 11.1676 5.90454L10.0425 7.0448C9.78394 7.30679 9.66598 7.68427 9.72701 8.05421L9.99261 9.66427C10.1463 10.5959 9.20581 11.3063 8.40112 10.8665L7.01041 10.1063C6.69087 9.93164 6.30913 9.93164 5.98959 10.1063L4.59888 10.8665C3.7942 11.3063 2.85371 10.5959 3.00739 9.66428L3.27299 8.05421C3.33402 7.68427 3.21606 7.30679 2.95754 7.0448L1.83244 5.90454C1.18143 5.24477 1.54066 4.09527 2.44033 3.95935L3.99519 3.72444C4.35244 3.67047 4.66128 3.43717 4.82105 3.10059L5.51641 1.63571Z"
            fill="#FFC000"
          />
        </svg>
        <p className="text-gray-500 text-center font-lato text-xs font-normal leading-6">
          (54)
        </p>
      </div>
      <div className="flex gap-[10px]">
        <p className="text-custom-font text-14 font-bold leading-20 text-red-600">
          {offerPrice}
        </p>
        <p className="text-gray-500 font-lato text-xs font-normal line-through leading-6 ">
          {price}
        </p>
        <p className="bg-red-700 text-white font-inter text-[15px] px-[5px]  font-normal leading-normal">
          -40%
        </p>
      </div>
    </div>
  );
}
