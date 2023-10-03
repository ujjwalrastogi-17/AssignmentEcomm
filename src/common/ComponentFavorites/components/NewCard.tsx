import React from "react";
import { ProductType } from "../../../utils/type/type";
import { Checkbox } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Favorite } from "@mui/icons-material";
import {
  addItemInFav,
  removeItemINFav,
} from "../../../redux/slices/ProductDataSlice";
import { useAppDispatch } from "../../../redux/hooks";
import { useState } from "react";

interface Props {
  Card: ProductType;
}

export default function NewCard({ Card }: Props) {
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
    <div className="w-[300px] bg-white items-center justify-center mx-auto z-[100] flex gap-[50px] ">
      <div>
        <img className="w-[130px] h-[100px]" src={Card.img} alt="" />
      </div>
      <div className="w-[90%] flex justify-between">
        <div className="flex flex-col">
          <p>{Card.name}</p>
          <p>$ {Card.price}</p>
        </div>
        <Checkbox
          color="error"
          value="xyz"
          icon={<FavoriteBorderIcon />}
          checkedIcon={<Favorite />}
          checked={Card.inFav}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}
