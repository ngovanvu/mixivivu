import { BiChevronDown, BiDollarCircle } from "react-icons/bi";
import style from "./DropDown.module.css";
import { forwardRef } from "react";

function DropDown(props, ref) {
  const { toggleMenu, money, selectedOption, handleInputChange } = props;
  return (
    <>
      <div className={style.boxFilter} onClick={toggleMenu}>
        <div>
          <label htmlFor="price" className={style.price}>
            <BiDollarCircle className={style.icon} />
            <input value={selectedOption} type="button" className={style.price_title} />
            <BiChevronDown className={style.icon} />
          </label>
        </div>

        <div className={style.dropdown} ref={ref}>
          {/* <div
                className={style.dropdown_item}
                onClick={() => {
                  setSelectedOption("Tất cả mức giá");
                  setSelectedOption1("");
                }}
              >
                {selectedOption}
              </div> */}
          {money &&
            money.map((option) => (
              <div className={style.dropdown_item} onClick={() => handleInputChange(option)}>
                {option.label}
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default forwardRef(DropDown);
