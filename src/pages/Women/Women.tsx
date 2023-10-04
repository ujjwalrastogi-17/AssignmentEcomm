import { Drawer } from "@mui/material";
import SideNavContent from "./components/SideNavContent";
import { useAppSelector } from "../../redux/hooks";
import { useAppDispatch } from "../../redux/hooks";
import { setShowSideNav } from "../../redux/slices/SideNavMenuSlice";
import CardGrid from "./components/CardGrid";
import Arrange from "../Home/components/components/Arrange";
import { useEffect, useState } from "react";
import { ProductType } from "../../utils/type/type";

export default function Women() {
  const productArr = useAppSelector((state) => state.ProductArray.ProductArray);
  const [sortedProducts, setSortedProducts] =
    useState<ProductType[]>(productArr);
  const [filter, setFilter] = useState("3");
  const dispatch = useAppDispatch();
  const show = useAppSelector((state) => state.ShowSideNavBar.showSideNavOpen);

  useEffect(() => {
    if (filter === "1") {
      const customSort = (a: ProductType, b: ProductType) => {
        if (a.anyOffer && a.offerPrice && !b.anyOffer) {
          return a.offerPrice - b.price;
        } else if (!a.anyOffer && b.anyOffer && b.offerPrice) {
          return a.price - b.offerPrice;
        } else {
          return a.price - b.price;
        }
      };

      const sortedArray = [...productArr].sort(customSort);
      setSortedProducts(sortedArray);
    } else if (filter === "2") {
      const customSort = (a: ProductType, b: ProductType) => {
        if (a.anyOffer && a.offerPrice && !b.anyOffer) {
          return b.price - a.offerPrice;
        } else if (!a.anyOffer && b.anyOffer && b.offerPrice) {
          return b.offerPrice - a.price;
        } else {
          return b.price - a.price;
        }
      };

      const sortedArray = [...productArr].sort(customSort);
      setSortedProducts(sortedArray);
    } else {
      setSortedProducts([...productArr]);
    }
  }, [filter, productArr]);

  return (
    <div className="flex flex-col w-[90%] mx-auto mt-[30px] gap-[20px]">
      <div className="w-[70%] lg:w-[100%] mx-auto flex justify-end">
        <Arrange filter={filter} setFilter={setFilter} />
      </div>
      <div className=" gap-[50px] flex w-[100%] mx-auto">
        <div className="sidebar hidden sm:flex justify-center min-w-[300px] w-[20%]">
          <Drawer
            anchor="left"
            open={show}
            onClose={() => {
              dispatch(setShowSideNav(false));
            }}
          >
            <SideNavContent visible={true} />
          </Drawer>
          <div className="onBig">
            <SideNavContent visible={false} />
          </div>
        </div>
        <div className="cards w-[90%] mx-auto xl:m-0">
          <CardGrid arr={sortedProducts} />
        </div>
      </div>
    </div>
  );
}
