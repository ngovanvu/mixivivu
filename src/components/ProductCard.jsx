import React from "react";
import style from "./ProductCard.module.css";
import cardImage from "../assets/image/card/no53ab0y526yl825.webp";
import { FaPeriscope, FaShip } from "react-icons/fa6";
import Button from "./Button";
function ProductCard() {
  return (
    <div className={style.productCard_cardList}>
      <div className={`${style.polularShips_cardGrid} ${style.polularShips_cardLayout}`}>
        <div className={style.productCard_cardImageWrapper}>
          <div className={style.productCard_imageWrapper}>
            <img
              className={style.productCard_image}
              alt="mixivivu"
              src={cardImage}
              width="100%"
              height="100%"
              loading="lazy"
            />
          </div>
        </div>

        <div className={style.productCard_cardContent}>
          <div className={style.productCard_cardBody}>
            <div className={style.productCard_cardLocated}>
              <FaPeriscope />
              <span className="xs">Vịnh Hạ Long</span>
            </div>
            <p className={style.productCard_cardTitle}>Du thuyền Heritage Bình Chuẩn Cát Bà</p>
            <div className={style.productCard_cardDesc}>
              <FaShip />
              <p class="sm">Hạ thuỷ 2019 - Tàu vỏ Kim loại - 20 phòng</p>
            </div>
          </div>
          <div className={style.productCard_cardFooter}>
            <div>
              <div>
                <p className={style.productCard_cardprice}>3,675,000đ / khách </p>
              </div>
            </div>
            <Button paddingType="paddingNormal" colorType="blue">
              <div className="sm">Đặt Ngay</div>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
