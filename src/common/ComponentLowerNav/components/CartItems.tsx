import CartDropdownCard from "../../../pages/Product/Women/Components/CartDropdownCard";
import { useAppSelector } from "../../../redux/hooks";
import { useNavigate } from "react-router-dom";
// import ComponentCard from "../../ComponentCard/ComponentCard";

export default function CartItems() {
  //   const cartArray = useAppSelector((state) => state.CartArray.CartArray);
  const productArray = useAppSelector(
    (state) => state.ProductArray.ProductArray
  );

  const navigate =useNavigate()

  const newAray = productArray.filter((item) => item.inCart);
  return (
    <div className="cartItems flex flex-col gap-[20px] mt-[10px] relative bg-slate-800 pb-2 px-3 w-[350px]">
      {newAray.length > 0 ? (
        newAray.map((item) => {
          return <CartDropdownCard Card={item} />;
        })
      ) : (
        <div className="w-[100%] m-auto text-white font-lato font-bold text-[20px] py-2">
          Your Cart Is Empty!{" "}
        </div>
      )}

      <div className="flex justify-between">
        <button onClick={()=>navigate('checkout')}  className="text-white hover:border-green-500 hover:bg-slate-600  active:bg-slate-300 hover:text-purple-400 border-2 border-white rounded-[10px] p-2 w-[120px]">View Bag</button>
        <button onClick={()=>navigate('checkout')}  className="text-white hover:border-green-500 hover:bg-slate-600  active:bg-slate-300 hover:text-purple-400 border-2 border-white rounded-[10px] p-2 w-[120px]">Checkout</button>
      </div>
    </div>
  );
}
