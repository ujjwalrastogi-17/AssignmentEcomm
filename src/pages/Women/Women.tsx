import { Drawer } from "@mui/material";
import SideNavContent from "./components/SideNavContent";
import { useAppSelector } from "../../redux/hooks";
import { useAppDispatch } from "../../redux/hooks";
import { setShowSideNav } from "../../redux/slices/SideNavMenuSlice";
import CardGrid from "./components/CardGrid";

export default function Women() {
  const dispatch = useAppDispatch();
  const show = useAppSelector((state) => state.ShowSideNavBar.showSideNavOpen);

  return (
    <div className=" gap-[50px] mt-[30px] flex w-[90%] mx-auto">
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
        <CardGrid />
      </div>
    </div>
  );
}
