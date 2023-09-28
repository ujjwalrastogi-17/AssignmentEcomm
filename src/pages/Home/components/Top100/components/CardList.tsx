import { useAppSelector } from "../../../../../redux/hooks";
import ComponentCard from "../../../../../common/ComponentCard/ComponentCard";
// imoort girlPhoto
export default function CardList() {
  const prodArr = useAppSelector((state) => state.ProductArray.ProductArray);

  return (
    <div className="flex custom-scrollbar  overflow-x-scroll w-[100%] sm:w-[90%] gap-[50px] lg:overflow-x-scroll  m-auto md:justify-around lg:justify-between">
      {prodArr.map((card) => {
        return <ComponentCard width_sm={250} width_lg={250} Card={card} />;
      })}
    </div>
  );
}
