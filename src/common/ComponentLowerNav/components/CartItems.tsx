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
    <div className="cartItems flex flex-col gap-[30px] p-4 mt-[30px] relative left-[-250px] bg-black w-[400px] m-auto">
      {newAray.length > 0 ? (
        newAray.map((item) => {
          return <CartDropdownCard Card={item} />;
        })
      ) : (
        <div className="w-[100%] m-auto text-white bg-blue-500 py-2">
          Your Cart Is Empty!{" "}
        </div>
      )}

      <div>
        <button onClick={()=>navigate('checkout')}  className="text-white">View Bag</button>
      </div>
    </div>
  );
}
