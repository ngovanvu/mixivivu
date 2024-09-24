import React from "react";
import style from "./PolularShips.module.css";
import imgP from "../../assets/image/home/heading-border.webp";
import ProductCard from "../../components/ProductCard";
import Button from "../../components/Button";
import { FaArrowRight } from "react-icons/fa6";

function PolularShips() {
  return (
    <div className={style.popularShipSections}>
      <div className={`container ${style.popularSections}`}>
        <div className={style.popularHeader}>
          <div className={style.popularHeader_title}>
            <h4>
              Du thuyền mới
              <br />
              và phổ biến nhất
            </h4>
            <div>
              {" "}
              <span>
                <img src={imgP} alt="''" />
              </span>{" "}
            </div>
          </div>
          <div className={`letter_lg ${style.popularHeader_desc}`}>
            Tận hưởng sự xa hoa và đẳng cấp tối đa trên du thuyền mới nhất và phổ biến nhất. Khám phá một hành trình tuyệt
            vời đưa bạn vào thế giới của sự sang trọng, tiện nghi và trải nghiệm không thể quên.
          </div>
        </div>
        <div className={style.polularShips_cardList}>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
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
