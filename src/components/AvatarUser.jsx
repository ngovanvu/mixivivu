import React from "react";
import logo from "../assets/image/header/cabin-001.jpg";
import style from "./AvatarUser.module.css";

function AvatarUser() {
  return (
    <div className={style.avatarUser}>
      <img src={logo} alt="logo header" />
      <span>Vũ ngô</span>
    </div>
  );
}

export default AvatarUser;
