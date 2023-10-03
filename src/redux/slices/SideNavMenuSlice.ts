import { createSlice } from '@reduxjs/toolkit';


const initialState={
    showSideNavOpen: false,
};

export const NavBarSlice =  createSlice({
    name : 'showSideNavDrawer',
    initialState,
    reducers:{
        setShowSideNav:(state,action)=>{
            console.log('SideNav opened');
            state.showSideNavOpen= action.payload;
        }
    }
});

export const {setShowSideNav} = NavBarSlice.actions;
export const NavbarReducer =  NavBarSlice.reducer;