import React from "react";
import styles from "./ProductCard.module.css";
import { FaPeriscope, FaShip } from "react-icons/fa6";
import Button from "./Button";
import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";
function ProductCard({ currentData }) {
  // console.log(currentData);

  return (
    <div className={styles.productCard_cardList}>
      {currentData &&
        currentData.map((data, index) => (
          <Link to={`/findboat/${data.slug}`} key={index}>
            <div className={`${styles.polularShips_cardGrid} ${styles.polularShips_cardLayout}`}>
              <div className={styles.productCard_cardImageWrapper}>
                <div className={styles.productCard_imageWrapper}>
                  <img
                    className={styles.productCard_image}
                    alt="mixivivu"
                    src={data.image}
                    width="100%"
                    height="100%"
                    loading="lazy"
                  />
                </div>
                <div className={styles.badge}>
                  <FaRegStar />
                  <span>{data.star} (11) đánh giá</span>
                </div>
              </div>

              <div className={styles.productCard_cardContent}>
                <div className={styles.productCard_cardBody}>
                  <div className={styles.productCard_cardLocated}>
                    <FaPeriscope />
                    <span className="xs">{data.located}</span>
                  </div>
                  <p className={styles.productCard_cardTitle}>{data.name}</p>
                  <div className={styles.productCard_cardDesc}>
                    <FaShip />
                    <p className="sm">{data.infor}</p>
                  </div>
                </div>
                <div className={styles.productCard_cardFooter}>
                  <div>
                    <div>
                      <p className={styles.productCard_cardprice}>
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
          </Link>
        ))}
    </div>
  );
}

export default ProductCard;
