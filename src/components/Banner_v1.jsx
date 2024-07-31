import React, { useState } from "react";
import bannervid from "../assets/image/header/Mixivivuduthuyen.mp4";
import style from "./Banner.module.css";
import { BsSearch } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { BiDollarCircle } from "react-icons/bi";

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
  // {
  //   value: "1000000-3000000",
  //   label: "Từ 1 đến 3 triệu",
  // },
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
  const navigate = useNavigate();

  const filteredProducts = products.filter((product) => product.title.toLowerCase().includes(test.toLowerCase()));
  const [selectedOptions, setSelectedOptions] = useState({
    option: "Tất cả các mức giá",
    optionValue: "",
  });
  const handleSelectChange = (label, value) => {
    setSelectedOptions({
      option: label,
      optionValue: value,
    });
  };
  let [greater_defaultPrice, lower_defaultPrice] = selectedOptions.optionValue.split("-");
  const currentUrlParams = new URLSearchParams(window.location.search);
  const handlesubmit = () => {
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

    if (selectedOptions.optionValue === "") {
      navigate("/findboat");
    }
  };

  return (
    <div className={style.banner_vid}>
      <video autoPlay loop muted src={bannervid} className={style.video}></video>
      <div className={style.card}>
        <div className={style.card_content}>
          <h4>Bạn lựa chọn du thuyền Hạ Long nào?</h4>
          <p>Hơn 100 tour du thuyền hạng sang giá tốt đang chờ bạn</p>
        </div>

        <div className={style.search_box}>
          <div className={style.search_input}>
            <label htmlFor="cardLabel" className={style.card_label}>
              <BsSearch className={style.icon} />
              <input placeholder="Nhập tên du thuyền" type="text" value={test} onChange={(e) => setTest(e.target.value)} />
            </label>
          </div>

          {test !== "" && (
            <ul>
              {filteredProducts.map((product) => (
                <li key={product.id}>{product.title}</li>
              ))}
            </ul>
          )}

          {filteredProducts.length === 0 && <h1>Không có dữ liệu</h1>}
        </div>

        <div>
          <BiDollarCircle />
          <select
            className={style.select_value}
            value={selectedOptions.option}
            onChange={(e) => {
              const selected = money.find((option) => option.label === e.target.value);
              handleSelectChange(selected.label, selected.value);
            }}
          >
            <option value="Tất cả các mức giá" className={style.option_value}>
              Tất cả các mức giá
            </option>
            {money &&
              money.map((option) => (
                <option key={option.value} value={option.label} className={style.option_value}>
                  {option.label}
                </option>
              ))}
          </select>
        </div>

        <button onClick={handlesubmit}>a</button>

        {/* <div>
          <select value={selectedOption} onChange={handleSelectChange}>
            <option value="all">Select an option</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
        </div> */}
      </div>
    </div>
  );
}

export default Banner;
