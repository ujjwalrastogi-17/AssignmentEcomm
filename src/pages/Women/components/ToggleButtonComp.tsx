// import React from "react";
import { ToggleButton  } from "@mui/material";

interface Props{
  text:string
}

export default function ToggleButtonComp({ text }:Props) {
  return (
    <div>
      <ToggleButton value={text} className="w-[50px] h-[40px]" aria-label={text}>
        {text}
      </ToggleButton>
    </div>
  );
}
