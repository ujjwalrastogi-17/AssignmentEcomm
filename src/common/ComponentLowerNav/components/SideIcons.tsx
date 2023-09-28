import React from "react";
import SignIn from "../../../assets/svgs/SignIn";
import FavIcon from "../../../assets/svgs/FavIcon";
import Bag from "../../../assets/svgs/Bag";
import Item from "./Item";
import Favorites from "./Favorites";
import CartItems from "./CartItems";

interface Item {
  icon: React.ReactNode; // This can be any valid JSX element
  text: string;
  extraItem: boolean;
  item?: React.ReactNode; // Optional JSX element
}

const itemArr: Item[] = [
  {
    icon: <SignIn />,
    text: "SignIn",
    extraItem: false,
  },
  {
    icon: <FavIcon />,
    text: "Favourite",
    extraItem: true,
    item: <Favorites />,
  },
  {
    icon: <Bag />,
    text: "Bag",
    extraItem: true,
    item:<CartItems/>
  },
];

export default function SideIcons() {
  return (
    //  <div>hello</div>
    <div className="flex relative justify-between w-[25%]">
      {itemArr.map((item) => {
        return item.extraItem ? (
          <div className="group  relative dropdown  px-4  cursor-pointer font-bold text-base tracking-wide">
            <div className="flex w-[70px] justify-between">
              <p>{item.icon}</p>
              <p className="text-white font-lato text-base font-normal leading-5">
                {item.text}
              </p>
            </div>
            <div className="group-hover:block z-[100] dropdown-menu absolute hidden h-auto">
              <ul className="top-0">
                {item.item}
              </ul>
            </div>
          </div>
        ) : (
          <Item icon={item.icon} text={item.text} />
        );
      })}
    </div>
  );
}
