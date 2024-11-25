import React from "react";
import styles from "./CardProductBoat.module.css";
import { FaPeriscope, FaRegStar, FaShip } from "react-icons/fa";
import Button from "./Button";
import { Link } from "react-router-dom";

function CardProductBoat(props) {
  const { currentData } = props;
  // console.log(currentData);

  return (
    <div className={styles.cardList}>
      {currentData &&
        currentData.map((boatCard, index) => (
          <Link to={boatCard.slug}>
            <div className={styles.boatList} key={index}>
              <div className={styles.cardlist}>
                <div className={styles.boatImage}>
                  <div className={styles.imageWapper}>
                    <img alt="mixivivu" src={boatCard.image} width="100%" height="100%" loading="lazy" />
                  </div>
                  <div className={styles.badge}>
                    <FaRegStar />
                    <span>4.9 (11) đánh giá</span>
                  </div>
                </div>

                <div className={styles.boatContent}>
                  <div className={styles.cardBody}>
                    <div className={styles.cardLocated}>
                      <FaPeriscope />
                      <span className="xs">{boatCard.located}</span>
                    </div>
                    <p className={styles.cardTitle}>{boatCard.name}</p>
                    <div className={styles.cardDesc}>
                      <FaShip />
                      <p className="sm">{boatCard.infor}</p>
                    </div>
                  </div>
                  {/* {boatCard.label.length > 0 && ( */}
                  <div className={styles.cardTag}>
                    {
                      <>
                        {boatCard.label.length > 5 ? (
                          <>
                            {boatCard.label.slice(0, 5).map((tag, index) => (
                              <div className={styles.badgeItem} key={index}>
                                <span className="xs">{tag}</span>
                              </div>
                            ))}
                            <div className={styles.badgeItem}>
                              <span className="xs">+{boatCard.label.length - 5}</span>
                            </div>
                          </>
                        ) : (
                          boatCard.label.map((tag, index) => (
                            <div className={styles.badgeItem} key={index}>
                              <span className="xs">{tag}</span>
                            </div>
                          ))
                        )}
                      </>
                    }
                  </div>
                  {/* )} */}

                  <div className={styles.cardFooter}>
                    <div>
                      <p className={styles.price}>
                        {new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" })
                          .format(boatCard.price)
                          .replace(/\./g, ",")}{" "}
                        / khách
                      </p>
                    </div>
                    <Button paddingType="paddingNormal" colorType="blue">
                      <div className="sm">Đặt Ngay</div>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
    </div>
  );
}

export default CardProductBoat;
