import React from "react";
import logo from "../assets/image/header/cabin-001.jpg";
import styles from "./AvatarUser.module.css";

function AvatarUser() {
  return (
    <div className={styles.avatarUser}>
      <img src={logo} alt="logo header" />
      <span>Vũ ngô</span>
    </div>
  );
}

export default AvatarUser;
