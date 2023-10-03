import React, { useEffect, useState } from "react";
import { Favorite } from "@mui/icons-material";
import { Checkbox } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useAppSelector } from "../../../../redux/hooks";
import { useAppDispatch } from "../../../../redux/hooks";
import {
  addItemInCart,
  removeItemFromCart,
} from "../../../../redux/slices/CartSlice";
import {
  markInCart,
  unmarkInCart,
} from "../../../../redux/slices/ProductDataSlice";
import {
  addItemInFav,
  removeItemINFav,
} from "../../../../redux/slices/ProductDataSlice";
import { ToggleButtonGroup, ToggleButton } from "@mui/material";
import { ProductType } from "../../../../utils/type/type";
import { incItems, decItems } from "../../../../redux/slices/CartSlice";

const sizes: string[] = ["XS", "S", "M", "L", "XL"];

interface Props {
  Card: ProductType;
}

export default function MainDesc({ Card }: Props) {
  const dispatch = useAppDispatch();

  const [addToCart, setAddToCart] = useState(!Card.inCart);

  const [size, setSize] = useState<string[]>([]);
  const [isChecked, setisChecked] = useState(Card.inFav);
  const changeSize = (
    e: React.MouseEvent<HTMLElement>,
    updatedInfo: string[]
  ) => {
    console.log(e);
    setSize(updatedInfo);
  };
  const cartArray = useAppSelector((state) => state.CartArray.CartArray);

  const indexinCart = cartArray.findIndex((item) => item.id === Card.id);

  const quantity = indexinCart === -1 ? 0 : cartArray[indexinCart].quantity;
  const [quan, setquan] = useState(quantity);
  const handleInc = () => {
    setquan(quan + 1);
    dispatch(
      incItems({
        id: Card.id,
        price: Card.price,
        discount: Card.anyOffer ? Card.offPercent : 0,
      })
    );
  };

  const handleDec = () => {
    setquan(quan - 1);
    dispatch(
      decItems({
        id: Card.id,
        price: Card.price,
        discount: Card.anyOffer ? Card.offPercent : 0,
      })
    );
  };

  useEffect(() => {
    setquan(quantity);
    // if(quantity===0){
    //   // setAddToCart(false);
    //   // setAddToCart(Card.inCart);
    // }
    setAddToCart(!Card.inCart);
  }, [quantity]);

  return (
    <div className="w-[100%] md:w-[50%] flex justify-center">
      <div className="flex w-[90%] md:w-[80%] m-auto justify-center p-4 flex-col  gap-[20px] lg:gap-[20px]">
        <div className="flex w-[100%] lg:w-[80%] justify-between ">
          <div className="flex flex-col gap-[10px] lg:gap-[20px]">
            <h3 className="text-text-color-light-primary-text font-lato font-bold text-2xl">
              {Card.name}
            </h3>
            <h5 className="text-text-color-light-primary-text font-lato text-xl font-semibold leading-[33.105px]">
              $ {Card.price}
            </h5>
          </div>
          <div className=" absolute top-[30px] right-[30px] sm:static w-[50px] h-[50px] flex justify-center items-center rounded-[50%]">
            <div className="sm:hidden block bg-red-600 rounded-[50%]">
              <Checkbox
                color="error"
                value="xyz"
                icon={<FavoriteBorderIcon style={{ color: "black" }} />}
                checkedIcon={<Favorite style={{ color: "white" }} />}
                checked={isChecked}
                onChange={() => {
                  setisChecked(!isChecked);
                }}
              />
            </div>

            <div className="sm:block border-2 rounded-[50%] hidden">
              <Checkbox
                color="error"
                value="xyz"
                icon={<FavoriteBorderIcon />}
                checkedIcon={<Favorite />}
                checked={isChecked}
                onChange={() => {
                  setisChecked(!isChecked);
                  !isChecked
                    ? dispatch(
                        addItemInFav({
                          id: Card.id,
                          price: Card.price,
                          discount: Card.anyOffer ? Card.offPercent : 0,
                        })
                      )
                    : dispatch(
                        removeItemINFav({
                          id: Card.id,
                          price: Card.price,
                          discount: Card.anyOffer ? Card.offPercent : 0,
                        })
                      );
                }}
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-[10px] lg:gap-[20px]">
          <h6 className="text-text-color-light-primary-text font-lato text-base font-bold leading-[33.105px]">
            Size
          </h6>
          <ToggleButtonGroup
            value={size}
            exclusive
            onChange={changeSize}
            className=" w-[80%]  lg:justify-between gap-[10px] flex flex-wrap"
          >
            {sizes.map((item) => {
              return (
                <ToggleButton
                  className=" sm:w-[70px] h-[40px] border-4  shadow-none"
                  value={item}
                >
                  {item}
                </ToggleButton>
              );
            })}
          </ToggleButtonGroup>

          <p className="text-text-color-light-text-selected-category text-yellow-500 font-Lato text-xs font-bold leading-[33.105px]">
            Size guideline
          </p>
        </div>
        <div className="color flex items-center gap-[60px]">
          <h6 className="text-text-color-light-primary-text font-lato text-base font-bold leading-[33.105px]">
            Color
          </h6>
          <div className="flex justify-between w-[100px] items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.36324 13.621C11.0199 13.621 13.9843 10.6567 13.9843 6.99996C13.9843 3.34325 11.0199 0.378906 7.36324 0.378906C3.70653 0.378906 0.742188 3.34325 0.742188 6.99996C0.742188 10.6567 3.70653 13.621 7.36324 13.621Z"
                fill="#00A95D"
              />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.36324 13.621C11.0199 13.621 13.9843 10.6567 13.9843 6.99996C13.9843 3.34325 11.0199 0.378906 7.36324 0.378906C3.70653 0.378906 0.742188 3.34325 0.742188 6.99996C0.742188 10.6567 3.70653 13.621 7.36324 13.621Z"
                fill="#00A95D"
              />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.36324 13.621C11.0199 13.621 13.9843 10.6567 13.9843 6.99996C13.9843 3.34325 11.0199 0.378906 7.36324 0.378906C3.70653 0.378906 0.742188 3.34325 0.742188 6.99996C0.742188 10.6567 3.70653 13.621 7.36324 13.621Z"
                fill="#00A95D"
              />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.36324 13.621C11.0199 13.621 13.9843 10.6567 13.9843 6.99996C13.9843 3.34325 11.0199 0.378906 7.36324 0.378906C3.70653 0.378906 0.742188 3.34325 0.742188 6.99996C0.742188 10.6567 3.70653 13.621 7.36324 13.621Z"
                fill="#00A95D"
              />
            </svg>
          </div>
        </div>

        <div className="shipping gap-[40px] flex justify-between items-center">
          <h6 className="text-text-color-light-primary-text font-lato text-base font-bold leading-[33.105px]">
            Shipping
          </h6>
          <div className="w-[80%]">
            <p className="text-text-color-light-primary-text font-lato text-sm  leading-5">
              Free Shipping to Victoria teritory
            </p>
            <p className="text-text-color-light-triary-text font-Lato text-xs font-bold leading-5">
              Delivery Time: 14–17 days
            </p>
          </div>
        </div>

        <div className="quantity flex justify-start items-center gap-[40px]">
          <h6 className="text-text-color-light-primary-text font-lato text-base font-bold leading-[33.105px]">
            Quantity
          </h6>
          <div className="amt border h-[30px] md:h-[50px] w-[120px] justify-center flex">
            <button
              className="border flex justify-center items-center w-[34%]"
              onClick={() => handleDec()}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <rect x="3" y="9" width="14" height="2" rx="1" fill="#C4C4C4" />
              </svg>
            </button>
            <div className="border flex items-center justify-center w-[34%]">
              {quan}
            </div>
            <button
              className="border flex justify-center items-center w-[34%]"
              onClick={handleInc}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M11 9H16C16.5523 9 17 9.44772 17 10C17 10.5523 16.5523 11 16 11H11V16C11 16.5523 10.5523 17 10 17C9.44772 17 9 16.5523 9 16V11H4C3.44772 11 3 10.5523 3 10C3 9.44772 3.44772 9 4 9H9V4C9 3.44772 9.44772 3 10 3C10.5523 3 11 3.44772 11 4V9Z"
                  fill="#C4C4C4"
                />
              </svg>
            </button>
          </div>

          <div className="avail text-text-color-light-secondary-text font-lato text-sm  leading-5">
            50 available / 104 sold
          </div>
        </div>

        <div className="total flex flex-col bg-gray-200 p-3 gap-[10px]">
          <h4 className="text-text-color-light-primary-text font-lato text-lg font-bold leading-[30px]"></h4>
          <div className="addshippingcost flex gap-[10px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10.5 19C5.52944 19 1.5 14.9706 1.5 10C1.5 5.02944 5.52944 1 10.5 1C15.4706 1 19.5 5.02944 19.5 10C19.5 14.9706 15.4706 19 10.5 19ZM11.5 9V5C11.5 4.44772 11.0523 4 10.5 4C9.94771 4 9.5 4.44772 9.5 5V9H5.5C4.94772 9 4.5 9.44771 4.5 10C4.5 10.5523 4.94772 11 5.5 11H9.5V15C9.5 15.5523 9.94771 16 10.5 16C11.0523 16 11.5 15.5523 11.5 15V11H15.5C16.0523 11 16.5 10.5523 16.5 10C16.5 9.44771 16.0523 9 15.5 9H11.5Z"
                fill="#C4C4C4"
              />
            </svg>
            <p className="text-text-color-light-secondary-text font-lato text-xs font-normal leading-[20px]">
              Add shipping insurance for $9( declared value only if the package
              gets lost, stolen or damaged.)
            </p>
          </div>
        </div>

        <div className="btns flex w-[100%] justify-start gap-[10px]">
          <button className="w-[50%] active:text-black active:bg-gray-300 hover:text-white hover:bg-blue-600 rounded-lg bg-blue-500 h-[50px] text-text-color-inside-inside text-center font-lato text-base font-medium leading-5 tracking-wider uppercase">
            Shop Now
          </button>

          {addToCart && (
            <button className="flex w-[50%] hover:bg-gray-200 rounded-lg h-[50px] border justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
              >
                <path
                  d="M9.125 6L9.125 7C9.125 8.65685 10.4681 10 12.125 10C13.7819 10 15.125 8.65685 15.125 7V6"
                  stroke="#434343"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M20.7915 13L19.6819 6.3424C19.3605 4.41365 17.6917 3 15.7363 3H8.51336C6.558 3 4.88924 4.41365 4.56778 6.3424L2.90112 16.3424C2.49476 18.7805 4.37494 21 6.84669 21H13.1249"
                  stroke="#434343"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M19.125 15L19.125 21"
                  stroke="#434343"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M22.125 18L16.125 18"
                  stroke="#434343"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <button
                onClick={() => {
                  dispatch(
                    addItemInCart({
                      id: Card.id,
                      quantity: quan,
                      price: Card.price,
                      discount: Card.anyOffer ? Card.offPercent : 0,
                    })
                  );
                  dispatch(
                    markInCart({
                      id: Card.id
                    })
                  );
                  if (quan === 0) {
                    dispatch(
                      incItems({
                        id: Card.id,
                        price: Card.price,
                        discount: Card.anyOffer ? Card.offPercent : 0,
                      })
                    );
                  }
                  setAddToCart(false);
                }}
                className="w-[50%] hidden lg:flex justify-center items-center rounded-lg text-text-color-inside-inside font-lato text-base font-medium leading-5 tracking-wider uppercase"
              >
                <p className="hidden lg:block text-[15px] sm:text-[10px] lg:text-[15px]">
                  Add to basket
                </p>
              </button>
            </button>
          )}

          {!addToCart && (
            <button className="flex w-[50%] gap-[10px] text-white bg-slate-400 hover:bg-gray-500 rounded-lg h-[50px] border justify-center items-center">
              <p className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-trash"
                  viewBox="0 0 16 16"
                >
                  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
                  <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
                </svg>
              </p>

              <button
                onClick={() => {
                  dispatch(
                    removeItemFromCart({
                      id: Card.id,
                      price: Card.price,
                      discount: Card.anyOffer ? Card.offPercent : 0,
                    })
                  );
                  setAddToCart(true);
                  dispatch(
                    unmarkInCart({
                      id: Card.id,
                      price: Card.price,
                      discount: Card.anyOffer ? Card.offPercent : 0,
                    })
                  );
                }}
                className="w-[70%] hidden lg:flex justify-center items-center rounded-lg text-text-color-inside-inside font-lato text-base font-medium leading-5 tracking-wider uppercase"
              >
                <p className="hidden w-[100%] lg:block text-[10px] md:text-[10px] sm:text-[10px] xl:text-[15px]">
                  Remove from basket
                </p>
              </button>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
