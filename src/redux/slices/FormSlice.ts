import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  address: "",
  phoneNumber: "",
  paymentMethod: 1,
  shipmentMethod: 1,
  isCustomeInfoValid:false,
  isPaymentMethodValid:false,
  isShipmentMethodValid:false
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
    },
    setShipmentMethod: (state, action) => {
      state.shipmentMethod = action.payload.id;
    },
    setCustomValid:(state)=>{
      console.log('Cutom');
      state.isCustomeInfoValid=true;
    },
    setPaymentValid:(state)=>{
      console.log('Payment');
      state.isPaymentMethodValid=true;
    },
    setShipmentValid:(state)=>{
      console.log('Ship');
      state.isShipmentMethodValid=true;
    }
  },
});

export const { setCustomInfo, setPaymentMethod, setShipmentMethod, setCustomValid, setPaymentValid, setShipmentValid } =
  FormSlice.actions;
export const FormReducer = FormSlice.reducer;
