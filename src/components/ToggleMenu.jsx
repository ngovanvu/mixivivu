import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import style from "./ToggleMenu.module.css";

function ToggleMenu({ toggleMenu }) {
  return (
    <div className={style.toggle_Menu}>
      <RxHamburgerMenu onClick={toggleMenu} />
    </div>
  );
}

export default ToggleMenu;
