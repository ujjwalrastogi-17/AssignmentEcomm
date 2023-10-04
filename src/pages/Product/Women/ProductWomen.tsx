import MainDesc from "./Components/MainDesc";
import MoreDesc from "./Components/MoreDesc";
import OtherProd from "./Components/OtherProd";
import { useParams } from "react-router-dom";
import { useAppSelector } from "../../../redux/hooks";
import Image2 from "./Components/Image2";

export default function ProductWomen() {
  const prodArray = useAppSelector((state) => state.ProductArray.ProductArray);
  const params = useParams();
  if (!params.id) {
    return <div>Product not found.</div>;
  }

  const prodId = parseInt(params.id);
  const Card = prodArray.find((item) => item.id === prodId);
  return (
    <div className="flex md:mt-[100px] w-[100%] sm:w-[90%] mx-auto flex-col gap-[50px]">
      {Card && (
        <div className="flex relative flex-col w-[80%] mx-auto justify-center gap-[20px] sm:gap-0 sm:flex-row">
          <Image2 Img={Card.img} Imgs={Card.imgArray} />
          <MainDesc Card={Card} />
        </div>
      )}
      <div className="blackline w-[100%] border"></div>
      <MoreDesc />
      <OtherProd />
    </div>
  );
}
