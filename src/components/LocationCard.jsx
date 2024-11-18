import React from "react";
import styles from "./LocationCard.module.css";
import Button from "./Button";

function LocationCard({ locate }) {
  return (
    <div className={styles.destination_card}>
      <div className={styles.destination_image}>
        <div className={styles.cardImage}>
          <img className={styles.image} alt="mixivivu" src={locate.image} width="100%" height="100%" loading="lazy" />
        </div>
      </div>
      <div className={styles.destination_body}>
        <h6>{locate.label}</h6>
      </div>
      <div className={styles.destination_footer}>
        <Button paddingType="paddingSmall" colorType="normal">
          <div className="sm">Xem ngay</div>
        </Button>
      </div>
    </div>
  );
}

export default LocationCard;
