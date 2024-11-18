import React from "react";
import FindBoat from "./FindBoat";
import styles from "./FiandBoatPage.module.css";
import CardBoat from "./CardBoat";

function FiandBoatPage() {
  return (
    <div className={styles.background}>
      <div className={`container ${styles.pageBoat}`}>
        <FindBoat />
        <CardBoat />
      </div>
    </div>
  );
}

export default FiandBoatPage;
