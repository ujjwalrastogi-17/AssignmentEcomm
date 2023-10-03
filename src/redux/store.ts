import { configureStore } from '@reduxjs/toolkit';
import { NavbarReducer } from './slices/SideNavMenuSlice';
import { ProductDataReducer } from './slices/ProductDataSlice';
import { CartDataReducer } from './slices/CartSlice';
import { FormReducer } from './slices/FormSlice';
import { UserReducer } from './slices/UserData';
export const store = configureStore({
    reducer:{
        ShowSideNavBar:NavbarReducer,
        ProductArray:ProductDataReducer,
        CartArray:CartDataReducer,
        FormData:FormReducer,
        UserData:UserReducer
    }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch