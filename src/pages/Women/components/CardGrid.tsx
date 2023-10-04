// import { useAppSelector } from "../../../redux/hooks";
import ComponentCard from "../../../common/ComponentCard/ComponentCard";
// import Arrange from "../../Home/components/components/Arrange";
// import { useEffect, useState } from "react";
import { ProductType } from "../../../utils/type/type";

interface Props{
  arr: Array<ProductType>
}

export default function CardGrid({arr}:Props) {
  // const productArr = useAppSelector((state) => state.ProductArray.ProductArray);
  // const [sortedProducts, setSortedProducts] =
  //   useState<ProductType[]>(productArr);
  // const [age, setAge] = useState("");

  // useEffect(() => {
  //   if (age === "10") {
  //     const customSort = (a: ProductType, b: ProductType) => {
  //       if (a.anyOffer && a.offerPrice && !b.anyOffer) {
  //         return a.offerPrice - b.price;
  //       } else if (!a.anyOffer && b.anyOffer && b.offerPrice) {
  //         return a.price - b.offerPrice;
  //       } else {
  //         return a.price - b.price;
  //       }
  //     };

  //     const sortedArray = [...productArr].sort(customSort);
  //     setSortedProducts(sortedArray);
  //   } else if (age === "20") {
  //     const customSort = (a: ProductType, b: ProductType) => {
  //       if (a.anyOffer && a.offerPrice && !b.anyOffer) {
  //         return b.price - a.offerPrice;
  //       } else if (!a.anyOffer && b.anyOffer && b.offerPrice) {
  //         return b.offerPrice - a.price;
  //       } else {
  //         return b.price - a.price;
  //       }
  //     };

  //     const sortedArray = [...productArr].sort(customSort);
  //     setSortedProducts(sortedArray);
  //   } else {
  //     setSortedProducts([...productArr]);
  //   }
  // }, [age, productArr]);

  return (
    <div className="flex flex-col gap-[50px] justify-start items-start">
      {/* <div className="w-[100%] flex justify-end items-end">
        <Arrange age={age} setAge={setAge} />
      </div> */}
      <div className="flex flex-wrap h-[127vh] custom-scrollbar md:justify-evenly overflow-y-scroll  justify-center 2xl:justify-start gap-[20px] xl:gap-[30px] w-[100%]">
        {arr.map((card) => {
          return <ComponentCard Card={card} width_lg={500} width_sm={300} />;
        })}
      </div>
    </div>
  );
}
