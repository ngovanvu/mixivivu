import React from "react";
import imgP from "../assets/image/home/heading-border.webp";
import styles from "./Map.module.css";

function Map() {
  return (
    <div>
      <div className={styles.header}>
        <div className={styles.title}>
          <h4>Đặc điểm nổi bật</h4>
          <div>
            {" "}
            <img src={imgP} alt="''" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Map;
