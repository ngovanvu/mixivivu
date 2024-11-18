import React from "react";
import style from "./PolularShips.module.css";
import ProductCard from "../../components/ProductCard";
import Button from "../../components/Button";
import { FaArrowRight } from "react-icons/fa6";
import ContentBox from "../../components/ContentBox";

import cardBoat1 from "../../assets/image/card/1.webp";
import cardBoat2 from "../../assets/image/card/2.webp";
import cardBoat3 from "../../assets/image/card/3.webp";
import cardBoat4 from "../../assets/image/card/4.webp";
import cardBoat5 from "../../assets/image/card/5.webp";
import cardBoat6 from "../../assets/image/card/6.webp";
import cardBoat7 from "../../assets/image/card/7.webp";
import cardBoat8 from "../../assets/image/card/8.webp";
import cardBoat9 from "../../assets/image/card/9.jpg";
import cardBoat10 from "../../assets/image/card/10.webp";
const dataCardBoat = {
  data: [
    {
      id: 1,
      name: "Du thuyền Heritage  Bình Chuẩn Cát Bà",
      located: "Vịnh Lan Hạ",
      infor: "Hạ thuỷ 2019 - Tàu vỏ Kim loại - 20 phòng",
      image: cardBoat1,
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
      image: cardBoat2,
      located: "Đảo Cát Bà",
      infor: "Hạ thuỷ 2017 - Tàu vỏ Kim loại - 200 phòng",
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
    {
      id: 3,
      name: "Du thuyền Le Theatre",
      image: cardBoat3,
      located: "Vịnh Hạ Long",
      infor: "Hạ thuỷ 2012 - Tàu vỏ Kim loại - 80 phòng",
      price: 20100000,
      star: [5],
      label: ["Quầy bar", "Giáp biển"],
    },
    {
      id: 4,
      name: "Du thuyền Orchid Trendy",
      image: cardBoat4,
      located: "Vịnh Hạ Long",
      infor: "Hạ thuỷ 2011 - Tàu vỏ Kim loại - 30 phòng",
      price: 180000000,
      star: [3],
      label: [],
    },
    {
      id: 5,
      name: "Du thuyền Milalux",
      image: cardBoat5,
      located: "Vịnh Hạ Long",
      infor: "Hạ thuỷ 2019 - Tàu vỏ Kim loại - 20 phòng",
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
      image: cardBoat6,
      located: "Vịnh Hạ Long",
      infor: "Hạ thuỷ 2019 - Tàu vỏ Kim loại - 20 phòng",
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
    {
      id: 7,
      name: "Du thuyền La Pandora",
      image: cardBoat7,
      located: "Vịnh Hạ Long",
      infor: "Hạ thuỷ 2019 - Tàu vỏ Kim loại - 20 phòng",
      price: 150000000,
      star: [4],
      label: ["Lễ tân 24 giờ"],
    },
    {
      id: 8,
      name: "Du thuyền Paradise Grand",
      image: cardBoat8,
      located: "Vịnh Hạ Long",
      infor: "Hạ thuỷ 2019 - Tàu vỏ Kim loại - 20 phòng",
      price: 140000000,
      star: [3, 4, 5],
      label: ["Có bể sục", "Lễ tân 24 giờ"],
    },
    {
      id: 9,
      name: "Product 9",
      image: cardBoat9,
      located: "Vịnh Hạ Long",
      infor: "Hạ thuỷ 2019 - Tàu vỏ Kim loại - 20 phòng",
      price: 130000000,
      star: [3],
      label: [],
    },
    {
      id: 10,
      name: "Du thuyền Genesis Regal",
      image: cardBoat10,
      located: "Vịnh Hạ Long",
      infor: "Hạ thuỷ 2019 - Tàu vỏ Kim loại - 20 phòng",
      price: 120000000,
      star: [4],
      label: ["Lễ tân 24 giờ"],
    },
    {
      id: 11,
      name: "Du thuyền Genesis Regal",
      image: cardBoat1,
      located: "Vịnh Hạ Long",
      infor: "Hạ thuỷ 2019 - Tàu vỏ Kim loại - 20 phòng",
      price: 110000000,
      star: [3, 4, 5],
      label: ["Có bể sục", "Lễ tân 24 giờ"],
    },
    {
      id: 12,
      name: "Du thuyền Genesis Regal",
      image: cardBoat2,
      located: "Vịnh Hạ Long",
      infor: "Hạ thuỷ 2019 - Tàu vỏ Kim loại - 20 phòng",
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
    {
      id: 13,
      name: "Du thuyền Genesis Regal",
      image: cardBoat3,
      located: "Đảo Cát Bà",
      infor: "Hạ thuỷ 2019 - Tàu vỏ Kim loại - 20 phòng",
      price: 90000000,
      star: [4],
      label: ["Phòng gia đình"],
    },
    {
      id: 14,
      name: "Du thuyền Genesis Regal",
      image: cardBoat4,
      located: "Vịnh Hạ Long",
      infor: "Hạ thuỷ 2019 - Tàu vỏ Kim loại - 20 phòng",
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
    {
      id: 15,
      name: "Du thuyền Genesis Regal",
      image: cardBoat5,
      located: "Đảo Cát Bà",
      infor: "Hạ thuỷ 2019 - Tàu vỏ Kim loại - 20 phòng",
      price: 70000000,
      star: [4],
      label: ["Lễ tân 24 giờ"],
    },
    {
      id: 16,
      name: "Du thuyền Genesis Regal",
      image: cardBoat6,
      located: "Đảo Cát Bà",
      infor: "Hạ thuỷ 2019 - Tàu vỏ Kim loại - 20 phòng",
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
    {
      id: 17,
      name: "Du thuyền Genesis Regal",
      image: cardBoat7,
      located: "Vịnh Hạ Long",
      infor: "Hạ thuỷ 2019 - Tàu vỏ Kim loại - 20 phòng",
      price: 50000000,
      star: [4],
      label: ["Lễ tân 24 giờ"],
    },
    {
      id: 18,
      name: "Du thuyền Genesis Regal",
      image: cardBoat8,
      located: "Vịnh Hạ Long",
      infor: "Hạ thuỷ 2019 - Tàu vỏ Kim loại - 20 phòng",
      price: 40000000,
      star: [3, 4, 5],
      label: ["Có bể sục", "Lễ tân 24 giờ"],
    },
    {
      id: 19,
      name: "Du thuyền Genesis Regal",
      image: cardBoat9,
      located: "Vịnh Lan Hạ",
      infor: "Hạ thuỷ 2019 - Tàu vỏ Kim loại - 20 phòng",
      price: 30000000,
      star: [3],
      label: [],
    },
    {
      id: 20,
      name: "Du thuyền Genesis Regal",
      image: cardBoat10,
      located: "Vịnh Hạ Long",
      infor: "Hạ thuỷ 2019 - Tàu vỏ Kim loại - 20 phòng",
      price: 20000000,
      star: [4],
      label: ["Lễ tân 24 giờ"],
    },
    {
      id: 21,
      name: "Du thuyền Genesis Regal",
      image: cardBoat10,
      located: "Vịnh Hạ Long",
      infor: "Hạ thuỷ 2019 - Tàu vỏ Kim loại - 20 phòng",
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
function PolularShips() {
  const currentData = dataCardBoat.data.slice(0, 6);
  return (
    <div className={style.popularShipSections}>
      <div className="container section">
        <ContentBox
          title1={"Du thuyền mới"}
          title2={"và phổ biến nhất"}
          desc={
            "Tận hưởng sự xa hoa và đẳng cấp tối đa trên du thuyền mới nhất và phổ biến nhất. Khám phá một hành trình tuyệt vời đưa bạn vào thế giới của sự sang trọng, tiện nghi và trải nghiệm không thể quên."
          }
        />
        {/* <div className={style.polularShips_cardList}> */}
        <ProductCard currentData={currentData} />
        {/* </div> */}
        <div className={style.polularShips_button}>
          <Button paddingType="paddingBig" colorType="normal">
            <div className="md">Xem tất cả Du thuyền</div>
            <FaArrowRight />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default PolularShips;
