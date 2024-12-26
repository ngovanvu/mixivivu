import React, { useEffect, useRef } from "react";
import PageNav from "./PageNav";
import Logo from "./Logo";
import HeaderUser from "./HeaderUser";
import styles from "./Header.module.css";
import PageNavMobile from "./PageNavMobile";

function Header() {
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const toggleMenu = () => menuRef.current.classList.toggle("show__menu");

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
        headerRef?.current?.classList?.add(styles.header__shrink);
      } else {
        headerRef?.current?.classList?.remove(styles.header__shrink);
      }
    });

    return () => window.removeEventListener("scroll", null);
  }, []);
  return (
    <div className={styles.header} ref={headerRef}>
      <div className={`container ${styles.container}`}>
        <div className={`gap-40 ${styles.header_menu}`}>
          <Logo />
          <PageNav />
          <div ref={menuRef} className={styles.naviMobile} onClick={toggleMenu}>
            <PageNavMobile />
          </div>
        </div>
        <HeaderUser toggleMenu={toggleMenu} />
      </div>
    </div>
  );
}

export default Header;
