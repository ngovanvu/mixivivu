import React, { useEffect, useState } from "react";
import Banner from "./Banner";
import PolularShips from "./PolularShips";
import Review from "./Review";
import Destinations from "./Destinations";
import Partner from "./Partner";
import News from "./News";
import Loading from "../../components/Loading";

function HomePage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Giả lập thời gian tải
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // 3 giây

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          <Banner />
          <PolularShips />
          <Review />
          <Destinations />
          <Partner />
          <News />
        </div>
      )}
    </>
  );
}

export default HomePage;
