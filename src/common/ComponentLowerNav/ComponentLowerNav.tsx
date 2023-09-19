import Title from "./components/Title";
import Coupons from "./components/Coupons";
import SideIcons from "./components/SideIcons";

export default function ComponentLowerNav() {
  return (
    <div className="w-[100%] hidden sm:block md:flex items-center h-[40px] lg:h-[100px] p-[10px] bg-black">
      <div className="w-[90%]   m-auto flex  items-center justify-between">
        <Title />
        <Coupons />
        <SideIcons />
      </div>
    </div>
  );
}
