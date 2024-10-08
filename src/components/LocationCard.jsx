import React from "react";
import style from "./LocationCard.module.css";
import Button from "./Button";

function LocationCard({ locate }) {
  console.log(locate);

  return (
    <div className={style.destination_card}>
      <div className={style.destination_image}>
        <div className={style.cardImage}>
          <img className={style.image} alt="mixivivu" src={locate.image} width="100%" height="100%" loading="lazy" />
        </div>
      </div>
      <div className={style.destination_body}>
        <h6>{locate.label}</h6>
      </div>
      <div className={style.destination_footer}>
        <Button paddingType="paddingSmall" colorType="normal">
          <div className="sm">Xem ngay</div>
        </Button>
      </div>
    </div>
  );
}

export default LocationCard;
