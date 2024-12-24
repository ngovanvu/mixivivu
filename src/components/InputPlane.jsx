import React, { useState } from "react";
import styles from "./InputPlane.module.css";
import mixiSad from "../assets/image/header/buon_transparent.png";
function InputPlane({ setValueInput, filLocation, searchText, setSearchText, icon, title }) {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className={styles.selectInput}>
      <div>
        <label htmlFor="departure" className={styles.inputGroup}>
          {icon}
          <input
            id="departure "
            placeholder="Vui lòng nhập điểm đi"
            autoComplete="off"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
              setShowDropdown(true); // Mở dropdown khi nhập liệu
            }}
            onBlur={() => setTimeout(() => setShowDropdown(false), 150)} // Đóng dropdown khi mất focus
            onFocus={() => setShowDropdown(true)} // Mở dropdown khi focus
          />
          <label htmlFor="departure " className="sm">
            {title}
          </label>
        </label>
      </div>

      {showDropdown && searchText !== "" && (
        <div className={styles.box_dropdown}>
          <div className={styles.dropdownInput}>
            {/* Kiểm tra nếu có kết quả */}
            {filLocation.length > 0 ? (
              filLocation.map((locate, index) => (
                <div
                  key={index}
                  className={styles.dropdown_item}
                  onClick={() => {
                    setSearchText(locate.label);
                    setValueInput(locate.value);
                    setShowDropdown(false); // Đóng dropdown khi chọn xong
                  }}
                >
                  {locate.label} - {locate.value}
                </div>
              ))
            ) : (
              // Thông báo khi không có kết quả
              <div className={styles.dropdown_InputItem}>
                <div className={styles.dropdown_img}>
                  <img alt="mixivivu" src={mixiSad} width="100%" height="100%" loading="lazy" />
                </div>
                <p>Không tìm thấy kết quả</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default InputPlane;
