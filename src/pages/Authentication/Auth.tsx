// import React from "react";
import SignUp from "./SignUp";
import Login from "./Login";
import { Dialog, DialogTitle } from "@mui/material";

export default function Auth() {
    // const handleClose=()=>{

    // }
  return (
    <div className="flex w-[100%] justify-between">
      <Dialog  open={true}>
        <DialogTitle>Set backup account</DialogTitle>
        <div className="flex flex-col">
          <SignUp />
          <Login />
        </div>
      </Dialog>
    </div>
  );
}
