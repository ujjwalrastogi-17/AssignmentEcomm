import OthProdCard from "./OthProdCard";

export default function OtherProd() {
  return (
    <div className="w-[90%] flex flex-col gap-[20px] m-auto sm:w-[100%]">
      <h3>You might also like</h3>
      <div className="flex flex-wrap justify-between">
        <OthProdCard/>
        <OthProdCard/>
        <OthProdCard/>
        <OthProdCard/>
      </div>
    </div>
  );
}
