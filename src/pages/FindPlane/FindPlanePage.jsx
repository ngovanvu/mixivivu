import React, { useEffect, useState } from "react";
import BannerPlane from "./BannerPlane";
import Review from "../Home/Review";
import Partner from "../Home/Partner";
import styles from "./FindPlanePage.module.css";
import Loading from "../../components/Loading";

function FindPlanePage() {
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
          <BannerPlane />
          <div className={styles.reviewSection}>
            <Review />
          </div>
          <Partner />
        </div>
      )}
    </>
  );
}

export default FindPlanePage;
