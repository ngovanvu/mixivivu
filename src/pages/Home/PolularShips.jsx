import React from "react";
import style from "./PolularShips.module.css";
import ProductCard from "../../components/ProductCard";
import Button from "../../components/Button";
import { FaArrowRight } from "react-icons/fa6";
import ContentBox from "../../components/ContentBox";
import dataCardBoat from "../../data/dataCardBoat.js";

function PolularShips() {
  const currentData = dataCardBoat.data.slice(0, 6);
  return (
    <div className={style.popularShipSections}>
      <div className="container section">
        <ContentBox
          title1={"Du thuyền mới"}
          title2={"và phổ biến nhất"}
          desc={
            "Tận hưởng sự xa hoa và đẳng cấp tối đa trên du thuyền mới nhất và phổ biến nhất. Khám phá một hành trình tuyệt vời đưa bạn vào thế giới của sự sang trọng, tiện nghi và trải nghiệm không thể quên."
          }
        />
        {/* <div className={style.polularShips_cardList}> */}
        <ProductCard currentData={currentData} />
        {/* </div> */}
        <div className={style.polularShips_button}>
          <Button paddingType="paddingBig" colorType="normal">
            <div className="md">Xem tất cả Du thuyền</div>
            <FaArrowRight />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default PolularShips;
