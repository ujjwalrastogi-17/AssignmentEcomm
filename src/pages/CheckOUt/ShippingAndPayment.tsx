import ShipAndPaymentCard from "./ShipAndPaymentCard";
import { PaymentCards, ShippmentCards } from "../../utils/dummyData/dummyData";
import PaymentForm from './PaymentForm'

export default function ShippingAndPayment() {
  return (
    <div className="flex md:flex-row flex-col gap-[70px] md:gap-[20px] justify-between w-[100%]">
      <div className="w-[100%] md:w-[49%]">
        <div className="flex h-[100px] flex-col gap-[20px]">
          <h2 className="text-primary-text font-lato font-semibold text-2xl leading-5">
            Payment
          </h2>
          <p className="text-secondary-text font-lato text-base font-normal leading-5">
            Please choose a payment method
          </p>
        </div>
        <ShipAndPaymentCard arr={PaymentCards} />
      </div>
      <div className="w-[100%] md:w-[49%]">
        <div className="flex h-[100px] flex-col gap-[20px]">
          <h2 className="text-primary-text font-lato font-semibold text-2xl leading-5">
            Shipping
          </h2>
          <p className="text-secondary-text font-lato text-base font-normal leading-5">
            Please choose a shipping company based on your region
          </p>
        </div>
        <PaymentForm arr={ShippmentCards} />
      </div>
    </div>
  );
}
