import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageNotFound from "./pages/PageNotFound";
import Introduce from "./pages/Introduce";
import Blog from "./pages/Blog";
import AppLayout from "./components/AppLayout";
import HomePage from "./pages/Home/HomePage";
import FiandBoatPage from "./pages/FindBoat/FiandBoatPage";
import FindBoatDetail from "./pages/FindBoat/FindBoatDetailPage";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ScrollToTop from "./components/ScrollTotop/ScrollToTop";
import FindPlanePage from "./pages/FindPlane/FindPlanePage";
import ContactPage from "./pages/Contact/ContactPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop /> {/* Gọi ScrollToTop để cuộn lên đầu */}
        <Routes>
          <Route element={<AppLayout />}>
            {/* <Route index element={<Navigate to="homepage" />}> */}
            <Route path="/" element={<HomePage />} />
            <Route path="findboat" element={<FiandBoatPage />} />
            <Route path="findboat/:slug" element={<FindBoatDetail />} />
            <Route path="findplane" element={<FindPlanePage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="introduce" element={<Introduce />} />
            <Route path="blog" element={<Blog />} />
            {/* </Route> */}
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
