import { useAppSelector } from "../../../redux/hooks";
// import ComponentCard from '../../ComponentCard/ComponentCard';
// import Card from '../../ComponentFavorites/components/Card';
import NewCard from "../../ComponentFavorites/components/NewCard";

export default function Favorites() {
  const productArr = useAppSelector((state) => state.ProductArray.ProductArray);
  const favArr = productArr.filter((item) => item.inFav === true);
  return (
    <div className=" py-2 flex my-[30px] bg-black flex-col w-[300px] z-[100] ">
      {favArr.length > 0 ? (
        favArr.map((item) => {
          return <NewCard Card={item} />;
        })
      ) : (
        <div className=" bg-blue-500 h-[50px] p-4 w-[100%] flex justify-center">
          <p className=" text-white font-lato">Your Cart is Empty!</p>
        </div>
      )}
    </div>
  );
}
