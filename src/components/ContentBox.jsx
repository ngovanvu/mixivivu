import React from "react";
import style from "./ContentBox.module.css";
import imgP from "../assets/image/home/heading-border.webp";
function ContentBox({ title1, title2, desc }) {
  return (
    <div className={style.header}>
      <div className={style.title}>
        <h4>
          {title1}
          <br />
          {title2}
        </h4>
        <div>
          <img src={imgP} alt="''" />
        </div>
      </div>
      <div className={`lg ${style.description}`}>{desc}</div>
    </div>
  );
}

export default ContentBox;
