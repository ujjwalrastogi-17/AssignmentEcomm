// import React from "react";
import OtherProd from "../Product/Women/Components/OtherProd";
import { useAppSelector } from "../../redux/hooks";
import Card from "./Card";
import { useState } from "react";
import CustomerInfo from "./CustomerInfo";

export default function CheckOut() {
  const [totalPrice, settotalPrice] = useState<number>(0);
  const [offerPrice, setofferPrice] = useState<number>(0);

  const cardArr = useAppSelector((state) => state.CartArray.CartArray);
  const productArr = useAppSelector((state) => state.ProductArray.ProductArray);

  console.log(cardArr);

  return (
    <div className="flex flex-col mt-[100px] w-[90%] m-auto gap-[100px]">
      <div className="flex justify-between">
        <div className="cards">
          {cardArr.length ? (
            cardArr.map((item) => {
              const { id, quantity } = item;
              const index = productArr.findIndex((card) => card.id === id);
              const product = productArr[index];
              return (
                <Card
                  setPrice={settotalPrice}
                  setOffer={setofferPrice}
                  Card={product}
                  quantity={quantity}
                />
              );
            })
          ) : (
            <div className="h-[300px] flex justify-between items-center">
              <h1 className="font-bold font-lato ">NO ITEMS IN THE CART YET !</h1>
            </div>
          )}
        </div>

        <div className="orderSummary w-[300px] bg-gray-500 p-3 justify-between items-center flex flex-col gap-[20px]">
          <h3>Order Summary</h3>
          <div className=" flex w-[80%] justify-between m-auto price">
            <p>Price</p>
            <p>{totalPrice}</p>
          </div>

          <div className="flex w-[80%] justify-between m-auto shipping">
            <h3>Shipping</h3>
            <p>0</p>
          </div>

          <div className="flex w-[80%] justify-between m-auto tax">
            <p>Tax</p>
            <p>0</p>
          </div>

          <div className="flex w-[80%] justify-between m-auto tax">
            <h3>Discount Price</h3>
            <p>{offerPrice}</p>
          </div>
        </div>
      </div>

      <div>
        <CustomerInfo/>
        <OtherProd />
      </div>
    </div>
  );
}
