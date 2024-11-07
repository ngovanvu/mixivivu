import React, { useEffect, useMemo, useRef, useState } from "react";
import styles from "./CardBoat.module.css";
import imgP from "../../assets/image/home/heading-border.webp";
import { BiChevronDown } from "react-icons/bi";
import ReactPaginate from "react-paginate";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

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
    { id: 1, name: "Product 1", price: 3700000, star: [3, 4], label: ["Có bể sục", "Lễ tân 24 giờ"] },
    { id: 2, name: "Product 2", price: 3600000, star: [4], label: ["Phòng gia đình"] },
    { id: 3, name: "Product 3", price: 3500000, star: [5], label: ["Quầy bar", "Giáp biển"] },
    { id: 4, name: "Product 4", price: 3400000, star: [3], label: [] },
    { id: 5, name: "Product 5", price: 3300000, star: [4], label: ["Lễ tân 24 giờ"] },
    { id: 6, name: "Product 6", price: 3200000, star: [3, 4, 5], label: ["Có bể sục", "Lễ tân 24 giờ"] },
    { id: 7, name: "Product 7", price: 3100000, star: [4], label: ["Lễ tân 24 giờ"] },
    { id: 8, name: "Product 8", price: 3000000, star: [3, 4, 5], label: ["Có bể sục", "Lễ tân 24 giờ"] },
    { id: 9, name: "Product 9", price: 2900000, star: [3], label: [] },
    { id: 10, name: "Product 10", price: 2800000, star: [4], label: ["Lễ tân 24 giờ"] },
    { id: 11, name: "Product 11", price: 2700000, star: [3, 4, 5], label: ["Có bể sục", "Lễ tân 24 giờ"] },
  ],
  page: 1,
  per_page: 11,
  total: 21,
  total_pages: 2,
};
const dataCardBoat = {
  data: [
    { id: 1, name: "Product 1", price: 210000000, star: [3, 4], label: ["Có bể sục", "Lễ tân 24 giờ"] },
    { id: 2, name: "Product 2", price: 215200000, star: [4], label: ["Phòng gia đình"] },
    { id: 3, name: "Product 3", price: 20100000, star: [5], label: ["Quầy bar", "Giáp biển"] },
    { id: 4, name: "Product 4", price: 180000000, star: [3], label: [] },
    { id: 5, name: "Product 5", price: 170000000, star: [4], label: ["Lễ tân 24 giờ"] },
    { id: 6, name: "Product 6", price: 160000000, star: [3, 4, 5], label: ["Có bể sục", "Lễ tân 24 giờ"] },
    { id: 7, name: "Product 7", price: 150000000, star: [4], label: ["Lễ tân 24 giờ"] },
    { id: 8, name: "Product 8", price: 140000000, star: [3, 4, 5], label: ["Có bể sục", "Lễ tân 24 giờ"] },
    { id: 9, name: "Product 9", price: 130000000, star: [3], label: [] },
    { id: 10, name: "Product 10", price: 120000000, star: [4], label: ["Lễ tân 24 giờ"] },
    { id: 11, name: "Product 11", price: 110000000, star: [3, 4, 5], label: ["Có bể sục", "Lễ tân 24 giờ"] },
    { id: 12, name: "Product 12", price: 100000000, star: [3, 4], label: ["Có bể sục", "Lễ tân 24 giờ"] },
    { id: 13, name: "Product 13", price: 90000000, star: [4], label: ["Phòng gia đình"] },
    { id: 14, name: "Product 14", price: 80000000, star: [5], label: ["Quầy bar", "Giáp biển"] },
    { id: 15, name: "Product 15", price: 70000000, star: [4], label: ["Lễ tân 24 giờ"] },
    { id: 16, name: "Product 16", price: 60000000, star: [3, 4, 5], label: ["Có bể sục", "Lễ tân 24 giờ"] },
    { id: 17, name: "Product 17", price: 50000000, star: [4], label: ["Lễ tân 24 giờ"] },
    { id: 18, name: "Product 18", price: 40000000, star: [3, 4, 5], label: ["Có bể sục", "Lễ tân 24 giờ"] },
    { id: 19, name: "Product 19", price: 30000000, star: [3], label: [] },
    { id: 20, name: "Product 20", price: 20000000, star: [4], label: ["Lễ tân 24 giờ"] },
    { id: 21, name: "Product 21", price: 10000000, star: [3, 4, 5], label: ["Có bể sục", "Lễ tân 24 giờ"] },
  ],
  per_page: 5,
};
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
function CardBoat1() {
  const [currentData, setCurrentData] = useState([]);
  const [price, setPrice] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedSortOption, setSelectedSortOption] = useState(dataSortCard[0].label);
  const [value, setValue] = useState("");
  // const [selected, setSelected] = useState([]);
  const [selected, setSelected] = useState({
    stars: [],
    labels: [],
  });
  const [page, setPage] = useState(1);
  // const [dataTest, setDataTest] = useState(dataPagination.data);
  const [perPage, setPerPage] = useState(dataCardBoat.per_page);
  const [tempValue, setTempValue] = useState(5);
  const handleTempValueChange = (e) => {
    setTempValue(e.target.value); // Cập nhật giá trị tạm thời khi người dùng nhập
  };
  const handleBlur = () => {
    // Giới hạn giá trị giữa 1 và 20 khi mất focus
    const value = Math.max(1, Math.min(20, Number(tempValue) || 1));
    setPerPage(value); //cập nhật để tính data hiển thị
    setTempValue(value); // Cập nhật lại tempValue để hiển thị giá trị hợp lệ , cập nhật số đã điền ở input
  };
  const dropdownRef = useRef(null);
  // const [totalCardBoat, setTotalCardBoat] = useState(0); lấy tôngr total = 21 của dataCardBoat
  // const [totalPages, setTotalPages] = useState(0); lấy tổng số trang total_pages = 2
  // dùng fetch đata cardboat
  // useEffect(() => {
  //   getCardBoat(1);
  // }, []);

  // const getCardBoat = async (page) => {
  //   let res = await fetchCardBoat(page);
  //   if(res && res.data) {
  //     console.log(res);
  //     setCardBoat(res.total)
  // setTotalPages(res.total_pages)
  //   }
  // }

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
    setPage(1);
  };
  // Lọc dữ liệu dựa trên các checkbox được chọn
  //cDùng useMemo để lưu kết quả của filteredData và chỉ tính lại nếu selected hoặc price thay đổi
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

  // const startIndex = (page - 1) * perPage;
  // const currentData = filteredData.slice(startIndex, startIndex + perPage);
  useEffect(() => {
    const startIndex = (page - 1) * perPage;
    const paginatedData = filteredData.slice(startIndex, startIndex + perPage);
    setCurrentData(paginatedData);
  }, [page, perPage, filteredData]);
  const totalPage = Math.ceil(filteredData.length / perPage);

  const handlePageClick = (event) => {
    console.log("event", event); // Gía trị của sleleted pagination chạy từ 0 nên để tương đồng thì  + thêm cho 1
    // getCardBoat(+event.selected + 1);
    setPage(+event.selected + 1);
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
                        toggleDropdown();
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
            {currentData.length > 0 ? (
              <ul>
                {currentData.map((item) => (
                  <li key={item.id}>
                    {item.name} - {item.star} sao - {item.price}
                  </li>
                ))}
              </ul>
            ) : (
              <p>Không có kết quả nào phù hợp.</p>
            )}
          </div>
        </div>

        <div className={styles.pagination}>
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
          <div className={styles.numberPage}>
            <p className="sm">Đang xem</p>
            <div>
              <label className={styles.papgeSize}>
                <input
                  max={20}
                  min={1}
                  type="number"
                  value={tempValue}
                  onBlur={handleBlur}
                  onChange={handleTempValueChange}
                />
              </label>
            </div>
            <p className="sm">của {filteredData.length}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardBoat1;
