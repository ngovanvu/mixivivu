import { FaAngleDown, FaFilter } from "react-icons/fa";
import styles from "./BoxMobileFiter.module.css";
import React, { useState } from "react";
import Checkbox from "../Checkbox";

function BoxMobileFiter({ dataStarRanking, dataUtilies, handleCheckboxChange, selected, handleReset }) {
  const [dropdownFilter, setDropdownFilter] = useState(false);

  const handleToggleFilter = () => {
    setDropdownFilter((prev) => !prev);
  };
  return (
    <div className={styles.buttonfilter}>
      <div className={styles.contentFilter}>
        <label htmlFor="filter" className={styles.filterLable} onClick={handleToggleFilter}>
          <FaFilter />
          <input value={"Bộ Lọc"} type="button" className={styles.filterTitle} readOnly />
          <FaAngleDown />
        </label>
        <div className={`${styles.dropdownCheckbox} ${dropdownFilter ? styles.show : ""}`}>
          <div className={styles.headerCard}>
            <div className={styles.titleCard}>Lọc kết quả</div>
            <div className={styles.reset} onClick={() => handleReset()}>
              Đặt lại
            </div>
          </div>
          <Checkbox data={dataStarRanking} handleCheckboxChange={handleCheckboxChange} labels="stars" selected={selected} />
          <Checkbox data={dataUtilies} handleCheckboxChange={handleCheckboxChange} labels="labels" selected={selected} />
        </div>
      </div>
    </div>
  );
}

export default BoxMobileFiter;
