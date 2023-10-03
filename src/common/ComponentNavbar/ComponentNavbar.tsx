import Logo from "./components/Logo";
import SearchBar from "./components/SearchBar";
import Menu from "./components/Menu";
import Icons from "./components/Icons";
import BlackBag from "../../assets/svgs/BlackBag";
import MenuIcon from "../../assets/svgs/MenuIcon";
import { useAppDispatch } from "../../redux/hooks";
import { setShowSideNav } from "../../redux/slices/SideNavMenuSlice";

export default function ComponentNavbar() {
  const dispatch = useAppDispatch();
  return (
    <div className="flex w-[90%] py-[10px]  flex-col xl:flex-row mx-auto items-center h-[100px] justify-between">
      <div className="flex xl:w-[60%] 2xl:w-[50%] gap-[10px] w-[100%] justify-between items-center">
        <div className="block xl:hidden"
          onClick={() => {
            dispatch(setShowSideNav(true));
          }}
        >
          <MenuIcon />
        </div>
        <Logo />
        <SearchBar />
        <BlackBag />
      </div>
      <div className=" xl:w-[50%] w-[100%] flex justify-between xl:justify-end items-center">
        <Menu />
        <Icons />
      </div>
    </div>
  );
}
