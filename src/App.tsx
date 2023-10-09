import "./App.css";
import ComponentCategories from "./common/ComponentCategories/ComponentCategories";
import ComponentFooter from "./common/ComponentFooter/ComponentFooter";
import ComponentLowerNav from "./common/ComponentLowerNav/ComponentLowerNav";
import ComponentNavbar from "./common/ComponentNavbar/ComponentNavbar";
import RouteManager from "./routes/RouteManager";

function App() {
  return (
    <div className="flex flex-col gap-[20px]">
      <ComponentNavbar />
      <ComponentLowerNav />
      Ujjwal
      <ComponentCategories />
      <RouteManager />
      <ComponentFooter />
    </div>
  );
}

export default App;
