import { useAppSelector } from "../../../../../redux/hooks";
import ComponentCard from "../../../../../common/ComponentCard/ComponentCard";
export default function CardList() {
  const prodArr = useAppSelector((state) => state.ProductArray.ProductArray);

  return (
    <div className="flex custom-scrollbar  overflow-x-scroll w-[90%] sm:w-[90%] gap-[30px] lg:overflow-x-scroll  m-auto md:justify-around lg:justify-start">
      {prodArr.map((card) => {
        return <ComponentCard width_sm={300} width_lg={300} Card={card} />;
      })}
    </div>
  );
}
