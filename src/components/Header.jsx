import React, { useEffect, useRef } from "react";
import PageNav from "./PageNav";
import Logo from "./Logo";
import HeaderUser from "./HeaderUser";
import style from "./Header.module.css";
import ToggleMenu from "./ToggleMenu";
import PageNavMobile from "./PageNavMobile";

function Header() {
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const toggleMenu = () => menuRef.current.classList.toggle("show__menu");

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
        headerRef?.current.classList?.add(style.header__shrink);
      } else {
        headerRef?.current.classList?.remove(style.header__shrink);
      }
    });

    return () => window.removeEventListener("scroll", null);
  }, []);
  return (
    <div className={style.header} ref={headerRef}>
      <div className={`container ${style.container}`}>
        <div className={`gap-40 ${style.header_menu}`}>
          <Logo />
          <PageNav />
          <div ref={menuRef} className={style.naviMobile} onClick={toggleMenu}>
            <PageNavMobile />
          </div>
        </div>
        <HeaderUser toggleMenu={toggleMenu} />
      </div>
    </div>
  );
}

export default Header;
