import cardBoat1 from "../assets/image/card/1.webp";
import cardBoat2 from "../assets/image/card/2.webp";
import cardBoat3 from "../assets/image/card/3.webp";
import cardBoat4 from "../assets/image/card/4.webp";
import cardBoat5 from "../assets/image/card/5.webp";
import cardBoat6 from "../assets/image/card/6.webp";
import cardBoat7 from "../assets/image/card/7.webp";
import cardBoat8 from "../assets/image/card/8.webp";
import cardBoat9 from "../assets/image/card/9.jpg";
import cardBoat10 from "../assets/image/card/10.webp";

import room1 from "../assets/image/boatroom/1.webp";
import room2 from "../assets/image/boatroom/2.webp";
import room3 from "../assets/image/boatroom/3.webp";
import room4 from "../assets/image/boatroom/4.webp";
import room5 from "../assets/image/boatroom/1.webp";

import detailImg1 from "../assets/image/detailRoomBoat/room1/1.webp";
import detailImg2 from "../assets/image/detailRoomBoat/room1/2.webp";
import detailImg3 from "../assets/image/detailRoomBoat/room1/3.webp";
import detailImg4 from "../assets/image/detailRoomBoat/room1/4.webp";
import detailImg5 from "../assets/image/detailRoomBoat/room1/5.webp";
import detailImg11 from "../assets/image/detailRoomBoat/room1/6.webp";
import detailImg6 from "../assets/image/detailRoomBoat/room2/1.webp";
import detailImg7 from "../assets/image/detailRoomBoat/room2/2.webp";
import detailImg8 from "../assets/image/detailRoomBoat/room2/3.webp";
import detailImg9 from "../assets/image/detailRoomBoat/room2/4.webp";
import detailImg10 from "../assets/image/detailRoomBoat/room2/5.webp";

const dataCardBoat = {
  data: [
    {
      id: 1,
      name: "Du thuyền Heritage  Bình Chuẩn Cát Bà",
      located: "Vịnh Lan Hạ",
      infor: "Hạ thuỷ 2019 - Tàu vỏ Kim loại - 20 phòng",
      image: cardBoat1,
      price: 1000000,
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
      slug: "du-thuyen-heritage-binh-chuan-cat-ba",
      boatRoom: [
        {
          id: 1,
          title: "Phòng Delta Suite1",
          price: 3675000,
          max: 2,
          size: 33,
          image: room1,
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
          detailImage: [
            {
              image: detailImg1,
            },
            {
              image: detailImg2,
            },
            {
              image: detailImg3,
            },
            {
              image: detailImg4,
            },
            {
              image: detailImg5,
            },
            {
              image: detailImg6,
            },
          ],
        },
        {
          id: 2,
          title: "Phòng Delta Suite2",
          price: 3675000,
          max: 2,
          size: 33,
          image: room2,
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
          detailImage: [
            {
              image: detailImg11,
            },
            {
              image: detailImg8,
            },
            {
              image: detailImg9,
            },
            {
              image: detailImg10,
            },
            {
              image: detailImg1,
            },
            {
              image: detailImg6,
            },
          ],
        },
        {
          id: 3,
          title: "Phòng Delta Suite3",
          price: 3675000,
          max: 2,
          size: 33,
          image: room3,
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
          detailImage: [
            {
              image: detailImg1,
            },
            {
              image: detailImg2,
            },
            {
              image: detailImg3,
            },
            {
              image: detailImg4,
            },
            {
              image: detailImg5,
            },
            {
              image: detailImg6,
            },
          ],
        },
        {
          id: 4,
          title: "Phòng Delta Suite4",
          price: 3675000,
          max: 2,
          size: 33,
          image: room4,
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
          detailImage: [
            {
              image: detailImg1,
            },
            {
              image: detailImg2,
            },
            {
              image: detailImg3,
            },
            {
              image: detailImg7,
            },
            {
              image: detailImg9,
            },
            {
              image: detailImg10,
            },
          ],
        },
        {
          id: 5,
          title: "Phòng Delta Suite5",
          price: 3675000,
          max: 2,
          size: 33,
          image: room5,
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
          detailImage: [
            {
              image: detailImg1,
            },
            {
              image: detailImg10,
            },
            {
              image: detailImg11,
            },
            {
              image: detailImg4,
            },
            {
              image: detailImg5,
            },
            {
              image: detailImg6,
            },
          ],
        },
      ],
    },
    {
      id: 2,
      name: "Du thuyền Indochine",
      image: cardBoat2,
      located: "Đảo Cát Bà",
      infor: "Hạ thuỷ 2017 - Tàu vỏ Kim loại - 200 phòng",
      price: 3000000,
      star: [4],
      label: [
        "Phòng gia đình",
        "Nhà hàng",
        "Khu vực bãi tắm riêng",
        "Bao gồm tất cả các bữa ăn",
        "Có bể sục",
        "Phòng gia đình",
      ],
      slug: "du-thuyen-heritage-binh-chuan-cat-ba1",
      boatRoom: [
        {
          id: 1,
          title: "Phòng Delta Suite1",
          price: 3675000,
          max: 2,
          size: 33,
          image: room1,
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
          detailImage: [
            {
              image: detailImg1,
            },
            {
              image: detailImg2,
            },
            {
              image: detailImg3,
            },
            {
              image: detailImg4,
            },
            {
              image: detailImg5,
            },
            {
              image: detailImg6,
            },
          ],
        },
        {
          id: 2,
          title: "Phòng Delta Suite2",
          price: 3675000,
          max: 2,
          size: 33,
          image: room2,
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
          detailImage: [
            {
              image: detailImg11,
            },
            {
              image: detailImg8,
            },
            {
              image: detailImg9,
            },
            {
              image: detailImg10,
            },
            {
              image: detailImg1,
            },
            {
              image: detailImg6,
            },
          ],
        },
        {
          id: 3,
          title: "Phòng Delta Suite3",
          price: 3675000,
          max: 2,
          size: 33,
          image: room3,
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
          detailImage: [
            {
              image: detailImg1,
            },
            {
              image: detailImg2,
            },
            {
              image: detailImg3,
            },
            {
              image: detailImg4,
            },
            {
              image: detailImg5,
            },
            {
              image: detailImg6,
            },
          ],
        },
        {
          id: 4,
          title: "Phòng Delta Suite4",
          price: 3675000,
          max: 2,
          size: 33,
          image: room4,
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
          detailImage: [
            {
              image: detailImg1,
            },
            {
              image: detailImg2,
            },
            {
              image: detailImg3,
            },
            {
              image: detailImg7,
            },
            {
              image: detailImg9,
            },
            {
              image: detailImg10,
            },
          ],
        },
        {
          id: 5,
          title: "Phòng Delta Suite5",
          price: 3675000,
          max: 2,
          size: 33,
          image: room5,
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
          detailImage: [
            {
              image: detailImg1,
            },
            {
              image: detailImg10,
            },
            {
              image: detailImg11,
            },
            {
              image: detailImg4,
            },
            {
              image: detailImg5,
            },
            {
              image: detailImg6,
            },
          ],
        },
      ],
    },
    {
      id: 3,
      name: "Du thuyền Le Theatre",
      image: cardBoat3,
      located: "Vịnh Hạ Long",
      infor: "Hạ thuỷ 2012 - Tàu vỏ Kim loại - 80 phòng",
      price: 2500000,
      star: [5],
      label: ["Quầy bar", "Giáp biển"],
      slug: "du-thuyen-heritage-binh-chuan-cat-ba2",
      boatRoom: [
        {
          id: 1,
          title: "Phòng Delta Suite1",
          price: 3675000,
          max: 2,
          size: 33,
          image: room1,
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
          detailImage: [
            {
              image: detailImg1,
            },
            {
              image: detailImg2,
            },
            {
              image: detailImg3,
            },
            {
              image: detailImg4,
            },
            {
              image: detailImg5,
            },
            {
              image: detailImg6,
            },
          ],
        },
        {
          id: 2,
          title: "Phòng Delta Suite2",
          price: 3675000,
          max: 2,
          size: 33,
          image: room2,
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
          detailImage: [
            {
              image: detailImg11,
            },
            {
              image: detailImg8,
            },
            {
              image: detailImg9,
            },
            {
              image: detailImg10,
            },
            {
              image: detailImg1,
            },
            {
              image: detailImg6,
            },
          ],
        },
        {
          id: 3,
          title: "Phòng Delta Suite3",
          price: 3675000,
          max: 2,
          size: 33,
          image: room3,
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
          detailImage: [
            {
              image: detailImg1,
            },
            {
              image: detailImg2,
            },
            {
              image: detailImg3,
            },
            {
              image: detailImg4,
            },
            {
              image: detailImg5,
            },
            {
              image: detailImg6,
            },
          ],
        },
        {
          id: 4,
          title: "Phòng Delta Suite4",
          price: 3675000,
          max: 2,
          size: 33,
          image: room4,
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
          detailImage: [
            {
              image: detailImg1,
            },
            {
              image: detailImg2,
            },
            {
              image: detailImg3,
            },
            {
              image: detailImg7,
            },
            {
              image: detailImg9,
            },
            {
              image: detailImg10,
            },
          ],
        },
        {
          id: 5,
          title: "Phòng Delta Suite5",
          price: 3675000,
          max: 2,
          size: 33,
          image: room5,
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
          detailImage: [
            {
              image: detailImg1,
            },
            {
              image: detailImg10,
            },
            {
              image: detailImg11,
            },
            {
              image: detailImg4,
            },
            {
              image: detailImg5,
            },
            {
              image: detailImg6,
            },
          ],
        },
      ],
    },
    {
      id: 4,
      name: "Du thuyền Orchid Trendy",
      image: cardBoat4,
      located: "Vịnh Hạ Long",
      infor: "Hạ thuỷ 2011 - Tàu vỏ Kim loại - 30 phòng",
      price: 2000000,
      star: [3],
      label: [],
      slug: "du-thuyen-heritage-binh-chuan-cat-ba3",
      boatRoom: [
        {
          id: 1,
          title: "Phòng Delta Suite1",
          price: 3675000,
          max: 2,
          size: 33,
          image: room1,
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
          detailImage: [
            {
              image: detailImg1,
            },
            {
              image: detailImg2,
            },
            {
              image: detailImg3,
            },
            {
              image: detailImg4,
            },
            {
              image: detailImg5,
            },
            {
              image: detailImg6,
            },
          ],
        },
        {
          id: 2,
          title: "Phòng Delta Suite2",
          price: 3675000,
          max: 2,
          size: 33,
          image: room2,
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
          detailImage: [
            {
              image: detailImg11,
            },
            {
              image: detailImg8,
            },
            {
              image: detailImg9,
            },
            {
              image: detailImg10,
            },
            {
              image: detailImg1,
            },
            {
              image: detailImg6,
            },
          ],
        },
        {
          id: 3,
          title: "Phòng Delta Suite3",
          price: 3675000,
          max: 2,
          size: 33,
          image: room3,
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
          detailImage: [
            {
              image: detailImg1,
            },
            {
              image: detailImg2,
            },
            {
              image: detailImg3,
            },
            {
              image: detailImg4,
            },
            {
              image: detailImg5,
            },
            {
              image: detailImg6,
            },
          ],
        },
        {
          id: 4,
          title: "Phòng Delta Suite4",
          price: 3675000,
          max: 2,
          size: 33,
          image: room4,
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
          detailImage: [
            {
              image: detailImg1,
            },
            {
              image: detailImg2,
            },
            {
              image: detailImg3,
            },
            {
              image: detailImg7,
            },
            {
              image: detailImg9,
            },
            {
              image: detailImg10,
            },
          ],
        },
        {
          id: 5,
          title: "Phòng Delta Suite5",
          price: 3675000,
          max: 2,
          size: 33,
          image: room5,
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
          detailImage: [
            {
              image: detailImg1,
            },
            {
              image: detailImg10,
            },
            {
              image: detailImg11,
            },
            {
              image: detailImg4,
            },
            {
              image: detailImg5,
            },
            {
              image: detailImg6,
            },
          ],
        },
      ],
    },
    {
      id: 5,
      name: "Du thuyền Milalux",
      image: cardBoat5,
      located: "Vịnh Hạ Long",
      infor: "Hạ thuỷ 2019 - Tàu vỏ Kim loại - 20 phòng",
      price: 1700000,
      star: [4],
      label: [
        "Lễ tân 24 giờ",
        "Nhà hàng",
        "Khu vực bãi tắm riêng",
        "Bao gồm tất cả các bữa ăn",
        "Có bể sục",
        "Phòng gia đình",
      ],
      slug: "du-thuyen-heritage-binh-chuan-cat-ba4",
      boatRoom: [
        {
          id: 1,
          title: "Phòng Delta Suite1",
          price: 3675000,
          max: 2,
          size: 33,
          image: room1,
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
          detailImage: [
            {
              image: detailImg1,
            },
            {
              image: detailImg2,
            },
            {
              image: detailImg3,
            },
            {
              image: detailImg4,
            },
            {
              image: detailImg5,
            },
            {
              image: detailImg6,
            },
          ],
        },
        {
          id: 2,
          title: "Phòng Delta Suite2",
          price: 3675000,
          max: 2,
          size: 33,
          image: room2,
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
          detailImage: [
            {
              image: detailImg11,
            },
            {
              image: detailImg8,
            },
            {
              image: detailImg9,
            },
            {
              image: detailImg10,
            },
            {
              image: detailImg1,
            },
            {
              image: detailImg6,
            },
          ],
        },
        {
          id: 3,
          title: "Phòng Delta Suite3",
          price: 3675000,
          max: 2,
          size: 33,
          image: room3,
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
          detailImage: [
            {
              image: detailImg1,
            },
            {
              image: detailImg2,
            },
            {
              image: detailImg3,
            },
            {
              image: detailImg4,
            },
            {
              image: detailImg5,
            },
            {
              image: detailImg6,
            },
          ],
        },
        {
          id: 4,
          title: "Phòng Delta Suite4",
          price: 3675000,
          max: 2,
          size: 33,
          image: room4,
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
          detailImage: [
            {
              image: detailImg1,
            },
            {
              image: detailImg2,
            },
            {
              image: detailImg3,
            },
            {
              image: detailImg7,
            },
            {
              image: detailImg9,
            },
            {
              image: detailImg10,
            },
          ],
        },
        {
          id: 5,
          title: "Phòng Delta Suite5",
          price: 3675000,
          max: 2,
          size: 33,
          image: room5,
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
          detailImage: [
            {
              image: detailImg1,
            },
            {
              image: detailImg10,
            },
            {
              image: detailImg11,
            },
            {
              image: detailImg4,
            },
            {
              image: detailImg5,
            },
            {
              image: detailImg6,
            },
          ],
        },
      ],
    },
    {
      id: 6,
      name: "Du thuyền Orchid Premium Ha Long",
      image: cardBoat6,
      located: "Vịnh Hạ Long",
      infor: "Hạ thuỷ 2019 - Tàu vỏ Kim loại - 20 phòng",
      price: 2500000,
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
      slug: "du-thuyen-heritage-binh-chuan-cat-ba5",
      boatRoom: [
        {
          id: 1,
          title: "Phòng Delta Suite1",
          price: 3675000,
          max: 2,
          size: 33,
          image: room1,
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
          detailImage: [
            {
              image: detailImg1,
            },
            {
              image: detailImg2,
            },
            {
              image: detailImg3,
            },
            {
              image: detailImg4,
            },
            {
              image: detailImg5,
            },
            {
              image: detailImg6,
            },
          ],
        },
        {
          id: 2,
          title: "Phòng Delta Suite2",
          price: 3675000,
          max: 2,
          size: 33,
          image: room2,
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
          detailImage: [
            {
              image: detailImg11,
            },
            {
              image: detailImg8,
            },
            {
              image: detailImg9,
            },
            {
              image: detailImg10,
            },
            {
              image: detailImg1,
            },
            {
              image: detailImg6,
            },
          ],
        },
        {
          id: 3,
          title: "Phòng Delta Suite3",
          price: 3675000,
          max: 2,
          size: 33,
          image: room3,
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
          detailImage: [
            {
              image: detailImg1,
            },
            {
              image: detailImg2,
            },
            {
              image: detailImg3,
            },
            {
              image: detailImg4,
            },
            {
              image: detailImg5,
            },
            {
              image: detailImg6,
            },
          ],
        },
        {
          id: 4,
          title: "Phòng Delta Suite4",
          price: 3675000,
          max: 2,
          size: 33,
          image: room4,
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
          detailImage: [
            {
              image: detailImg1,
            },
            {
              image: detailImg2,
            },
            {
              image: detailImg3,
            },
            {
              image: detailImg7,
            },
            {
              image: detailImg9,
            },
            {
              image: detailImg10,
            },
          ],
        },
        {
          id: 5,
          title: "Phòng Delta Suite5",
          price: 3675000,
          max: 2,
          size: 33,
          image: room5,
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
          detailImage: [
            {
              image: detailImg1,
            },
            {
              image: detailImg10,
            },
            {
              image: detailImg11,
            },
            {
              image: detailImg4,
            },
            {
              image: detailImg5,
            },
            {
              image: detailImg6,
            },
          ],
        },
      ],
    },
    {
      id: 7,
      name: "Du thuyền La Pandora",
      image: cardBoat7,
      located: "Vịnh Hạ Long",
      infor: "Hạ thuỷ 2019 - Tàu vỏ Kim loại - 20 phòng",
      price: 2500000,
      star: [4],
      label: ["Lễ tân 24 giờ"],
      slug: "du-thuyen-heritage-binh-chuan-cat-ba6",
      boatRoom: [
        {
          id: 1,
          title: "Phòng Delta Suite1",
          price: 3675000,
          max: 2,
          size: 33,
          image: room1,
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
          detailImage: [
            {
              image: detailImg1,
            },
            {
              image: detailImg2,
            },
            {
              image: detailImg3,
            },
            {
              image: detailImg4,
            },
            {
              image: detailImg5,
            },
            {
              image: detailImg6,
            },
          ],
        },
        {
          id: 2,
          title: "Phòng Delta Suite2",
          price: 3675000,
          max: 2,
          size: 33,
          image: room2,
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
          detailImage: [
            {
              image: detailImg11,
            },
            {
              image: detailImg8,
            },
            {
              image: detailImg9,
            },
            {
              image: detailImg10,
            },
            {
              image: detailImg1,
            },
            {
              image: detailImg6,
            },
          ],
        },
        {
          id: 3,
          title: "Phòng Delta Suite3",
          price: 3675000,
          max: 2,
          size: 33,
          image: room3,
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
          detailImage: [
            {
              image: detailImg1,
            },
            {
              image: detailImg2,
            },
            {
              image: detailImg3,
            },
            {
              image: detailImg4,
            },
            {
              image: detailImg5,
            },
            {
              image: detailImg6,
            },
          ],
        },
        {
          id: 4,
          title: "Phòng Delta Suite4",
          price: 3675000,
          max: 2,
          size: 33,
          image: room4,
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
          detailImage: [
            {
              image: detailImg1,
            },
            {
              image: detailImg2,
            },
            {
              image: detailImg3,
            },
            {
              image: detailImg7,
            },
            {
              image: detailImg9,
            },
            {
              image: detailImg10,
            },
          ],
        },
        {
          id: 5,
          title: "Phòng Delta Suite5",
          price: 3675000,
          max: 2,
          size: 33,
          image: room5,
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
          detailImage: [
            {
              image: detailImg1,
            },
            {
              image: detailImg10,
            },
            {
              image: detailImg11,
            },
            {
              image: detailImg4,
            },
            {
              image: detailImg5,
            },
            {
              image: detailImg6,
            },
          ],
        },
      ],
    },

    {
      id: 8,
      name: "Du thuyền Paradise Grand",
      image: cardBoat8,
      located: "Vịnh Hạ Long",
      infor: "Hạ thuỷ 2019 - Tàu vỏ Kim loại - 20 phòng",
      price: 2500000,
      star: [3, 4, 5],
      label: ["Có bể sục", "Lễ tân 24 giờ"],
      slug: "du-thuyen-heritage-binh-chuan-cat-ba7",
      boatRoom: [
        {
          id: 1,
          title: "Phòng Delta Suite1",
          price: 3675000,
          max: 2,
          size: 33,
          image: room1,
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
          detailImage: [
            {
              image: detailImg1,
            },
            {
              image: detailImg2,
            },
            {
              image: detailImg3,
            },
            {
              image: detailImg4,
            },
            {
              image: detailImg5,
            },
            {
              image: detailImg6,
            },
          ],
        },
        {
          id: 2,
          title: "Phòng Delta Suite2",
          price: 3675000,
          max: 2,
          size: 33,
          image: room2,
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
          detailImage: [
            {
              image: detailImg11,
            },
            {
              image: detailImg8,
            },
            {
              image: detailImg9,
            },
            {
              image: detailImg10,
            },
            {
              image: detailImg1,
            },
            {
              image: detailImg6,
            },
          ],
        },
        {
          id: 3,
          title: "Phòng Delta Suite3",
          price: 3675000,
          max: 2,
          size: 33,
          image: room3,
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
          detailImage: [
            {
              image: detailImg1,
            },
            {
              image: detailImg2,
            },
            {
              image: detailImg3,
            },
            {
              image: detailImg4,
            },
            {
              image: detailImg5,
            },
            {
              image: detailImg6,
            },
          ],
        },
        {
          id: 4,
          title: "Phòng Delta Suite4",
          price: 3675000,
          max: 2,
          size: 33,
          image: room4,
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
          detailImage: [
            {
              image: detailImg1,
            },
            {
              image: detailImg2,
            },
            {
              image: detailImg3,
            },
            {
              image: detailImg7,
            },
            {
              image: detailImg9,
            },
            {
              image: detailImg10,
            },
          ],
        },
        {
          id: 5,
          title: "Phòng Delta Suite5",
          price: 3675000,
          max: 2,
          size: 33,
          image: room5,
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
          detailImage: [
            {
              image: detailImg1,
            },
            {
              image: detailImg10,
            },
            {
              image: detailImg11,
            },
            {
              image: detailImg4,
            },
            {
              image: detailImg5,
            },
            {
              image: detailImg6,
            },
          ],
        },
      ],
    },
    {
      id: 9,
      name: "Product 9",
      image: cardBoat9,
      located: "Vịnh Hạ Long",
      infor: "Hạ thuỷ 2019 - Tàu vỏ Kim loại - 20 phòng",
      price: 2500000,
      star: [3],
      label: [],
      slug: "du-thuyen-heritage-binh-chuan-cat-ba8",
      boatRoom: [
        {
          id: 1,
          title: "Phòng Delta Suite1",
          price: 3675000,
          max: 2,
          size: 33,
          image: room1,
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
          detailImage: [
            {
              image: detailImg1,
            },
            {
              image: detailImg2,
            },
            {
              image: detailImg3,
            },
            {
              image: detailImg4,
            },
            {
              image: detailImg5,
            },
            {
              image: detailImg6,
            },
          ],
        },
        {
          id: 2,
          title: "Phòng Delta Suite2",
          price: 3675000,
          max: 2,
          size: 33,
          image: room2,
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
          detailImage: [
            {
              image: detailImg11,
            },
            {
              image: detailImg8,
            },
            {
              image: detailImg9,
            },
            {
              image: detailImg10,
            },
            {
              image: detailImg1,
            },
            {
              image: detailImg6,
            },
          ],
        },
        {
          id: 3,
          title: "Phòng Delta Suite3",
          price: 3675000,
          max: 2,
          size: 33,
          image: room3,
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
          detailImage: [
            {
              image: detailImg1,
            },
            {
              image: detailImg2,
            },
            {
              image: detailImg3,
            },
            {
              image: detailImg4,
            },
            {
              image: detailImg5,
            },
            {
              image: detailImg6,
            },
          ],
        },
        {
          id: 4,
          title: "Phòng Delta Suite4",
          price: 3675000,
          max: 2,
          size: 33,
          image: room4,
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
          detailImage: [
            {
              image: detailImg1,
            },
            {
              image: detailImg2,
            },
            {
              image: detailImg3,
            },
            {
              image: detailImg7,
            },
            {
              image: detailImg9,
            },
            {
              image: detailImg10,
            },
          ],
        },
        {
          id: 5,
          title: "Phòng Delta Suite5",
          price: 3675000,
          max: 2,
          size: 33,
          image: room5,
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
          detailImage: [
            {
              image: detailImg1,
            },
            {
              image: detailImg10,
            },
            {
              image: detailImg11,
            },
            {
              image: detailImg4,
            },
            {
              image: detailImg5,
            },
            {
              image: detailImg6,
            },
          ],
        },
      ],
    },
    {
      id: 10,
      name: "Du thuyền Genesis Regal",
      image: cardBoat10,
      located: "Vịnh Hạ Long",
      infor: "Hạ thuỷ 2019 - Tàu vỏ Kim loại - 20 phòng",
      price: 2500000,
      star: [4],
      label: ["Lễ tân 24 giờ"],
      slug: "du-thuyen-heritage-binh-chuan-cat-ba9",
      boatRoom: [
        {
          id: 1,
          title: "Phòng Delta Suite1",
          price: 3675000,
          max: 2,
          size: 33,
          image: room1,
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
          detailImage: [
            {
              image: detailImg1,
            },
            {
              image: detailImg2,
            },
            {
              image: detailImg3,
            },
            {
              image: detailImg4,
            },
            {
              image: detailImg5,
            },
            {
              image: detailImg6,
            },
          ],
        },
        {
          id: 2,
          title: "Phòng Delta Suite2",
          price: 3675000,
          max: 2,
          size: 33,
          image: room2,
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
          detailImage: [
            {
              image: detailImg11,
            },
            {
              image: detailImg8,
            },
            {
              image: detailImg9,
            },
            {
              image: detailImg10,
            },
            {
              image: detailImg1,
            },
            {
              image: detailImg6,
            },
          ],
        },
        {
          id: 3,
          title: "Phòng Delta Suite3",
          price: 3675000,
          max: 2,
          size: 33,
          image: room3,
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
          detailImage: [
            {
              image: detailImg1,
            },
            {
              image: detailImg2,
            },
            {
              image: detailImg3,
            },
            {
              image: detailImg4,
            },
            {
              image: detailImg5,
            },
            {
              image: detailImg6,
            },
          ],
        },
        {
          id: 4,
          title: "Phòng Delta Suite4",
          price: 3675000,
          max: 2,
          size: 33,
          image: room4,
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
          detailImage: [
            {
              image: detailImg1,
            },
            {
              image: detailImg2,
            },
            {
              image: detailImg3,
            },
            {
              image: detailImg7,
            },
            {
              image: detailImg9,
            },
            {
              image: detailImg10,
            },
          ],
        },
        {
          id: 5,
          title: "Phòng Delta Suite5",
          price: 3675000,
          max: 2,
          size: 33,
          image: room5,
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
          detailImage: [
            {
              image: detailImg1,
            },
            {
              image: detailImg10,
            },
            {
              image: detailImg11,
            },
            {
              image: detailImg4,
            },
            {
              image: detailImg5,
            },
            {
              image: detailImg6,
            },
          ],
        },
      ],
    },
    {
      id: 11,
      name: "Du thuyền Genesis Regal",
      image: cardBoat1,
      located: "Vịnh Hạ Long",
      infor: "Hạ thuỷ 2019 - Tàu vỏ Kim loại - 20 phòng",
      price: 2500000,
      star: [3, 4, 5],
      label: ["Có bể sục", "Lễ tân 24 giờ"],
      slug: "du-thuyen-heritage-binh-chuan-cat-ba10",
      boatRoom: [
        {
          id: 1,
          title: "Phòng Delta Suite1",
          price: 3675000,
          max: 2,
          size: 33,
          image: room1,
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
          detailImage: [
            {
              image: detailImg1,
            },
            {
              image: detailImg2,
            },
            {
              image: detailImg3,
            },
            {
              image: detailImg4,
            },
            {
              image: detailImg5,
            },
            {
              image: detailImg6,
            },
          ],
        },
        {
          id: 2,
          title: "Phòng Delta Suite2",
          price: 3675000,
          max: 2,
          size: 33,
          image: room2,
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
          detailImage: [
            {
              image: detailImg11,
            },
            {
              image: detailImg8,
            },
            {
              image: detailImg9,
            },
            {
              image: detailImg10,
            },
            {
              image: detailImg1,
            },
            {
              image: detailImg6,
            },
          ],
        },
        {
          id: 3,
          title: "Phòng Delta Suite3",
          price: 3675000,
          max: 2,
          size: 33,
          image: room3,
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
          detailImage: [
            {
              image: detailImg1,
            },
            {
              image: detailImg2,
            },
            {
              image: detailImg3,
            },
            {
              image: detailImg4,
            },
            {
              image: detailImg5,
            },
            {
              image: detailImg6,
            },
          ],
        },
        {
          id: 4,
          title: "Phòng Delta Suite4",
          price: 3675000,
          max: 2,
          size: 33,
          image: room4,
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
          detailImage: [
            {
              image: detailImg1,
            },
            {
              image: detailImg2,
            },
            {
              image: detailImg3,
            },
            {
              image: detailImg7,
            },
            {
              image: detailImg9,
            },
            {
              image: detailImg10,
            },
          ],
        },
        {
          id: 5,
          title: "Phòng Delta Suite5",
          price: 3675000,
          max: 2,
          size: 33,
          image: room5,
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
          detailImage: [
            {
              image: detailImg1,
            },
            {
              image: detailImg10,
            },
            {
              image: detailImg11,
            },
            {
              image: detailImg4,
            },
            {
              image: detailImg5,
            },
            {
              image: detailImg6,
            },
          ],
        },
      ],
    },
    {
      id: 12,
      name: "Du thuyền Genesis Regal",
      image: cardBoat2,
      located: "Vịnh Hạ Long",
      infor: "Hạ thuỷ 2019 - Tàu vỏ Kim loại - 20 phòng",
      price: 2500000,
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
      slug: "du-thuyen-heritage-binh-chuan-cat-ba11",
      boatRoom: [
        {
          id: 1,
          title: "Phòng Delta Suite1",
          price: 3675000,
          max: 2,
          size: 33,
          image: room1,
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
          detailImage: [
            {
              image: detailImg1,
            },
            {
              image: detailImg2,
            },
            {
              image: detailImg3,
            },
            {
              image: detailImg4,
            },
            {
              image: detailImg5,
            },
            {
              image: detailImg6,
            },
          ],
        },
        {
          id: 2,
          title: "Phòng Delta Suite2",
          price: 3675000,
          max: 2,
          size: 33,
          image: room2,
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
          detailImage: [
            {
              image: detailImg11,
            },
            {
              image: detailImg8,
            },
            {
              image: detailImg9,
            },
            {
              image: detailImg10,
            },
            {
              image: detailImg1,
            },
            {
              image: detailImg6,
            },
          ],
        },
        {
          id: 3,
          title: "Phòng Delta Suite3",
          price: 3675000,
          max: 2,
          size: 33,
          image: room3,
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
          detailImage: [
            {
              image: detailImg1,
            },
            {
              image: detailImg2,
            },
            {
              image: detailImg3,
            },
            {
              image: detailImg4,
            },
            {
              image: detailImg5,
            },
            {
              image: detailImg6,
            },
          ],
        },
        {
          id: 4,
          title: "Phòng Delta Suite4",
          price: 3675000,
          max: 2,
          size: 33,
          image: room4,
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
          detailImage: [
            {
              image: detailImg1,
            },
            {
              image: detailImg2,
            },
            {
              image: detailImg3,
            },
            {
              image: detailImg7,
            },
            {
              image: detailImg9,
            },
            {
              image: detailImg10,
            },
          ],
        },
        {
          id: 5,
          title: "Phòng Delta Suite5",
          price: 3675000,
          max: 2,
          size: 33,
          image: room5,
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
          detailImage: [
            {
              image: detailImg1,
            },
            {
              image: detailImg10,
            },
            {
              image: detailImg11,
            },
            {
              image: detailImg4,
            },
            {
              image: detailImg5,
            },
            {
              image: detailImg6,
            },
          ],
        },
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
      slug: "du-thuyen-heritage-binh-chuan-cat-ba13",
      boatRoom: [
        {
          id: 1,
          title: "Phòng Delta Suite1",
          price: 3675000,
          max: 2,
          size: 33,
          image: room1,
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
          detailImage: [
            {
              image: detailImg1,
            },
            {
              image: detailImg2,
            },
            {
              image: detailImg3,
            },
            {
              image: detailImg4,
            },
            {
              image: detailImg5,
            },
            {
              image: detailImg6,
            },
          ],
        },
        {
          id: 2,
          title: "Phòng Delta Suite2",
          price: 3675000,
          max: 2,
          size: 33,
          image: room2,
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
          detailImage: [
            {
              image: detailImg11,
            },
            {
              image: detailImg8,
            },
            {
              image: detailImg9,
            },
            {
              image: detailImg10,
            },
            {
              image: detailImg1,
            },
            {
              image: detailImg6,
            },
          ],
        },
        {
          id: 3,
          title: "Phòng Delta Suite3",
          price: 3675000,
          max: 2,
          size: 33,
          image: room3,
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
          detailImage: [
            {
              image: detailImg1,
            },
            {
              image: detailImg2,
            },
            {
              image: detailImg3,
            },
            {
              image: detailImg4,
            },
            {
              image: detailImg5,
            },
            {
              image: detailImg6,
            },
          ],
        },
        {
          id: 4,
          title: "Phòng Delta Suite4",
          price: 3675000,
          max: 2,
          size: 33,
          image: room4,
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
          detailImage: [
            {
              image: detailImg1,
            },
            {
              image: detailImg2,
            },
            {
              image: detailImg3,
            },
            {
              image: detailImg7,
            },
            {
              image: detailImg9,
            },
            {
              image: detailImg10,
            },
          ],
        },
        {
          id: 5,
          title: "Phòng Delta Suite5",
          price: 3675000,
          max: 2,
          size: 33,
          image: room5,
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
          detailImage: [
            {
              image: detailImg1,
            },
            {
              image: detailImg10,
            },
            {
              image: detailImg11,
            },
            {
              image: detailImg4,
            },
            {
              image: detailImg5,
            },
            {
              image: detailImg6,
            },
          ],
        },
      ],
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
      slug: "du-thuyen-heritage-binh-chuan-cat-ba14",
      boatRoom: [
        {
          id: 1,
          title: "Phòng Delta Suite1",
          price: 3675000,
          max: 2,
          size: 33,
          image: room1,
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
          detailImage: [
            {
              image: detailImg1,
            },
            {
              image: detailImg2,
            },
            {
              image: detailImg3,
            },
            {
              image: detailImg4,
            },
            {
              image: detailImg5,
            },
            {
              image: detailImg6,
            },
          ],
        },
        {
          id: 2,
          title: "Phòng Delta Suite2",
          price: 3675000,
          max: 2,
          size: 33,
          image: room2,
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
          detailImage: [
            {
              image: detailImg11,
            },
            {
              image: detailImg8,
            },
            {
              image: detailImg9,
            },
            {
              image: detailImg10,
            },
            {
              image: detailImg1,
            },
            {
              image: detailImg6,
            },
          ],
        },
        {
          id: 3,
          title: "Phòng Delta Suite3",
          price: 3675000,
          max: 2,
          size: 33,
          image: room3,
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
          detailImage: [
            {
              image: detailImg1,
            },
            {
              image: detailImg2,
            },
            {
              image: detailImg3,
            },
            {
              image: detailImg4,
            },
            {
              image: detailImg5,
            },
            {
              image: detailImg6,
            },
          ],
        },
        {
          id: 4,
          title: "Phòng Delta Suite4",
          price: 3675000,
          max: 2,
          size: 33,
          image: room4,
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
          detailImage: [
            {
              image: detailImg1,
            },
            {
              image: detailImg2,
            },
            {
              image: detailImg3,
            },
            {
              image: detailImg7,
            },
            {
              image: detailImg9,
            },
            {
              image: detailImg10,
            },
          ],
        },
        {
          id: 5,
          title: "Phòng Delta Suite5",
          price: 3675000,
          max: 2,
          size: 33,
          image: room5,
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
          detailImage: [
            {
              image: detailImg1,
            },
            {
              image: detailImg10,
            },
            {
              image: detailImg11,
            },
            {
              image: detailImg4,
            },
            {
              image: detailImg5,
            },
            {
              image: detailImg6,
            },
          ],
        },
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
      slug: "du-thuyen-heritage-binh-chuan-cat-ba15",
      boatRoom: [
        {
          id: 1,
          title: "Phòng Delta Suite1",
          price: 3675000,
          max: 2,
          size: 33,
          image: room1,
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
          detailImage: [
            {
              image: detailImg1,
            },
            {
              image: detailImg2,
            },
            {
              image: detailImg3,
            },
            {
              image: detailImg4,
            },
            {
              image: detailImg5,
            },
            {
              image: detailImg6,
            },
          ],
        },
        {
          id: 2,
          title: "Phòng Delta Suite2",
          price: 3675000,
          max: 2,
          size: 33,
          image: room2,
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
          detailImage: [
            {
              image: detailImg11,
            },
            {
              image: detailImg8,
            },
            {
              image: detailImg9,
            },
            {
              image: detailImg10,
            },
            {
              image: detailImg1,
            },
            {
              image: detailImg6,
            },
          ],
        },
        {
          id: 3,
          title: "Phòng Delta Suite3",
          price: 3675000,
          max: 2,
          size: 33,
          image: room3,
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
          detailImage: [
            {
              image: detailImg1,
            },
            {
              image: detailImg2,
            },
            {
              image: detailImg3,
            },
            {
              image: detailImg4,
            },
            {
              image: detailImg5,
            },
            {
              image: detailImg6,
            },
          ],
        },
        {
          id: 4,
          title: "Phòng Delta Suite4",
          price: 3675000,
          max: 2,
          size: 33,
          image: room4,
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
          detailImage: [
            {
              image: detailImg1,
            },
            {
              image: detailImg2,
            },
            {
              image: detailImg3,
            },
            {
              image: detailImg7,
            },
            {
              image: detailImg9,
            },
            {
              image: detailImg10,
            },
          ],
        },
        {
          id: 5,
          title: "Phòng Delta Suite5",
          price: 3675000,
          max: 2,
          size: 33,
          image: room5,
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
          detailImage: [
            {
              image: detailImg1,
            },
            {
              image: detailImg10,
            },
            {
              image: detailImg11,
            },
            {
              image: detailImg4,
            },
            {
              image: detailImg5,
            },
            {
              image: detailImg6,
            },
          ],
        },
      ],
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
      slug: "du-thuyen-heritage-binh-chuan-cat-ba16",
      boatRoom: [
        {
          id: 1,
          title: "Phòng Delta Suite1",
          price: 3675000,
          max: 2,
          size: 33,
          image: room1,
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
          detailImage: [
            {
              image: detailImg1,
            },
            {
              image: detailImg2,
            },
            {
              image: detailImg3,
            },
            {
              image: detailImg4,
            },
            {
              image: detailImg5,
            },
            {
              image: detailImg6,
            },
          ],
        },
        {
          id: 2,
          title: "Phòng Delta Suite2",
          price: 3675000,
          max: 2,
          size: 33,
          image: room2,
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
          detailImage: [
            {
              image: detailImg11,
            },
            {
              image: detailImg8,
            },
            {
              image: detailImg9,
            },
            {
              image: detailImg10,
            },
            {
              image: detailImg1,
            },
            {
              image: detailImg6,
            },
          ],
        },
        {
          id: 3,
          title: "Phòng Delta Suite3",
          price: 3675000,
          max: 2,
          size: 33,
          image: room3,
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
          detailImage: [
            {
              image: detailImg1,
            },
            {
              image: detailImg2,
            },
            {
              image: detailImg3,
            },
            {
              image: detailImg4,
            },
            {
              image: detailImg5,
            },
            {
              image: detailImg6,
            },
          ],
        },
        {
          id: 4,
          title: "Phòng Delta Suite4",
          price: 3675000,
          max: 2,
          size: 33,
          image: room4,
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
          detailImage: [
            {
              image: detailImg1,
            },
            {
              image: detailImg2,
            },
            {
              image: detailImg3,
            },
            {
              image: detailImg7,
            },
            {
              image: detailImg9,
            },
            {
              image: detailImg10,
            },
          ],
        },
        {
          id: 5,
          title: "Phòng Delta Suite5",
          price: 3675000,
          max: 2,
          size: 33,
          image: room5,
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
          detailImage: [
            {
              image: detailImg1,
            },
            {
              image: detailImg10,
            },
            {
              image: detailImg11,
            },
            {
              image: detailImg4,
            },
            {
              image: detailImg5,
            },
            {
              image: detailImg6,
            },
          ],
        },
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
      slug: "du-thuyen-heritage-binh-chuan-cat-ba17",
      boatRoom: [
        {
          id: 1,
          title: "Phòng Delta Suite1",
          price: 3675000,
          max: 2,
          size: 33,
          image: room1,
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
          detailImage: [
            {
              image: detailImg1,
            },
            {
              image: detailImg2,
            },
            {
              image: detailImg3,
            },
            {
              image: detailImg4,
            },
            {
              image: detailImg5,
            },
            {
              image: detailImg6,
            },
          ],
        },
        {
          id: 2,
          title: "Phòng Delta Suite2",
          price: 3675000,
          max: 2,
          size: 33,
          image: room2,
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
          detailImage: [
            {
              image: detailImg11,
            },
            {
              image: detailImg8,
            },
            {
              image: detailImg9,
            },
            {
              image: detailImg10,
            },
            {
              image: detailImg1,
            },
            {
              image: detailImg6,
            },
          ],
        },
        {
          id: 3,
          title: "Phòng Delta Suite3",
          price: 3675000,
          max: 2,
          size: 33,
          image: room3,
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
          detailImage: [
            {
              image: detailImg1,
            },
            {
              image: detailImg2,
            },
            {
              image: detailImg3,
            },
            {
              image: detailImg4,
            },
            {
              image: detailImg5,
            },
            {
              image: detailImg6,
            },
          ],
        },
        {
          id: 4,
          title: "Phòng Delta Suite4",
          price: 3675000,
          max: 2,
          size: 33,
          image: room4,
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
          detailImage: [
            {
              image: detailImg1,
            },
            {
              image: detailImg2,
            },
            {
              image: detailImg3,
            },
            {
              image: detailImg7,
            },
            {
              image: detailImg9,
            },
            {
              image: detailImg10,
            },
          ],
        },
        {
          id: 5,
          title: "Phòng Delta Suite5",
          price: 3675000,
          max: 2,
          size: 33,
          image: room5,
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
          detailImage: [
            {
              image: detailImg1,
            },
            {
              image: detailImg10,
            },
            {
              image: detailImg11,
            },
            {
              image: detailImg4,
            },
            {
              image: detailImg5,
            },
            {
              image: detailImg6,
            },
          ],
        },
      ],
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
      slug: "du-thuyen-heritage-binh-chuan-cat-ba18",
      boatRoom: [
        {
          id: 1,
          title: "Phòng Delta Suite1",
          price: 3675000,
          max: 2,
          size: 33,
          image: room1,
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
          detailImage: [
            {
              image: detailImg1,
            },
            {
              image: detailImg2,
            },
            {
              image: detailImg3,
            },
            {
              image: detailImg4,
            },
            {
              image: detailImg5,
            },
            {
              image: detailImg6,
            },
          ],
        },
        {
          id: 2,
          title: "Phòng Delta Suite2",
          price: 3675000,
          max: 2,
          size: 33,
          image: room2,
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
          detailImage: [
            {
              image: detailImg11,
            },
            {
              image: detailImg8,
            },
            {
              image: detailImg9,
            },
            {
              image: detailImg10,
            },
            {
              image: detailImg1,
            },
            {
              image: detailImg6,
            },
          ],
        },
        {
          id: 3,
          title: "Phòng Delta Suite3",
          price: 3675000,
          max: 2,
          size: 33,
          image: room3,
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
          detailImage: [
            {
              image: detailImg1,
            },
            {
              image: detailImg2,
            },
            {
              image: detailImg3,
            },
            {
              image: detailImg4,
            },
            {
              image: detailImg5,
            },
            {
              image: detailImg6,
            },
          ],
        },
        {
          id: 4,
          title: "Phòng Delta Suite4",
          price: 3675000,
          max: 2,
          size: 33,
          image: room4,
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
          detailImage: [
            {
              image: detailImg1,
            },
            {
              image: detailImg2,
            },
            {
              image: detailImg3,
            },
            {
              image: detailImg7,
            },
            {
              image: detailImg9,
            },
            {
              image: detailImg10,
            },
          ],
        },
        {
          id: 5,
          title: "Phòng Delta Suite5",
          price: 3675000,
          max: 2,
          size: 33,
          image: room5,
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
          detailImage: [
            {
              image: detailImg1,
            },
            {
              image: detailImg10,
            },
            {
              image: detailImg11,
            },
            {
              image: detailImg4,
            },
            {
              image: detailImg5,
            },
            {
              image: detailImg6,
            },
          ],
        },
      ],
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
      slug: "du-thuyen-heritage-binh-chuan-cat-ba19",
      boatRoom: [
        {
          id: 1,
          title: "Phòng Delta Suite1",
          price: 3675000,
          max: 2,
          size: 33,
          image: room1,
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
          detailImage: [
            {
              image: detailImg1,
            },
            {
              image: detailImg2,
            },
            {
              image: detailImg3,
            },
            {
              image: detailImg4,
            },
            {
              image: detailImg5,
            },
            {
              image: detailImg6,
            },
          ],
        },
        {
          id: 2,
          title: "Phòng Delta Suite2",
          price: 3675000,
          max: 2,
          size: 33,
          image: room2,
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
          detailImage: [
            {
              image: detailImg11,
            },
            {
              image: detailImg8,
            },
            {
              image: detailImg9,
            },
            {
              image: detailImg10,
            },
            {
              image: detailImg1,
            },
            {
              image: detailImg6,
            },
          ],
        },
        {
          id: 3,
          title: "Phòng Delta Suite3",
          price: 3675000,
          max: 2,
          size: 33,
          image: room3,
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
          detailImage: [
            {
              image: detailImg1,
            },
            {
              image: detailImg2,
            },
            {
              image: detailImg3,
            },
            {
              image: detailImg4,
            },
            {
              image: detailImg5,
            },
            {
              image: detailImg6,
            },
          ],
        },
        {
          id: 4,
          title: "Phòng Delta Suite4",
          price: 3675000,
          max: 2,
          size: 33,
          image: room4,
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
          detailImage: [
            {
              image: detailImg1,
            },
            {
              image: detailImg2,
            },
            {
              image: detailImg3,
            },
            {
              image: detailImg7,
            },
            {
              image: detailImg9,
            },
            {
              image: detailImg10,
            },
          ],
        },
        {
          id: 5,
          title: "Phòng Delta Suite5",
          price: 3675000,
          max: 2,
          size: 33,
          image: room5,
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
          detailImage: [
            {
              image: detailImg1,
            },
            {
              image: detailImg10,
            },
            {
              image: detailImg11,
            },
            {
              image: detailImg4,
            },
            {
              image: detailImg5,
            },
            {
              image: detailImg6,
            },
          ],
        },
      ],
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
      slug: "du-thuyen-heritage-binh-chuan-cat-ba20",
      boatRoom: [
        {
          id: 1,
          title: "Phòng Delta Suite1",
          price: 3675000,
          max: 2,
          size: 33,
          image: room1,
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
          detailImage: [
            {
              image: detailImg1,
            },
            {
              image: detailImg2,
            },
            {
              image: detailImg3,
            },
            {
              image: detailImg4,
            },
            {
              image: detailImg5,
            },
            {
              image: detailImg6,
            },
          ],
        },
        {
          id: 2,
          title: "Phòng Delta Suite2",
          price: 3675000,
          max: 2,
          size: 33,
          image: room2,
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
          detailImage: [
            {
              image: detailImg11,
            },
            {
              image: detailImg8,
            },
            {
              image: detailImg9,
            },
            {
              image: detailImg10,
            },
            {
              image: detailImg1,
            },
            {
              image: detailImg6,
            },
          ],
        },
        {
          id: 3,
          title: "Phòng Delta Suite3",
          price: 3675000,
          max: 2,
          size: 33,
          image: room3,
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
          detailImage: [
            {
              image: detailImg1,
            },
            {
              image: detailImg2,
            },
            {
              image: detailImg3,
            },
            {
              image: detailImg4,
            },
            {
              image: detailImg5,
            },
            {
              image: detailImg6,
            },
          ],
        },
        {
          id: 4,
          title: "Phòng Delta Suite4",
          price: 3675000,
          max: 2,
          size: 33,
          image: room4,
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
          detailImage: [
            {
              image: detailImg1,
            },
            {
              image: detailImg2,
            },
            {
              image: detailImg3,
            },
            {
              image: detailImg7,
            },
            {
              image: detailImg9,
            },
            {
              image: detailImg10,
            },
          ],
        },
        {
          id: 5,
          title: "Phòng Delta Suite5",
          price: 3675000,
          max: 2,
          size: 33,
          image: room5,
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
          detailImage: [
            {
              image: detailImg1,
            },
            {
              image: detailImg10,
            },
            {
              image: detailImg11,
            },
            {
              image: detailImg4,
            },
            {
              image: detailImg5,
            },
            {
              image: detailImg6,
            },
          ],
        },
      ],
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
      slug: "du-thuyen-heritage-binh-chuan-cat-ba21",
      boatRoom: [
        {
          id: 1,
          title: "Phòng Delta Suite1",
          price: 3675000,
          max: 2,
          size: 33,
          image: room1,
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
          detailImage: [
            {
              image: detailImg1,
            },
            {
              image: detailImg2,
            },
            {
              image: detailImg3,
            },
            {
              image: detailImg4,
            },
            {
              image: detailImg5,
            },
            {
              image: detailImg6,
            },
          ],
        },
        {
          id: 2,
          title: "Phòng Delta Suite2",
          price: 3675000,
          max: 2,
          size: 33,
          image: room2,
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
          detailImage: [
            {
              image: detailImg11,
            },
            {
              image: detailImg8,
            },
            {
              image: detailImg9,
            },
            {
              image: detailImg10,
            },
            {
              image: detailImg1,
            },
            {
              image: detailImg6,
            },
          ],
        },
        {
          id: 3,
          title: "Phòng Delta Suite3",
          price: 3675000,
          max: 2,
          size: 33,
          image: room3,
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
          detailImage: [
            {
              image: detailImg1,
            },
            {
              image: detailImg2,
            },
            {
              image: detailImg3,
            },
            {
              image: detailImg4,
            },
            {
              image: detailImg5,
            },
            {
              image: detailImg6,
            },
          ],
        },
        {
          id: 4,
          title: "Phòng Delta Suite4",
          price: 3675000,
          max: 2,
          size: 33,
          image: room4,
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
          detailImage: [
            {
              image: detailImg1,
            },
            {
              image: detailImg2,
            },
            {
              image: detailImg3,
            },
            {
              image: detailImg7,
            },
            {
              image: detailImg9,
            },
            {
              image: detailImg10,
            },
          ],
        },
        {
          id: 5,
          title: "Phòng Delta Suite5",
          price: 3675000,
          max: 2,
          size: 33,
          image: room5,
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
          detailImage: [
            {
              image: detailImg1,
            },
            {
              image: detailImg10,
            },
            {
              image: detailImg11,
            },
            {
              image: detailImg4,
            },
            {
              image: detailImg5,
            },
            {
              image: detailImg6,
            },
          ],
        },
      ],
    },
  ],
  per_page: 5,
};
export default dataCardBoat;
