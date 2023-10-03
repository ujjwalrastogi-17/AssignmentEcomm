import { createSlice } from "@reduxjs/toolkit";
import { ProductArrayOrig } from "../../utils/dummyData/dummyData";

const initialState = {
  ProductArray: ProductArrayOrig,
  favCount:0
};

export const ProductDataSlice = createSlice({
  name: "ProductArrayOrig",
  initialState,
  reducers: {
    addItemInFav: (state, action) => {
      const { id } = action.payload;
      const index = state.ProductArray.findIndex((item) => item.id === id);
      state.ProductArray[index].inFav = true;
      state.favCount++;
    },
    removeItemINFav: (state, action) => {
      const { id } = action.payload;
      const index = state.ProductArray.findIndex((item) => item.id === id);
      state.ProductArray[index].inFav = false;
      state.favCount--;
    },
    markInCart: (state, action) => {
      const { id } = action.payload;
      const index = state.ProductArray.findIndex((item) => item.id === id);
      state.ProductArray[index].inCart = true;
    },
    unmarkInCart: (state, action) => {
      const { id } = action.payload;
      const index = state.ProductArray.findIndex((item) => item.id === id);
      state.ProductArray[index].inCart = false;
    },
  },
});

export const { addItemInFav, removeItemINFav, markInCart, unmarkInCart } =
  ProductDataSlice.actions;
export const ProductDataReducer = ProductDataSlice.reducer;
