import React from "react";
import { FaXmark, FaCheck, FaMinus, FaPlus } from "react-icons/fa6";
import { IoBedOutline, IoPersonOutline } from "react-icons/io5";
import styles from "./RoomBoatModal.module.css";
import Button from "../Button";
import SliderModal from "../SliderModal";

function RoomBoatModal(props) {
  const { label, max, title, size, quantity, minus, create, toggleRoom, showRoom, detailImage } = props;
  return (
    <div>
      <div className={`${styles.modalDark} ${showRoom ? styles.show : ""}`}>
        <div className={styles.modalContent}>
          <div>
            <div className={styles.modelBtn} onClick={toggleRoom}>
              <FaXmark />
            </div>
            <div className={styles.roomProduct}>
              <div className={styles.roomImage}>
                <SliderModal detailImage={detailImage} />
              </div>
              <div className={styles.roomContent}>
                <h6>{title}</h6>
                <div className={styles.roomDetailInfo}>
                  <div className={styles.infoItem}>
                    <IoBedOutline />
                    <p>{size} m²</p>
                  </div>
                  <div className={styles.infoItem}>
                    <p className="sm">Tối đa:</p>
                    <div className={styles.user}>
                      <p className="sm">{max}</p>
                      <IoPersonOutline />
                    </div>
                  </div>
                </div>
                <div className={styles.overview}>
                  {label &&
                    label.slice(0, 6).map((item, index) => (
                      <div className={styles.desc} key={index}>
                        <div>
                          <FaCheck />
                        </div>
                        <span className="lg">{item.feature}</span>
                      </div>
                    ))}
                </div>
                <div className={styles.chooseBtn}>
                  <Button paddingType="paddingBig" colorType="normal">
                    <div className={styles.iconDetail} onClick={minus}>
                      <FaMinus />
                    </div>
                    <div className={`${styles.iconDetail} lg`}>{quantity}</div>
                    <div className={styles.iconDetail} onClick={create}>
                      <FaPlus />
                    </div>
                  </Button>
                  <Button paddingType="paddingBig" colorType="blue" onClick={toggleRoom}>
                    <div className="lg">Chọn Phòng</div>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RoomBoatModal;
