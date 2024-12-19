import React from "react";
import styles from "./Feature.module.css";
import imgP from "../assets/image/home/heading-border.webp";
import { FaCheck } from "react-icons/fa6";

function Feature({ data }) {
  const dataLabel = data.label.slice(0, Math.min(6, data.label.length));
  const dataOverView = data.overview.slice(0, Math.min(4, data.label.length));
  // console.log(dataOverView);

  return (
    <div className={styles.feature}>
      <div className={styles.header}>
        <div className={styles.title}>
          <h4>Đặc điểm nổi bật</h4>
          <div>
            {" "}
            <img src={imgP} alt="''" />
          </div>
        </div>
      </div>
      <div className={styles.overview}>
        {dataLabel &&
          dataLabel.map((item, index) => (
            <div className={styles.item} key={index}>
              <div className={styles.icon}>
                <img src={item.icon} alt="''" />
              </div>
              <span className="md">{item.feature}</span>
            </div>
          ))}
      </div>
      <div className={styles.footer}>
        {dataOverView &&
          dataOverView.map((item, index) => (
            <div className={styles.desc} key={index}>
              <div>
                <FaCheck />
              </div>
              <p className="md">{item.desc}</p>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Feature;
