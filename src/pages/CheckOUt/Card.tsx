import { incItems, decItems } from "../../redux/slices/CartSlice";
import { useAppDispatch } from "../../redux/hooks";
import { ProductType } from "../../utils/type/type";

export interface CardProps {
  Card: ProductType;
  quantity: number;
}

export default function Card({ Card, quantity }: CardProps) {
  const dispatch = useAppDispatch();
  return (
    <div className="flex shadow-md w-[100%] justify-between items-center gap-[20px] p-4">
      <img className="w-[100px] h-[100px] " src={Card.img} alt="" />
      <div className="prices font-lato  flex-col flex gap-[10px] ">
        <p>{Card.name}</p>
        <p>$ {Card.price}</p>
      </div>

      <div className=" flex items-center gap-[3px] w-[10%] justify-center">
        <button
          className="hover:bg-gray-50 bg-gray-300 shadow-sm w-[30px] h-[30px] text-center"
          onClick={() => {
              dispatch(
                incItems({
                  id: Card.id,
                  price: Card.price,
                  discount: Card.anyOffer ? Card.offPercent : 0,
                })
              );
          }}
        >
          +
        </button>
        <p className=" bg-gray-200 shadow-sm w-[30px] h-[30px] text-center flex justify-center items-center">
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
          className="hover:bg-gray-50 bg-gray-300 shadow-sm w-[30px] h-[30px] text-center"
        >
          -
        </button>
      </div>

      <div className="totalPrice">
        <p>$ {quantity * (Card.offerPrice ? Card.offerPrice : Card.price)}</p>
      </div>
    </div>
  );
}
