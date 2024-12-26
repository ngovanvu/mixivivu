import React from "react";

import styles from "./HeaderUser.module.css";
import ToggleMenu from "./ToggleMenu";
import ContactHeader from "./ContactHeader";

function HeaderUser({ toggleMenu }) {
  return (
    <div className={styles.menu}>
      {/* <AvatarUser /> */}
      {/* <MenuUser /> */}
      <ContactHeader />
      <ToggleMenu toggleMenu={toggleMenu} />
    </div>
  );
}

export default HeaderUser;
