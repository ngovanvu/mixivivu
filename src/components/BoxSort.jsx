import React, { useCallback, useState } from "react";
import styles from "./BoxSort.module.css";
import { BiChevronDown } from "react-icons/bi";

function BoxSort(props) {
  const { dataSortCard, selectedSortOption, handleSortChange, setPrice } = props;
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = useCallback(() => {
    setIsDropdownOpen((prev) => !prev);
  }, []);

  return (
    <div className={styles.buttonSort}>
      {/* Dropdown toggle */}
      <div className={styles.contentSort} onClick={toggleDropdown}>
        <label htmlFor="content" className={styles.content}>
          <input
            value={selectedSortOption}
            type="button"
            className={styles.sortTitle}
            aria-haspopup="listbox"
            readOnly // Ngăn người dùng chỉnh sửa trực tiếp input
          />
          <BiChevronDown className={styles.icon} />
        </label>

        {/* Dropdown hiển thị khi mở */}
        <div className={`${styles.dropdown} ${isDropdownOpen ? styles.showSort : ""}`} role="listbox">
          {dataSortCard.map((option, index) => (
            <div
              key={index}
              className={`${styles.option} ${option.label === selectedSortOption ? styles.active : ""}`}
              role="option"
              aria-selected={option.label === selectedSortOption}
              aria-disabled={option.label === selectedSortOption}
              onClick={() => {
                if (option.label !== selectedSortOption) {
                  handleSortChange(option); // Thay đổi lựa chọn và đóng dropdown
                }
                setPrice(option.value);
              }}
            >
              {option.label}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BoxSort;
