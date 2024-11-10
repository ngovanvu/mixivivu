import React from "react";
import styles from "./Checkbox.module.css";

function Checkbox({ data, handleCheckboxChange, labels, selected }) {
  console.log(selected[labels]);

  return (
    <div className={styles.checkbox}>
      <label className="md">Xếp hạng sao</label>
      {data &&
        data.map((item, index) => (
          <label htmlFor="checkbox" className={styles.item} key={index}>
            <input
              type="checkbox"
              onChange={() => handleCheckboxChange(labels, item.option)}
              checked={selected[labels]?.includes(item.option)}
            />
            {/* tạo checkbox riêng */}
            <span className={styles.checkmark}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M4 12.6111L8.92308 17.5L20 6.5"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </span>
            <div className={styles.textItem}>
              <div className={styles.itemTitle}>{labels === "stars" ? `${item.option} sao` : item.option} </div>
            </div>
          </label>
        ))}
    </div>
  );
}

export default Checkbox;
