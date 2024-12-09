import React, { useCallback } from "react";
import styles from "./BoxFeatures.module.css";
import { Link, Element, animateScroll as scroll } from "react-scroll";
import MenuContent from "./MenuContent/MenuContent";
import MenuScroll from "./MenuContent/MenuScroll";
const BoxFeatures = ({ filterData }) => {
  return (
    <div className={`container   ${styles.boxFeature} `}>
      {/* Navbar Buttons */}
      <MenuScroll />
      {/* Sections */}
      <MenuContent filterData={filterData} />
    </div>
  );
};

export default BoxFeatures;
