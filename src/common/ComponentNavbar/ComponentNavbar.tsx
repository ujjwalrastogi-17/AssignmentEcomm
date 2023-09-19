import React from "react";
import Logo from "./components/Logo";
import SearchBar from "./components/SearchBar";
import Menu from "./components/Menu";
import Icons from "./components/Icons";
import BlackBag from "../../assets/svgs/BlackBag";
import MenuIcon from "../../assets/svgs/MenuIcon";

export default function ComponentNavbar() {
  return (
    <div className="flex w-[90%] py-[10px]  flex-col xl:flex-row mx-auto items-center h-[100px] justify-between">
      <div className="flex xl:w-[40%] w-[100%] justify-between items-center">
        <MenuIcon/>
        <Logo />
        <SearchBar />
        <BlackBag/>
      </div>
      <div className=" xl:w-[50%] w-[100%] flex justify-between xl:justify-end items-center">
        <Menu />
        <Icons /> 
      </div>
    </div>
  );
}