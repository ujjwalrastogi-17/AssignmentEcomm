// import React from "react";
import { ProductType } from "../../../../utils/type/type";
import { useAppDispatch } from "../../../../redux/hooks";
import { removeItemFromCart } from "../../../../redux/slices/CartSlice";
import { unmarkInCart } from "../../../../redux/slices/ProductDataSlice";
import { useAppSelector } from "../../../../redux/hooks";
import { incItems, decItems } from "../../../../redux/slices/CartSlice";
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
    <div className="flex justify-between bg-white border-3 w-[100%] mx-auto">
      <div>
        <img className="w-[80px] h-[80px]" src={Card.img} alt="" />
      </div>
      <div className="flex flex-col justify-center gap-[20px] font-lato text-black text-[20px]">
        <p className="font-lato text-black text-[20px]">$ {Card.offerPrice}</p>
        <p className=" text-green-400">Total : ${quantity * Card.price}</p>
      </div>

      <div className="flex flex-col items-end gap-[20px]">
        <div className="text-black flex w-[100px] items-center gap-[10px] justify-between ">
          <button
            className=" h-[30px] rounded-[50%] w-[40px] m-1 bg-gray-300"
            onClick={() => {
              console.log("cicked "),
                dispatch(
                  incItems({
                    id: Card.id,
                    price: Card.price,
                    discount: Card.anyOffer ? Card.offPercent: 0,
                  })
                );
            }}
          >
            +
          </button>
          <p className="h-[20px] w-[20px] text-center text-yellow-400">
            {quantity}
          </p>
          <button
            onClick={() => {
              console.log("cicked "),
                dispatch(
                  decItems({
                    id: Card.id,
                    price: Card.price,
                    discount: Card.anyOffer ? Card.offPercent : 0,
                  })
                );
            }}
            className=" h-[30px] rounded-[50%] w-[40px] m-1 bg-gray-300"
          >
            -
          </button>
        </div>

        <button className="text-black rounded-2 m-2 hover:bg-red-100 active:bg-red-300 p-2" onClick={handleClick}>
          <Trash />
        </button>
      </div>
    </div>
  );
}
