import { pinkDress} from "../../../../assets/images";


export default function OthProdCard() {
  return (
    <div className="w-[100%] sm:w-[50%] min-w-[300px] lg:w-[23%] p-2 items-center justify-start gap-[30px] border flex">
      <div>
        <img src={pinkDress} alt="" />
      </div>
      <div className="flex w-[60%] flex-col gap-[10px]">
        <h3 className="text-text-color-light-primary-text font-lato text-14 font-bold leading-20">SHORT PRINTED DRESS</h3>
        <div className="flex w-[100%] justify-between">
          <h4 className="text-text-color-light-text-off-process font-lato text-14 font-bold leading-20">$69.99</h4>
          <h4 className="text-text-color-light-secondary-text font-lato text-12 font-normal leading-20 line-through">$129.99</h4>
          <h4 className=" bg-red-600 text-text-color-inside-inside font-Inter text-8 font-semibold leading-normal text-white">-40%</h4>
        </div>
        <div className="border h-[50px] w-[100%] flex justify-center gap-[10px] items-center">
          <p className="text-text-color-light-secondary-text font-lato text-14 font-bold leading-20">$39</p>
          <p className="text-text-color-light-primary-text text-right font-lato text-14 font-bold leading-20">Add to cart</p>
        </div>
      </div>
    </div>
  );
}
