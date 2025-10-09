import React from "react";

import styles from "./HeaderUser.module.css";
import ToggleMenu from "./ToggleMenu";
// import ContactHeader from "./ContactHeader";
import MenuUser from "./MenuUser";
import AvatarUser from "./AvatarUser";

function HeaderUser({ toggleMenu }) {
  return (
    <div className={styles.menu}>
      <AvatarUser />
      <MenuUser />
      {/* <ContactHeader /> */}
      <ToggleMenu toggleMenu={toggleMenu} />
    </div>
  );
}

export default HeaderUser;
