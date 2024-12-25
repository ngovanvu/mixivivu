import React from "react";

import styles from "./HeaderUser.module.css";
import ToggleMenu from "./ToggleMenu";
import Contact from "./contact";

function HeaderUser({ toggleMenu }) {
  return (
    <div className={styles.menu}>
      {/* <AvatarUser /> */}
      {/* <MenuUser /> */}
      <Contact />
      <ToggleMenu toggleMenu={toggleMenu} />
    </div>
  );
}

export default HeaderUser;
