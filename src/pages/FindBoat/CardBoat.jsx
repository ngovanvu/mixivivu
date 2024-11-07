import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import styles from "./CardBoat.module.css";
import imgP from "../../assets/image/home/heading-border.webp";
import { BiChevronDown } from "react-icons/bi";
import ReactPaginate from "react-paginate";
import { FaArrowLeft, FaArrowRight, FaPeriscope, FaShip } from "react-icons/fa";
import Checkbox from "../../components/Checkbox";

import located from "../../assets/image/card_destination/CB.jpg";
import { FaRegStar } from "react-icons/fa";
import Button from "../../components/Button";
import Pagination from "../../components/Pagination";

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
const dataCardBoat = {
  data: [
    {
      id: 1,
      name: "Du thuyền Heritage  Bình Chuẩn Cát Bà",
      price: 210000000,
      star: [3, 4],
      label: [
        "Có bể sục",
        "Lễ tân 24 giờ",
        "Quầy bar",
        "Giáp biển",
        "Phòng gia đình",
        "Trung tâm Spa & chăm sóc sức khoẻ",
        "Miễn phí kayaking",
        "Wi-Fi miễn phí",
        "Nhà hàng",
        "Khu vực bãi tắm riêng",
        "Bao gồm tất cả các bữa ăn",
        "Có bể sục",
        "Phòng gia đình",
      ],
    },
    {
      id: 2,
      name: "Du thuyền Indochine",
      price: 215200000,
      star: [4],
      label: [
        "Phòng gia đình",
        "Nhà hàng",
        "Khu vực bãi tắm riêng",
        "Bao gồm tất cả các bữa ăn",
        "Có bể sục",
        "Phòng gia đình",
      ],
    },
    { id: 3, name: "Du thuyền Le Theatre", price: 20100000, star: [5], label: ["Quầy bar", "Giáp biển"] },
    { id: 4, name: "Du thuyền Orchid Trendy", price: 180000000, star: [3], label: [] },
    {
      id: 5,
      name: "Du thuyền Milalux",
      price: 170000000,
      star: [4],
      label: [
        "Lễ tân 24 giờ",
        "Nhà hàng",
        "Khu vực bãi tắm riêng",
        "Bao gồm tất cả các bữa ăn",
        "Có bể sục",
        "Phòng gia đình",
      ],
    },
    {
      id: 6,
      name: "Du thuyền Orchid Premium Ha Long",
      price: 160000000,
      star: [3, 4, 5],
      label: [
        "Có bể sục",
        "Lễ tân 24 giờ",
        "Nhà hàng",
        "Khu vực bãi tắm riêng",
        "Bao gồm tất cả các bữa ăn",
        "Có bể sục",
        "Phòng gia đình",
      ],
    },
    { id: 7, name: "Du thuyền La Pandora", price: 150000000, star: [4], label: ["Lễ tân 24 giờ"] },
    { id: 8, name: "Du thuyền Paradise Grand", price: 140000000, star: [3, 4, 5], label: ["Có bể sục", "Lễ tân 24 giờ"] },
    { id: 9, name: "Product 9", price: 130000000, star: [3], label: [] },
    { id: 10, name: "Du thuyền Genesis Regal", price: 120000000, star: [4], label: ["Lễ tân 24 giờ"] },
    { id: 11, name: "Du thuyền Genesis Regal", price: 110000000, star: [3, 4, 5], label: ["Có bể sục", "Lễ tân 24 giờ"] },
    {
      id: 12,
      name: "Du thuyền Genesis Regal",
      price: 100000000,
      star: [3, 4],
      label: [
        "Có bể sục",
        "Lễ tân 24 giờ",
        "Chỗ đỗ xe miễn phí",
        "Trung tâm Spa & chăm sóc sức khoẻ",
        "Miễn phí kayaking",
        "Wi-Fi miễn phí",
        "Phòng có bồn tắm",
        "Trung tâm thể dục",
        "Nhà hàng",
        "Khu vực bãi tắm riêng",
        "Bao gồm tất cả các bữa ăn",
        "Có bể sục",
        "Phòng gia đình",
      ],
    },
    { id: 13, name: "Du thuyền Genesis Regal", price: 90000000, star: [4], label: ["Phòng gia đình"] },
    {
      id: 14,
      name: "Du thuyền Genesis Regal",
      price: 80000000,
      star: [5],
      label: [
        "Quầy bar",
        "Giáp biển",
        "Chỗ đỗ xe miễn phí",
        "Trung tâm Spa & chăm sóc sức khoẻ",
        "Miễn phí kayaking",
        "Wi-Fi miễn phí",
        "Phòng có bồn tắm",
        "Trung tâm thể dục",
        "Nhà hàng",
        "Khu vực bãi tắm riêng",
        "Bao gồm tất cả các bữa ăn",
        "Có bể sục",
        "Phòng gia đình",
      ],
    },
    { id: 15, name: "Du thuyền Genesis Regal", price: 70000000, star: [4], label: ["Lễ tân 24 giờ"] },
    {
      id: 16,
      name: "Du thuyền Genesis Regal",
      price: 60000000,
      star: [3, 4, 5],
      label: [
        "Có bể sục",
        "Lễ tân 24 giờ",
        "Chỗ đỗ xe miễn phí",
        "Trung tâm Spa & chăm sóc sức khoẻ",
        "Miễn phí kayaking",
        "Wi-Fi miễn phí",
        "Phòng có bồn tắm",
        "Trung tâm thể dục",
        "Nhà hàng",
        "Khu vực bãi tắm riêng",
        "Bao gồm tất cả các bữa ăn",
        "Có bể sục",
        "Phòng gia đình",
      ],
    },
    { id: 17, name: "Du thuyền Genesis Regal", price: 50000000, star: [4], label: ["Lễ tân 24 giờ"] },
    { id: 18, name: "Du thuyền Genesis Regal", price: 40000000, star: [3, 4, 5], label: ["Có bể sục", "Lễ tân 24 giờ"] },
    { id: 19, name: "Du thuyền Genesis Regal", price: 30000000, star: [3], label: [] },
    { id: 20, name: "Du thuyền Genesis Regal", price: 20000000, star: [4], label: ["Lễ tân 24 giờ"] },
    {
      id: 21,
      name: "Du thuyền Genesis Regal",
      price: 10000000,
      star: [3, 4, 5],
      label: [
        "Có bể sục",
        "Lễ tân 24 giờ",
        "Có bể bơi ngoài trời",
        "Miễn phí xe đưa đón",
        "Chỗ đỗ xe miễn phí",
        "Trung tâm Spa & chăm sóc sức khoẻ",
        "Miễn phí kayaking",
        "Wi-Fi miễn phí",
        "Phòng có bồn tắm",
        "Trung tâm thể dục",
        "Nhà hàng",
        "Khu vực bãi tắm riêng",
        "Bao gồm tất cả các bữa ăn",
        "Có bể sục",
        "Phòng gia đình",
      ],
    },
  ],
  per_page: 5,
};
if (dataCardBoat.data[0].label > 5) {
  const totaLabel = dataCardBoat.data[0].label.length - 5;
  console.log(totaLabel);
} else {
  console.log("");
}

const dataLable = dataCardBoat.data[0].label.slice(0, 5);
console.log(dataLable);

const dataStarRanking = [
  { id: 1, option: 3 },
  { id: 2, option: 4 },
  { id: 3, option: 5 },
];
const dataUtilies = [
  { id: 1, option: "Phòng gia đình" },
  { id: 2, option: "Có bể sục" },
  { id: 3, option: "Bao gồm tất cả các bữa ăn" },
  { id: 4, option: "Giáp biển" },
  { id: 5, option: "Quầy bar" },
  { id: 6, option: "Lễ tân 24 giờ" },
  { id: 7, option: "Khu vực bãi tắm riêng" },
  { id: 8, option: "Nhà hàng" },
  { id: 9, option: "Trung tâm thể dục" },
  { id: 10, option: "Phòng có bồn tắm" },
  { id: 11, option: "Wi-Fi miễn phí" },
  { id: 12, option: "Miễn phí kayaking" },
  { id: 13, option: "Trung tâm Spa & chăm sóc sức khoẻ" },
  { id: 14, option: "Chỗ đỗ xe miễn phí" },
  { id: 15, option: "Miễn phí xe đưa đón" },
  { id: 16, option: "Có bể bơi ngoài trời" },
];
function CardBoat() {
  const [tempValue, setTempValue] = useState(5);
  const [currentData, setCurrentData] = useState([]);
  const [perPage, setPerPage] = useState(dataCardBoat.per_page);
  const [page, setPage] = useState(1);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [price, setPrice] = useState("");
  const [selected, setSelected] = useState({
    stars: [],
    labels: [],
  });
  const [selectedSortOption, setSelectedSortOption] = useState(dataSortCard[0].label);
  const [value, setValue] = useState("");
  const toggleDropdown = useCallback(() => {
    setIsDropdownOpen((prev) => !prev);
  }, []);
  // Xử lý thay đổi lựa chọn
  const handleSortChange = useCallback((option) => {
    setSelectedSortOption(option.label);
    setValue(option.value);
  }, []);
  const filteredData = useMemo(() => {
    return dataCardBoat.data
      .filter((item) => {
        // Nếu không có lựa chọn nào trong selected, trả về tất cả sản phẩm
        if (selected.stars.length === 0 && selected.labels.length === 0) {
          return true;
        }
        // const test1 = selected.stars.every((star) => item.star === star || item.starPlus === star);
        const matchesLabels =
          selected.labels.every((label) => item.label.includes(label)) &&
          selected.stars.every((star) => item.star.includes(star));
        return matchesLabels;
      })
      .sort((a, b) => (price === "min" ? a.price - b.price : price === "max" ? b.price - a.price : 0));
  }, [selected, price]);
  // Lắng nghe sự kiện nhấp chuột bên ngoài dropdown
  // useEffect(() => {
  //   const handleClickOutside = (event) => {
  //     if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
  //       setIsDropdownOpen(false); // Đóng dropdown nếu nhấp bên ngoài
  //       // toggleDropdown();
  //     }
  //   };

  //   // Gắn sự kiện khi component được render
  //   document.addEventListener("mousedown", handleClickOutside);

  //   // Xóa sự kiện khi component bị unmount để tránh rò rỉ bộ nhớ
  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   };
  // }, []);
  useEffect(() => {
    const startIndex = (page - 1) * perPage;
    const paginatedData = filteredData.slice(startIndex, startIndex + perPage);
    setCurrentData(paginatedData);
  }, [page, perPage, filteredData]);
  const totalPage = Math.ceil(filteredData.length / perPage);
  const dropdownRef = useRef(null);

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
    setPage(1);
  };

  const handlePageClick = (event) => {
    console.log("event", event); // Gía trị của sleleted pagination chạy từ 0 nên để tương đồng thì  + thêm cho 1
    // getCardBoat(+event.selected + 1);
    setPage(+event.selected + 1);
  };
  const handleTempValueChange = (e) => {
    setTempValue(e.target.value); // Cập nhật giá trị tạm thời khi người dùng nhập
  };
  const handleBlur = () => {
    // Giới hạn giá trị giữa 1 và 20 khi mất focus
    const value = Math.max(1, Math.min(20, Number(tempValue) || 1));
    setPerPage(value); //cập nhật để tính data hiển thị
    setTempValue(value); // Cập nhật lại tempValue để hiển thị giá trị hợp lệ , cập nhật số đã điền ở input
  };

  return (
    <div>
      <div className={styles.header}>
        <div className={styles.title}>
          <h4>Tìm thấy {filteredData.length} kết quả</h4>
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
                      }
                      setPrice(option.value);
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

          <Checkbox data={dataStarRanking} handleCheckboxChange={handleCheckboxChange} labels="stars" />
          <Checkbox data={dataUtilies} handleCheckboxChange={handleCheckboxChange} labels="labels" />
        </div>
        <div className={styles.cardBoat}>
          <div className={styles.filteredResults}>
            {currentData.length > 0 ? (
              <div className={styles.cardList}>
                {currentData &&
                  currentData.map((boatCard, index) => (
                    <div className={styles.boatList}>
                      <div className={styles.cardlist}>
                        <div className={styles.boatImage}>
                          <div className={styles.imageWapper}>
                            <img alt="mixivivu" src={located} width="100%" height="100%" loading="lazy" />
                          </div>
                          <div className={styles.badge}>
                            <FaRegStar />
                            <span>4.9 (11) đánh giá</span>
                          </div>
                        </div>

                        <div className={styles.boatContent}>
                          <div className={styles.cardBody}>
                            <div className={styles.cardLocated}>
                              <FaPeriscope />
                              <span className="xs">Vịnh Hạ Long</span>
                            </div>
                            <p className={styles.cardTitle}>{boatCard.name}</p>
                            <div className={styles.cardDesc}>
                              <FaShip />
                              <p className="sm">Hạ thuỷ 2019 - Tàu vỏ Kim loại - 20 phòng</p>
                            </div>
                          </div>
                          {boatCard.label.length > 0 && (
                            <div className={styles.cardTag}>
                              {
                                <>
                                  {boatCard.label.length > 5 ? (
                                    <>
                                      {boatCard.label.slice(0, 5).map((tag, index) => (
                                        <div className={styles.badgeItem} key={index}>
                                          <span className="xs">{tag}</span>
                                        </div>
                                      ))}
                                      <div className={styles.badgeItem}>
                                        <span className="xs">+{boatCard.label.length - 5}</span>
                                      </div>
                                    </>
                                  ) : (
                                    boatCard.label.map((tag, index) => (
                                      <div className={styles.badgeItem} key={index}>
                                        <span className="xs">{tag}</span>
                                      </div>
                                    ))
                                  )}
                                </>
                              }
                            </div>
                          )}

                          <div className={styles.cardFooter}>
                            <div>
                              <p className={styles.price}>
                                {new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" })
                                  .format(boatCard.price)
                                  .replace(/\./g, ",")}{" "}
                                / khách
                              </p>
                            </div>
                            <Button paddingType="paddingNormal" colorType="blue">
                              <div className="sm">Đặt Ngay</div>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            ) : (
              <p>Không có kết quả nào phù hợp.</p>
            )}
          </div>
          {/* <div className={styles.boxPagination}>
            <div className={styles.numberPage}>
              <p className="sm">Đang xem</p>
              <div>
                <span className={styles.papgeSize}>
                  <input
                    max={20}
                    min={1}
                    type="number"
                    value={tempValue}
                    onBlur={handleBlur}
                    onChange={handleTempValueChange}
                  />
                </span>
              </div>
              <p className="sm">của {filteredData.length}</p>
            </div>
            <ReactPaginate
              nextLabel={
                <>
                  Sau
                  <FaArrowRight />
                </>
              }
              onPageChange={handlePageClick}
              pageRangeDisplayed={3}
              marginPagesDisplayed={2}
              pageCount={totalPage}
              forcePage={page - 1}
              previousLabel={
                <>
                  <FaArrowLeft /> Trước
                </>
              }
              pageClassName="pagination-item"
              pageLinkClassName="page-link"
              previousClassName="pagination-prev"
              previousLinkClassName="page-link"
              nextClassName="pagination-next"
              nextLinkClassName="page-link"
              breakLabel="..."
              breakClassName="pagination-item"
              breakLinkClassName="page-link"
              containerClassName="pagination"
              activeClassName="activePaginate"
            />
          </div> */}
          <Pagination
            filteredData={filteredData}
            perPage={perPage}
            page={perPage}
            setPage={setPage}
            setPerPage={setPerPage}
          />
        </div>
      </div>
    </div>
  );
}
export default CardBoat;
