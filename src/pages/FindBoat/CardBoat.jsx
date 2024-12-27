import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { createMedia } from "@artsy/fresnel";
import styles from "./CardBoat.module.css";
import imgP from "../../assets/image/home/heading-border.webp";
import dataCardBoat from "../../data/dataCardBoat.js";

import Pagination from "../../components/Pagination";
import CardProductBoat from "../../components/CardProductBoat";
import ProductCard from "../../components/ProductCard";
import DataNotFound from "../../components/DataNotFound";

import BoxFilterCard from "../../components/BoxFilter/BoxFilterCard";
import BoxMobileFiter from "../../components/BoxFilter/BoxMobileFiter";
import BoxSort from "../../components/BoxSort";
import { useSearchParams } from "react-router-dom";

const { MediaContextProvider, Media } = createMedia({
  // breakpoints values can be either strings or integers
  breakpoints: {
    sm: 0,
    md: 768,
    lg: 1024,
    xl: 1192,
  },
});

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

//   data: [
//     {
//       id: 1,
//       name: "Du thuyền Heritage  Bình Chuẩn Cát Bà",
//       located: "Vịnh Lan Hạ",
//       infor: "Hạ thuỷ 2019 - Tàu vỏ Kim loại - 20 phòng",
//       image: cardBoat1,
//       price: 1000000,
//       star: [3, 4],
//       label: [
//         "Có bể sục",
//         "Lễ tân 24 giờ",
//         "Quầy bar",
//         "Giáp biển",
//         "Phòng gia đình",
//         "Trung tâm Spa & chăm sóc sức khoẻ",
//         "Miễn phí kayaking",
//         "Wi-Fi miễn phí",
//         "Nhà hàng",
//         "Khu vực bãi tắm riêng",
//         "Bao gồm tất cả các bữa ăn",
//         "Có bể sục",
//         "Phòng gia đình",
//       ],
//     },
//     {
//       id: 2,
//       name: "Du thuyền Indochine",
//       image: cardBoat2,
//       located: "Đảo Cát Bà",
//       infor: "Hạ thuỷ 2017 - Tàu vỏ Kim loại - 200 phòng",
//       price: 3000000,
//       star: [4],
//       label: [
//         "Phòng gia đình",
//         "Nhà hàng",
//         "Khu vực bãi tắm riêng",
//         "Bao gồm tất cả các bữa ăn",
//         "Có bể sục",
//         "Phòng gia đình",
//       ],
//     },
//     {
//       id: 3,
//       name: "Du thuyền Le Theatre",
//       image: cardBoat3,
//       located: "Vịnh Hạ Long",
//       infor: "Hạ thuỷ 2012 - Tàu vỏ Kim loại - 80 phòng",
//       price: 2500000,
//       star: [5],
//       label: ["Quầy bar", "Giáp biển"],
//     },
//     {
//       id: 4,
//       name: "Du thuyền Orchid Trendy",
//       image: cardBoat4,
//       located: "Vịnh Hạ Long",
//       infor: "Hạ thuỷ 2011 - Tàu vỏ Kim loại - 30 phòng",
//       price: 2000000,
//       star: [3],
//       label: [],
//     },
//     {
//       id: 5,
//       name: "Du thuyền Milalux",
//       image: cardBoat5,
//       located: "Vịnh Hạ Long",
//       infor: "Hạ thuỷ 2019 - Tàu vỏ Kim loại - 20 phòng",
//       price: 1700000,
//       star: [4],
//       label: [
//         "Lễ tân 24 giờ",
//         "Nhà hàng",
//         "Khu vực bãi tắm riêng",
//         "Bao gồm tất cả các bữa ăn",
//         "Có bể sục",
//         "Phòng gia đình",
//       ],
//     },
//     {
//       id: 6,
//       name: "Du thuyền Orchid Premium Ha Long",
//       image: cardBoat6,
//       located: "Vịnh Hạ Long",
//       infor: "Hạ thuỷ 2019 - Tàu vỏ Kim loại - 20 phòng",
//       price: 2500000,
//       star: [3, 4, 5],
//       label: [
//         "Có bể sục",
//         "Lễ tân 24 giờ",
//         "Nhà hàng",
//         "Khu vực bãi tắm riêng",
//         "Bao gồm tất cả các bữa ăn",
//         "Có bể sục",
//         "Phòng gia đình",
//       ],
//     },
//     {
//       id: 7,
//       name: "Du thuyền La Pandora",
//       image: cardBoat7,
//       located: "Vịnh Hạ Long",
//       infor: "Hạ thuỷ 2019 - Tàu vỏ Kim loại - 20 phòng",
//       price: 2500000,
//       star: [4],
//       label: ["Lễ tân 24 giờ"],
//     },
//     {
//       id: 8,
//       name: "Du thuyền Paradise Grand",
//       image: cardBoat8,
//       located: "Vịnh Hạ Long",
//       infor: "Hạ thuỷ 2019 - Tàu vỏ Kim loại - 20 phòng",
//       price: 2500000,
//       star: [3, 4, 5],
//       label: ["Có bể sục", "Lễ tân 24 giờ"],
//     },
//     {
//       id: 9,
//       name: "Product 9",
//       image: cardBoat9,
//       located: "Vịnh Hạ Long",
//       infor: "Hạ thuỷ 2019 - Tàu vỏ Kim loại - 20 phòng",
//       price: 2500000,
//       star: [3],
//       label: [],
//     },
//     {
//       id: 10,
//       name: "Du thuyền Genesis Regal",
//       image: cardBoat10,
//       located: "Vịnh Hạ Long",
//       infor: "Hạ thuỷ 2019 - Tàu vỏ Kim loại - 20 phòng",
//       price: 2500000,
//       star: [4],
//       label: ["Lễ tân 24 giờ"],
//     },
//     {
//       id: 11,
//       name: "Du thuyền Genesis Regal",
//       image: cardBoat1,
//       located: "Vịnh Hạ Long",
//       infor: "Hạ thuỷ 2019 - Tàu vỏ Kim loại - 20 phòng",
//       price: 2500000,
//       star: [3, 4, 5],
//       label: ["Có bể sục", "Lễ tân 24 giờ"],
//     },
//     {
//       id: 12,
//       name: "Du thuyền Genesis Regal",
//       image: cardBoat2,
//       located: "Vịnh Hạ Long",
//       infor: "Hạ thuỷ 2019 - Tàu vỏ Kim loại - 20 phòng",
//       price: 2500000,
//       star: [3, 4],
//       label: [
//         "Có bể sục",
//         "Lễ tân 24 giờ",
//         "Chỗ đỗ xe miễn phí",
//         "Trung tâm Spa & chăm sóc sức khoẻ",
//         "Miễn phí kayaking",
//         "Wi-Fi miễn phí",
//         "Phòng có bồn tắm",
//         "Trung tâm thể dục",
//         "Nhà hàng",
//         "Khu vực bãi tắm riêng",
//         "Bao gồm tất cả các bữa ăn",
//         "Có bể sục",
//         "Phòng gia đình",
//       ],
//     },
//     {
//       id: 13,
//       name: "Du thuyền Genesis Regal",
//       image: cardBoat3,
//       located: "Đảo Cát Bà",
//       infor: "Hạ thuỷ 2019 - Tàu vỏ Kim loại - 20 phòng",
//       price: 90000000,
//       star: [4],
//       label: ["Phòng gia đình"],
//     },
//     {
//       id: 14,
//       name: "Du thuyền Genesis Regal",
//       image: cardBoat4,
//       located: "Vịnh Hạ Long",
//       infor: "Hạ thuỷ 2019 - Tàu vỏ Kim loại - 20 phòng",
//       price: 80000000,
//       star: [5],
//       label: [
//         "Quầy bar",
//         "Giáp biển",
//         "Chỗ đỗ xe miễn phí",
//         "Trung tâm Spa & chăm sóc sức khoẻ",
//         "Miễn phí kayaking",
//         "Wi-Fi miễn phí",
//         "Phòng có bồn tắm",
//         "Trung tâm thể dục",
//         "Nhà hàng",
//         "Khu vực bãi tắm riêng",
//         "Bao gồm tất cả các bữa ăn",
//         "Có bể sục",
//         "Phòng gia đình",
//       ],
//     },
//     {
//       id: 15,
//       name: "Du thuyền Genesis Regal",
//       image: cardBoat5,
//       located: "Đảo Cát Bà",
//       infor: "Hạ thuỷ 2019 - Tàu vỏ Kim loại - 20 phòng",
//       price: 70000000,
//       star: [4],
//       label: ["Lễ tân 24 giờ"],
//     },
//     {
//       id: 16,
//       name: "Du thuyền Genesis Regal",
//       image: cardBoat6,
//       located: "Đảo Cát Bà",
//       infor: "Hạ thuỷ 2019 - Tàu vỏ Kim loại - 20 phòng",
//       price: 60000000,
//       star: [3, 4, 5],
//       label: [
//         "Có bể sục",
//         "Lễ tân 24 giờ",
//         "Chỗ đỗ xe miễn phí",
//         "Trung tâm Spa & chăm sóc sức khoẻ",
//         "Miễn phí kayaking",
//         "Wi-Fi miễn phí",
//         "Phòng có bồn tắm",
//         "Trung tâm thể dục",
//         "Nhà hàng",
//         "Khu vực bãi tắm riêng",
//         "Bao gồm tất cả các bữa ăn",
//         "Có bể sục",
//         "Phòng gia đình",
//       ],
//     },
//     {
//       id: 17,
//       name: "Du thuyền Genesis Regal",
//       image: cardBoat7,
//       located: "Vịnh Hạ Long",
//       infor: "Hạ thuỷ 2019 - Tàu vỏ Kim loại - 20 phòng",
//       price: 50000000,
//       star: [4],
//       label: ["Lễ tân 24 giờ"],
//     },
//     {
//       id: 18,
//       name: "Du thuyền Genesis Regal",
//       image: cardBoat8,
//       located: "Vịnh Hạ Long",
//       infor: "Hạ thuỷ 2019 - Tàu vỏ Kim loại - 20 phòng",
//       price: 40000000,
//       star: [3, 4, 5],
//       label: ["Có bể sục", "Lễ tân 24 giờ"],
//     },
//     {
//       id: 19,
//       name: "Du thuyền Genesis Regal",
//       image: cardBoat9,
//       located: "Vịnh Lan Hạ",
//       infor: "Hạ thuỷ 2019 - Tàu vỏ Kim loại - 20 phòng",
//       price: 30000000,
//       star: [3],
//       label: [],
//     },
//     {
//       id: 20,
//       name: "Du thuyền Genesis Regal",
//       image: cardBoat10,
//       located: "Vịnh Hạ Long",
//       infor: "Hạ thuỷ 2019 - Tàu vỏ Kim loại - 20 phòng",
//       price: 20000000,
//       star: [4],
//       label: ["Lễ tân 24 giờ"],
//     },
//     {
//       id: 21,
//       name: "Du thuyền Genesis Regal",
//       image: cardBoat10,
//       located: "Vịnh Hạ Long",
//       infor: "Hạ thuỷ 2019 - Tàu vỏ Kim loại - 20 phòng",
//       price: 10000000,
//       star: [3, 4, 5],
//       label: [
//         "Có bể sục",
//         "Lễ tân 24 giờ",
//         "Có bể bơi ngoài trời",
//         "Miễn phí xe đưa đón",
//         "Chỗ đỗ xe miễn phí",
//         "Trung tâm Spa & chăm sóc sức khoẻ",
//         "Miễn phí kayaking",
//         "Wi-Fi miễn phí",
//         "Phòng có bồn tắm",
//         "Trung tâm thể dục",
//         "Nhà hàng",
//         "Khu vực bãi tắm riêng",
//         "Bao gồm tất cả các bữa ăn",
//         "Có bể sục",
//         "Phòng gia đình",
//       ],
//     },
//   ],
//   per_page: 5,
// };

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
  const [currentData, setCurrentData] = useState([]);
  const [perPage, setPerPage] = useState(dataCardBoat.per_page); // maxdata
  const [page, setPage] = useState(1);

  const [price, setPrice] = useState("");
  const [selected, setSelected] = useState({
    stars: [],
    labels: [],
  });
  const scrollSection = useRef();
  const scrollHanler = (elmRef) => {
    window.scrollTo({ top: elmRef.current.offsetTop, behavior: "smooth" });
  };
  const [selectedSortOption, setSelectedSortOption] = useState(dataSortCard[0].label);
  const [value, setValue] = useState("");

  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");
  const greaterDefaultPrice = +searchParams.get("greater_defaultPrice");
  const lowerDefaultPrice = +searchParams.get("lower_defaultPrice");

  // Xử lý thay đổi lựa chọn
  const handleSortChange = useCallback((option) => {
    setSelectedSortOption(option.label);
    setValue(option.value);
  }, []);
  const filteredData = useMemo(() => {
    if (!dataCardBoat || !dataCardBoat.data) return [];
    return dataCardBoat.data
      .filter((item) => {
        // Nếu không có lựa chọn nào trong selected, trả về tất cả sản phẩm
        if (
          selected.stars.length === 0 &&
          selected.labels.length === 0 &&
          category === "" &&
          greaterDefaultPrice === "" &&
          lowerDefaultPrice === ""
        ) {
          return true;
        }
        // Kiểm tra điều kiện lọc theo `category`
        const checkCategory = category
          ? item.located
              .split(" ")
              .map((word) => word[0].toUpperCase())
              .join("") === category
          : true;
        // Kiểm tra điều kiện lọc theo `greaterDefaultPrice` và `lowerDefaultPrice`
        const checkPrice =
          (greaterDefaultPrice ? greaterDefaultPrice <= item.price : true) &&
          (lowerDefaultPrice ? lowerDefaultPrice >= item.price : true);

        // Kiểm tra điều kiện lọc theo `selected.labels` và `selected.stars`
        // const test1 = selected.stars.every((star) => item.star === star || item.starPlus === star);
        const matchesLabels =
          selected.labels.every((labelItem) => item.label.some((labelSome) => labelSome.feature === labelItem)) &&
          selected.stars.every((star) => Math.floor(item.star) === star);
        // Trả về kết quả lọc cuối cùng

        return checkCategory && checkPrice && matchesLabels && matchesLabels;
      })
      .sort((a, b) => (price === "min" ? a.price - b.price : price === "max" ? b.price - a.price : 0));
  }, [selected, price, greaterDefaultPrice, lowerDefaultPrice, category]);

  useEffect(() => {
    const startIndex = (page - 1) * perPage;
    const paginatedData = filteredData.slice(startIndex, startIndex + perPage);
    setCurrentData(paginatedData);
  }, [page, perPage, filteredData]);
  useEffect(() => {
    setPage(1);
  }, [filteredData]);

  const handleCheckboxChange = (type, value) => {
    setSelected((preState) => {
      // console.log("preSelected", preState);
      const selected = preState[type];
      // console.log("selected", selected);

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
  const handleReset = () => {
    setSelected({
      stars: [],
      labels: [],
    });
  };

  return (
    <div>
      <div className={styles.header} ref={scrollSection}>
        <div className={styles.title}>
          <h4>Tìm thấy {filteredData.length} kết quả</h4>
          <div>
            <img src={imgP} alt="heading-border" />
          </div>
        </div>
        <div className={styles.filtSortBtn}>
          <BoxMobileFiter
            dataStarRanking={dataStarRanking}
            dataUtilies={dataUtilies}
            handleCheckboxChange={handleCheckboxChange}
            selected={selected}
            handleReset={handleReset}
          />
          <BoxSort
            dataSortCard={dataSortCard}
            selectedSortOption={selectedSortOption}
            handleSortChange={handleSortChange}
            setPrice={setPrice}
          />
        </div>
      </div>

      <MediaContextProvider>
        <Media lessThan="lg">
          <ProductCard currentData={currentData} />
          <Pagination filteredData={filteredData} perPage={perPage} page={page} setPage={setPage} setPerPage={setPerPage} />
        </Media>
        <Media greaterThanOrEqual="lg">
          <div className={styles.body}>
            <BoxFilterCard
              dataStarRanking={dataStarRanking}
              dataUtilies={dataUtilies}
              handleCheckboxChange={handleCheckboxChange}
              selected={selected}
              handleReset={handleReset}
            />
            <div>
              <div>{currentData.length > 0 ? <CardProductBoat currentData={currentData} /> : <DataNotFound />}</div>
              <Pagination
                filteredData={filteredData}
                perPage={perPage}
                page={page}
                setPage={setPage}
                setPerPage={setPerPage}
                scrollSection={scrollSection}
                scrollHanler={scrollHanler}
              />
            </div>
          </div>
        </Media>
      </MediaContextProvider>
    </div>
  );
}
export default CardBoat;
