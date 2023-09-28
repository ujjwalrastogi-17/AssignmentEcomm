import { useAppSelector } from "../../redux/hooks";
import Card from "./components/Card";

export default function ComponentFavorites() {
  const productArr = useAppSelector((state) => state.ProductArray.ProductArray);
  const favArr = productArr.filter((item) => item.inFav);

  return (
    <div>
      {favArr ? (
        favArr.map((item) => {
          return <Card Card={item} />;
        })
      ) : (
        <div></div>
      )}
    </div>
  );
}
