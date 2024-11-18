import React from "react";
import styles from "./BoxFeatures.module.css";

function BoxFeatures() {
  return (
    <div className="container section">
      <div className={styles.featureTab}>
        <div className={styles.tabHeader}>
          <div>
            {/* <button type="button" className={styles.tabButton}>
              Đặc điểm
            </button> */}
  
          </div>
        </div>
      </div>
      <div className={styles.feature}></div>
    </div>
  );
}

export default BoxFeatures;
