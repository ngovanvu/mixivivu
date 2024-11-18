import React from "react";
import styles from "./ContentBox.module.css";
import imgP from "../assets/image/home/heading-border.webp";
function ContentBox({ title1, title2, desc }) {
  return (
    <div className={styles.header}>
      <div className={styles.title}>
        <h4>
          {title1}
          <br />
          {title2}
        </h4>
        <div>
          <img src={imgP} alt="''" />
        </div>
      </div>
      <div className={`lg ${styles.description}`}>{desc}</div>
    </div>
  );
}

export default ContentBox;
