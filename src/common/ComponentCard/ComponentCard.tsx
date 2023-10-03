import { Checkbox } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Favorite } from "@mui/icons-material";
import { ProductType } from "../../utils/type/type";
import { useAppDispatch } from "../../redux/hooks";
import { useState } from "react";
import { Rating } from "@mui/material";
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
  const handleChange = () => {
    setisChecked(!isChecked);
    if (!isChecked) {
      dispatch(addItemInFav({ id: Card.id }));
    } else dispatch(removeItemINFav({ id: Card.id }));
  };

  const [inBag, setinBag] = useState(Card.inCart);
  console.log(inBag);
  const handleAddToCart = () => {
    setinBag(true);
    dispatch(markInCart({ id: Card.id }));
    dispatch(
      addItemInCart({
        id: Card.id,
        quantity: 1,
        price: Card.price,
        discount: Card.anyOffer ? Card.offPercent : 0,
      })
    );
  };

  const [value, setValue] = useState<number | null>(Card.rating);

  const handleRating = (
    _event: React.ChangeEvent<{}>,
    newValue: number | null
  ) => {
    setValue(newValue);
  };

  const handleRemoveFromCart = () => {
    setinBag(false);
    dispatch(
      removeItemFromCart({
        id: Card.id,
        price: Card.price,
        discount: Card.anyOffer ? Card.offPercent : 0,
      })
    );
    dispatch(unmarkInCart({ id: Card.id }));
  };

  return (
    <div
      className={`flex shadow-xl flex-col w-[${width_sm}px]  xl:min-w-[${width_lg}px]`}
    >
      <div onClick={() => navigate(`/${Card.id}`)}>
        <img
          className={`w-[${width_sm}px] lg:min-w-[${width_lg}px] w-[300px]`}
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
              <Rating value={value} onChange={handleRating} />
              <p className="text-gray-500 text-center font-lato text-xs font-normal leading-5">
                {Card.quantity}
              </p>
            </div>
            <div className="flex justify-start items-center gap-[20px]">
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
