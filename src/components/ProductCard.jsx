import React from "react";
import style from "./ProductCard.module.css";
import { FaPeriscope, FaShip } from "react-icons/fa6";
import Button from "./Button";
function ProductCard(currentData) {
  return (
    <div className={style.productCard_cardList}>
      {currentData &&
        currentData.currentData.map((data, index) => (
          <div className={`${style.polularShips_cardGrid} ${style.polularShips_cardLayout}`} key={index}>
            <div className={style.productCard_cardImageWrapper}>
              <div className={style.productCard_imageWrapper}>
                <img
                  className={style.productCard_image}
                  alt="mixivivu"
                  src={data.image}
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
                  <span className="xs">{data.located}</span>
                </div>
                <p className={style.productCard_cardTitle}>{data.name}</p>
                <div className={style.productCard_cardDesc}>
                  <FaShip />
                  <p className="sm">{data.infor}</p>
                </div>
              </div>
              <div className={style.productCard_cardFooter}>
                <div>
                  <div>
                    <p className={style.productCard_cardprice}>
                      {" "}
                      {new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" })
                        .format(data.price)
                        .replace(/\./g, ",")}{" "}
                      / khách{" "}
                    </p>
                  </div>
                </div>
                <Button paddingType="paddingNormal" colorType="blue">
                  <div className="sm">Đặt Ngay</div>
                </Button>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}

export default ProductCard;
