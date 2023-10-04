import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  email: "",
  password: "",
};

export const UserSlice = createSlice({
  name: "showSideNavDrawer",
  initialState,
  reducers: {
    setData: (state, action) => {
      state.email = action.payload.email;
      state.password = action.payload.password;
    },
    setLogin:(state) => {
        state.isLoggedIn=true;
    }
  },
});

export const { setData, setLogin } = UserSlice.actions;
export const UserReducer = UserSlice.reducer;
