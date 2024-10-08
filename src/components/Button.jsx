import React from "react";
import styles from "./Button.module.css";

function Button(props) {
  const { children, paddingType, colorType, onClick, index, currentTestimonialIndex, active } = props;

  const paddingClass =
    paddingType === "paddingBig"
      ? styles.paddingBig
      : paddingType === "paddingSmall"
      ? styles.paddingSmall
      : paddingType === "paddingNormal"
      ? styles.paddingNormal
      : "";
  const colorClass =
    colorType === "blue"
      ? styles.colorBlue
      : colorType === "normal"
      ? styles.colorNormal
      : colorType === "pink"
      ? styles.colorPink
      : "";

  const activeClass = active ? (index === currentTestimonialIndex ? styles.activeButton : "") : "";
  //   const inlineStyle = {};
  // const fontClass = isFontBig ? styles.buttonFontBig : styles.buttonFontNormal;
  return (
    <button
      onClick={onClick}
      className={`${colorClass ? colorClass : ""} ${paddingClass ? paddingClass : ""} ${styles.buttonFlex} ${activeClass} `}
      // style={inlineStyle} // Áp dụng inline CSS cho font-size
    >
      {children}
    </button>
  );
}
export default Button;
