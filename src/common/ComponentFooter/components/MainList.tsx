// import React from "react";
import SearchBanner from "./SearchBanner";

export default function MainList() {
  return (
    <div className="bg-footer relative h-[350px] sm:mt-[150px] flex items-center w-[100%]">
      <SearchBanner />
      <div className="w-[80%] flex-wrap gap-[50px] m-auto flex justify-between items-center">
        <div className="flex flex-col gap-[20px]">
          <h2 className="text-gray-700 font-lato text-base font-semibold leading-5">
            Company
          </h2>
          <ul className="flex flex-col gap-[10px]">
            <li className="text-gray-500 font-lato text-base font-normal leading-5">
              About Us
            </li>
            <li className="text-gray-500 font-lato text-base font-normal leading-5">
              Our Store
            </li>
            <li className="text-gray-500 font-lato text-base font-normal leading-5">
              Contact us
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-[20px]">
          <h2 className="text-gray-700 font-lato text-base font-semibold leading-5">
            Company
          </h2>
          <ul className="flex flex-col gap-[10px]">
            <li className="text-gray-500 font-lato text-base font-normal leading-5">
              About Us
            </li>
            <li className="text-gray-500 font-lato text-base font-normal leading-5">
              Our Store
            </li>
            <li className="text-gray-500 font-lato text-base font-normal leading-5">
              Contact us
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-[20px]">
          <h2 className="text-gray-700 font-lato text-base font-semibold leading-5">
            Company
          </h2>
          <ul className="flex flex-col gap-[10px]">
            <li className="text-gray-500 font-lato text-base font-normal leading-5">
              About Us
            </li>
            <li className="text-gray-500 font-lato text-base font-normal leading-5">
              Our Store
            </li>
            <li className="text-gray-500 font-lato text-base font-normal leading-5">
              Contact us
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-[20px]">
          <h2 className="text-gray-700 font-lato text-base font-semibold leading-5">
            Company
          </h2>
          <ul className="flex flex-col gap-[10px]">
            <li className="text-gray-500 font-lato text-base font-normal leading-5">
              About Us
            </li>
            <li className="text-gray-500 font-lato text-base font-normal leading-5">
              Our Store
            </li>
            <li className="text-gray-500 font-lato text-base font-normal leading-5">
              Contact us
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
