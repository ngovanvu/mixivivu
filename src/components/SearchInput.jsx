import React from "react";
import style from "./SearchInput.module.css";
import { BsSearch } from "react-icons/bs";
import { NavLink } from "react-router-dom";
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
            <div className={style.dropdown}>
              {filteredProducts?.map((product) => (
                <NavLink to={`/duthuyen/${product.path}`}>
                  {" "}
                  <div className={`${style.dropdown_item}`} key={product.id}>
                    {product.title}
                  </div>
                </NavLink>
              ))}
            </div>
          </div>
        )}
        {filteredProducts.length === 0 && <h1>Không có dữ liệu</h1>}
      </div>
    </>
  );
}

export default SearchInput;
