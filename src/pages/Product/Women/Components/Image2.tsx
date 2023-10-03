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
    <div className="flex flex-col w-[500px] h-[500px] rounded-[30px] gap-[5px] shadow-md justify-end sm:justify-between">
      <div className=" mx-auto my-0  w-[100%] h-[100%] ">
        <img src={mainImg} className=" w-[100%] h-[100%] " alt="" />
      </div>
      <div className="flex w-[100%] m-auto justify-center gap-[5px]">
        {Imgs.map((item) => {
          return (
            <img
              src={item}
              onClick={() => handleImg(item)}
              className="w-[150px] h-[120px]"
            />
          );
        })}
      </div>
    </div>
  );
}
