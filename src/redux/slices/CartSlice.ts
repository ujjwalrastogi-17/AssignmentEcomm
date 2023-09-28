import { createSlice } from "@reduxjs/toolkit";
import { cartArray } from "../../utils/dummyData/dummyData";

const initialState = {
  CartArray: cartArray,
  quantity: 0,
};

export const CartSlice = createSlice({
  name: "cartArray",
  initialState,
  reducers: {
    addItemInCart: (state, action) => {
        console.log('in slice add to cart')
      const { id } = action.payload;
      const item = {
        id: id,
        quantity: action.payload.quantity,
      };
      state.CartArray.push(item);
    },
    removeItemFromCart: (state, action) => {
      const { id } = action.payload;
      const index = state.CartArray.findIndex((item) => item.id === id);
      state.CartArray.splice(index, 1);
    },
    incItems: (state, action) => {
      const { id } = action.payload;
      const index = state.CartArray.findIndex((item) => item.id === id);
      if (state.CartArray[index].quantity > 0)
        state.CartArray[index].quantity++;
    },
    decItems: (state, action) => {
      const { id } = action.payload;
      const index = state.CartArray.findIndex((item) => item.id === id);
      if (state.CartArray[index].quantity > 0)
        state.CartArray[index].quantity++;
    },
  },
});

export const { addItemInCart, removeItemFromCart, incItems } =
  CartSlice.actions;
export const CartDataReducer = CartSlice.reducer;
