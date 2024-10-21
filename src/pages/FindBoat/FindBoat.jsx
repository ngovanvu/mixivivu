import React, { useCallback, useEffect, useRef, useState } from "react";
import BoxSearch from "../../components/BoxSearch";
import styles from "./FindBoat.module.css";
import { createMedia } from "@artsy/fresnel";
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";

const { MediaContextProvider, Media } = createMedia({
  // breakpoints values can be either strings or integers
  breakpoints: {
    sm: 0,
    md: 768,
    lg: 1024,
    xl: 1192,
  },
});
function FindBoat() {
  const [isOpen, setIsOpen] = useState(false);
  const [menuHeight, setMenuHeight] = useState(0);
  const dropdownMenuRef = useRef(null);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  // console.log(dropdownMenuRef.current.scrollHeight, menuHeight);

  //dropdownMenuRef.current.scrollHeight láy kích thước của menu(cố định không thay đổi khi thay đổi kích thước màn hinh)
  // Hàm tính lại chiều cao khi có thay đổi kích thước hoặc mở/đóng dropdown
  const updateMenuHeight = useCallback(() => {
    if (dropdownMenuRef.current) {
      if (isOpen) {
        setMenuHeight(dropdownMenuRef.current.scrollHeight);
      } else {
        setMenuHeight(0);
      }
    }
  }, [isOpen]);

  useEffect(() => {
    updateMenuHeight(); // Cập nhật chiều cao khi mở/đóng

    // Lắng nghe sự kiện thay đổi kích thước màn hình
    window.addEventListener("resize", updateMenuHeight);

    // Dọn dẹp khi component unmount
    return () => {
      window.removeEventListener("resize", updateMenuHeight);
    };
  }, [updateMenuHeight]);
  return (
    <MediaContextProvider>
      <div className={styles.background}>
        <div className={`container ${styles.pageBoat}`}>
          <Media lessThan="lg">
            <div className={styles.dropdown}>
              <div className={styles.detailDrop}>
                <div className={styles.customHeader} onClick={toggleDropdown}>
                  <div className={styles.header}>
                    <div className={styles.title}>Tìm kiếm</div>
                    {isOpen ? <FaAngleUp /> : <FaAngleDown />}
                  </div>
                </div>

                <div
                  className={styles.body}
                  ref={dropdownMenuRef}
                  style={{
                    height: `${menuHeight}px`,
                    overflow: isOpen ? "" : "hidden",
                    transition: "height 0.25s ease",
                  }}
                >
                  <div>
                    <div className={styles.mobileSearch}>
                      <BoxSearch
                        title={"Bạn lựa chọn du thuyền Hạ Long nào?"}
                        desc={"Hơn 100 tour du thuyền hạng sang giá tốt đang chờ bạn"}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Media>
          <Media greaterThanOrEqual="lg">
            <div className={styles.searchbox}>
              <div className={`${styles.card} ${styles.searchboxMobile}`}>
                <BoxSearch
                  title={"Bạn lựa chọn du thuyền Hạ Long nào?"}
                  desc={"Hơn 100 tour du thuyền hạng sang giá tốt đang chờ bạn"}
                />
              </div>
            </div>
          </Media>
        </div>
      </div>
    </MediaContextProvider>
  );
}

export default FindBoat;
