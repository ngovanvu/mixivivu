import { BiChevronDown, BiDollarCircle } from "react-icons/bi";
import style from "./DropDown.module.css";
import { forwardRef, useState } from "react";

function DropDown(props, ref) {
  const { toggleMenu, data, selectedOption, handleInputChange } = props;
  const [isActive, setIsActive] = useState(false);
  const handleToggleActive = () => {
    setIsActive((prev) => !prev);
    toggleMenu();
  };
  return (
    <>
      <div className={style.boxFilter} onClick={handleToggleActive}>
        <div>
          <label htmlFor="price" className={`${style.price} ${isActive ? style.active : ""}`}>
            <BiDollarCircle className={style.icon} />
            <input value={selectedOption} type="button" className={style.price_title} />
            <BiChevronDown className={style.icon} />
          </label>
        </div>

        <div className={style.box_dropdown} ref={ref}>
          <div className={style.dropdown}>
            {data &&
              data.map((option) => (
                <div
                  key={option.value}
                  className={`${style.dropdown_item} ${option.label === selectedOption ? style.active_option : ""} `}
                  onClick={() => handleInputChange(option)}
                >
                  {option.label}
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default forwardRef(DropDown);