import { BiChevronDown, BiDollarCircle } from "react-icons/bi";
import style from "./DropDown.module.css";
import { forwardRef, useState } from "react";

const DropDown = forwardRef((props) => {
  const { data, selectedOption, handleInputChange } = props;
  const [isDropdown, setIsDropdwon] = useState(false);
  const handleToggleDropdown = () => {
    setIsDropdwon((prev) => !prev);
  };
  return (
    <>
      <div className={style.boxFilter}>
        <div>
          <label htmlFor="price" className={style.price} onClick={() => handleToggleDropdown()}>
            <BiDollarCircle className={style.icon} />
            <input value={selectedOption} type="button" className={style.price_title} />
            <BiChevronDown className={style.icon} />
          </label>
        </div>

        <div className={style.box_dropdown}>
          <div className={`${style.dropdown} ${isDropdown ? style.dropdownOption : ""}`}>
            {data &&
              data.map((option, index) => (
                <div
                  key={index}
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
});

export default DropDown;
