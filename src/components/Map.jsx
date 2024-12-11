import React from "react";
import imgP from "../assets/image/home/heading-border.webp";
import styles from "./Map.module.css";
import { FaXmark } from "react-icons/fa6";
import { FaExclamationCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
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
      <div className={styles.body}>
        <div className={styles.alert}>
          <div className={styles.closeBtn}>
            <FaXmark />
          </div>
          <div>
            <FaExclamationCircle />
          </div>
          <div>
            <span className="sm">Thông tin cần biết:</span>
            <div className={styles.alertContent}>
              <ul>
                <li>
                  Du thuyền Du thuyền Indochine xuất phát từ Số 22, Bến 2, Cảng Tuần Châu, Hạ Long, Quảng Ninh, Việt Nam{" "}
                </li>
                <li>
                  Bạn có thể xem chi tiết lịch trình 2 ngày 1 đêm..{" "}
                  <Link
                    to={"https://docs.google.com/document/d/1BTmNBsUUyDWMI3KgnjD3h1UiEkYvRvdAWhz2VF2ahMY/edit?usp=sharing"}
                    target="_blank"
                  >
                    tại đây
                  </Link>
                  .
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Map;
