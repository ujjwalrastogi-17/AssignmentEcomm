import ProductFinalCard from "./ProductFinalCard";
import { useAppSelector } from "../../redux/hooks";
import { PaymentCards, ShippmentCards } from "../../utils/dummyData/dummyData";

export default function ProductInfoFInal() {
  const { email, firstName, lastName, address, phoneNumber } = useAppSelector(
    (state) => state.FormData
  );
  const cartArray = useAppSelector((state) => state.CartArray.CartArray);
  const paymentId = useAppSelector((state) => state.FormData.paymentMethod);
  const shipmentId = useAppSelector((state) => state.FormData.shipmentMethod);

  const PaymentWay = PaymentCards.find(
    (item) => Number(item.id_p) === Number(paymentId)
  );

  const ShipmentWay = ShippmentCards.find(
    (item) => Number(item.id_s) === Number(shipmentId)
  );

  return (
    <div className="w-[100%] mx-auto mt-[50px] bg-gray-200 flex flex-col border gap-[20px] p-3">


      <h3 className="font-lato text-base font-bold leading-5">
        Shopping Items
      </h3>
      {cartArray.map((item) => {
        return <ProductFinalCard id={item.id} quantity={item.quantity} />;
      })}

      <hr />

      <div className="customInfo flex flex-col gap-[10px]  p-6 w-[100%]">
        <div className="name w-[100%] flex justify-between">
          <p className=" text-base font-normal font-lato leading-5">Name</p>
          <p className=" text-base font-normal font-lato leading-5">
            {firstName} {lastName}
          </p>
        </div>

        <div className="email w-[100%] flex justify-between">
          <p className="text-base font-normal font-lato leading-5">Email</p>
          <p className="text-light-primary-text text-base font-normal font-lato leading-5">
            {email}
          </p>
        </div>

        <div className="phoneNumber w-[100%] flex justify-between">
          <p className="text-base font-normal font-lato leading-5">Address</p>
          <p className=" text-base font-normal font-lato leading-5">
            {address}
          </p>
        </div>

        <div className="address w-[100%] flex justify-between">
          <p className=" text-base font-normal font-lato leading-5">Phone</p>
          <p className=" text-base font-normal font-lato leading-5">
            {phoneNumber}
          </p>
        </div>
      </div>

      <hr />

      <h3 className="font-lato text-base font-bold leading-5">
        Payment Method
      </h3>

      <div className="payment flex justify-between p-6 w-[100%]">
        <h3 className="font-lato text-base font-normal leading-5">
          {PaymentWay?.title}
        </h3>
        <div className="image bg-white flex justify-center items-center w-[100px] h-[50px]">
          <img src={PaymentWay?.img} alt="" />
        </div>
      </div>

    <hr />

      <h3 className="font-lato text-base font-bold leading-5">
         Shipping Company
      </h3>
      <div className="shipment flex justify-between p-6 w-[100%]">
        <h3 className="font-lato text-base font-normal leading-5">
          {ShipmentWay?.title}
        </h3>

        <div className="image bg-white flex justify-center items-center w-[100px] h-[50px]">
          <img src={ShipmentWay?.img} alt="" />
        </div>
      </div>
    </div>
  );
}
