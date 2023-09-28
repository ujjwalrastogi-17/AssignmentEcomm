// import React from "react";

interface Props {
  Img: string;
}

export default function Image({ Img }: Props) {
  return (
    <div className="flex flex-col-reverse w-[100%] sm:flex-row sm:w-[50%] sm:h-[700px] lg:h-[600px] border gap-[5px] justify-end sm:justify-between">
      <div className="selector border-2 w-[80%] mx-auto my-0 sm:w-[20%] sm:h-[700px] lg:h-[880px] flex sm:flex-col justify-between">
      </div>

      <div className="w-[100%] mx-auto my-0 sm:w-[80%]">
        <img src={Img} className="h-[100%] w-[100%] " alt="" />
      </div>
    </div>
  );
}
