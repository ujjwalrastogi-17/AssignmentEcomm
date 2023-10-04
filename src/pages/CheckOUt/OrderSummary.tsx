import { Button } from "@mui/material";
import { useAppSelector } from "../../redux/hooks";

export default function OrderSummary() {
  const totalPrice = useAppSelector((state) => state.CartArray.totalPrice);
  const discount = useAppSelector((state) => state.CartArray.totalDiscount);

  const isPaymentValid = useAppSelector(
    (state) => state.FormData.isPaymentMethodValid
  );

  const isShipmemtValid = useAppSelector(
    (state) => state.FormData.isShipmentMethodValid
  );

  const isCustomValid = useAppSelector(
    (state) => state.FormData.isCustomeInfoValid
  );

  console.log(isPaymentValid, isCustomValid, isShipmemtValid);

  const check = isPaymentValid && isShipmemtValid && isCustomValid;

  return (
    <div className="orderSummary w-[100%] bg-gray-300 min-w-[300px] m-auto h-[450px] border p-3 justify-between items-center flex flex-col gap-[20px]">
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
        <p className="font-lato font-bold text-blue-900 ">
          $ {(totalPrice - discount - 1.2).toFixed(2)}
        </p>
      </div>

      {check && (
        <Button
          style={{
            backgroundColor: "#0174C3", // Set your desired background color
            color: "white", // Set the text color
            width: "100px", // Set the width
            height: "50px", // Set the height
            borderRadius: "8px", // Set the border radius
            marginBottom: "20px",
            cursor:"pointer"
            // Add more styles as needed
          }}
          disabled={!check}
        >
          ShopNow
        </Button>
      )}

      {!check && (
        <Button
          style={{
            backgroundColor: "#808080", // Set your desired background color
            // color: "white", // Set the text color
            width: "100px", // Set the width
            height: "50px", // Set the height
            borderRadius: "8px", // Set the border radius
            marginBottom: "20px",
            color:"#5a5a5a"
            // Add more styles as needed
          }}
          disabled={!check}
        >
          ShopNow
        </Button>
      )}
      {/* <Button
        style={{
          backgroundColor: "#0174C3", // Set your desired background color
          color: "white", // Set the text color
          width: "100px", // Set the width
          height: "50px", // Set the height
          borderRadius: "8px", // Set the border radius
          marginBottom:'20px'
          // Add more styles as needed
        }}
        disabled={!check}
      >
        ShopNow
      </Button> */}

      {/* <div className="btns">
        <button disabled={!check} className="bg-red-500 w-[100px] text-white h-[50px]">
          ShopNow
        </button>
      </div> */}
    </div>
  );
}
