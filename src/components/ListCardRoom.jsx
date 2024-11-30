import React from "react";
import styles from "./ListCardRoom.module.css";
import { useParams } from "react-router-dom";
import CardTypeRoom from "./CardTypeRoom.jsx";
import { FaArrowRight, FaX } from "react-icons/fa6";
import imgP from "../assets/image/home/heading-border.webp";
import Button from "./Button.jsx";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../Store/boatroom/cartSlice";

function ListCardRoom({ dataCardBoat }) {
  const { slug } = useParams();
  const dispatch = useDispatch();

  const filterData = dataCardBoat.data.filter((item) => slug === item.slug);
  const reset = () => {
    dispatch(cartActions.resetItem());
  };
  const totalBill = useSelector((state) => state.cart.totalAmount);

  return (
    <div className={styles.listCard}>
      <div className={styles.content}>
        <div className={styles.title}>
          <h4>Các loại phòng & giá</h4>
          <div>
            <img src={imgP} alt="''" />
          </div>
        </div>
      </div>
      <div className={` bg_image ${styles.roomList}`}>
        <div className={styles.resetList}>
          <Button paddingType="paddingSmall" colorType="normal" onClick={reset}>
            <FaX />
            <div className="sm">Xoá lựa chọn</div>
          </Button>
        </div>
        <div className={styles.detailList}>
          {filterData[0]?.boatRoom.map((item, index) => (
            <CardTypeRoom item={item} key={index} />
          ))}
        </div>
        <div className={styles.footerList}>
          <div>
            <div className={`sm ${styles.totalTitle}`}>Tổng tiền</div>
            <div className={`lg ${styles.price}`}>
              {new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" }).format(totalBill).replace(/\./g, ",")}
            </div>
          </div>
          <div className={styles.buttonList}>
            <Button paddingType="paddingBig" colorType="normal">
              <div className="md">Thuê Trọn Tàu</div>
            </Button>
            <Button paddingType="paddingBig" colorType="blue">
              <div className="md">Đặt Ngay</div>
              <FaArrowRight />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListCardRoom;
