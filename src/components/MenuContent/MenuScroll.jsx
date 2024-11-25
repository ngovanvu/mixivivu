import React from "react";
import { Link } from "react-scroll";
import styles from "./MenuScroll.module.css";

function MenuScroll() {
  return (
    <div>
      <Link className="nav-link" to="home" smooth={true} duration={50} spy={true} offset={-50}>
        Home
      </Link>
      <Link className="nav-link" to="skills" smooth={true} duration={50} spy={true} offset={-100}>
        Skills
      </Link>
      <Link className="nav-link" to="projects" smooth={true} duration={50} spy={true} offset={-50}>
        Projects
      </Link>
    </div>
  );
}

export default MenuScroll;
