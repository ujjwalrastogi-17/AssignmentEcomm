import { createSlice } from "@reduxjs/toolkit";
import { cartArray } from "../../utils/dummyData/dummyData";

const initialState = {
  CartArray: cartArray,
  totalPrice: 0,
  totalDiscount: 0,
};

export const CartSlice = createSlice({
  name: "cartArray",
  initialState,
  reducers: {
    addItemInCart: (state, action) => {
      console.log("in slice add to cart");
      const { id, quantity = 1, price, discount = 0 } = action.payload;
      const item = {
        id: id,
        quantity: quantity,
        price: price,
        discount: discount,
      };
      state.CartArray.push(item);
      state.totalPrice += parseFloat((quantity * price).toFixed(2));
      console.log(quantity, discount, price);
      state.totalDiscount += parseFloat(
        (quantity * discount * 0.01 * price).toFixed(2)
      );
    },
    removeItemFromCart: (state, action) => {
      const { id, price, discount = 0 } = action.payload;
      const index = state.CartArray.findIndex((item) => item.id === id);
      const quantity = state.CartArray[index].quantity;
      state.totalPrice -= quantity * price;
      state.CartArray.splice(index, 1);
      state.totalDiscount -= parseFloat(
        (quantity * discount * 0.01 * price).toFixed(2)
      );
    },
    incItems: (state, action) => {
      const { id, price, discount } = action.payload;
      const index = state.CartArray.findIndex((item) => item.id === id);
      state.totalDiscount += parseFloat((discount * 0.01 * price).toFixed(2));
      state.totalPrice += price;
      state.CartArray[index].quantity = state.CartArray[index].quantity + 1;
    },
    decItems: (state, action) => {
      const { id, price, discount } = action.payload;
      const index = state.CartArray.findIndex((item) => item.id === id);
      if (state.CartArray[index].quantity > 0) {
        state.CartArray[index].quantity--;
        state.totalDiscount -= parseFloat((discount * 0.01 * price).toFixed(2));
        state.totalPrice -= price;
      }
    },
  },
});

export const { addItemInCart, removeItemFromCart, incItems, decItems } =
  CartSlice.actions;
export const CartDataReducer = CartSlice.reducer;
