import React from "react";
import style from "./Logo.module.css";
import logo from "./../assets/image/header/38309c2b-3bf5-49ce-ba9d-67b662f65b0b.jfif";
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
