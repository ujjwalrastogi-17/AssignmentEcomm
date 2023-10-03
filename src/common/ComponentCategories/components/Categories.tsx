// import React from "react";
import DropDown from "./DropDown";
import { NavLink } from "react-router-dom";
import { categ } from "../../../pages/Home/components/SideNav/SideNav";

export default function Categories() {
  const halfLength = Math.ceil(categ.length / 2); // Calculate the index to split the array in half

  const firstHalf = categ.slice(0, halfLength); // Get the first half of the array
  const secondHalf = categ.slice(halfLength);
  return (
    <div className="categs flex  justify-between  w-[100%]">
      {firstHalf.map((item) => {
        return (
          <div className="group left text-[10px] xl:text-[15px]  dropdown  relative   cursor-pointer font-lato text-base uppercase">
            <NavLink className="" to="/women">
              <p className="text-[10px] hover:text-yellow-500 lg:text-[15px]">{item}</p>
            </NavLink>
            <div className="absolute z-[1000] top-[30px] left-[0px]">
              <DropDown />
            </div>
          </div>
        );
      })}
      {secondHalf.map((item) => {
        return (
          <div className="group right text-[10px] xl:text-[15px]  dropdown  relative   cursor-pointer font-lato text-base uppercase">
            <NavLink className="" to="/women">
              <p className="text-[10px] hover:text-yellow-500 lg:text-[15px]">

              {item}
              </p>
            </NavLink>
            {/* <div className="absolute w-[800px] border-pink-400 border-2 z-[1000] top-[30px] right-[0px]">
              <DropDown />
            </div> */}
            <div className="absolute w-[900px] z-[1000] top-[30px] right-[-50px] xl:right-[100px]">
              <DropDown />
            </div>
          </div>
        );
      })}
    </div>
  );
}
