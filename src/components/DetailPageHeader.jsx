import React from "react";
import styles from "./DetailPageHeader.module.css";
import { FaAnchor, FaRegStar } from "react-icons/fa";
import { Link } from "react-scroll";
import imgP from "../assets/image/home/heading-border.webp";

function DetailPageHeader({ filterData }) {
  // console.log("filterData", filterData);
  const { name, price, star } = filterData;
  return (
    <div className="container">
      <div className={styles.navigation}>
        <div className={styles.sectionHeader}>
          <div className={styles.sectionTitle}>
            <h4>
              <div>
                <div className={styles.title}>
                  <h4>Du thuyền Heritage Bình Chuẩn Cát Bà</h4>
                  <div className={styles.bageList}>
                    <div className={styles.bageStar}>
                      <FaRegStar />
                      <span className="sm">{star} (11 đánh giá)</span>
                    </div>
                    <Link className="nav-link" to="projects" smooth={true} duration={50} spy={true} offset={-50}>
                      <div className={styles.bageDesc}>
                        <FaAnchor />
                        <span className="sm">Lux Cruises, Lô 28 Cảng Quốc Tế Tuần Châu</span>
                        <Link className="nav-link" to="projects" smooth={true} duration={50} spy={true} offset={-50}>
                          Xem bản đồ và lịch trình
                        </Link>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </h4>
            <div>
              <img src={imgP} alt="''" />
            </div>
          </div>
        </div>
        <h4 className={styles.price}>
          {new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" }).format(price).replace(/\./g, ",")} / khách{" "}
        </h4>
      </div>
    </div>
  );
}

export default DetailPageHeader;
