import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./CardTypeRoom.module.css";
import { cartActions } from "../Store/boatroom/cartSlice";

import { IoBedOutline, IoPersonOutline } from "react-icons/io5";
import { FaMinus, FaPlus } from "react-icons/fa6";
import Button from "./Button";
import RoomBoatModal from "./Modal/RoomBoatModal";

function CardTypeRoom({ item }) {
  const [showRoom, setShowRoom] = useState(false);
  const { id, title, price, max, size, image, detailImage, label } = item;

  const dispatch = useDispatch();

  const cartProducts = useSelector((state) => state.cart.boatItems);
  // const showRoom = useSelector((state) => state.toggle.roomIsVisible);

  // Tìm sản phẩm hiện tại trong giỏ hàng
  const currentProduct = cartProducts.find((product) => product.id === id);
  const quantity = currentProduct ? currentProduct.quantity : 0;
  const totalItems = currentProduct ? currentProduct.totalPrice : 0;

  const create = () => {
    dispatch(cartActions.addItem(item));
  };
  const minus = () => {
    dispatch(cartActions.minusItem(item));
  };
  const toggleRoom = () => {
    setShowRoom((prev) => !prev);
  };

  return (
    <div>
      <div className={styles.roomCard}>
        <div className={styles.wrapper}>
          <div className={styles.roomImage}>
            <img className={styles.image} alt="mixivivu" src={image} width="100%" height="100%" loading="lazy" />
          </div>
        </div>
        <div className={styles.roomDetail}>
          <p className={styles.title} onClick={toggleRoom}>
            {title}
          </p>
          <div className={styles.roomInfo}>
            <div className={styles.item}>
              <IoBedOutline />
              <p>{size} m²</p>
            </div>
            <div className={styles.item}>
              <p className="sm">Tối đa:</p>
              <div className={styles.user}>
                <p className="sm">{max}</p>
                <IoPersonOutline />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.totalRoom}>
          <div className={styles.total}>
            <div>
              <div className={styles.price}>
                {new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" }).format(price).replace(/\./g, ",")}
              </div>
              <div className={styles.user}>/khách</div>
            </div>
            <div>
              <div className={styles.price}>
                {new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" })
                  .format(totalItems)
                  .replace(/\./g, ",")}
              </div>
            </div>
          </div>
          <Button paddingType="paddingBig" colorType="normal">
            <div className={styles.icon} onClick={minus}>
              <FaMinus />
            </div>
            <div className={`${styles.icon} md`}>{quantity}</div>
            <div className={styles.icon} onClick={create}>
              <FaPlus />
            </div>
          </Button>
        </div>
      </div>
      <RoomBoatModal
        label={label}
        detailImage={detailImage}
        title={title}
        size={size}
        max={max}
        quantity={quantity}
        minus={minus}
        create={create}
        toggleRoom={toggleRoom}
        showRoom={showRoom}
      />
    </div>
  );
}

export default CardTypeRoom;
