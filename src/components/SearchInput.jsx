import React from "react";
import styles from "./SearchInput.module.css";
import { BsSearch } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import mixiSad from "../assets/image/header/buon_transparent.png";
function SearchInput({ searchText = "", handleSearchText = () => {}, filteredProducts = [] }) {
  return (
    <>
      {/* <div className={styles.search_box}> */}
      <div className={styles.search_input}>
        <div>
          <label htmlFor="cardLabel" className={styles.card_label}>
            <BsSearch className={styles.icon} />
            <input placeholder="Nhập tên du thuyền" type="text" value={searchText} onChange={handleSearchText} />
          </label>
        </div>
        {/* </div> */}

        {searchText !== "" && (
          <div className={styles.box_dropdown}>
            <div className={styles.dropdownInput}>
              {filteredProducts?.map((product, index) => (
                <NavLink to={`/duthuyen${product.path}`} key={index}>
                  {" "}
                  <div className={styles.dropdown_item}>{product.title}</div>
                </NavLink>
              ))}
            </div>
          </div>
        )}
        {filteredProducts.length === 0 && (
          <div className={styles.dropdownInput}>
            <div className={styles.dropdown_InputItem}>
              <div className={styles.dropdown_img}>
                <img alt="mixivivu" src={mixiSad} width="100%" height="100%" loading="lazy" />
              </div>
              <p>Không tìm thấy kết quả</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default SearchInput;
