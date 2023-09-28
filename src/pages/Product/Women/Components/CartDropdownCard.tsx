// import React from "react";
import { ProductType } from "../../../../utils/type/type";
import { useAppDispatch } from "../../../../redux/hooks";
import { removeItemFromCart } from "../../../../redux/slices/CartSlice";
import { unmarkInCart } from "../../../../redux/slices/ProductDataSlice";
import { useAppSelector } from "../../../../redux/hooks";
import { incItems } from "../../../../redux/slices/CartSlice";
// import { cartArray } from "../../../../utils/dummyData/dummyData";
import Trash from "../../../../assets/svgs/Trash";

interface CardProps {
  Card: ProductType;
  // quantity:number
}

export default function CartDropdownCard({ Card }: CardProps) {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    // console.log("REMOVED");
    dispatch(removeItemFromCart({ id: Card.id }));
    dispatch(unmarkInCart({ id: Card.id }));
  };

  const newArr = useAppSelector((state) => state.CartArray.CartArray);

  const index = newArr.findIndex((item) => item.id === Card.id);

  const quantity = useAppSelector(
    (state) => state.CartArray.CartArray[index].quantity
  );

  return (
    <div className="flex justify-between border-blue-700 border-3 w-[100%] m-auto">
      <div>
        <img className="w-[80px] h-[80px]" src={Card.img} alt="" />
      </div>
      <div className="flex flex-col justify-center gap-[20px] font-lato text-white text-[20px]">
        <p className="font-lato text-white text-[20px]">$ {Card.offerPrice}</p>
        <p className=" text-green-400">Total : ${quantity * Card.price}</p>
      </div>

      <div className="flex flex-col items-end gap-[20px]">
        <div className="text-white flex w-[70px] items-center gap-[10px] justify-between ">
          <button
            className=" h-[20px] w-[20px] border-white"
            onClick={() => {
              console.log("cicked "), dispatch(incItems({ id: Card.id }));
            }}
          >
            +
          </button>
          <p className="h-[20px] w-[20px] text-center text-yellow-400">
            {quantity}
          </p>
          <button className=" h-[20px] w-[20px] border-white">-</button>
        </div>

        <button className="text-white" onClick={handleClick}>
          <Trash />
        </button>
      </div>
    </div>
  );
}
