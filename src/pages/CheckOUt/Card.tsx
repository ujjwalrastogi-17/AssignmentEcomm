import React from "react";
import { incItems } from "../../redux/slices/CartSlice";
// import { useDispatch } from "react-redux";
import { useAppDispatch } from "../../redux/hooks";
// import { useAppSelector, useAppDispatch } from '../../redux/hooks';

import { ProductType } from "../../utils/type/type";

export interface CardProps {
  Card: ProductType;
  quantity: number;
  setPrice: React.Dispatch<React.SetStateAction<number>>;
  setOffer: React.Dispatch<React.SetStateAction<number>>;
}

export default function Card({
  Card,
  quantity,
  setPrice,
  setOffer,
}: CardProps) {
  const dispatch = useAppDispatch();
  //   const cardArr =  useAppSelector((state)=>state.CartArray.CartArray);

  setPrice(Card.price * quantity);
  setOffer(Card.offerPrice ? Card.offerPrice * quantity : 0);

  return (
    <div className="flex w-[600px] justify-between items-center border gap-[20px] p-4">
      <img className="w-[100px] h-[100px] " src={Card.img} alt="" />
      <div className="prices font-lato  flex-col flex gap-[10px] ">
        <p>{Card.name}</p>
        <p>$ {Card.price}</p>
      </div>

      <div className=" flex w-[20%] justify-between">
        <button
          className=" h-[20px] w-[20px] border-black"
          onClick={() => {
            console.log("cicked "), dispatch(incItems({ id: Card.id }));
          }}
        >
          +
        </button>
        <p className="">{quantity}</p>
        <button className=" h-[20px] w-[20px] border-black">-</button>
      </div>

      <div className="totalProce">
        <p>$ {quantity*(Card.offerPrice?Card.offerPrice:Card.price)}</p>
      </div>
    </div>
  );
}
