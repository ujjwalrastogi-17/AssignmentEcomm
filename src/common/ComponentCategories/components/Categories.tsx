// import React from "react";
import DropDown from "./DropDown";
import { NavLink } from "react-router-dom";

export default function Categories() {
  return (
    <div className="flex justify-between  w-[100%]">
      <div className="group  text-[10px] xl:text-[15px]  dropdown  relative   cursor-pointer font-lato text-base uppercase">
        <NavLink className="" to="/women">Women</NavLink>
        <div className="absolute z-[1000] top-[30px] left-[0px]">
          <DropDown />
        </div>
      </div>

      <div className="group  text-[10px] xl:text-[15px]  dropdown  relative   cursor-pointer font-lato text-base uppercase">
        <a className="">Male</a>
        <div className="absolute top-[30px]  z-[1000]  left-[0px]">
          <DropDown />
        </div>
      </div>

      <div className="group  text-[10px] xl:text-[15px]  dropdown  relative   cursor-pointer font-lato text-base uppercase">
        <a className="">Mother-Child</a>
        <div className="absolute top-[30px]  z-[1000]  left-[0px]">
          <DropDown />
        </div>
      </div>

      <div className="group  text-[10px] xl:text-[15px]  dropdown  relative   cursor-pointer font-lato text-base uppercase">
        <a className="">Home & Furniture</a>
        <div className="absolute top-[30px]  z-[1000]  left-[0px]">
          <DropDown />
        </div>
      </div>

      {/* <div className="group  text-[10px] xl:text-[15px]  dropdown  relative    cursor-pointer font-lato text-base uppercase">
        <div className="absolute top-[30px]  z-[1000]  left-[0px]">
          <DropDown />
        </div>
      </div> */}

      <div className="group  text-[10px] xl:text-[15px]  dropdown  relative    cursor-pointer font-lato text-base uppercase">
        <a className="">Mother-Child</a>
        <div className="absolute top-[30px]  z-[1000]  left-[0px]">
          <DropDown />
        </div>
      </div>

      <div className="group  text-[10px] xl:text-[15px]  dropdown  relative    cursor-pointer font-lato text-base uppercase">
        <a className="">Cosmetics</a>
        <div className="absolute z-[1000] right-[0px]">
          <DropDown />
        </div>
      </div>

      <div className="group  text-[10px] xl:text-[15px]  dropdown  relative   cursor-pointer font-lato text-base uppercase">
        <a className="">Shoe & Bag</a>
        <div className="absolute z-[1000] right-[0px]">
          <DropDown />
        </div>
      </div>

      <div className="group  text-[10px] xl:text-[15px]  dropdown  relative   cursor-pointer font-lato text-base uppercase">
        <a className="">Electronic</a>
        <div className="absolute  z-[1000] right-[0px]">
          <DropDown />
        </div>
      </div>

      <div className="group  text-[10px] xl:text-[15px]  dropdown  relative    cursor-pointer font-lato text-base uppercase">
        <a className="">Sport & Outdoor</a>
        <div className="absolute z-[1000] right-[0px]">
          <DropDown />
        </div>
      </div>

      <div className="group  text-[10px] xl:text-[15px]  dropdown  relative  cursor-pointer font-lato text-base uppercase">
        <a className=""> Best seller</a>
        <div className="absolute z-[1000] right-0">
          <DropDown />
        </div>
      </div>
    </div>
  );
}
