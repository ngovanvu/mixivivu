import React from "react";
import AvatarUser from "./AvatarUser";
import MenuUser from "./MenuUser";
import styles from "./HeaderUser.module.css";
import ToggleMenu from "./ToggleMenu";

function HeaderUser({ toggleMenu }) {
  return (
    <div className={styles.menu}>
      <AvatarUser />
      <MenuUser />
      <ToggleMenu toggleMenu={toggleMenu} />
    </div>
  );
}

export default HeaderUser;
