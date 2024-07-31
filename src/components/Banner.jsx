import React, { useRef, useState } from "react";
import bannervid from "../assets/image/header/Mixivivuduthuyen.mp4";
import style from "./Banner.module.css";
import { BsSearch } from "react-icons/bs";
import { useNavigate, useSearchParams } from "react-router-dom";
import { BiChevronDown, BiDollarCircle } from "react-icons/bi";
import DropDown from "./DropDown";

const products = [
  {
    id: "01",
    title: "Du thuyền Heritage  Bình Chuẩn Cát Bà",
  },
  {
    id: "02",
    title: "Du thuyền Indochine",
  },
  {
    id: "03",
    title: "Du thuyền Le Theatre",
  },
  {
    id: "04",
    title: "Du thuyền Orchid Trendy",
  },
  {
    id: "05",
    title: "Du thuyền Milalux",
  },
  {
    id: "06",
    title: "Du thuyền Paradise Elegance Hạ Long",
  },
  {
    id: "07",
    title: "Du thuyền Paradise Peak",
  },
  {
    id: "08",
    title: "Du thuyền Aspira",
  },
  {
    id: "09",
    title: "Du thuyền La Pandora",
  },
];
const located = [
  {
    id: "01",
    title: "Vịnh Hạ Long",
  },
  {
    id: "02",
    title: "Vịnh Lan Hạ",
  },
  {
    id: "03",
    title: "Đảo Cát Bà",
  },
];
const money = [
  {
    value: "",
    label: "Tất cả mức giá",
  },
  {
    value: "1000000-3000000",
    label: "Từ 1 đến 3 triệu",
  },
  {
    value: "3000000-6000000",
    label: "Từ 3 đến 6 triệu",
  },
  {
    value: "6000000",
    label: "Trên 6 triệu",
  },
];

function Banner() {
  const [test, setTest] = useState("");
  const [selectedOption, setSelectedOption] = useState("Tất cả mức giá");
  const [selectedOption1, setSelectedOption1] = useState("");
  const navigate = useNavigate();
  const menuRef = useRef(null);
  const toggleMenu = () => menuRef.current.classList.toggle("show__menu");

  const filteredProducts = products.filter((product) => product.title.toLowerCase().includes(test.toLowerCase()));

  let [greater_defaultPrice, lower_defaultPrice] = selectedOption1.split("-");
  const currentUrlParams = new URLSearchParams(window.location.search);
  const handlesubmit = () => {
    if (test) {
      currentUrlParams.set("title", test);
    }
    if (greater_defaultPrice) {
      currentUrlParams.set("greater_defaultPrice", greater_defaultPrice);
    }
    if (lower_defaultPrice) {
      currentUrlParams.set("lower_defaultPrice", lower_defaultPrice);
    }
    navigate({
      pathname: "/findboat",
      search: currentUrlParams.toString(),
    });

    if (selectedOption1 === "" && test === "") {
      navigate("/findboat");
    }
  };
  const handleInputChange = (option) => {
    setSelectedOption(option.label);
    setSelectedOption1(option.value);
  };

  return (
    <div className={style.banner_vid}>
      <video autoPlay loop muted src={bannervid} className={style.video}></video>
      <div className={style.card}>
        <div className={style.card_content}>
          <h4>Bạn lựa chọn du thuyền Hạ Long nào?</h4>
          <p>Hơn 100 tour du thuyền hạng sang giá tốt đang chờ bạn</p>
        </div>

        <div className={style.search}>
          {/* <div className={style.search_box}> */}
          <div className={style.search_input}>
            <div>
              <label htmlFor="cardLabel" className={style.card_label}>
                <BsSearch className={style.icon} />
                <input placeholder="Nhập tên du thuyền" type="text" value={test} onChange={(e) => setTest(e.target.value)} />
              </label>
            </div>
            {/* </div> */}

            {test !== "" && (
              <ul>
                {filteredProducts.map((product) => (
                  <li key={product.id}>{product.title}</li>
                ))}
              </ul>
            )}

            {filteredProducts.length === 0 && <h1>Không có dữ liệu</h1>}
          </div>

          <DropDown
            ref={menuRef}
            toggleMenu={toggleMenu}
            money={money}
            selectedOption={selectedOption}
            handleInputChange={handleInputChange}
          />

          {/* <div className={style.boxFilter} onClick={toggleMenu}>
            <div>
              <label htmlFor="price" className={style.price}>
                <BiDollarCircle className={style.icon} />
                <input value={selectedOption} type="button" className={style.price_title} />
                <BiChevronDown className={style.icon} />
              </label>
            </div>

            <div className={style.dropdown} ref={menuRef}>
              <div
                className={style.dropdown_item}
                onClick={() => {
                  setSelectedOption("Tất cả mức giá");
                  setSelectedOption1("");
                }}
              >
                {selectedOption}
              </div>
              {money &&
                money.map((option) => (
                  <div
                    className={style.dropdown_item}
                    onClick={() => {
                      setSelectedOption(option.label);
                      setSelectedOption1(option.value);
                    }}
                  >
                    {option.label}
                  </div>
                ))}
            </div>
          </div> */}

          <button onClick={handlesubmit}>a</button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
