import React from "react";
import { ProductType } from "../../../utils/type/type";
import { Checkbox } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Favorite } from "@mui/icons-material";
import { useAppDispatch } from "../../../redux/hooks";
import { useState } from "react";
import {
  addItemInFav,
  removeItemINFav,
} from "../../../redux/slices/ProductDataSlice";

interface Props {
  Card: ProductType;
}

export default function Card({ Card }: Props) {
  console.log("COMPO FAV/CARD rednered");
  const dispatch = useAppDispatch();
  const [isChecked, setisChecked] = useState(Card.inFav);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event);
    setisChecked(!isChecked);

    if (!isChecked) {
      console.log("Ischeck");
      dispatch(addItemInFav({ id: Card.id }));
    } else dispatch(removeItemINFav({ id: Card.id }));
  };

  return (
    <div className="w-[320px] bg-white z-[20] border-green-600 py-[10px] border ">
      <div className="cardFavDropDown w-[90%] items-center m-auto flex gap-[50px]">
        <div>
          <img className="w-[100px] h-[100px]" src={Card.img} alt="" />
        </div>
        <div className="info justify-center flex flex-col gap-[20px] ">
          <h3>{Card.name}</h3>
          {Card.anyOffer ? <p>$ {Card.offerPrice}</p> : <p>$ {Card.price}</p>}
        </div>
      </div>
      <Checkbox
        color="error"
        value="xyz"
        icon={<FavoriteBorderIcon />}
        checkedIcon={<Favorite />}
        checked={isChecked}
        onChange={handleChange}
      />
    </div>
  );
}
