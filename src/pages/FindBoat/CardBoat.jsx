import React, { useEffect, useRef, useState } from "react";
import styles from "./CardBoat.module.css";
import imgP from "../../assets/image/home/heading-border.webp";
import { BiChevronDown } from "react-icons/bi";
import BoLocXepHangSao from "./BoLocXepHangSao";

const dataSortCard = [
  {
    value: "",
    label: "Không sắp xếp",
  },
  {
    value: "min",
    label: "Giá thấp đến cao",
  },
  {
    value: "max",
    label: "Giá cao đến thấp",
  },
];
const dataPagination = {
  data: [
    { id: 1, name: "Product 1", star: [3, 4], label: ["Có bể sục", "Lễ tân 24 giờ"] },
    { id: 2, name: "Product 2", star: [4], label: ["Phòng gia đình"] },
    { id: 3, name: "Product 3", star: [5], label: ["Quầy bar", "Giáp biển"] },
    { id: 4, name: "Product 4", star: [3], label: [] },
    { id: 5, name: "Product 5", star: [4], label: ["Lễ tân 24 giờ"] },
    { id: 6, name: "Product 6", star: [3, 4, 5], label: ["Có bể sục", "Lễ tân 24 giờ"] },
    { id: 7, name: "Product 7", star: [4], label: ["Lễ tân 24 giờ"] },
    { id: 8, name: "Product 8", star: [3, 4, 5], label: ["Có bể sục", "Lễ tân 24 giờ"] },
    { id: 4, name: "Product 9", star: [3], label: [] },
    { id: 9, name: "Product 10", star: [4], label: ["Lễ tân 24 giờ"] },
    { id: 10, name: "Product 11", star: [3, 4, 5], label: ["Có bể sục", "Lễ tân 24 giờ"] },
  ],
  page: 1,
  per_page: 6,
  total: 12,
  total_pages: 2,
};

const dataCardBoat = [
  { id: 1, name: "Product 1", star: [3, 4], label: ["Có bể sục", "Lễ tân 24 giờ"] },
  { id: 2, name: "Product 2", star: [4], label: ["Phòng gia đình"] },
  { id: 3, name: "Product 3", star: [5], label: ["Quầy bar", "Giáp biển"] },
  { id: 4, name: "Product 4", star: [3], label: [] },
  { id: 5, name: "Product 5", star: [4], label: ["Lễ tân 24 giờ"] },
  { id: 6, name: "Product 6", star: [3, 4, 5], label: ["Có bể sục", "Lễ tân 24 giờ"] },
  { id: 7, name: "Product 7", star: [4], label: ["Lễ tân 24 giờ"] },
  { id: 8, name: "Product 8", star: [3, 4, 5], label: ["Có bể sục", "Lễ tân 24 giờ"] },
  { id: 4, name: "Product 9", star: [3], label: [] },
  { id: 9, name: "Product 10", star: [4], label: ["Lễ tân 24 giờ"] },
  { id: 10, name: "Product 11", star: [3, 4, 5], label: ["Có bể sục", "Lễ tân 24 giờ"] },
];
const dataStarRanking = [
  { id: 1, star: 3 },
  { id: 2, star: 4 },
  { id: 3, star: 5 },
];
const dataUtilies = [
  { id: 1, label: "Phòng gia đình" },
  { id: 2, label: "Có bể sục" },
  { id: 3, label: "Bao gồm tất cả các bữa ăn" },
  { id: 4, label: "Giáp biển" },
  { id: 5, label: "Quầy bar" },
  { id: 6, label: "Lễ tân 24 giờ" },
];
function CardBoat() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedSortOption, setSelectedSortOption] = useState(dataSortCard[0].label);
  const [value, setValue] = useState("");
  // const [selected, setSelected] = useState([]);
  const [selected, setSelected] = useState({
    stars: [],
    labels: [],
  });

  const dropdownRef = useRef(null);

  // Toggle trạng thái mở/đóng dropdown
  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  // Xử lý thay đổi lựa chọn
  const handleSortChange = (option) => {
    setSelectedSortOption(option.label);
    setValue(option.value);
    toggleDropdown();
  };

  // Lắng nghe sự kiện nhấp chuột bên ngoài dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false); // Đóng dropdown nếu nhấp bên ngoài
      }
    };

    // Gắn sự kiện khi component được render
    document.addEventListener("mousedown", handleClickOutside);

    // Xóa sự kiện khi component bị unmount để tránh rò rỉ bộ nhớ
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // checkbox
  // const handleCheckboxChange1 = (star) => {
  //   setSelected((preSelected) => {
  //     if (preSelected.includes(star)) {
  //       // Trả về mảng mới sau khi loại bỏ id
  //       return preSelected.filter((rating) => rating !== star);
  //     } else {
  //       // Trả về mảng mới với id được thêm vào
  //       return [...preSelected, star];
  //     }
  //   });
  // };

  const handleCheckboxChange = (type, value) => {
    setSelected((preState) => {
      console.log("preSelected", preState);
      const selected = preState[type];
      console.log("selected", selected);

      if (selected.includes(value)) {
        return { ...preState, [type]: selected.filter((item) => item !== value) };
      } else {
        return {
          ...preState,
          [type]: [...selected, value],
        };
      }
    });
  };
  // Lọc dữ liệu dựa trên các checkbox được chọn

  const filteredData = dataCardBoat.filter((item) => {
    // Nếu không có lựa chọn nào trong selected, trả về tất cả sản phẩm
    if (selected.stars.length === 0 && selected.labels.length === 0) {
      return true;
    }
    // const test1 = selected.stars.every((star) => item.star === star || item.starPlus === star);
    const test2 =
      selected.labels.every((label) => item.label.includes(label)) &&
      selected.stars.every((star) => item.star.includes(star));
    return test2;
  });
  console.log(filteredData);

  return (
    <div>
      <div className={styles.header}>
        <div className={styles.title}>
          <h4>Tìm thấy 64 kết quả</h4>
          <div>
            <img src={imgP} alt="heading-border" />
          </div>
        </div>
        <div className={styles.buttonSort}>
          {/* Dropdown toggle */}
          <div className={styles.contentSort} onClick={toggleDropdown} ref={dropdownRef}>
            <label htmlFor="content" className={styles.content}>
              <input
                value={selectedSortOption}
                type="button"
                className={styles.sortTitle}
                aria-haspopup="listbox"
                readOnly // Ngăn người dùng chỉnh sửa trực tiếp input
              />
              <BiChevronDown className={styles.icon} />
            </label>

            {/* Dropdown hiển thị khi mở */}
            {isDropdownOpen && (
              <div className={styles.dropdown} role="listbox">
                {dataSortCard.map((option, index) => (
                  <div
                    key={index}
                    className={`${styles.option} ${option.label === selectedSortOption ? styles.active : ""}`}
                    role="option"
                    aria-selected={option.label === selectedSortOption}
                    aria-disabled={option.label === selectedSortOption}
                    onClick={() => {
                      if (option.label !== selectedSortOption) {
                        handleSortChange(option); // Thay đổi lựa chọn và đóng dropdown
                        toggleDropdown();
                      }
                    }}
                  >
                    {option.label}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className={styles.body}>
        <div className={styles.checkboxCard}>
          <div className={styles.headerCard}>
            <div className={styles.titleCard}>Lọc kết quả</div>
            <div className={styles.reset}>Đặt lại</div>
          </div>
          <div className={styles.checkbox}>
            <label className="md">Xếp hạng sao</label>
            {dataStarRanking &&
              dataStarRanking.map((rating, index) => (
                <label htmlFor="1" className={styles.item} key={index}>
                  <input type="checkbox" onChange={() => handleCheckboxChange("stars", rating.star)} />
                  {/* tạo checkbox riêng */}
                  <span className={styles.checkmark}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M4 12.6111L8.92308 17.5L20 6.5"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </span>
                  <div className={styles.textItem}>
                    <div className={styles.itemTitle}>{rating.star} sao</div>
                  </div>
                </label>
              ))}
          </div>

          <div className={styles.checkbox}>
            <label className="md">Tiện ích</label>
            {dataUtilies &&
              dataUtilies.map((option, index) => (
                <label htmlFor="1" className={styles.item} key={index}>
                  <input type="checkbox" onChange={() => handleCheckboxChange("labels", option.label)} />
                  {/* tạo checkbox riêng */}
                  <span className={styles.checkmark}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M4 12.6111L8.92308 17.5L20 6.5"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </span>
                  <div className={styles.textItem}>
                    <div className={styles.itemTitle}>{option.label} </div>
                  </div>
                </label>
              ))}
          </div>
        </div>
        <div className={styles.cardBoat}>
          {" "}
          {/* Hiển thị dữ liệu được lọc */}
          <div className="filtered-results">
            <h4>Kết quả lọc:</h4>
            {filteredData.length > 0 ? (
              <ul>
                {filteredData.map((item) => (
                  <li key={item.id}>
                    {item.name} - {item.star} sao
                  </li>
                ))}
              </ul>
            ) : (
              <p>Không có kết quả nào phù hợp.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardBoat;
