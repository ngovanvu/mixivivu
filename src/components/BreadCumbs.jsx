import React from "react";
import styles from "./BreadCumbs.module.css";
import { Link } from "react-router-dom";

import { FaAngleRight, FaShop } from "react-icons/fa6";
function BreadCumbs({ breadLink, filterData }) {
  return (
    <div className={styles.breadCrumbsWrapper}>
      <div className={`${styles.breadCrumbs} container `}>
        <div className={styles.breadCrumbsContent}>
          <Link to="/">
            <div className={styles.breadCrumbsIcon}>
              <FaShop />
            </div>
          </Link>

          <Link to="/findboat">
            <div className={styles.breadCrumbsTitle}>
              <FaAngleRight />
              <div className={styles.breadCrumbsLink}>{breadLink}</div>
            </div>
          </Link>
          <Link to={`/findboat/${filterData.slug}`}>
            <div className={styles.breadCrumbsTitle}>
              <FaAngleRight />
              <div className={styles.title}>{filterData.name}</div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BreadCumbs;
