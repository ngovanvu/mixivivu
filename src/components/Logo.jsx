import React from "react";
import style from "./Logo.module.css";
import logo from "./../assets/image/header/logo.jfif";
import { Link } from "react-router-dom";
function Logo() {
  return (
    <Link to="/">
      <div className={style.logo}>
        <img src={logo} alt="logo header" />
      </div>
    </Link>
  );
}

export default Logo;
