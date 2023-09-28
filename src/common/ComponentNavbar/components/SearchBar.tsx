// import React from "react";

export default function SearchBar() {
  return (
    <div className="searchBar md:flex hidden h-[40px] items-center  border-2 px-[7px] gap-[20px] justify-between w-[100%] sm:w-[377px]">
      <div className="search w-[95%] justify-between flex">
        <input className="w-[50%]" type="text" placeholder="Search Products" />
        <label className="flex  w-[40%] items-center justify-between" htmlFor="dropdown">
          All categories
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
          >
            <path
              d="M7.5 12.5L12.5 17.5L17.5 12.5"
              stroke="#262626"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </label>
      </div>
      <svg 
        xmlns="http://www.w3.org/2000/svg"
        width="21"
        height="20"
        viewBox="0 0 21 20"
        fill="none"
      >
        <g clip-path="url(#clip0_15_18928)">
          <path
            d="M19.6139 18.7719L17.8596 17.0175M2.07007 9.56136C2.07007 4.95899 5.80103 1.22803 10.4034 1.22803C15.0058 1.22803 18.7367 4.95899 18.7367 9.56136C18.7367 14.1637 15.0058 17.8947 10.4034 17.8947C5.80103 17.8947 2.07007 14.1637 2.07007 9.56136Z"
            stroke="#262626"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
            />
        </g>
        <defs>
          <clipPath id="clip0_15_18928">
            <rect
              width="20"
              height="20"
              fill="white"
              transform="translate(0.5)"
            />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}
