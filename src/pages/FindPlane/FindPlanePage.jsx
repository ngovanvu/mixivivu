import React from "react";
import BannerPlane from "./BannerPlane";
import Review from "../Home/Review";
import Partner from "../Home/Partner";
import styles from "./FindPlanePage.module.css";

function FindPlanePage() {
  return (
    <div>
      <BannerPlane />
      <div className={styles.reviewSection}>
        <Review />
      </div>
      <Partner />
    </div>
  );
}

export default FindPlanePage;
