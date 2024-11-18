import { BiChevronDown, BiDollarCircle } from "react-icons/bi";
import styles from "./DropDown.module.css";
import { useState } from "react";

const DropDown = (props) => {
  const { data, selectedOption, handleInputChange } = props;
  const [isDropdown, setIsDropdwon] = useState(false);
  const handleToggleDropdown = () => {
    setIsDropdwon((prev) => !prev);
  };
  return (
    <>
      <div className={styles.boxFilter} onClick={() => handleToggleDropdown()}>
        <div>
          <label htmlFor="price" className={styles.price}>
            <BiDollarCircle className={styles.icon} />
            <input value={selectedOption} type="button" className={styles.price_title} />
            <BiChevronDown className={styles.icon} />
          </label>
        </div>

        <div className={styles.box_dropdown}>
          <div className={`${styles.dropdown} ${isDropdown ? styles.dropdownOption : ""}`}>
            {data &&
              data.map((option, index) => (
                <div
                  key={index}
                  className={`${styles.dropdown_item} ${option.label === selectedOption ? styles.active_option : ""} `}
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
};

export default DropDown;
