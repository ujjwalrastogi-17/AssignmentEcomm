import { Route, Routes } from "react-router-dom";

import Home from "../../pages/Home/Home";
// import NoResults from "../../pages/NoResults/NoResults";
import Women from "../../pages/Women/Women";
import ProductWomen from "../../pages/Product/Women/ProductWomen";
import ComponentRaw from "../../common/ComponentRaw/ComponentRaw";
import CheckOut from "../../pages/CheckOUt/CheckOut";
// import NoResults from "../../pages/NoResults/NoResults";

const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="wom" element={<Women />}>
        <Route path="prod/:id" element={<ProductWomen />} />
      </Route> */}

      <Route path="women" element={<Women />} />
      <Route path=":id" element={<ProductWomen />} />

      <Route path="fav" element={<ComponentRaw />} />
      <Route path="checkout" element={<CheckOut />} />
      {/* <Route path="*" element={<NoResults />} /> */}
    </Routes>
  );
};

export default PublicRoutes;
