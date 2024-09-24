import React from "react";
import style from "./SearchInput.module.css";
import { BsSearch } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import mixiSad from "../assets/image/header/buon_transparent.png";
function SearchInput({ searchText, handleSearchText, filteredProducts }) {
  return (
    <>
      {/* <div className={style.search_box}> */}
      <div className={style.search_input}>
        <div>
          <label htmlFor="cardLabel" className={style.card_label}>
            <BsSearch className={style.icon} />
            <input placeholder="Nhập tên du thuyền" type="text" value={searchText} onChange={handleSearchText} />
          </label>
        </div>
        {/* </div> */}

        {searchText !== "" && (
          <div className={style.box_dropdown}>
            <div className={style.dropdownInput}>
              {filteredProducts?.map((product) => (
                <NavLink to={`/duthuyen${product.path}`}>
                  {" "}
                  <div className={style.dropdown_item} key={product.id}>
                    {product.title}
                  </div>
                </NavLink>
              ))}
            </div>
          </div>
        )}
        {filteredProducts.length === 0 && (
          <div className={style.dropdownInput}>
            <div className={style.dropdown_InputItem}>
              <div className={style.dropdown_img}>
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
