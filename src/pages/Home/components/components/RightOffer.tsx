// import React from "react";

export default function RightOffer() {
  return (
    <div className="rightOffer justify-center items-center gap-[40px] flex flex-col   w-[100%] bg-blue-400 ">
      <h2 className="text-center w-[80%] mx-auto font-lato text-white text-[32px] font-bold leading-50 tracking-wide uppercase">
        Kimonos, Caftans & Pareos
      </h2>
      <h4 className="text-center font-lato text-white text-[28px] font-medium leading-50 tracking-normal">
        Poolside glam included From $4.99
      </h4>
      <div className="flex w-[170px]  bg-blue-700 px-[20px] justify-between items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
        >
          <path
            d="M12.5 2V6"
            stroke="white"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M14.5 4L10.5 4"
            stroke="white"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M4.5 10V16.7639C4.5 17.5215 4.928 18.214 5.60557 18.5528L11.6056 21.5528C12.1686 21.8343 12.8314 21.8343 13.3944 21.5528L19.3944 18.5528C20.072 18.214 20.5 17.5215 20.5 16.7639V10"
            stroke="white"
          />
          <path
            d="M18.5 5L20.5 6L12.5 10L4.5 6L6.5 5"
            stroke="white"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M20.5 6L12.5 10L14.5 13L22.5 9L20.5 6Z"
            stroke="white"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M4.5 6L12.5 10L10.5 13L2.5 9L4.5 6Z"
            stroke="white"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <button className="flex text-white uppercase h-[50px] font-lato justify-center items-center  rounded-1 bg-button-default ">
          Shop Now
        </button>
      </div>
    </div>
  );
}
