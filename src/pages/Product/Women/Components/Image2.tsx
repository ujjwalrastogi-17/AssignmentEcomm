

interface Props {
  Img: string;
}

export default function Image2({ Img }: Props) {
  return (
    <div className="flex flex-col-reverse w-[500px] h-[500px] sm:flex-row  border gap-[5px] justify-end sm:justify-between">
      {/* <div className="selector border-2  w-[100%] h-[100%] mx-auto my-0 flex sm:flex-col justify-between"></div> */}
      <div className=" mx-auto my-0  w-[100%] h-[100%] ">
        <img src={Img} className=" w-[100%] h-[100%] " alt="" />
      </div>
    </div>
  );
}
