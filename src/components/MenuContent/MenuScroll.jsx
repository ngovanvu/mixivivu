import React from "react";
import { Link } from "react-scroll";
import styles from "./MenuScroll.module.css";

function MenuScroll() {
  return (
    <div className={styles.listTabs}>
      <div>
        <div className={styles.tabsHeader}>
          <Link
            className="nav-link"
            to="feature"
            smooth={true}
            duration={50}
            spy={true}
            offset={-200}
            activeClass={styles.active}
          >
            <div className={styles.tabsItem}>Đặc Điểm</div>
          </Link>
          <Link
            className="nav-link"
            to="roomPrice"
            smooth={true}
            duration={50}
            spy={true}
            offset={-200}
            activeClass={styles.active}
          >
            <div className={styles.tabsItem}>Phòng & giá</div>
          </Link>

          <Link
            className="nav-link"
            to="review"
            smooth={true}
            duration={50}
            spy={true}
            offset={-200}
            activeClass={styles.active}
          >
            <div className={styles.tabsItem}>
              Đánh Giá
              {/* <div className={styles.numsReview}>
                <span className="xs">7</span>
              </div> */}
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MenuScroll;
