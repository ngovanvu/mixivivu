import React, { useCallback } from "react";
import styles from "./BoxFeatures.module.css";
import { Link, Element, animateScroll as scroll } from "react-scroll";
import MenuContent from "./MenuContent/MenuContent";
import MenuScroll from "./MenuContent/MenuScroll";
const BoxFeatures = () => {
  return (
    <div className={` ${styles.boxFeature} container section `}>
      {/* Navbar Buttons */}
      <MenuScroll />
      {/* Sections */}
      <MenuContent />
    </div>
  );
};

export default BoxFeatures;
