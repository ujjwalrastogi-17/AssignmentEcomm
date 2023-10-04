import { useState } from "react";

interface Props {
  Img: string;
  Imgs: string[];
}

export default function Image2({ Imgs }: Props) {
  const [mainImg, setmainImg] = useState<string>(Imgs[0]);

  const handleImg = (img: string) => {
    setmainImg(img);
  };

  return (
    <div className="flex flex-col w-[90%] mx-auto  lg:w-[500px] h-[500px] rounded-[30px] gap-[10px] shadow-md justify-end sm:justify-between">
      <div className=" mx-auto rounded-md my-0  shadow-md w-[100%] h-[100%] ">
        <img src={mainImg} className=" w-[100%] rounded-sm shadow-md h-[100%]" alt="" />
      </div>
      <div className="flex rounded-sm w-[100%] m-auto justify-center gap-[10px]">
        {Imgs.map((item) => {
          return (
            <img
              src={item}
              onClick={() => handleImg(item)}
              className="w-[150px] h-[130px] rounded-lg shadow-lg object-cover object-left-top"
            />
          );
        })}
      </div>
    </div>
  );
}
