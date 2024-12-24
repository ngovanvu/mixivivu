import React from "react";
import styles from "./SideBar.module.css";
import { FaAnchor, FaBox, FaBriefcase, FaLocationDot, FaShip } from "react-icons/fa6";

function SideBar({ data }) {
  return (
    <div className={styles.card}>
      <div className={styles.header}>Thông tin du thuyền</div>
      <div className={styles.content}>
        <div className={styles.item}>
          <div className={styles.title}>
            <FaAnchor />
            <p>Hạ Thủy</p>
          </div>
          <span className="md">{data.year}</span>
        </div>
        <div className={styles.item}>
          <div className={styles.title}>
            <FaBox />
            <p>Cabin</p>
          </div>
          <span className="md">{data.cabin}</span>
        </div>{" "}
        <div className={styles.item}>
          <div className={styles.title}>
            <FaShip />
            <p>Thân Vỏ</p>
          </div>
          <span className="md">{data.material}</span>
        </div>{" "}
        <div className={styles.item}>
          <div className={styles.title}>
            <FaLocationDot />
            <p>Hành Trình</p>
          </div>
          <span className="md">{data.trip}</span>
        </div>{" "}
        <div className={styles.item}>
          <div className={styles.title}>
            <FaBriefcase />
            <p>Điều Hành</p>
          </div>
          <span className="md">{data.executive}</span>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
