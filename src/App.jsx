import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageNotFound from "./pages/PageNotFound";
import FindPlane from "./pages/FindPlane";
import Introduce from "./pages/Introduce";
import Blog from "./pages/Blog";
import AppLayout from "./components/AppLayout";
import HomePage from "./pages/Home/HomePage";
import FiandBoatPage from "./pages/FindBoat/FiandBoatPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          {/* <Route index element={<Navigate to="homepage" />}> */}
          <Route path="/" element={<HomePage />} />
          <Route path="findboat" element={<FiandBoatPage />} />
          <Route path="findplane" element={<FindPlane />} />
          <Route path="introduce" element={<Introduce />} />
          <Route path="blog" element={<Blog />} />
          {/* </Route> */}
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
