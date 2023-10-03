import { useAppSelector } from "../../../redux/hooks";
import NewCard from "../../ComponentFavorites/components/NewCard";

export default function Favorites() {
  const productArr = useAppSelector((state) => state.ProductArray.ProductArray);
  const favArr = productArr.filter((item) => item.inFav === true);
  return (
    <div className=" flex  bg-slate-800 gap-[20px]  w-[] flex-col p-3 z-[100] ">
      {favArr.length > 0 ? (
        favArr.map((item) => {
          return <NewCard Card={item} />;
        })
      ) : (
        <div className="w-[100%] m-auto text-white font-lato font-bold text-[20px] leading-[30px] py-2">
        You haven't favlisted items Yet :(( !{" "}
      </div>
      )}
    </div>
  );
}
