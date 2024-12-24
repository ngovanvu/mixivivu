import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const location = useLocation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]); // Gọi lại khi đường dẫn thay đổi

  return null; // Không render gì ra UI
};

export default ScrollToTop;
