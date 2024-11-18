import React from "react";
import { HiOutlineSun, HiOutlineUser } from "react-icons/hi";
import { HiArrowLeftOnRectangle } from "react-icons/hi2";
import styles from "./MenuUser.module.css";

function MenuUser() {
  return (
    <ul className={styles.menu}>
      <li>
        <HiOutlineUser />
      </li>
      <li>
        <HiOutlineSun />
      </li>
      <li>
        <HiArrowLeftOnRectangle />
      </li>
    </ul>
  );
}

export default MenuUser;
