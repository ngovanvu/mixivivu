import React from "react";
import styles from "./Button.module.css";

function Button(props) {
  const { children, paddingType, colorType } = props;

  const paddingClass =
    paddingType === "paddingBig" ? styles.paddingBig : paddingType === "paddingNormal" ? styles.paddingNormal : "";
  const colorClass = colorType === "blue" ? styles.colorBlue : colorType === "normal" ? styles.colorNormal : "";
  //   const inlineStyle = {};
  // const fontClass = isFontBig ? styles.buttonFontBig : styles.buttonFontNormal;
  return (
    <button
      className={`${colorClass ? colorClass : ""} ${paddingClass ? paddingClass : ""} ${styles.buttonFlex} `}
      // style={inlineStyle} // Áp dụng inline CSS cho font-size
    >
      {children}
    </button>
  );
}
export default Button;
