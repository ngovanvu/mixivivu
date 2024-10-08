import React from "react";
import Banner from "./Banner";
import PolularShips from "./PolularShips";
import Review from "./Review";
import Destinations from "./Destinations";

function HomePage() {
  return (
    <div>
      <Banner />
      <PolularShips />
      <Review />
      <Destinations />
    </div>
  );
}

export default HomePage;
