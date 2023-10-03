import { useAppSelector } from "../../redux/hooks";

interface Props {
  id: number;
  quantity: number;
}

export default function ProductFinalCard({ id, quantity }: Props) {
  const ProdArray = useAppSelector((state) => state.ProductArray.ProductArray);
  const product = ProdArray.find((item) => item.id === id);

  let totalforThis = 0;

  if (product) {
    if (product.anyOffer && product.offerPrice) {
      totalforThis += product.offerPrice * quantity;
    } else {
      totalforThis += product.price * quantity;
    }
  }

  return (
    <div className="flex w-[100%] items-center bg-gray-300 justify-between p-4">
      <div className="img_info flex items-center gap-[20px]">
        <img className="w-[100px] h-[100px]" src={product?.img} alt="" />
        <div className="details flex flex-col gap-[10px]">
          <h3>
            {quantity} Pieces <span>{product?.name}</span> : Regular Fit
          </h3>
          <h3>Color: </h3>
        </div>
      </div>
      <div className="bill flex flex-col gap-[20px]">
        <h3>${product?.anyOffer ? product.offerPrice : product?.price}</h3>
        <h3>x{quantity}</h3>
      </div>
      <div className="total">
        <h3 className="text-bold">${totalforThis}</h3>
      </div>
    </div>
  );
}
