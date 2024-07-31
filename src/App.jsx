import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageNotFound from "./pages/PageNotFound";
import HomePage from "./pages/HomePage";
import FindBoat from "./pages/FindBoat";
import FindPlane from "./pages/FindPlane";
import Introduce from "./pages/Introduce";
import Blog from "./pages/Blog";
import AppLayout from "./components/AppLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          {/* <Route index element={<Navigate to="homepage" />}> */}
          <Route path="/" element={<HomePage />} />
          <Route path="findboat" element={<FindBoat />} />
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
