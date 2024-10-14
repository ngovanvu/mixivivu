import React from "react";
import Banner from "./Banner";
import PolularShips from "./PolularShips";
import Review from "./Review";
import Destinations from "./Destinations";
import Partner from "./Partner";
import News from "./News";

function HomePage() {
  return (
    <div>
      <Banner />
      <PolularShips />
      <Review />
      <Destinations />
      <Partner />
      <News />
    </div>
  );
}

export default HomePage;
