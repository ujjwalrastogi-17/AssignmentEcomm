// import React from "react";

export default function SearchBanner() {
  return (
    <div className="bg-footsearch hidden lg:flex w-[600px] absolute sm:left-[35%] md:left-[20%] lg:left-[33%] top-[-40%]  flex-col justify-center items-center gap-[30px] h-[220px]">
      <h1 className="text-white text-right font-lato text-5xl font-bold leading-5">
        Luminae Store
      </h1>
      <p className="text-white text-center font-lato text-base font-normal leading-5">
        Register your email not to miss the last minutes off+ Free delivery
      </p>
      <div className="search items-center gap-[5px] p-[5px] rounded-[5px] flex bg-white">
        <input type="text" />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <path
            d="M12.9262 2L3.07388 2C1.55947 2 0.770188 3.75699 1.79738 4.84156L3.85704 7.01627C4.15326 7.32903 4.31774 7.73905 4.31774 8.16469V12.3035C4.31774 13.9157 6.41068 14.6156 7.42619 13.343L14.2974 4.73263C15.1849 3.62047 14.3718 2 12.9262 2Z"
            stroke="#434343"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}
