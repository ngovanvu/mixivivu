import React, { useState } from "react";
import styles from "./BoxSearch.module.css";
import { useNavigate } from "react-router-dom";
import SearchInput from "./SearchInput";
import DropDown from "./DropDown";

const products = [
  {
    id: "01",
    title: "Du thuyền Heritage  Bình Chuẩn Cát Bà",
    path: "/du-thuyen-heritage-binh-chuan-cat-ba",
  },
  {
    id: "02",
    title: "Du thuyền Indochine",
    path: "/indochine-cruise",
  },
  {
    id: "03",
    title: "Du thuyền Le Theatre",
    path: "/le-theatre-cruises",
  },
  {
    id: "04",
    title: "Du thuyền Orchid Trendy",
    path: "/azalea-cruise",
  },
  {
    id: "05",
    title: "Du thuyền Milalux",
    path: "/pelican-halong-cruise1",
  },
  {
    id: "06",
    title: "Du thuyền Paradise Elegance Hạ Long",
    path: "/paradise-elegance-cruise-halong",
  },
  {
    id: "07",
    title: "Du thuyền Paradise Peak",
    path: "/paradise-peak-cruise",
  },
  {
    id: "08",
    title: "Du thuyền Aspira",
    path: "/aspira-cruises",
  },
  {
    id: "09",
    title: "Du thuyền La Pandora",
    path: "/La%20Pandora-Cruise",
  },
];
const located = [
  {
    value: "",
    label: "Tất cả địa điểm",
  },
  {
    value: "VHL",
    label: "Vịnh Hạ Long",
  },
  {
    value: "VLH",
    label: "Vịnh Lan Hạ",
  },
  {
    value: "ĐCB",
    label: "Đảo Cát Bà",
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

function BoxSearch({ title, desc }) {
  const [searchText, setSearchText] = useState("");
  const [selectedPriceOption, setSelectedPriceOption] = useState("Tất cả mức giá");
  const [priceRange, setPriceRange] = useState("");

  const [selectedLocationOption, setSelectedLocationOption] = useState("Tất cả địa điểm");
  const [location, setLocation] = useState("");

  const navigate = useNavigate();
  // const menuRef = useRef(null);
  // const locatedRef = useRef(null);

  // const toggleMenu = () => menuRef.current.classList.toggle("dropdown");
  // const toggleLocated = () => locatedRef.current.classList.toggle("dropdown");

  const filteredProducts = products.filter((product) => product.title.toLowerCase().includes(searchText.toLowerCase()));

  const currentUrlParams = new URLSearchParams(window.location.search);
  const handlesubmit = () => {
    if (location) {
      currentUrlParams.set("category", location);
    }

    if (searchText) {
      currentUrlParams.set("title", searchText);
    }
    if (priceRange) {
      let [greater_defaultPrice, lower_defaultPrice] = priceRange.split("-");
      currentUrlParams.set("greater_defaultPrice", greater_defaultPrice);
      if (lower_defaultPrice !== undefined) {
        currentUrlParams.set("lower_defaultPrice", lower_defaultPrice);
      }
    }

    navigate({
      pathname: "/findboat",
      search: currentUrlParams.toString(),
    });

    if (!priceRange && !searchText && !location) {
      navigate("/findboat");
    }
  };
  const handlePriceChange = (option) => {
    setSelectedPriceOption(option.label);
    setPriceRange(option.value);
  };
  const handleLocationChange = (option) => {
    setSelectedLocationOption(option.label);
    setLocation(option.value);
  };

  return (
    <>
      <div className={styles.card_content}>
        <h4>{title}</h4>
        <p>{desc}</p>
      </div>
      <div className={styles.search}>
        <SearchInput
          searchText={searchText}
          handleSearchText={(e) => setSearchText(e.target.value)}
          filteredProducts={filteredProducts}
        />

        <DropDown
          // ref={locatedRef}
          // toggleMenu={toggleLocated}
          data={located}
          selectedOption={selectedLocationOption}
          handleInputChange={handleLocationChange}
        />

        <DropDown
          // ref={menuRef}
          // toggleMenu={toggleMenu}
          data={money}
          selectedOption={selectedPriceOption}
          handleInputChange={handlePriceChange}
        />

        <button onClick={handlesubmit} className={styles.submit}>
          <div className={styles.submit_title}>Tìm kiếm</div>
        </button>
      </div>
    </>
  );
}

export default BoxSearch;
