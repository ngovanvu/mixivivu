import React from "react";
import styles from "./CheckboxTicket.module.css";
import { FaCheck } from "react-icons/fa6";

function CheckboxTicket({ setcheckboxCheap, checkboxCheap }) {
  return (
    <label htmlFor="checkMark" className={styles.ticket}>
      <input id="checkMark" type="checkbox" name="type" onChange={() => setcheckboxCheap(!checkboxCheap)} />
      <span className={styles.checkmark}>
        <FaCheck />
      </span>
      <div className={styles.textItem}>
        <div className={styles.itemTitle}> Vé rẻ nhất tháng </div>
      </div>
    </label>
  );
}

export default CheckboxTicket;
