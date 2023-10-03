import { useAppSelector } from "../../redux/hooks";

export default function OrderSummary() {
  const totalPrice = useAppSelector((state) => state.CartArray.totalPrice);
  const discount = useAppSelector((state) => state.CartArray.totalDiscount);

  return (
    <div className="orderSummary w-[100%] bg-gray-300 min-w-[300px] m-auto h-[300px] border p-3 justify-between items-center flex flex-col gap-[20px]">
      <h3 className="font-lato">Order Summary</h3>
      <div className=" flex w-[80%] justify-between m-auto price">
        <p className="font-lato ">Price :</p>
        <p className="font-lato  text-green-700">${totalPrice}</p>
      </div>


      <div className="flex w-[80%] justify-between m-auto shipping">
        <h3 className="font-lato ">Shipping</h3>
        <p className="font-lato ">0</p>
      </div>

      <div className="flex w-[80%] justify-between m-auto tax">
        <p className="font-lato ">Tax</p>
        <p className="font-lato ">+ $ 1.2</p>
      </div>

      <div className="flex w-[80%] justify-between m-auto tax">
        <h3 className="font-lato ">Discount Price: </h3>
        <p className="font-lato text-red-600 "> - $ {discount.toFixed(2)}</p>
      </div>

      <div className="flex w-[80%] justify-between m-auto tax">
        <h3 className="font-lato  font-bold "> Pay : </h3>
        <p className="font-lato font-bold text-blue-900 ">$ {(totalPrice - discount -1.2).toFixed(2)}</p>
      </div>
    </div>
  );
}
