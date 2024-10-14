import React from "react";
import style from "./Destinations.module.css";
import imgP from "../../assets/image/home/heading-border.webp";
import VHL from "../../assets/image/card_destination/VHL.jpg";
import VLH from "../../assets/image/card_destination/VLH.jpg";
import DCB from "../../assets/image/card_destination/CB.jpg";
import { NavLink } from "react-router-dom";
import LocationCard from "../../components/LocationCard";

const located = [
  {
    value: "",
    label: "Tất cả địa điểm",
  },
  {
    value: "VHL",
    label: "Vịnh Hạ Long",
    image: VHL,
  },
  {
    value: "VLH",
    label: "Vịnh Lan Hạ",
    image: VLH,
  },
  {
    value: "ĐCB",
    label: "Đảo Cát Bà",
    image: DCB,
  },
];

function Destinations() {
  const filteredLocated = located.filter((locate) => locate.value !== "");
  return (
    <div className={`container section ${style.box}`}>
      <div className={style.destination_Header}>
        <div className={style.title}>
          <h4>Các điểm đến của Mixivivu</h4>
        </div>
        <div className={`lg ${style.description}`}>
          Khám phá vẻ đẹp tuyệt vời của Du thuyền Hạ Long: Hành trình đến thiên đường thiên nhiên
        </div>
        <div>
          <img src={imgP} alt="" />
        </div>
      </div>

      <div className={style.destination_cardList}>
        {filteredLocated &&
          filteredLocated.map((locate, index) => (
            <NavLink to={`/findboat?category=${locate.value}`} key={index}>
              <LocationCard locate={locate} />
            </NavLink>
          ))}
      </div>
    </div>
  );
}

export default Destinations;
