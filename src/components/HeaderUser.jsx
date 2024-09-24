import React from "react";
import AvatarUser from "./AvatarUser";
import MenuUser from "./MenuUser";
import style from "./HeaderUser.module.css";
import ToggleMenu from "./ToggleMenu";

function HeaderUser({ toggleMenu }) {
  return (
    <div className={style.menu}>
      <AvatarUser />
      <MenuUser />
      <ToggleMenu toggleMenu={toggleMenu} />
    </div>
  );
}

export default HeaderUser;
