import React from "react";
import styles from "./BannerPlane.module.css";
import { createMedia } from "@artsy/fresnel";
import bannervid from "../../assets/image/FindFlight/BannerPlane/Mixivivumaybay.mp4";
import FormPlane from "./FormPlane";

function BannerPlane() {
  return (
    <div>
      <div className={styles.banner_vid}>
        <video autoPlay loop muted src={bannervid} className={styles.video}></video>
        <div className={styles.card}>
          <FormPlane />
        </div>
      </div>
    </div>
  );
}

export default BannerPlane;
