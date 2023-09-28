import { Checkbox } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Favorite } from "@mui/icons-material";
import { ProductType } from "../../utils/type/type";
import { useAppDispatch } from "../../redux/hooks";
import { useState } from "react";
import {
  addItemInFav,
  removeItemINFav,
  markInCart,
  unmarkInCart,
} from "../../redux/slices/ProductDataSlice";
import InBag from "../../assets/svgs/InBag";
import NotInBag from "../../assets/svgs/NotInBag";
import { useNavigate } from "react-router-dom";
import {
  addItemInCart,
  removeItemFromCart,
} from "../../redux/slices/CartSlice";

interface TrendCards {
  width_sm: number;
  width_lg: number;
  Card: ProductType;
}

export default function ComponentCard({
  width_sm,
  width_lg,
  Card,
}: TrendCards) {

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [isChecked, setisChecked] = useState(Card.inFav);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event);
    setisChecked(!isChecked);

    if (!isChecked) {
      console.log("Ischeck");
      dispatch(addItemInFav({ id: Card.id }));
    } else dispatch(removeItemINFav({ id: Card.id }));
  };

  const [inBag, setinBag] = useState(Card.inCart);
  console.log(inBag)
  const handleAddToCart = () => {
    setinBag(true);
    dispatch(markInCart({ id: Card.id }));
    dispatch(addItemInCart({ id: Card.id, quantity: 1 }));
  };

  const handleRemoveFromCart = () => {
    setinBag(false);
    dispatch(removeItemFromCart({ id: Card.id }));
    dispatch(unmarkInCart({ id: Card.id }));
  };

  return (
    <div
      className={`flex  flex-col min-w-[${width_sm}px] border lg:min-w-[${width_lg}px]`}
    >
      {/* <div onClick={()=>navigate(`/${Card.id}`)} className="p-4"> */}
      <div onClick={()=>navigate(`/${Card.id}`)} className="p-4">

        <img
          className={`min-w-[${width_sm}px] lg:min-w-[${width_lg}px] w-[300px]`}
          src={Card.img}
          alt=""
        />
      </div>

      <div
        className={`flex min-w-[${width_sm}px] lg:min-w-[${width_lg}px] px-[20px] gap-[10px] py-[10px] flex-col`}
      >
        <div className="flex justify-center">
          <div className="flex w-[100%] flex-col">
            <button className="text-gray-700 font-lato text-xs font-semibold leading-5">
              {Card.name}
            </button>
            <p className="text-gray-500 font-lato text-xs font-normal leading-10">
              {" "}
              {Card.desc}
            </p>
          </div>
          <Checkbox
            color="error"
            value="xyz"
            icon={<FavoriteBorderIcon />}
            checkedIcon={<Favorite />}
            checked={Card.inFav}
            onChange={handleChange}
          />
        </div>

        <div className="flex justify-between w-[95%]">
          <div className="flex gap-[15px] flex-col w-[60%]">
            <div className="flex gap-[10px] items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
              >
                <path
                  d="M10.0328 3.77141C10.8375 2.0762 13.1625 2.0762 13.9672 3.77141L15.3579 6.70118C15.6774 7.37435 16.2951 7.84094 17.0096 7.94888L20.1193 8.41869C21.9187 8.69053 22.6371 10.9895 21.3351 12.3091L19.0849 14.5896C18.5679 15.1136 18.332 15.8685 18.454 16.6084L18.9852 19.8285C19.2926 21.6918 17.4116 23.1126 15.8022 22.2329L13.0208 20.7126C12.3817 20.3633 11.6183 20.3633 10.9792 20.7126L8.19776 22.2329C6.58839 23.1126 4.70742 21.6918 5.01479 19.8286L5.54599 16.6084C5.66804 15.8685 5.43211 15.1136 4.91508 14.5896L2.66488 12.3091C1.36287 10.9895 2.08133 8.69053 3.88066 8.41869L6.99037 7.94888C7.70489 7.84094 8.32257 7.37435 8.64211 6.70118L10.0328 3.77141Z"
                  fill="#FFC000"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
              >
                <path
                  d="M10.0328 3.77141C10.8375 2.0762 13.1625 2.0762 13.9672 3.77141L15.3579 6.70118C15.6774 7.37435 16.2951 7.84094 17.0096 7.94888L20.1193 8.41869C21.9187 8.69053 22.6371 10.9895 21.3351 12.3091L19.0849 14.5896C18.5679 15.1136 18.332 15.8685 18.454 16.6084L18.9852 19.8285C19.2926 21.6918 17.4116 23.1126 15.8022 22.2329L13.0208 20.7126C12.3817 20.3633 11.6183 20.3633 10.9792 20.7126L8.19776 22.2329C6.58839 23.1126 4.70742 21.6918 5.01479 19.8286L5.54599 16.6084C5.66804 15.8685 5.43211 15.1136 4.91508 14.5896L2.66488 12.3091C1.36287 10.9895 2.08133 8.69053 3.88066 8.41869L6.99037 7.94888C7.70489 7.84094 8.32257 7.37435 8.64211 6.70118L10.0328 3.77141Z"
                  fill="#FFC000"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
              >
                <path
                  d="M10.0328 3.77141C10.8375 2.0762 13.1625 2.0762 13.9672 3.77141L15.3579 6.70118C15.6774 7.37435 16.2951 7.84094 17.0096 7.94888L20.1193 8.41869C21.9187 8.69053 22.6371 10.9895 21.3351 12.3091L19.0849 14.5896C18.5679 15.1136 18.332 15.8685 18.454 16.6084L18.9852 19.8285C19.2926 21.6918 17.4116 23.1126 15.8022 22.2329L13.0208 20.7126C12.3817 20.3633 11.6183 20.3633 10.9792 20.7126L8.19776 22.2329C6.58839 23.1126 4.70742 21.6918 5.01479 19.8286L5.54599 16.6084C5.66804 15.8685 5.43211 15.1136 4.91508 14.5896L2.66488 12.3091C1.36287 10.9895 2.08133 8.69053 3.88066 8.41869L6.99037 7.94888C7.70489 7.84094 8.32257 7.37435 8.64211 6.70118L10.0328 3.77141Z"
                  fill="#FFC000"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
              >
                <path
                  d="M10.0328 3.77141C10.8375 2.0762 13.1625 2.0762 13.9672 3.77141L15.3579 6.70118C15.6774 7.37435 16.2951 7.84094 17.0096 7.94888L20.1193 8.41869C21.9187 8.69053 22.6371 10.9895 21.3351 12.3091L19.0849 14.5896C18.5679 15.1136 18.332 15.8685 18.454 16.6084L18.9852 19.8285C19.2926 21.6918 17.4116 23.1126 15.8022 22.2329L13.0208 20.7126C12.3817 20.3633 11.6183 20.3633 10.9792 20.7126L8.19776 22.2329C6.58839 23.1126 4.70742 21.6918 5.01479 19.8286L5.54599 16.6084C5.66804 15.8685 5.43211 15.1136 4.91508 14.5896L2.66488 12.3091C1.36287 10.9895 2.08133 8.69053 3.88066 8.41869L6.99037 7.94888C7.70489 7.84094 8.32257 7.37435 8.64211 6.70118L10.0328 3.77141Z"
                  fill="#FFC000"
                />
              </svg>
              <p className="text-gray-500 text-center font-lato text-xs font-normal leading-5">
                {Card.quantity}
              </p>
            </div>
            <div className="flex justify-start gap-[20px]">
              <p className="text-red-600 font-lato text-base font-extrabold leading-7">
                ${Card.offerPrice}
              </p>
              <p className="text-gray-600 font-lato text-base font-normal leading-5 line-through">
                ${Card.price}
              </p>
              <p className="text-red-600 font-lato text-xs font-normal leading-5">
                -{Card.offPercent}%
              </p>
            </div>
          </div>

          <div className="incart">
            {Card.inCart ? (
              <button onClick={handleRemoveFromCart}>
                <InBag />
              </button>
            ) : (
              <button onClick={handleAddToCart}>
                <NotInBag />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
