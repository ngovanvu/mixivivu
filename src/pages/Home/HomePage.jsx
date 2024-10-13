import React from "react";
import Banner from "./Banner";
import PolularShips from "./PolularShips";
import Review from "./Review";
import Destinations from "./Destinations";
import Partner from "./Partner";

function HomePage() {
  return (
    <div>
      <Banner />
      <PolularShips />
      <Review />
      <Destinations />
      <Partner />
    </div>
  );
}

export default HomePage;
