import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  address: "",
  phoneNumber: "",
  paymentMethod: 1,
  shipmentMethod: 1,
};

export const FormSlice = createSlice({
  name: "formData",
  initialState,
  reducers: {
    setCustomInfo: (state, action) => {
      const { firstName, lastName, email, address, phoneNumber } =
        action.payload;
      state.email = email;
      state.firstName = firstName;
      state.lastName = lastName;
      state.address = address;
      state.phoneNumber = phoneNumber;
    },
    setPaymentMethod: (state, action) => {
      state.paymentMethod = action.payload.id;
      console.log("PAY ", state.paymentMethod);
    },
    setShipmentMethod: (state, action) => {
      state.shipmentMethod = action.payload.id;
      console.log("SHIP ", state.shipmentMethod);
    },
  },
});

export const { setCustomInfo, setPaymentMethod, setShipmentMethod } =
  FormSlice.actions;
export const FormReducer = FormSlice.reducer;
