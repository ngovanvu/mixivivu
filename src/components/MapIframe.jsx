import React from "react";
import Iframe from "react-iframe";
import styles from "./MapIframe.module.css";

function MapIframe({ baseSrc }) {
  // Xây dựng URL động

  return (
    <Iframe
      src={baseSrc}
      height="300"
      width="100%"
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade" // Chú ý camelCase ở đây
      className={styles.located}
    />
  );
}

export default MapIframe;
