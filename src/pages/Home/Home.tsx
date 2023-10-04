import TopBanner from "./components/TopBanner/TopBanner";
import MustHaves from "./components/MustHaves/MustHaves";
import Trends from "./components/Trends/Trends";
import { TrendCards1, TrendCards2 } from "./utils/DummyData";
import MagSafe from "./components/MagSafe/MagSafe";
import Top100 from "./components/Top100/Top100";
import { Drawer } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { setShowSideNav } from "../../redux/slices/SideNavMenuSlice";
import SideNav from "./components/SideNav/SideNav";
// import Arrange from "./components/components/Arrange";

export default function Home() {
  const dispatch = useAppDispatch();

  const show = useAppSelector((state) => state.ShowSideNavBar.showSideNavOpen);

  return (
    <div className="flex flex-col gap-[50px]">
      <div className="sidebar hidden sm:flex justify-center min-w-[300px] w-[100%]">
        <Drawer
          anchor="left"
          open={show}
          onClose={() => {
            dispatch(setShowSideNav(false));
          }}
          className="w-[100%]"
          PaperProps={{ style: { width: "100%" } }}
        >
          <SideNav />
        </Drawer>
      </div>

      {/* <Arrange /> */}

      <TopBanner />
      <MustHaves />
      <Top100 />
      <Trends arr={TrendCards1} />
      <MagSafe />
      <Trends arr={TrendCards2} />
    </div>
  );
}
