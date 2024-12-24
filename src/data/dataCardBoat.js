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

import icon1 from "../assets/image/iconsFindBoat/bask.svg";
import icon2 from "../assets/image/iconsFindBoat/Butler.svg";
import icon3 from "../assets/image/iconsFindBoat/cook.svg";
import icon4 from "../assets/image/iconsFindBoat/Food.svg";
import icon5 from "../assets/image/iconsFindBoat/star-3.svg";
import icon6 from "../assets/image/iconsFindBoat/Butler.svg";
import icon7 from "../assets/image/iconsFindBoat/Wine.svg";
import icon8 from "../assets/image/iconsFindBoat/bask.svg";

const dataCardBoat = {
  data: [
    {
      id: 1,
      name: "Du thuyền Heritage  Bình Chuẩn Cát Bà",
      located: "Vịnh Lan Hạ",
      year: 2023,
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.022484029637!2d105.80947457438836!3d21.071764186301834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab917de76245%3A0xc5a28b326eab613a!2zROG7sSDDgW4gSGVyaXRhZ2UgV2VzdCBMYWtl!5e0!3m2!1svi!2s!4v1733889979170!5m2!1svi!2s",
      cabin: 23,
      material: "Kim Loại",
      trip: "Đảo Tuần Châu - Vịnh Hạ Long - Hang Luồn - Đảo Ti Tốp - Hang Sửng Sốt",
      executive: "Công ty Cổ phần tập đoàn HALO ECO",
      bage: "Lux Cruises, Lô 28 Cảng Quốc Tế Tuần Châu",
      overview: [
        {
          desc: " Du thuyền được thiết kế theo phong cách quốc tế với nội thất trang trí Đông Dương, lấy cảm hứng từ nét đẹp yêu kiều của người phụ nữ Á Đông",
        },
        {
          desc: "Du thuyền có  39 phòng cao cấp đều có ban công riêng và bồn tắm full view biển",
        },
        {
          desc: " Catherine là một khu nghỉ dưỡng thu nhỏ với hàng loạt dịch vụ giải trí cao cấp trên tàu: 02 nhà hàng, 02 phòng Spa riêng biệt cho nam và nữ, 02 phòng Karaoke sang trọng, Phòng thử rượu & cigars, Bể bơi vô cực 40m3, Phòng Poker (Texas hold’em), Sân golf mini…",
        },
        {
          desc: "Tại đây, du khách sẽ có khoảng thời gian vui vẻ để trải nghiệm các món ăn được lấy cảm hứng và có nguồn gốc địa phương, được chuẩn bị cẩn thận bởi các đầu bếp chuyên nghiệp của Catherine.",
        },
      ],
      infor: "Hạ thuỷ 2019 - Tàu vỏ Kim loại - 20 phòng",
      reviews: {
        average_rating: 4.91,
        ratings: {
          "1_star": 3,
          "2_star": 0,
          "3_star": 3,
          "4_star": 1,
          "5_star": 2,
        },
        perPage_reviews: 5,
        total_reviews: 9,
        comments: [
          {
            rating: 5,
            comment: "Dịch vụ rất tuyệt vời, mình rất hài lòng!",
            username: "NguyenVanA",
            dateReview: "2024-12-13",
          },
          {
            rating: 5,
            comment: "Sản phẩm chất lượng, giao hàng nhanh.",
            username: "LeMinhB",
            dateReview: "2024-12-12",
          },
          {
            rating: 4,
            comment: "Tạm ổn, nhưng vẫn cần cải thiện ở khâu đóng gói.",
            username: "TranThanhC",
            dateReview: "2024-12-11",
          },
          {
            rating: 3,
            comment: "Rất đáng tiền, sẽ quay lại ủng hộ!",
            username: "PhamThiD",
            dateReview: "2024-12-10",
          },
          {
            rating: 1,
            comment: "Mình cực kỳ hài lòng, nhân viên hỗ trợ rất nhiệt tình.",
            username: "HoangAnhE",
            dateReview: "2024-12-09",
          },
          {
            rating: 3,
            comment: "Rất đáng tiền, sẽ quay lại ủng hộ!",
            username: "PhamThiD",
            dateReviewReview: "2024-12-10",
          },
          {
            rating: 1,
            comment: "Mình cực kỳ hài lòng, nhân viên hỗ trợ rất nhiệt tình.",
            username: "HoangAnhE",
            dateReviewReview: "2024-12-09",
          },
          {
            rating: 3,
            comment: "Rất đáng tiền, sẽ quay lại ủng hộ!",
            username: "PhamThiD",
            dateReviewReview: "2024-12-10",
          },
          {
            rating: 1,
            comment: "Mình cực kỳ hài lòng, nhân viên hỗ trợ rất nhiệt tình.",
            username: "HoangAnhE",
            dateReviewReview: "2024-12-09",
          },
        ],
      },
      image: cardBoat1,
      price: 1000000,
      star: 4.9,

      label: [
        { icon: icon1, feature: "Có bể sục" },
        { icon: icon2, feature: "Lễ tân 24 giờ" },
        { icon: icon3, feature: "Quầy bar" },
        { icon: icon4, feature: "Giáp biển" },
        { icon: icon5, feature: "Phòng gia đình" },
        { icon: icon6, feature: "Trung tâm Spa & chăm sóc sức khoẻ" },
        { icon: icon7, feature: "Miễn phí kayaking" },
        { icon: icon8, feature: "Tắm nắng" },
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
            { icon: icon1, feature: "Có bể sục" },
            { icon: icon2, feature: "Lễ tân 24 giờ" },
            { icon: icon3, feature: "Quầy bar" },
            { icon: icon4, feature: "Giáp biển" },
            { icon: icon5, feature: "Phòng gia đình" },
            { icon: icon6, feature: "Trung tâm Spa & chăm sóc sức khoẻ" },
            { icon: icon7, feature: "Miễn phí kayaking" },
            { icon: icon8, feature: "Tắm nắng" },
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
            { icon: icon1, feature: "Có bể sục" },
            { icon: icon2, feature: "Lễ tân 24 giờ" },
            { icon: icon3, feature: "Quầy bar" },
            { icon: icon4, feature: "Giáp biển" },
            { icon: icon5, feature: "Phòng gia đình" },
            { icon: icon6, feature: "Trung tâm Spa & chăm sóc sức khoẻ" },
            { icon: icon7, feature: "Miễn phí kayaking" },
            { icon: icon8, feature: "Tắm nắng" },
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
            { icon: icon1, feature: "Có bể sục" },
            { icon: icon2, feature: "Lễ tân 24 giờ" },
            { icon: icon3, feature: "Quầy bar" },
            { icon: icon4, feature: "Giáp biển" },
            { icon: icon5, feature: "Phòng gia đình" },
            { icon: icon6, feature: "Trung tâm Spa & chăm sóc sức khoẻ" },
            { icon: icon7, feature: "Miễn phí kayaking" },
            { icon: icon8, feature: "Tắm nắng" },
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
            { icon: icon1, feature: "Có bể sục" },
            { icon: icon2, feature: "Lễ tân 24 giờ" },
            { icon: icon3, feature: "Quầy bar" },
            { icon: icon4, feature: "Giáp biển" },
            { icon: icon5, feature: "Phòng gia đình" },
            { icon: icon6, feature: "Trung tâm Spa & chăm sóc sức khoẻ" },
            { icon: icon7, feature: "Miễn phí kayaking" },
            { icon: icon8, feature: "Tắm nắng" },
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
            { icon: icon1, feature: "Có bể sục" },
            { icon: icon2, feature: "Lễ tân 24 giờ" },
            { icon: icon3, feature: "Quầy bar" },
            { icon: icon4, feature: "Giáp biển" },
            { icon: icon5, feature: "Phòng gia đình" },
            { icon: icon6, feature: "Trung tâm Spa & chăm sóc sức khoẻ" },
            { icon: icon7, feature: "Miễn phí kayaking" },
            { icon: icon8, feature: "Tắm nắng" },
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
      year: 2023,
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.988159300598!2d107.05146447230469!3d20.95299064769466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314a599fe53f38c1%3A0xbe13a199388f605!2zQ-G6o25nIHTDoHUga2jDoWNoIFF14buRYyB04bq_IEjhuqEgTG9uZw!5e0!3m2!1svi!2s!4v1733989631208!5m2!1svi!2s",
      cabin: 23,
      material: "Kim Loại",
      trip: "Đảo Tuần Châu - Vịnh Hạ Long - Hang Luồn - Đảo Ti Tốp - Hang Sửng Sốt",
      executive: "Công ty Cổ phần tập đoàn HALO ECO",
      bage: "Lux Cruises, Lô 28 Cảng Quốc Tế Tuần Châu",
      overview: [
        {
          desc: " Du thuyền được thiết kế theo phong cách quốc tế với nội thất trang trí Đông Dương, lấy cảm hứng từ nét đẹp yêu kiều của người phụ nữ Á Đông",
        },
        {
          desc: "Du thuyền có  39 phòng cao cấp đều có ban công riêng và bồn tắm full view biển",
        },
        {
          desc: " Catherine là một khu nghỉ dưỡng thu nhỏ với hàng loạt dịch vụ giải trí cao cấp trên tàu: 02 nhà hàng, 02 phòng Spa riêng biệt cho nam và nữ, 02 phòng Karaoke sang trọng, Phòng thử rượu & cigars, Bể bơi vô cực 40m3, Phòng Poker (Texas hold’em), Sân golf mini…",
        },
        {
          desc: "Tại đây, du khách sẽ có khoảng thời gian vui vẻ để trải nghiệm các món ăn được lấy cảm hứng và có nguồn gốc địa phương, được chuẩn bị cẩn thận bởi các đầu bếp chuyên nghiệp của Catherine.",
        },
      ],
      infor: "Hạ thuỷ 2017 - Tàu vỏ Kim loại - 200 phòng",
      reviews: {
        average_rating: 4.91,
        ratings: {
          "1_star": 3,
          "2_star": 0,
          "3_star": 3,
          "4_star": 1,
          "5_star": 2,
        },
        perPage_reviews: 5,
        total_reviews: 9,
        comments: [
          {
            rating: 5,
            comment: "Dịch vụ rất tuyệt vời, mình rất hài lòng!",
            username: "NguyenVanA",
            dateReview: "2024-12-13",
          },
          {
            rating: 5,
            comment: "Sản phẩm chất lượng, giao hàng nhanh.",
            username: "LeMinhB",
            dateReview: "2024-12-12",
          },
          {
            rating: 4,
            comment: "Tạm ổn, nhưng vẫn cần cải thiện ở khâu đóng gói.",
            username: "TranThanhC",
            dateReview: "2024-12-11",
          },
          {
            rating: 1,
            comment: "Rất đáng tiền, sẽ quay lại ủng hộ!",
            username: "PhamThiD",
            dateReview: "2024-12-10",
          },
          {
            rating: 3,
            comment: "Mình cực kỳ hài lòng, nhân viên hỗ trợ rất nhiệt tình.",
            username: "HoangAnhE",
            dateReview: "2024-12-09",
          },
        ],
      },
      price: 3000000,
      star: 4.0,
      label: [
        { icon: icon1, feature: "Có bể sục" },
        { icon: icon2, feature: "Lễ tân 24 giờ" },
        { icon: icon3, feature: "Quầy bar" },
        { icon: icon4, feature: "Giáp biển" },
        { icon: icon5, feature: "Phòng gia đình" },
        { icon: icon6, feature: "Trung tâm Spa & chăm sóc sức khoẻ" },
        { icon: icon7, feature: "Miễn phí kayaking" },
        { icon: icon8, feature: "Tắm nắng" },
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
            { icon: icon1, feature: "Có bể sục" },
            { icon: icon2, feature: "Lễ tân 24 giờ" },
            { icon: icon3, feature: "Quầy bar" },
            { icon: icon4, feature: "Giáp biển" },
            { icon: icon5, feature: "Phòng gia đình" },
            { icon: icon6, feature: "Trung tâm Spa & chăm sóc sức khoẻ" },
            { icon: icon7, feature: "Miễn phí kayaking" },
            { icon: icon8, feature: "Tắm nắng" },
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
            { icon: icon1, feature: "Có bể sục" },
            { icon: icon2, feature: "Lễ tân 24 giờ" },
            { icon: icon3, feature: "Quầy bar" },
            { icon: icon4, feature: "Giáp biển" },
            { icon: icon5, feature: "Phòng gia đình" },
            { icon: icon6, feature: "Trung tâm Spa & chăm sóc sức khoẻ" },
            { icon: icon7, feature: "Miễn phí kayaking" },
            { icon: icon8, feature: "Tắm nắng" },
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
            { icon: icon1, feature: "Có bể sục" },
            { icon: icon2, feature: "Lễ tân 24 giờ" },
            { icon: icon3, feature: "Quầy bar" },
            { icon: icon4, feature: "Giáp biển" },
            { icon: icon5, feature: "Phòng gia đình" },
            { icon: icon6, feature: "Trung tâm Spa & chăm sóc sức khoẻ" },
            { icon: icon7, feature: "Miễn phí kayaking" },
            { icon: icon8, feature: "Tắm nắng" },
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
            { icon: icon1, feature: "Có bể sục" },
            { icon: icon2, feature: "Lễ tân 24 giờ" },
            { icon: icon3, feature: "Quầy bar" },
            { icon: icon4, feature: "Giáp biển" },
            { icon: icon5, feature: "Phòng gia đình" },
            { icon: icon6, feature: "Trung tâm Spa & chăm sóc sức khoẻ" },
            { icon: icon7, feature: "Miễn phí kayaking" },
            { icon: icon8, feature: "Tắm nắng" },
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
            { icon: icon1, feature: "Có bể sục" },
            { icon: icon2, feature: "Lễ tân 24 giờ" },
            { icon: icon3, feature: "Quầy bar" },
            { icon: icon4, feature: "Giáp biển" },
            { icon: icon5, feature: "Phòng gia đình" },
            { icon: icon6, feature: "Trung tâm Spa & chăm sóc sức khoẻ" },
            { icon: icon7, feature: "Miễn phí kayaking" },
            { icon: icon8, feature: "Tắm nắng" },
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
      year: 2023,
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.022484029637!2d105.80947457438836!3d21.071764186301834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab917de76245%3A0xc5a28b326eab613a!2zROG7sSDDgW4gSGVyaXRhZ2UgV2VzdCBMYWtl!5e0!3m2!1svi!2s!4v1733889979170!5m2!1svi!2s",
      cabin: 23,
      material: "Kim Loại",
      trip: "Đảo Tuần Châu - Vịnh Hạ Long - Hang Luồn - Đảo Ti Tốp - Hang Sửng Sốt",
      executive: "Công ty Cổ phần tập đoàn HALO ECO",
      bage: "Lux Cruises, Lô 28 Cảng Quốc Tế Tuần Châu",
      overview: [
        {
          desc: " Du thuyền được thiết kế theo phong cách quốc tế với nội thất trang trí Đông Dương, lấy cảm hứng từ nét đẹp yêu kiều của người phụ nữ Á Đông",
        },
        {
          desc: "Du thuyền có  39 phòng cao cấp đều có ban công riêng và bồn tắm full view biển",
        },
        {
          desc: " Catherine là một khu nghỉ dưỡng thu nhỏ với hàng loạt dịch vụ giải trí cao cấp trên tàu: 02 nhà hàng, 02 phòng Spa riêng biệt cho nam và nữ, 02 phòng Karaoke sang trọng, Phòng thử rượu & cigars, Bể bơi vô cực 40m3, Phòng Poker (Texas hold’em), Sân golf mini…",
        },
        {
          desc: "Tại đây, du khách sẽ có khoảng thời gian vui vẻ để trải nghiệm các món ăn được lấy cảm hứng và có nguồn gốc địa phương, được chuẩn bị cẩn thận bởi các đầu bếp chuyên nghiệp của Catherine.",
        },
      ],
      infor: "Hạ thuỷ 2012 - Tàu vỏ Kim loại - 80 phòng",
      reviews: {
        average_rating: 4.91,
        ratings: {
          "1_star": 3,
          "2_star": 0,
          "3_star": 3,
          "4_star": 1,
          "5_star": 2,
        },
        perPage_reviews: 5,
        total_reviews: 9,
        comments: [
          {
            rating: 5,
            comment: "Dịch vụ rất tuyệt vời, mình rất hài lòng!",
            username: "NguyenVanA",
            dateReview: "2024-12-13",
          },
          {
            rating: 5,
            comment: "Sản phẩm chất lượng, giao hàng nhanh.",
            username: "LeMinhB",
            dateReview: "2024-12-12",
          },
          {
            rating: 4,
            comment: "Tạm ổn, nhưng vẫn cần cải thiện ở khâu đóng gói.",
            username: "TranThanhC",
            dateReview: "2024-12-11",
          },
          {
            rating: 5,
            comment: "Rất đáng tiền, sẽ quay lại ủng hộ!",
            username: "PhamThiD",
            dateReview: "2024-12-10",
          },
          {
            rating: 5,
            comment: "Mình cực kỳ hài lòng, nhân viên hỗ trợ rất nhiệt tình.",
            username: "HoangAnhE",
            dateReview: "2024-12-09",
          },
        ],
      },
      price: 2500000,
      star: 5.0,
      label: [
        { icon: icon1, feature: "Có bể sục" },
        { icon: icon2, feature: "Lễ tân 24 giờ" },
        { icon: icon3, feature: "Quầy bar" },
        { icon: icon4, feature: "Giáp biển" },
        { icon: icon5, feature: "Phòng gia đình" },
        { icon: icon6, feature: "Trung tâm Spa & chăm sóc sức khoẻ" },
        { icon: icon7, feature: "Miễn phí kayaking" },
        { icon: icon8, feature: "Tắm nắng" },
      ],
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
            { icon: icon1, feature: "Có bể sục" },
            { icon: icon2, feature: "Lễ tân 24 giờ" },
            { icon: icon3, feature: "Quầy bar" },
            { icon: icon4, feature: "Giáp biển" },
            { icon: icon5, feature: "Phòng gia đình" },
            { icon: icon6, feature: "Trung tâm Spa & chăm sóc sức khoẻ" },
            { icon: icon7, feature: "Miễn phí kayaking" },
            { icon: icon8, feature: "Tắm nắng" },
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
            { icon: icon1, feature: "Có bể sục" },
            { icon: icon2, feature: "Lễ tân 24 giờ" },
            { icon: icon3, feature: "Quầy bar" },
            { icon: icon4, feature: "Giáp biển" },
            { icon: icon5, feature: "Phòng gia đình" },
            { icon: icon6, feature: "Trung tâm Spa & chăm sóc sức khoẻ" },
            { icon: icon7, feature: "Miễn phí kayaking" },
            { icon: icon8, feature: "Tắm nắng" },
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
            { icon: icon1, feature: "Có bể sục" },
            { icon: icon2, feature: "Lễ tân 24 giờ" },
            { icon: icon3, feature: "Quầy bar" },
            { icon: icon4, feature: "Giáp biển" },
            { icon: icon5, feature: "Phòng gia đình" },
            { icon: icon6, feature: "Trung tâm Spa & chăm sóc sức khoẻ" },
            { icon: icon7, feature: "Miễn phí kayaking" },
            { icon: icon8, feature: "Tắm nắng" },
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
            { icon: icon1, feature: "Có bể sục" },
            { icon: icon2, feature: "Lễ tân 24 giờ" },
            { icon: icon3, feature: "Quầy bar" },
            { icon: icon4, feature: "Giáp biển" },
            { icon: icon5, feature: "Phòng gia đình" },
            { icon: icon6, feature: "Trung tâm Spa & chăm sóc sức khoẻ" },
            { icon: icon7, feature: "Miễn phí kayaking" },
            { icon: icon8, feature: "Tắm nắng" },
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
            { icon: icon1, feature: "Có bể sục" },
            { icon: icon2, feature: "Lễ tân 24 giờ" },
            { icon: icon3, feature: "Quầy bar" },
            { icon: icon4, feature: "Giáp biển" },
            { icon: icon5, feature: "Phòng gia đình" },
            { icon: icon6, feature: "Trung tâm Spa & chăm sóc sức khoẻ" },
            { icon: icon7, feature: "Miễn phí kayaking" },
            { icon: icon8, feature: "Tắm nắng" },
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
      year: 2023,
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.022484029637!2d105.80947457438836!3d21.071764186301834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab917de76245%3A0xc5a28b326eab613a!2zROG7sSDDgW4gSGVyaXRhZ2UgV2VzdCBMYWtl!5e0!3m2!1svi!2s!4v1733889979170!5m2!1svi!2s",
      cabin: 23,
      material: "Kim Loại",
      trip: "Đảo Tuần Châu - Vịnh Hạ Long - Hang Luồn - Đảo Ti Tốp - Hang Sửng Sốt",
      executive: "Công ty Cổ phần tập đoàn HALO ECO",
      bage: "Lux Cruises, Lô 28 Cảng Quốc Tế Tuần Châu",
      overview: [
        {
          desc: " Du thuyền được thiết kế theo phong cách quốc tế với nội thất trang trí Đông Dương, lấy cảm hứng từ nét đẹp yêu kiều của người phụ nữ Á Đông",
        },
        {
          desc: "Du thuyền có  39 phòng cao cấp đều có ban công riêng và bồn tắm full view biển",
        },
        {
          desc: " Catherine là một khu nghỉ dưỡng thu nhỏ với hàng loạt dịch vụ giải trí cao cấp trên tàu: 02 nhà hàng, 02 phòng Spa riêng biệt cho nam và nữ, 02 phòng Karaoke sang trọng, Phòng thử rượu & cigars, Bể bơi vô cực 40m3, Phòng Poker (Texas hold’em), Sân golf mini…",
        },
        {
          desc: "Tại đây, du khách sẽ có khoảng thời gian vui vẻ để trải nghiệm các món ăn được lấy cảm hứng và có nguồn gốc địa phương, được chuẩn bị cẩn thận bởi các đầu bếp chuyên nghiệp của Catherine.",
        },
      ],
      infor: "Hạ thuỷ 2011 - Tàu vỏ Kim loại - 30 phòng",
      reviews: {
        average_rating: 4.91,
        ratings: {
          "1_star": 3,
          "2_star": 0,
          "3_star": 3,
          "4_star": 1,
          "5_star": 2,
        },
        perPage_reviews: 5,
        total_reviews: 9,
        comments: [
          {
            rating: 5,
            comment: "Dịch vụ rất tuyệt vời, mình rất hài lòng!",
            username: "NguyenVanA",
            dateReview: "2024-12-13",
          },
          {
            rating: 5,
            comment: "Sản phẩm chất lượng, giao hàng nhanh.",
            username: "LeMinhB",
            dateReview: "2024-12-12",
          },
          {
            rating: 4,
            comment: "Tạm ổn, nhưng vẫn cần cải thiện ở khâu đóng gói.",
            username: "TranThanhC",
            dateReview: "2024-12-11",
          },
          {
            rating: 5,
            comment: "Rất đáng tiền, sẽ quay lại ủng hộ!",
            username: "PhamThiD",
            dateReview: "2024-12-10",
          },
          {
            rating: 5,
            comment: "Mình cực kỳ hài lòng, nhân viên hỗ trợ rất nhiệt tình.",
            username: "HoangAnhE",
            dateReview: "2024-12-09",
          },
        ],
      },
      price: 2000000,
      star: 3.0,
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
            { icon: icon1, feature: "Có bể sục" },
            { icon: icon2, feature: "Lễ tân 24 giờ" },
            { icon: icon3, feature: "Quầy bar" },
            { icon: icon4, feature: "Giáp biển" },
            { icon: icon5, feature: "Phòng gia đình" },
            { icon: icon6, feature: "Trung tâm Spa & chăm sóc sức khoẻ" },
            { icon: icon7, feature: "Miễn phí kayaking" },
            { icon: icon8, feature: "Tắm nắng" },
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
            { icon: icon1, feature: "Có bể sục" },
            { icon: icon2, feature: "Lễ tân 24 giờ" },
            { icon: icon3, feature: "Quầy bar" },
            { icon: icon4, feature: "Giáp biển" },
            { icon: icon5, feature: "Phòng gia đình" },
            { icon: icon6, feature: "Trung tâm Spa & chăm sóc sức khoẻ" },
            { icon: icon7, feature: "Miễn phí kayaking" },
            { icon: icon8, feature: "Tắm nắng" },
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
            { icon: icon1, feature: "Có bể sục" },
            { icon: icon2, feature: "Lễ tân 24 giờ" },
            { icon: icon3, feature: "Quầy bar" },
            { icon: icon4, feature: "Giáp biển" },
            { icon: icon5, feature: "Phòng gia đình" },
            { icon: icon6, feature: "Trung tâm Spa & chăm sóc sức khoẻ" },
            { icon: icon7, feature: "Miễn phí kayaking" },
            { icon: icon8, feature: "Tắm nắng" },
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
            { icon: icon1, feature: "Có bể sục" },
            { icon: icon2, feature: "Lễ tân 24 giờ" },
            { icon: icon3, feature: "Quầy bar" },
            { icon: icon4, feature: "Giáp biển" },
            { icon: icon5, feature: "Phòng gia đình" },
            { icon: icon6, feature: "Trung tâm Spa & chăm sóc sức khoẻ" },
            { icon: icon7, feature: "Miễn phí kayaking" },
            { icon: icon8, feature: "Tắm nắng" },
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
            { icon: icon1, feature: "Có bể sục" },
            { icon: icon2, feature: "Lễ tân 24 giờ" },
            { icon: icon3, feature: "Quầy bar" },
            { icon: icon4, feature: "Giáp biển" },
            { icon: icon5, feature: "Phòng gia đình" },
            { icon: icon6, feature: "Trung tâm Spa & chăm sóc sức khoẻ" },
            { icon: icon7, feature: "Miễn phí kayaking" },
            { icon: icon8, feature: "Tắm nắng" },
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
      year: 2023,
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.022484029637!2d105.80947457438836!3d21.071764186301834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab917de76245%3A0xc5a28b326eab613a!2zROG7sSDDgW4gSGVyaXRhZ2UgV2VzdCBMYWtl!5e0!3m2!1svi!2s!4v1733889979170!5m2!1svi!2s",
      cabin: 23,
      material: "Kim Loại",
      trip: "Đảo Tuần Châu - Vịnh Hạ Long - Hang Luồn - Đảo Ti Tốp - Hang Sửng Sốt",
      executive: "Công ty Cổ phần tập đoàn HALO ECO",
      bage: "Lux Cruises, Lô 28 Cảng Quốc Tế Tuần Châu",
      overview: [
        {
          desc: " Du thuyền được thiết kế theo phong cách quốc tế với nội thất trang trí Đông Dương, lấy cảm hứng từ nét đẹp yêu kiều của người phụ nữ Á Đông",
        },
        {
          desc: "Du thuyền có  39 phòng cao cấp đều có ban công riêng và bồn tắm full view biển",
        },
        {
          desc: " Catherine là một khu nghỉ dưỡng thu nhỏ với hàng loạt dịch vụ giải trí cao cấp trên tàu: 02 nhà hàng, 02 phòng Spa riêng biệt cho nam và nữ, 02 phòng Karaoke sang trọng, Phòng thử rượu & cigars, Bể bơi vô cực 40m3, Phòng Poker (Texas hold’em), Sân golf mini…",
        },
        {
          desc: "Tại đây, du khách sẽ có khoảng thời gian vui vẻ để trải nghiệm các món ăn được lấy cảm hứng và có nguồn gốc địa phương, được chuẩn bị cẩn thận bởi các đầu bếp chuyên nghiệp của Catherine.",
        },
      ],
      infor: "Hạ thuỷ 2019 - Tàu vỏ Kim loại - 20 phòng",
      reviews: {
        average_rating: 4.91,
        ratings: {
          "1_star": 3,
          "2_star": 0,
          "3_star": 3,
          "4_star": 1,
          "5_star": 2,
        },
        perPage_reviews: 5,
        total_reviews: 9,
        comments: [
          {
            rating: 5,
            comment: "Dịch vụ rất tuyệt vời, mình rất hài lòng!",
            username: "NguyenVanA",
            dateReview: "2024-12-13",
          },
          {
            rating: 5,
            comment: "Sản phẩm chất lượng, giao hàng nhanh.",
            username: "LeMinhB",
            dateReview: "2024-12-12",
          },
          {
            rating: 4,
            comment: "Tạm ổn, nhưng vẫn cần cải thiện ở khâu đóng gói.",
            username: "TranThanhC",
            dateReview: "2024-12-11",
          },
          {
            rating: 5,
            comment: "Rất đáng tiền, sẽ quay lại ủng hộ!",
            username: "PhamThiD",
            dateReview: "2024-12-10",
          },
          {
            rating: 5,
            comment: "Mình cực kỳ hài lòng, nhân viên hỗ trợ rất nhiệt tình.",
            username: "HoangAnhE",
            dateReview: "2024-12-09",
          },
        ],
      },
      price: 1700000,
      star: 4.5,
      label: [
        { icon: icon1, feature: "Có bể sục" },
        { icon: icon2, feature: "Lễ tân 24 giờ" },
        { icon: icon3, feature: "Quầy bar" },
        { icon: icon4, feature: "Giáp biển" },
        { icon: icon5, feature: "Phòng gia đình" },
        { icon: icon6, feature: "Trung tâm Spa & chăm sóc sức khoẻ" },
        { icon: icon7, feature: "Miễn phí kayaking" },
        { icon: icon8, feature: "Tắm nắng" },
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
            { icon: icon1, feature: "Có bể sục" },
            { icon: icon2, feature: "Lễ tân 24 giờ" },
            { icon: icon3, feature: "Quầy bar" },
            { icon: icon4, feature: "Giáp biển" },
            { icon: icon5, feature: "Phòng gia đình" },
            { icon: icon6, feature: "Trung tâm Spa & chăm sóc sức khoẻ" },
            { icon: icon7, feature: "Miễn phí kayaking" },
            { icon: icon8, feature: "Tắm nắng" },
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
            { icon: icon1, feature: "Có bể sục" },
            { icon: icon2, feature: "Lễ tân 24 giờ" },
            { icon: icon3, feature: "Quầy bar" },
            { icon: icon4, feature: "Giáp biển" },
            { icon: icon5, feature: "Phòng gia đình" },
            { icon: icon6, feature: "Trung tâm Spa & chăm sóc sức khoẻ" },
            { icon: icon7, feature: "Miễn phí kayaking" },
            { icon: icon8, feature: "Tắm nắng" },
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
            { icon: icon1, feature: "Có bể sục" },
            { icon: icon2, feature: "Lễ tân 24 giờ" },
            { icon: icon3, feature: "Quầy bar" },
            { icon: icon4, feature: "Giáp biển" },
            { icon: icon5, feature: "Phòng gia đình" },
            { icon: icon6, feature: "Trung tâm Spa & chăm sóc sức khoẻ" },
            { icon: icon7, feature: "Miễn phí kayaking" },
            { icon: icon8, feature: "Tắm nắng" },
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
            { icon: icon1, feature: "Có bể sục" },
            { icon: icon2, feature: "Lễ tân 24 giờ" },
            { icon: icon3, feature: "Quầy bar" },
            { icon: icon4, feature: "Giáp biển" },
            { icon: icon5, feature: "Phòng gia đình" },
            { icon: icon6, feature: "Trung tâm Spa & chăm sóc sức khoẻ" },
            { icon: icon7, feature: "Miễn phí kayaking" },
            { icon: icon8, feature: "Tắm nắng" },
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
            { icon: icon1, feature: "Có bể sục" },
            { icon: icon2, feature: "Lễ tân 24 giờ" },
            { icon: icon3, feature: "Quầy bar" },
            { icon: icon4, feature: "Giáp biển" },
            { icon: icon5, feature: "Phòng gia đình" },
            { icon: icon6, feature: "Trung tâm Spa & chăm sóc sức khoẻ" },
            { icon: icon7, feature: "Miễn phí kayaking" },
            { icon: icon8, feature: "Tắm nắng" },
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
      year: 2023,
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.022484029637!2d105.80947457438836!3d21.071764186301834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab917de76245%3A0xc5a28b326eab613a!2zROG7sSDDgW4gSGVyaXRhZ2UgV2VzdCBMYWtl!5e0!3m2!1svi!2s!4v1733889979170!5m2!1svi!2s",
      cabin: 23,
      material: "Kim Loại",
      trip: "Đảo Tuần Châu - Vịnh Hạ Long - Hang Luồn - Đảo Ti Tốp - Hang Sửng Sốt",
      executive: "Công ty Cổ phần tập đoàn HALO ECO",
      bage: "Lux Cruises, Lô 28 Cảng Quốc Tế Tuần Châu",
      overview: [
        {
          desc: " Du thuyền được thiết kế theo phong cách quốc tế với nội thất trang trí Đông Dương, lấy cảm hứng từ nét đẹp yêu kiều của người phụ nữ Á Đông",
        },
        {
          desc: "Du thuyền có  39 phòng cao cấp đều có ban công riêng và bồn tắm full view biển",
        },
        {
          desc: " Catherine là một khu nghỉ dưỡng thu nhỏ với hàng loạt dịch vụ giải trí cao cấp trên tàu: 02 nhà hàng, 02 phòng Spa riêng biệt cho nam và nữ, 02 phòng Karaoke sang trọng, Phòng thử rượu & cigars, Bể bơi vô cực 40m3, Phòng Poker (Texas hold’em), Sân golf mini…",
        },
        {
          desc: "Tại đây, du khách sẽ có khoảng thời gian vui vẻ để trải nghiệm các món ăn được lấy cảm hứng và có nguồn gốc địa phương, được chuẩn bị cẩn thận bởi các đầu bếp chuyên nghiệp của Catherine.",
        },
      ],
      infor: "Hạ thuỷ 2019 - Tàu vỏ Kim loại - 20 phòng",
      reviews: {
        average_rating: 4.91,
        ratings: {
          "1_star": 3,
          "2_star": 0,
          "3_star": 3,
          "4_star": 1,
          "5_star": 2,
        },
        perPage_reviews: 5,
        total_reviews: 9,
        comments: [
          {
            rating: 5,
            comment: "Dịch vụ rất tuyệt vời, mình rất hài lòng!",
            username: "NguyenVanA",
            dateReview: "2024-12-13",
          },
          {
            rating: 5,
            comment: "Sản phẩm chất lượng, giao hàng nhanh.",
            username: "LeMinhB",
            dateReview: "2024-12-12",
          },
          {
            rating: 4,
            comment: "Tạm ổn, nhưng vẫn cần cải thiện ở khâu đóng gói.",
            username: "TranThanhC",
            dateReview: "2024-12-11",
          },
          {
            rating: 5,
            comment: "Rất đáng tiền, sẽ quay lại ủng hộ!",
            username: "PhamThiD",
            dateReview: "2024-12-10",
          },
          {
            rating: 5,
            comment: "Mình cực kỳ hài lòng, nhân viên hỗ trợ rất nhiệt tình.",
            username: "HoangAnhE",
            dateReview: "2024-12-09",
          },
        ],
      },
      price: 2500000,
      star: 3.45,
      label: [
        { icon: icon1, feature: "Có bể sục" },
        { icon: icon2, feature: "Lễ tân 24 giờ" },
        { icon: icon3, feature: "Quầy bar" },
        { icon: icon4, feature: "Giáp biển" },
        { icon: icon5, feature: "Phòng gia đình" },
        { icon: icon6, feature: "Trung tâm Spa & chăm sóc sức khoẻ" },
        { icon: icon7, feature: "Miễn phí kayaking" },
        { icon: icon8, feature: "Tắm nắng" },
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
            { icon: icon1, feature: "Có bể sục" },
            { icon: icon2, feature: "Lễ tân 24 giờ" },
            { icon: icon3, feature: "Quầy bar" },
            { icon: icon4, feature: "Giáp biển" },
            { icon: icon5, feature: "Phòng gia đình" },
            { icon: icon6, feature: "Trung tâm Spa & chăm sóc sức khoẻ" },
            { icon: icon7, feature: "Miễn phí kayaking" },
            { icon: icon8, feature: "Tắm nắng" },
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
            { icon: icon1, feature: "Có bể sục" },
            { icon: icon2, feature: "Lễ tân 24 giờ" },
            { icon: icon3, feature: "Quầy bar" },
            { icon: icon4, feature: "Giáp biển" },
            { icon: icon5, feature: "Phòng gia đình" },
            { icon: icon6, feature: "Trung tâm Spa & chăm sóc sức khoẻ" },
            { icon: icon7, feature: "Miễn phí kayaking" },
            { icon: icon8, feature: "Tắm nắng" },
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
            { icon: icon1, feature: "Có bể sục" },
            { icon: icon2, feature: "Lễ tân 24 giờ" },
            { icon: icon3, feature: "Quầy bar" },
            { icon: icon4, feature: "Giáp biển" },
            { icon: icon5, feature: "Phòng gia đình" },
            { icon: icon6, feature: "Trung tâm Spa & chăm sóc sức khoẻ" },
            { icon: icon7, feature: "Miễn phí kayaking" },
            { icon: icon8, feature: "Tắm nắng" },
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
            { icon: icon1, feature: "Có bể sục" },
            { icon: icon2, feature: "Lễ tân 24 giờ" },
            { icon: icon3, feature: "Quầy bar" },
            { icon: icon4, feature: "Giáp biển" },
            { icon: icon5, feature: "Phòng gia đình" },
            { icon: icon6, feature: "Trung tâm Spa & chăm sóc sức khoẻ" },
            { icon: icon7, feature: "Miễn phí kayaking" },
            { icon: icon8, feature: "Tắm nắng" },
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
            { icon: icon1, feature: "Có bể sục" },
            { icon: icon2, feature: "Lễ tân 24 giờ" },
            { icon: icon3, feature: "Quầy bar" },
            { icon: icon4, feature: "Giáp biển" },
            { icon: icon5, feature: "Phòng gia đình" },
            { icon: icon6, feature: "Trung tâm Spa & chăm sóc sức khoẻ" },
            { icon: icon7, feature: "Miễn phí kayaking" },
            { icon: icon8, feature: "Tắm nắng" },
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
      year: 2023,
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.022484029637!2d105.80947457438836!3d21.071764186301834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab917de76245%3A0xc5a28b326eab613a!2zROG7sSDDgW4gSGVyaXRhZ2UgV2VzdCBMYWtl!5e0!3m2!1svi!2s!4v1733889979170!5m2!1svi!2s",
      cabin: 23,
      material: "Kim Loại",
      trip: "Đảo Tuần Châu - Vịnh Hạ Long - Hang Luồn - Đảo Ti Tốp - Hang Sửng Sốt",
      executive: "Công ty Cổ phần tập đoàn HALO ECO",
      bage: "Lux Cruises, Lô 28 Cảng Quốc Tế Tuần Châu",
      overview: [
        {
          desc: " Du thuyền được thiết kế theo phong cách quốc tế với nội thất trang trí Đông Dương, lấy cảm hứng từ nét đẹp yêu kiều của người phụ nữ Á Đông",
        },
        {
          desc: "Du thuyền có  39 phòng cao cấp đều có ban công riêng và bồn tắm full view biển",
        },
        {
          desc: " Catherine là một khu nghỉ dưỡng thu nhỏ với hàng loạt dịch vụ giải trí cao cấp trên tàu: 02 nhà hàng, 02 phòng Spa riêng biệt cho nam và nữ, 02 phòng Karaoke sang trọng, Phòng thử rượu & cigars, Bể bơi vô cực 40m3, Phòng Poker (Texas hold’em), Sân golf mini…",
        },
        {
          desc: "Tại đây, du khách sẽ có khoảng thời gian vui vẻ để trải nghiệm các món ăn được lấy cảm hứng và có nguồn gốc địa phương, được chuẩn bị cẩn thận bởi các đầu bếp chuyên nghiệp của Catherine.",
        },
      ],
      infor: "Hạ thuỷ 2019 - Tàu vỏ Kim loại - 20 phòng",
      reviews: {
        average_rating: 4.91,
        ratings: {
          "1_star": 3,
          "2_star": 0,
          "3_star": 3,
          "4_star": 1,
          "5_star": 2,
        },
        perPage_reviews: 5,
        total_reviews: 9,
        comments: [
          {
            rating: 5,
            comment: "Dịch vụ rất tuyệt vời, mình rất hài lòng!",
            username: "NguyenVanA",
            dateReview: "2024-12-13",
          },
          {
            rating: 5,
            comment: "Sản phẩm chất lượng, giao hàng nhanh.",
            username: "LeMinhB",
            dateReview: "2024-12-12",
          },
          {
            rating: 4,
            comment: "Tạm ổn, nhưng vẫn cần cải thiện ở khâu đóng gói.",
            username: "TranThanhC",
            dateReview: "2024-12-11",
          },
          {
            rating: 5,
            comment: "Rất đáng tiền, sẽ quay lại ủng hộ!",
            username: "PhamThiD",
            dateReview: "2024-12-10",
          },
          {
            rating: 5,
            comment: "Mình cực kỳ hài lòng, nhân viên hỗ trợ rất nhiệt tình.",
            username: "HoangAnhE",
            dateReview: "2024-12-09",
          },
        ],
      },
      price: 2500000,
      star: 4.0,
      label: [
        { icon: icon1, feature: "Có bể sục" },
        { icon: icon2, feature: "Lễ tân 24 giờ" },
        { icon: icon3, feature: "Quầy bar" },
        { icon: icon4, feature: "Giáp biển" },
        { icon: icon5, feature: "Phòng gia đình" },
        { icon: icon6, feature: "Trung tâm Spa & chăm sóc sức khoẻ" },
        { icon: icon7, feature: "Miễn phí kayaking" },
        { icon: icon8, feature: "Tắm nắng" },
      ],
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
            { icon: icon1, feature: "Có bể sục" },
            { icon: icon2, feature: "Lễ tân 24 giờ" },
            { icon: icon3, feature: "Quầy bar" },
            { icon: icon4, feature: "Giáp biển" },
            { icon: icon5, feature: "Phòng gia đình" },
            { icon: icon6, feature: "Trung tâm Spa & chăm sóc sức khoẻ" },
            { icon: icon7, feature: "Miễn phí kayaking" },
            { icon: icon8, feature: "Tắm nắng" },
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
            { icon: icon1, feature: "Có bể sục" },
            { icon: icon2, feature: "Lễ tân 24 giờ" },
            { icon: icon3, feature: "Quầy bar" },
            { icon: icon4, feature: "Giáp biển" },
            { icon: icon5, feature: "Phòng gia đình" },
            { icon: icon6, feature: "Trung tâm Spa & chăm sóc sức khoẻ" },
            { icon: icon7, feature: "Miễn phí kayaking" },
            { icon: icon8, feature: "Tắm nắng" },
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
            { icon: icon1, feature: "Có bể sục" },
            { icon: icon2, feature: "Lễ tân 24 giờ" },
            { icon: icon3, feature: "Quầy bar" },
            { icon: icon4, feature: "Giáp biển" },
            { icon: icon5, feature: "Phòng gia đình" },
            { icon: icon6, feature: "Trung tâm Spa & chăm sóc sức khoẻ" },
            { icon: icon7, feature: "Miễn phí kayaking" },
            { icon: icon8, feature: "Tắm nắng" },
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
            { icon: icon1, feature: "Có bể sục" },
            { icon: icon2, feature: "Lễ tân 24 giờ" },
            { icon: icon3, feature: "Quầy bar" },
            { icon: icon4, feature: "Giáp biển" },
            { icon: icon5, feature: "Phòng gia đình" },
            { icon: icon6, feature: "Trung tâm Spa & chăm sóc sức khoẻ" },
            { icon: icon7, feature: "Miễn phí kayaking" },
            { icon: icon8, feature: "Tắm nắng" },
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
            { icon: icon1, feature: "Có bể sục" },
            { icon: icon2, feature: "Lễ tân 24 giờ" },
            { icon: icon3, feature: "Quầy bar" },
            { icon: icon4, feature: "Giáp biển" },
            { icon: icon5, feature: "Phòng gia đình" },
            { icon: icon6, feature: "Trung tâm Spa & chăm sóc sức khoẻ" },
            { icon: icon7, feature: "Miễn phí kayaking" },
            { icon: icon8, feature: "Tắm nắng" },
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
      year: 2023,
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.022484029637!2d105.80947457438836!3d21.071764186301834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab917de76245%3A0xc5a28b326eab613a!2zROG7sSDDgW4gSGVyaXRhZ2UgV2VzdCBMYWtl!5e0!3m2!1svi!2s!4v1733889979170!5m2!1svi!2s",
      cabin: 23,
      material: "Kim Loại",
      trip: "Đảo Tuần Châu - Vịnh Hạ Long - Hang Luồn - Đảo Ti Tốp - Hang Sửng Sốt",
      executive: "Công ty Cổ phần tập đoàn HALO ECO",
      bage: "Lux Cruises, Lô 28 Cảng Quốc Tế Tuần Châu",
      overview: [
        {
          desc: " Du thuyền được thiết kế theo phong cách quốc tế với nội thất trang trí Đông Dương, lấy cảm hứng từ nét đẹp yêu kiều của người phụ nữ Á Đông",
        },
        {
          desc: "Du thuyền có  39 phòng cao cấp đều có ban công riêng và bồn tắm full view biển",
        },
        {
          desc: " Catherine là một khu nghỉ dưỡng thu nhỏ với hàng loạt dịch vụ giải trí cao cấp trên tàu: 02 nhà hàng, 02 phòng Spa riêng biệt cho nam và nữ, 02 phòng Karaoke sang trọng, Phòng thử rượu & cigars, Bể bơi vô cực 40m3, Phòng Poker (Texas hold’em), Sân golf mini…",
        },
        {
          desc: "Tại đây, du khách sẽ có khoảng thời gian vui vẻ để trải nghiệm các món ăn được lấy cảm hứng và có nguồn gốc địa phương, được chuẩn bị cẩn thận bởi các đầu bếp chuyên nghiệp của Catherine.",
        },
      ],
      infor: "Hạ thuỷ 2019 - Tàu vỏ Kim loại - 20 phòng",
      reviews: {
        average_rating: 4.91,
        ratings: {
          "1_star": 3,
          "2_star": 0,
          "3_star": 3,
          "4_star": 1,
          "5_star": 2,
        },
        perPage_reviews: 5,
        total_reviews: 9,
        comments: [
          {
            rating: 5,
            comment: "Dịch vụ rất tuyệt vời, mình rất hài lòng!",
            username: "NguyenVanA",
            dateReview: "2024-12-13",
          },
          {
            rating: 5,
            comment: "Sản phẩm chất lượng, giao hàng nhanh.",
            username: "LeMinhB",
            dateReview: "2024-12-12",
          },
          {
            rating: 4,
            comment: "Tạm ổn, nhưng vẫn cần cải thiện ở khâu đóng gói.",
            username: "TranThanhC",
            dateReview: "2024-12-11",
          },
          {
            rating: 5,
            comment: "Rất đáng tiền, sẽ quay lại ủng hộ!",
            username: "PhamThiD",
            dateReview: "2024-12-10",
          },
          {
            rating: 5,
            comment: "Mình cực kỳ hài lòng, nhân viên hỗ trợ rất nhiệt tình.",
            username: "HoangAnhE",
            dateReview: "2024-12-09",
          },
        ],
      },
      price: 2500000,
      star: 3.5,
      label: [
        { icon: icon1, feature: "Có bể sục" },
        { icon: icon2, feature: "Lễ tân 24 giờ" },
        { icon: icon3, feature: "Quầy bar" },
        { icon: icon4, feature: "Giáp biển" },
        { icon: icon5, feature: "Phòng gia đình" },
        { icon: icon6, feature: "Trung tâm Spa & chăm sóc sức khoẻ" },
        { icon: icon7, feature: "Miễn phí kayaking" },
        { icon: icon8, feature: "Tắm nắng" },
      ],
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
            { icon: icon1, feature: "Có bể sục" },
            { icon: icon2, feature: "Lễ tân 24 giờ" },
            { icon: icon3, feature: "Quầy bar" },
            { icon: icon4, feature: "Giáp biển" },
            { icon: icon5, feature: "Phòng gia đình" },
            { icon: icon6, feature: "Trung tâm Spa & chăm sóc sức khoẻ" },
            { icon: icon7, feature: "Miễn phí kayaking" },
            { icon: icon8, feature: "Tắm nắng" },
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
            { icon: icon1, feature: "Có bể sục" },
            { icon: icon2, feature: "Lễ tân 24 giờ" },
            { icon: icon3, feature: "Quầy bar" },
            { icon: icon4, feature: "Giáp biển" },
            { icon: icon5, feature: "Phòng gia đình" },
            { icon: icon6, feature: "Trung tâm Spa & chăm sóc sức khoẻ" },
            { icon: icon7, feature: "Miễn phí kayaking" },
            { icon: icon8, feature: "Tắm nắng" },
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
            { icon: icon1, feature: "Có bể sục" },
            { icon: icon2, feature: "Lễ tân 24 giờ" },
            { icon: icon3, feature: "Quầy bar" },
            { icon: icon4, feature: "Giáp biển" },
            { icon: icon5, feature: "Phòng gia đình" },
            { icon: icon6, feature: "Trung tâm Spa & chăm sóc sức khoẻ" },
            { icon: icon7, feature: "Miễn phí kayaking" },
            { icon: icon8, feature: "Tắm nắng" },
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
            { icon: icon1, feature: "Có bể sục" },
            { icon: icon2, feature: "Lễ tân 24 giờ" },
            { icon: icon3, feature: "Quầy bar" },
            { icon: icon4, feature: "Giáp biển" },
            { icon: icon5, feature: "Phòng gia đình" },
            { icon: icon6, feature: "Trung tâm Spa & chăm sóc sức khoẻ" },
            { icon: icon7, feature: "Miễn phí kayaking" },
            { icon: icon8, feature: "Tắm nắng" },
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
            { icon: icon1, feature: "Có bể sục" },
            { icon: icon2, feature: "Lễ tân 24 giờ" },
            { icon: icon3, feature: "Quầy bar" },
            { icon: icon4, feature: "Giáp biển" },
            { icon: icon5, feature: "Phòng gia đình" },
            { icon: icon6, feature: "Trung tâm Spa & chăm sóc sức khoẻ" },
            { icon: icon7, feature: "Miễn phí kayaking" },
            { icon: icon8, feature: "Tắm nắng" },
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
      year: 2023,
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.022484029637!2d105.80947457438836!3d21.071764186301834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab917de76245%3A0xc5a28b326eab613a!2zROG7sSDDgW4gSGVyaXRhZ2UgV2VzdCBMYWtl!5e0!3m2!1svi!2s!4v1733889979170!5m2!1svi!2s",
      cabin: 23,
      material: "Kim Loại",
      trip: "Đảo Tuần Châu - Vịnh Hạ Long - Hang Luồn - Đảo Ti Tốp - Hang Sửng Sốt",
      executive: "Công ty Cổ phần tập đoàn HALO ECO",
      bage: "Lux Cruises, Lô 28 Cảng Quốc Tế Tuần Châu",
      overview: [
        {
          desc: " Du thuyền được thiết kế theo phong cách quốc tế với nội thất trang trí Đông Dương, lấy cảm hứng từ nét đẹp yêu kiều của người phụ nữ Á Đông",
        },
        {
          desc: "Du thuyền có  39 phòng cao cấp đều có ban công riêng và bồn tắm full view biển",
        },
        {
          desc: " Catherine là một khu nghỉ dưỡng thu nhỏ với hàng loạt dịch vụ giải trí cao cấp trên tàu: 02 nhà hàng, 02 phòng Spa riêng biệt cho nam và nữ, 02 phòng Karaoke sang trọng, Phòng thử rượu & cigars, Bể bơi vô cực 40m3, Phòng Poker (Texas hold’em), Sân golf mini…",
        },
        {
          desc: "Tại đây, du khách sẽ có khoảng thời gian vui vẻ để trải nghiệm các món ăn được lấy cảm hứng và có nguồn gốc địa phương, được chuẩn bị cẩn thận bởi các đầu bếp chuyên nghiệp của Catherine.",
        },
      ],
      infor: "Hạ thuỷ 2019 - Tàu vỏ Kim loại - 20 phòng",
      reviews: {
        average_rating: 4.91,
        ratings: {
          "1_star": 3,
          "2_star": 0,
          "3_star": 3,
          "4_star": 1,
          "5_star": 2,
        },
        perPage_reviews: 5,
        total_reviews: 9,
        comments: [
          {
            rating: 5,
            comment: "Dịch vụ rất tuyệt vời, mình rất hài lòng!",
            username: "NguyenVanA",
            dateReview: "2024-12-13",
          },
          {
            rating: 5,
            comment: "Sản phẩm chất lượng, giao hàng nhanh.",
            username: "LeMinhB",
            dateReview: "2024-12-12",
          },
          {
            rating: 4,
            comment: "Tạm ổn, nhưng vẫn cần cải thiện ở khâu đóng gói.",
            username: "TranThanhC",
            dateReview: "2024-12-11",
          },
          {
            rating: 5,
            comment: "Rất đáng tiền, sẽ quay lại ủng hộ!",
            username: "PhamThiD",
            dateReview: "2024-12-10",
          },
          {
            rating: 5,
            comment: "Mình cực kỳ hài lòng, nhân viên hỗ trợ rất nhiệt tình.",
            username: "HoangAnhE",
            dateReview: "2024-12-09",
          },
        ],
      },
      price: 2500000,
      star: 3.0,
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
            { icon: icon1, feature: "Có bể sục" },
            { icon: icon2, feature: "Lễ tân 24 giờ" },
            { icon: icon3, feature: "Quầy bar" },
            { icon: icon4, feature: "Giáp biển" },
            { icon: icon5, feature: "Phòng gia đình" },
            { icon: icon6, feature: "Trung tâm Spa & chăm sóc sức khoẻ" },
            { icon: icon7, feature: "Miễn phí kayaking" },
            { icon: icon8, feature: "Tắm nắng" },
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
            { icon: icon1, feature: "Có bể sục" },
            { icon: icon2, feature: "Lễ tân 24 giờ" },
            { icon: icon3, feature: "Quầy bar" },
            { icon: icon4, feature: "Giáp biển" },
            { icon: icon5, feature: "Phòng gia đình" },
            { icon: icon6, feature: "Trung tâm Spa & chăm sóc sức khoẻ" },
            { icon: icon7, feature: "Miễn phí kayaking" },
            { icon: icon8, feature: "Tắm nắng" },
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
            { icon: icon1, feature: "Có bể sục" },
            { icon: icon2, feature: "Lễ tân 24 giờ" },
            { icon: icon3, feature: "Quầy bar" },
            { icon: icon4, feature: "Giáp biển" },
            { icon: icon5, feature: "Phòng gia đình" },
            { icon: icon6, feature: "Trung tâm Spa & chăm sóc sức khoẻ" },
            { icon: icon7, feature: "Miễn phí kayaking" },
            { icon: icon8, feature: "Tắm nắng" },
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
            { icon: icon1, feature: "Có bể sục" },
            { icon: icon2, feature: "Lễ tân 24 giờ" },
            { icon: icon3, feature: "Quầy bar" },
            { icon: icon4, feature: "Giáp biển" },
            { icon: icon5, feature: "Phòng gia đình" },
            { icon: icon6, feature: "Trung tâm Spa & chăm sóc sức khoẻ" },
            { icon: icon7, feature: "Miễn phí kayaking" },
            { icon: icon8, feature: "Tắm nắng" },
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
            { icon: icon1, feature: "Có bể sục" },
            { icon: icon2, feature: "Lễ tân 24 giờ" },
            { icon: icon3, feature: "Quầy bar" },
            { icon: icon4, feature: "Giáp biển" },
            { icon: icon5, feature: "Phòng gia đình" },
            { icon: icon6, feature: "Trung tâm Spa & chăm sóc sức khoẻ" },
            { icon: icon7, feature: "Miễn phí kayaking" },
            { icon: icon8, feature: "Tắm nắng" },
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
      year: 2023,
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.022484029637!2d105.80947457438836!3d21.071764186301834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab917de76245%3A0xc5a28b326eab613a!2zROG7sSDDgW4gSGVyaXRhZ2UgV2VzdCBMYWtl!5e0!3m2!1svi!2s!4v1733889979170!5m2!1svi!2s",
      cabin: 23,
      material: "Kim Loại",
      trip: "Đảo Tuần Châu - Vịnh Hạ Long - Hang Luồn - Đảo Ti Tốp - Hang Sửng Sốt",
      executive: "Công ty Cổ phần tập đoàn HALO ECO",
      bage: "Lux Cruises, Lô 28 Cảng Quốc Tế Tuần Châu",
      overview: [
        {
          desc: " Du thuyền được thiết kế theo phong cách quốc tế với nội thất trang trí Đông Dương, lấy cảm hứng từ nét đẹp yêu kiều của người phụ nữ Á Đông",
        },
        {
          desc: "Du thuyền có  39 phòng cao cấp đều có ban công riêng và bồn tắm full view biển",
        },
        {
          desc: " Catherine là một khu nghỉ dưỡng thu nhỏ với hàng loạt dịch vụ giải trí cao cấp trên tàu: 02 nhà hàng, 02 phòng Spa riêng biệt cho nam và nữ, 02 phòng Karaoke sang trọng, Phòng thử rượu & cigars, Bể bơi vô cực 40m3, Phòng Poker (Texas hold’em), Sân golf mini…",
        },
        {
          desc: "Tại đây, du khách sẽ có khoảng thời gian vui vẻ để trải nghiệm các món ăn được lấy cảm hứng và có nguồn gốc địa phương, được chuẩn bị cẩn thận bởi các đầu bếp chuyên nghiệp của Catherine.",
        },
      ],
      infor: "Hạ thuỷ 2019 - Tàu vỏ Kim loại - 20 phòng",
      reviews: {
        average_rating: 4.91,
        ratings: {
          "1_star": 3,
          "2_star": 0,
          "3_star": 3,
          "4_star": 1,
          "5_star": 2,
        },
        perPage_reviews: 5,
        total_reviews: 9,
        comments: [
          {
            rating: 5,
            comment: "Dịch vụ rất tuyệt vời, mình rất hài lòng!",
            username: "NguyenVanA",
            dateReview: "2024-12-13",
          },
          {
            rating: 5,
            comment: "Sản phẩm chất lượng, giao hàng nhanh.",
            username: "LeMinhB",
            dateReview: "2024-12-12",
          },
          {
            rating: 4,
            comment: "Tạm ổn, nhưng vẫn cần cải thiện ở khâu đóng gói.",
            username: "TranThanhC",
            dateReview: "2024-12-11",
          },
          {
            rating: 5,
            comment: "Rất đáng tiền, sẽ quay lại ủng hộ!",
            username: "PhamThiD",
            dateReview: "2024-12-10",
          },
          {
            rating: 5,
            comment: "Mình cực kỳ hài lòng, nhân viên hỗ trợ rất nhiệt tình.",
            username: "HoangAnhE",
            dateReview: "2024-12-09",
          },
        ],
      },
      price: 2500000,
      star: 4.0,
      label: [{ icon: icon2, feature: "Lễ tân 24 giờ" }],
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
            { icon: icon1, feature: "Có bể sục" },
            { icon: icon2, feature: "Lễ tân 24 giờ" },
            { icon: icon3, feature: "Quầy bar" },
            { icon: icon4, feature: "Giáp biển" },
            { icon: icon5, feature: "Phòng gia đình" },
            { icon: icon6, feature: "Trung tâm Spa & chăm sóc sức khoẻ" },
            { icon: icon7, feature: "Miễn phí kayaking" },
            { icon: icon8, feature: "Tắm nắng" },
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
            { icon: icon1, feature: "Có bể sục" },
            { icon: icon2, feature: "Lễ tân 24 giờ" },
            { icon: icon3, feature: "Quầy bar" },
            { icon: icon4, feature: "Giáp biển" },
            { icon: icon5, feature: "Phòng gia đình" },
            { icon: icon6, feature: "Trung tâm Spa & chăm sóc sức khoẻ" },
            { icon: icon7, feature: "Miễn phí kayaking" },
            { icon: icon8, feature: "Tắm nắng" },
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
            { icon: icon1, feature: "Có bể sục" },
            { icon: icon2, feature: "Lễ tân 24 giờ" },
            { icon: icon3, feature: "Quầy bar" },
            { icon: icon4, feature: "Giáp biển" },
            { icon: icon5, feature: "Phòng gia đình" },
            { icon: icon6, feature: "Trung tâm Spa & chăm sóc sức khoẻ" },
            { icon: icon7, feature: "Miễn phí kayaking" },
            { icon: icon8, feature: "Tắm nắng" },
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
            { icon: icon1, feature: "Có bể sục" },
            { icon: icon2, feature: "Lễ tân 24 giờ" },
            { icon: icon3, feature: "Quầy bar" },
            { icon: icon4, feature: "Giáp biển" },
            { icon: icon5, feature: "Phòng gia đình" },
            { icon: icon6, feature: "Trung tâm Spa & chăm sóc sức khoẻ" },
            { icon: icon7, feature: "Miễn phí kayaking" },
            { icon: icon8, feature: "Tắm nắng" },
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
            { icon: icon1, feature: "Có bể sục" },
            { icon: icon2, feature: "Lễ tân 24 giờ" },
            { icon: icon3, feature: "Quầy bar" },
            { icon: icon4, feature: "Giáp biển" },
            { icon: icon5, feature: "Phòng gia đình" },
            { icon: icon6, feature: "Trung tâm Spa & chăm sóc sức khoẻ" },
            { icon: icon7, feature: "Miễn phí kayaking" },
            { icon: icon8, feature: "Tắm nắng" },
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
      year: 2023,
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.022484029637!2d105.80947457438836!3d21.071764186301834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab917de76245%3A0xc5a28b326eab613a!2zROG7sSDDgW4gSGVyaXRhZ2UgV2VzdCBMYWtl!5e0!3m2!1svi!2s!4v1733889979170!5m2!1svi!2s",
      cabin: 23,
      material: "Kim Loại",
      trip: "Đảo Tuần Châu - Vịnh Hạ Long - Hang Luồn - Đảo Ti Tốp - Hang Sửng Sốt",
      executive: "Công ty Cổ phần tập đoàn HALO ECO",
      bage: "Lux Cruises, Lô 28 Cảng Quốc Tế Tuần Châu",
      overview: [
        {
          desc: " Du thuyền được thiết kế theo phong cách quốc tế với nội thất trang trí Đông Dương, lấy cảm hứng từ nét đẹp yêu kiều của người phụ nữ Á Đông",
        },
        {
          desc: "Du thuyền có  39 phòng cao cấp đều có ban công riêng và bồn tắm full view biển",
        },
        {
          desc: " Catherine là một khu nghỉ dưỡng thu nhỏ với hàng loạt dịch vụ giải trí cao cấp trên tàu: 02 nhà hàng, 02 phòng Spa riêng biệt cho nam và nữ, 02 phòng Karaoke sang trọng, Phòng thử rượu & cigars, Bể bơi vô cực 40m3, Phòng Poker (Texas hold’em), Sân golf mini…",
        },
        {
          desc: "Tại đây, du khách sẽ có khoảng thời gian vui vẻ để trải nghiệm các món ăn được lấy cảm hứng và có nguồn gốc địa phương, được chuẩn bị cẩn thận bởi các đầu bếp chuyên nghiệp của Catherine.",
        },
      ],
      infor: "Hạ thuỷ 2019 - Tàu vỏ Kim loại - 20 phòng",
      reviews: {
        average_rating: 4.91,
        ratings: {
          "1_star": 3,
          "2_star": 0,
          "3_star": 3,
          "4_star": 1,
          "5_star": 2,
        },
        perPage_reviews: 5,
        total_reviews: 9,
        comments: [
          {
            rating: 5,
            comment: "Dịch vụ rất tuyệt vời, mình rất hài lòng!",
            username: "NguyenVanA",
            dateReview: "2024-12-13",
          },
          {
            rating: 5,
            comment: "Sản phẩm chất lượng, giao hàng nhanh.",
            username: "LeMinhB",
            dateReview: "2024-12-12",
          },
          {
            rating: 4,
            comment: "Tạm ổn, nhưng vẫn cần cải thiện ở khâu đóng gói.",
            username: "TranThanhC",
            dateReview: "2024-12-11",
          },
          {
            rating: 5,
            comment: "Rất đáng tiền, sẽ quay lại ủng hộ!",
            username: "PhamThiD",
            dateReview: "2024-12-10",
          },
          {
            rating: 5,
            comment: "Mình cực kỳ hài lòng, nhân viên hỗ trợ rất nhiệt tình.",
            username: "HoangAnhE",
            dateReview: "2024-12-09",
          },
        ],
      },
      price: 2500000,
      star: 4.0,
      label: [
        { icon: icon1, feature: "Có bể sục" },
        { icon: icon2, feature: "Lễ tân 24 giờ" },
        { icon: icon3, feature: "Quầy bar" },
        { icon: icon4, feature: "Giáp biển" },
        { icon: icon5, feature: "Phòng gia đình" },
        { icon: icon6, feature: "Trung tâm Spa & chăm sóc sức khoẻ" },
        { icon: icon7, feature: "Miễn phí kayaking" },
        { icon: icon8, feature: "Tắm nắng" },
      ],
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
            { icon: icon1, feature: "Có bể sục" },
            { icon: icon2, feature: "Lễ tân 24 giờ" },
            { icon: icon3, feature: "Quầy bar" },
            { icon: icon4, feature: "Giáp biển" },
            { icon: icon5, feature: "Phòng gia đình" },
            { icon: icon6, feature: "Trung tâm Spa & chăm sóc sức khoẻ" },
            { icon: icon7, feature: "Miễn phí kayaking" },
            { icon: icon8, feature: "Tắm nắng" },
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
            { icon: icon1, feature: "Có bể sục" },
            { icon: icon2, feature: "Lễ tân 24 giờ" },
            { icon: icon3, feature: "Quầy bar" },
            { icon: icon4, feature: "Giáp biển" },
            { icon: icon5, feature: "Phòng gia đình" },
            { icon: icon6, feature: "Trung tâm Spa & chăm sóc sức khoẻ" },
            { icon: icon7, feature: "Miễn phí kayaking" },
            { icon: icon8, feature: "Tắm nắng" },
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
            { icon: icon1, feature: "Có bể sục" },
            { icon: icon2, feature: "Lễ tân 24 giờ" },
            { icon: icon3, feature: "Quầy bar" },
            { icon: icon4, feature: "Giáp biển" },
            { icon: icon5, feature: "Phòng gia đình" },
            { icon: icon6, feature: "Trung tâm Spa & chăm sóc sức khoẻ" },
            { icon: icon7, feature: "Miễn phí kayaking" },
            { icon: icon8, feature: "Tắm nắng" },
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
            { icon: icon1, feature: "Có bể sục" },
            { icon: icon2, feature: "Lễ tân 24 giờ" },
            { icon: icon3, feature: "Quầy bar" },
            { icon: icon4, feature: "Giáp biển" },
            { icon: icon5, feature: "Phòng gia đình" },
            { icon: icon6, feature: "Trung tâm Spa & chăm sóc sức khoẻ" },
            { icon: icon7, feature: "Miễn phí kayaking" },
            { icon: icon8, feature: "Tắm nắng" },
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
            { icon: icon1, feature: "Có bể sục" },
            { icon: icon2, feature: "Lễ tân 24 giờ" },
            { icon: icon3, feature: "Quầy bar" },
            { icon: icon4, feature: "Giáp biển" },
            { icon: icon5, feature: "Phòng gia đình" },
            { icon: icon6, feature: "Trung tâm Spa & chăm sóc sức khoẻ" },
            { icon: icon7, feature: "Miễn phí kayaking" },
            { icon: icon8, feature: "Tắm nắng" },
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
      year: 2023,
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.022484029637!2d105.80947457438836!3d21.071764186301834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab917de76245%3A0xc5a28b326eab613a!2zROG7sSDDgW4gSGVyaXRhZ2UgV2VzdCBMYWtl!5e0!3m2!1svi!2s!4v1733889979170!5m2!1svi!2s",
      cabin: 23,
      material: "Kim Loại",
      trip: "Đảo Tuần Châu - Vịnh Hạ Long - Hang Luồn - Đảo Ti Tốp - Hang Sửng Sốt",
      executive: "Công ty Cổ phần tập đoàn HALO ECO",
      bage: "Lux Cruises, Lô 28 Cảng Quốc Tế Tuần Châu",
      overview: [
        {
          desc: " Du thuyền được thiết kế theo phong cách quốc tế với nội thất trang trí Đông Dương, lấy cảm hứng từ nét đẹp yêu kiều của người phụ nữ Á Đông",
        },
        {
          desc: "Du thuyền có  39 phòng cao cấp đều có ban công riêng và bồn tắm full view biển",
        },
        {
          desc: " Catherine là một khu nghỉ dưỡng thu nhỏ với hàng loạt dịch vụ giải trí cao cấp trên tàu: 02 nhà hàng, 02 phòng Spa riêng biệt cho nam và nữ, 02 phòng Karaoke sang trọng, Phòng thử rượu & cigars, Bể bơi vô cực 40m3, Phòng Poker (Texas hold’em), Sân golf mini…",
        },
        {
          desc: "Tại đây, du khách sẽ có khoảng thời gian vui vẻ để trải nghiệm các món ăn được lấy cảm hứng và có nguồn gốc địa phương, được chuẩn bị cẩn thận bởi các đầu bếp chuyên nghiệp của Catherine.",
        },
      ],
      infor: "Hạ thuỷ 2019 - Tàu vỏ Kim loại - 20 phòng",
      reviews: {
        average_rating: 4.91,
        ratings: {
          "1_star": 3,
          "2_star": 0,
          "3_star": 3,
          "4_star": 1,
          "5_star": 2,
        },
        perPage_reviews: 5,
        total_reviews: 9,
        comments: [
          {
            rating: 5,
            comment: "Dịch vụ rất tuyệt vời, mình rất hài lòng!",
            username: "NguyenVanA",
            dateReview: "2024-12-13",
          },
          {
            rating: 5,
            comment: "Sản phẩm chất lượng, giao hàng nhanh.",
            username: "LeMinhB",
            dateReview: "2024-12-12",
          },
          {
            rating: 4,
            comment: "Tạm ổn, nhưng vẫn cần cải thiện ở khâu đóng gói.",
            username: "TranThanhC",
            dateReview: "2024-12-11",
          },
          {
            rating: 5,
            comment: "Rất đáng tiền, sẽ quay lại ủng hộ!",
            username: "PhamThiD",
            dateReview: "2024-12-10",
          },
          {
            rating: 5,
            comment: "Mình cực kỳ hài lòng, nhân viên hỗ trợ rất nhiệt tình.",
            username: "HoangAnhE",
            dateReview: "2024-12-09",
          },
        ],
      },
      price: 2500000,
      star: 5.0,
      label: [
        { icon: icon1, feature: "Có bể sục" },
        { icon: icon2, feature: "Lễ tân 24 giờ" },
        { icon: icon3, feature: "Quầy bar" },
        { icon: icon4, feature: "Giáp biển" },
        { icon: icon5, feature: "Phòng gia đình" },
        { icon: icon6, feature: "Trung tâm Spa & chăm sóc sức khoẻ" },
        { icon: icon7, feature: "Miễn phí kayaking" },
        { icon: icon8, feature: "Tắm nắng" },
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
            { icon: icon1, feature: "Có bể sục" },
            { icon: icon2, feature: "Lễ tân 24 giờ" },
            { icon: icon3, feature: "Quầy bar" },
            { icon: icon4, feature: "Giáp biển" },
            { icon: icon5, feature: "Phòng gia đình" },
            { icon: icon6, feature: "Trung tâm Spa & chăm sóc sức khoẻ" },
            { icon: icon7, feature: "Miễn phí kayaking" },
            { icon: icon8, feature: "Tắm nắng" },
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
            { icon: icon1, feature: "Có bể sục" },
            { icon: icon2, feature: "Lễ tân 24 giờ" },
            { icon: icon3, feature: "Quầy bar" },
            { icon: icon4, feature: "Giáp biển" },
            { icon: icon5, feature: "Phòng gia đình" },
            { icon: icon6, feature: "Trung tâm Spa & chăm sóc sức khoẻ" },
            { icon: icon7, feature: "Miễn phí kayaking" },
            { icon: icon8, feature: "Tắm nắng" },
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
            { icon: icon1, feature: "Có bể sục" },
            { icon: icon2, feature: "Lễ tân 24 giờ" },
            { icon: icon3, feature: "Quầy bar" },
            { icon: icon4, feature: "Giáp biển" },
            { icon: icon5, feature: "Phòng gia đình" },
            { icon: icon6, feature: "Trung tâm Spa & chăm sóc sức khoẻ" },
            { icon: icon7, feature: "Miễn phí kayaking" },
            { icon: icon8, feature: "Tắm nắng" },
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
            { icon: icon1, feature: "Có bể sục" },
            { icon: icon2, feature: "Lễ tân 24 giờ" },
            { icon: icon3, feature: "Quầy bar" },
            { icon: icon4, feature: "Giáp biển" },
            { icon: icon5, feature: "Phòng gia đình" },
            { icon: icon6, feature: "Trung tâm Spa & chăm sóc sức khoẻ" },
            { icon: icon7, feature: "Miễn phí kayaking" },
            { icon: icon8, feature: "Tắm nắng" },
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
            { icon: icon1, feature: "Có bể sục" },
            { icon: icon2, feature: "Lễ tân 24 giờ" },
            { icon: icon3, feature: "Quầy bar" },
            { icon: icon4, feature: "Giáp biển" },
            { icon: icon5, feature: "Phòng gia đình" },
            { icon: icon6, feature: "Trung tâm Spa & chăm sóc sức khoẻ" },
            { icon: icon7, feature: "Miễn phí kayaking" },
            { icon: icon8, feature: "Tắm nắng" },
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
      year: 2023,
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.022484029637!2d105.80947457438836!3d21.071764186301834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab917de76245%3A0xc5a28b326eab613a!2zROG7sSDDgW4gSGVyaXRhZ2UgV2VzdCBMYWtl!5e0!3m2!1svi!2s!4v1733889979170!5m2!1svi!2s",
      cabin: 23,
      material: "Kim Loại",
      trip: "Đảo Tuần Châu - Vịnh Hạ Long - Hang Luồn - Đảo Ti Tốp - Hang Sửng Sốt",
      executive: "Công ty Cổ phần tập đoàn HALO ECO",
      bage: "Lux Cruises, Lô 28 Cảng Quốc Tế Tuần Châu",
      overview: [
        {
          desc: " Du thuyền được thiết kế theo phong cách quốc tế với nội thất trang trí Đông Dương, lấy cảm hứng từ nét đẹp yêu kiều của người phụ nữ Á Đông",
        },
        {
          desc: "Du thuyền có  39 phòng cao cấp đều có ban công riêng và bồn tắm full view biển",
        },
        {
          desc: " Catherine là một khu nghỉ dưỡng thu nhỏ với hàng loạt dịch vụ giải trí cao cấp trên tàu: 02 nhà hàng, 02 phòng Spa riêng biệt cho nam và nữ, 02 phòng Karaoke sang trọng, Phòng thử rượu & cigars, Bể bơi vô cực 40m3, Phòng Poker (Texas hold’em), Sân golf mini…",
        },
        {
          desc: "Tại đây, du khách sẽ có khoảng thời gian vui vẻ để trải nghiệm các món ăn được lấy cảm hứng và có nguồn gốc địa phương, được chuẩn bị cẩn thận bởi các đầu bếp chuyên nghiệp của Catherine.",
        },
      ],
      infor: "Hạ thuỷ 2019 - Tàu vỏ Kim loại - 20 phòng",
      reviews: {
        average_rating: 4.91,
        ratings: {
          "1_star": 3,
          "2_star": 0,
          "3_star": 3,
          "4_star": 1,
          "5_star": 2,
        },
        perPage_reviews: 5,
        total_reviews: 9,
        comments: [
          {
            rating: 5,
            comment: "Dịch vụ rất tuyệt vời, mình rất hài lòng!",
            username: "NguyenVanA",
            dateReview: "2024-12-13",
          },
          {
            rating: 5,
            comment: "Sản phẩm chất lượng, giao hàng nhanh.",
            username: "LeMinhB",
            dateReview: "2024-12-12",
          },
          {
            rating: 4,
            comment: "Tạm ổn, nhưng vẫn cần cải thiện ở khâu đóng gói.",
            username: "TranThanhC",
            dateReview: "2024-12-11",
          },
          {
            rating: 5,
            comment: "Rất đáng tiền, sẽ quay lại ủng hộ!",
            username: "PhamThiD",
            dateReview: "2024-12-10",
          },
          {
            rating: 5,
            comment: "Mình cực kỳ hài lòng, nhân viên hỗ trợ rất nhiệt tình.",
            username: "HoangAnhE",
            dateReview: "2024-12-09",
          },
        ],
      },
      price: 90000000,
      star: 5.0,
      label: [
        { icon: icon1, feature: "Có bể sục" },
        { icon: icon2, feature: "Lễ tân 24 giờ" },
        { icon: icon3, feature: "Quầy bar" },
        { icon: icon4, feature: "Giáp biển" },
      ],
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
            { icon: icon1, feature: "Có bể sục" },
            { icon: icon2, feature: "Lễ tân 24 giờ" },
            { icon: icon3, feature: "Quầy bar" },
            { icon: icon4, feature: "Giáp biển" },
            { icon: icon5, feature: "Phòng gia đình" },
            { icon: icon6, feature: "Trung tâm Spa & chăm sóc sức khoẻ" },
            { icon: icon7, feature: "Miễn phí kayaking" },
            { icon: icon8, feature: "Tắm nắng" },
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
            { icon: icon1, feature: "Có bể sục" },
            { icon: icon2, feature: "Lễ tân 24 giờ" },
            { icon: icon3, feature: "Quầy bar" },
            { icon: icon4, feature: "Giáp biển" },
            { icon: icon5, feature: "Phòng gia đình" },
            { icon: icon6, feature: "Trung tâm Spa & chăm sóc sức khoẻ" },
            { icon: icon7, feature: "Miễn phí kayaking" },
            { icon: icon8, feature: "Tắm nắng" },
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
            { icon: icon1, feature: "Có bể sục" },
            { icon: icon2, feature: "Lễ tân 24 giờ" },
            { icon: icon3, feature: "Quầy bar" },
            { icon: icon4, feature: "Giáp biển" },
            { icon: icon5, feature: "Phòng gia đình" },
            { icon: icon6, feature: "Trung tâm Spa & chăm sóc sức khoẻ" },
            { icon: icon7, feature: "Miễn phí kayaking" },
            { icon: icon8, feature: "Tắm nắng" },
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
            { icon: icon1, feature: "Có bể sục" },
            { icon: icon2, feature: "Lễ tân 24 giờ" },
            { icon: icon3, feature: "Quầy bar" },
            { icon: icon4, feature: "Giáp biển" },
            { icon: icon5, feature: "Phòng gia đình" },
            { icon: icon6, feature: "Trung tâm Spa & chăm sóc sức khoẻ" },
            { icon: icon7, feature: "Miễn phí kayaking" },
            { icon: icon8, feature: "Tắm nắng" },
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
            { icon: icon1, feature: "Có bể sục" },
            { icon: icon2, feature: "Lễ tân 24 giờ" },
            { icon: icon3, feature: "Quầy bar" },
            { icon: icon4, feature: "Giáp biển" },
            { icon: icon5, feature: "Phòng gia đình" },
            { icon: icon6, feature: "Trung tâm Spa & chăm sóc sức khoẻ" },
            { icon: icon7, feature: "Miễn phí kayaking" },
            { icon: icon8, feature: "Tắm nắng" },
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
      year: 2023,
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.022484029637!2d105.80947457438836!3d21.071764186301834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab917de76245%3A0xc5a28b326eab613a!2zROG7sSDDgW4gSGVyaXRhZ2UgV2VzdCBMYWtl!5e0!3m2!1svi!2s!4v1733889979170!5m2!1svi!2s",
      cabin: 23,
      material: "Kim Loại",
      trip: "Đảo Tuần Châu - Vịnh Hạ Long - Hang Luồn - Đảo Ti Tốp - Hang Sửng Sốt",
      executive: "Công ty Cổ phần tập đoàn HALO ECO",
      bage: "Lux Cruises, Lô 28 Cảng Quốc Tế Tuần Châu",
      overview: [
        {
          desc: " Du thuyền được thiết kế theo phong cách quốc tế với nội thất trang trí Đông Dương, lấy cảm hứng từ nét đẹp yêu kiều của người phụ nữ Á Đông",
        },
        {
          desc: "Du thuyền có  39 phòng cao cấp đều có ban công riêng và bồn tắm full view biển",
        },
        {
          desc: " Catherine là một khu nghỉ dưỡng thu nhỏ với hàng loạt dịch vụ giải trí cao cấp trên tàu: 02 nhà hàng, 02 phòng Spa riêng biệt cho nam và nữ, 02 phòng Karaoke sang trọng, Phòng thử rượu & cigars, Bể bơi vô cực 40m3, Phòng Poker (Texas hold’em), Sân golf mini…",
        },
        {
          desc: "Tại đây, du khách sẽ có khoảng thời gian vui vẻ để trải nghiệm các món ăn được lấy cảm hứng và có nguồn gốc địa phương, được chuẩn bị cẩn thận bởi các đầu bếp chuyên nghiệp của Catherine.",
        },
      ],
      infor: "Hạ thuỷ 2019 - Tàu vỏ Kim loại - 20 phòng",
      reviews: {
        average_rating: 4.91,
        ratings: {
          "1_star": 3,
          "2_star": 0,
          "3_star": 3,
          "4_star": 1,
          "5_star": 2,
        },
        perPage_reviews: 5,
        total_reviews: 9,
        comments: [
          {
            rating: 5,
            comment: "Dịch vụ rất tuyệt vời, mình rất hài lòng!",
            username: "NguyenVanA",
            dateReview: "2024-12-13",
          },
          {
            rating: 5,
            comment: "Sản phẩm chất lượng, giao hàng nhanh.",
            username: "LeMinhB",
            dateReview: "2024-12-12",
          },
          {
            rating: 4,
            comment: "Tạm ổn, nhưng vẫn cần cải thiện ở khâu đóng gói.",
            username: "TranThanhC",
            dateReview: "2024-12-11",
          },
          {
            rating: 5,
            comment: "Rất đáng tiền, sẽ quay lại ủng hộ!",
            username: "PhamThiD",
            dateReview: "2024-12-10",
          },
          {
            rating: 5,
            comment: "Mình cực kỳ hài lòng, nhân viên hỗ trợ rất nhiệt tình.",
            username: "HoangAnhE",
            dateReview: "2024-12-09",
          },
        ],
      },
      price: 80000000,
      star: 5.0,
      label: [
        { icon: icon1, feature: "Có bể sục" },
        { icon: icon2, feature: "Lễ tân 24 giờ" },
        { icon: icon3, feature: "Quầy bar" },
        { icon: icon4, feature: "Giáp biển" },
        { icon: icon5, feature: "Phòng gia đình" },
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
            { icon: icon1, feature: "Có bể sục" },
            { icon: icon2, feature: "Lễ tân 24 giờ" },
            { icon: icon3, feature: "Quầy bar" },
            { icon: icon4, feature: "Giáp biển" },
            { icon: icon5, feature: "Phòng gia đình" },
            { icon: icon6, feature: "Trung tâm Spa & chăm sóc sức khoẻ" },
            { icon: icon7, feature: "Miễn phí kayaking" },
            { icon: icon8, feature: "Tắm nắng" },
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
            { icon: icon1, feature: "Có bể sục" },
            { icon: icon2, feature: "Lễ tân 24 giờ" },
            { icon: icon3, feature: "Quầy bar" },
            { icon: icon4, feature: "Giáp biển" },
            { icon: icon5, feature: "Phòng gia đình" },
            { icon: icon6, feature: "Trung tâm Spa & chăm sóc sức khoẻ" },
            { icon: icon7, feature: "Miễn phí kayaking" },
            { icon: icon8, feature: "Tắm nắng" },
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
            { icon: icon1, feature: "Có bể sục" },
            { icon: icon2, feature: "Lễ tân 24 giờ" },
            { icon: icon3, feature: "Quầy bar" },
            { icon: icon4, feature: "Giáp biển" },
            { icon: icon5, feature: "Phòng gia đình" },
            { icon: icon6, feature: "Trung tâm Spa & chăm sóc sức khoẻ" },
            { icon: icon7, feature: "Miễn phí kayaking" },
            { icon: icon8, feature: "Tắm nắng" },
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
            { icon: icon1, feature: "Có bể sục" },
            { icon: icon2, feature: "Lễ tân 24 giờ" },
            { icon: icon3, feature: "Quầy bar" },
            { icon: icon4, feature: "Giáp biển" },
            { icon: icon5, feature: "Phòng gia đình" },
            { icon: icon6, feature: "Trung tâm Spa & chăm sóc sức khoẻ" },
            { icon: icon7, feature: "Miễn phí kayaking" },
            { icon: icon8, feature: "Tắm nắng" },
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
            { icon: icon1, feature: "Có bể sục" },
            { icon: icon2, feature: "Lễ tân 24 giờ" },
            { icon: icon3, feature: "Quầy bar" },
            { icon: icon4, feature: "Giáp biển" },
            { icon: icon5, feature: "Phòng gia đình" },
            { icon: icon6, feature: "Trung tâm Spa & chăm sóc sức khoẻ" },
            { icon: icon7, feature: "Miễn phí kayaking" },
            { icon: icon8, feature: "Tắm nắng" },
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
      year: 2023,
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.022484029637!2d105.80947457438836!3d21.071764186301834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab917de76245%3A0xc5a28b326eab613a!2zROG7sSDDgW4gSGVyaXRhZ2UgV2VzdCBMYWtl!5e0!3m2!1svi!2s!4v1733889979170!5m2!1svi!2s",
      cabin: 23,
      material: "Kim Loại",
      trip: "Đảo Tuần Châu - Vịnh Hạ Long - Hang Luồn - Đảo Ti Tốp - Hang Sửng Sốt",
      executive: "Công ty Cổ phần tập đoàn HALO ECO",
      bage: "Lux Cruises, Lô 28 Cảng Quốc Tế Tuần Châu",
      overview: [
        {
          desc: " Du thuyền được thiết kế theo phong cách quốc tế với nội thất trang trí Đông Dương, lấy cảm hứng từ nét đẹp yêu kiều của người phụ nữ Á Đông",
        },
        {
          desc: "Du thuyền có  39 phòng cao cấp đều có ban công riêng và bồn tắm full view biển",
        },
        {
          desc: " Catherine là một khu nghỉ dưỡng thu nhỏ với hàng loạt dịch vụ giải trí cao cấp trên tàu: 02 nhà hàng, 02 phòng Spa riêng biệt cho nam và nữ, 02 phòng Karaoke sang trọng, Phòng thử rượu & cigars, Bể bơi vô cực 40m3, Phòng Poker (Texas hold’em), Sân golf mini…",
        },
        {
          desc: "Tại đây, du khách sẽ có khoảng thời gian vui vẻ để trải nghiệm các món ăn được lấy cảm hứng và có nguồn gốc địa phương, được chuẩn bị cẩn thận bởi các đầu bếp chuyên nghiệp của Catherine.",
        },
      ],
      infor: "Hạ thuỷ 2019 - Tàu vỏ Kim loại - 20 phòng",
      reviews: {
        average_rating: 4.91,
        ratings: {
          "1_star": 3,
          "2_star": 0,
          "3_star": 3,
          "4_star": 1,
          "5_star": 2,
        },
        perPage_reviews: 5,
        total_reviews: 9,
        comments: [
          {
            rating: 5,
            comment: "Dịch vụ rất tuyệt vời, mình rất hài lòng!",
            username: "NguyenVanA",
            dateReview: "2024-12-13",
          },
          {
            rating: 5,
            comment: "Sản phẩm chất lượng, giao hàng nhanh.",
            username: "LeMinhB",
            dateReview: "2024-12-12",
          },
          {
            rating: 4,
            comment: "Tạm ổn, nhưng vẫn cần cải thiện ở khâu đóng gói.",
            username: "TranThanhC",
            dateReview: "2024-12-11",
          },
          {
            rating: 5,
            comment: "Rất đáng tiền, sẽ quay lại ủng hộ!",
            username: "PhamThiD",
            dateReview: "2024-12-10",
          },
          {
            rating: 5,
            comment: "Mình cực kỳ hài lòng, nhân viên hỗ trợ rất nhiệt tình.",
            username: "HoangAnhE",
            dateReview: "2024-12-09",
          },
        ],
      },
      price: 70000000,
      star: 5.0,
      label: [
        { icon: icon1, feature: "Có bể sục" },
        { icon: icon2, feature: "Lễ tân 24 giờ" },
        { icon: icon3, feature: "Quầy bar" },
        { icon: icon4, feature: "Giáp biển" },
        { icon: icon5, feature: "Phòng gia đình" },
        { icon: icon6, feature: "Trung tâm Spa & chăm sóc sức khoẻ" },
        { icon: icon7, feature: "Miễn phí kayaking" },
        { icon: icon8, feature: "Tắm nắng" },
      ],
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
            { icon: icon1, feature: "Có bể sục" },
            { icon: icon2, feature: "Lễ tân 24 giờ" },
            { icon: icon3, feature: "Quầy bar" },
            { icon: icon4, feature: "Giáp biển" },
            { icon: icon5, feature: "Phòng gia đình" },
            { icon: icon6, feature: "Trung tâm Spa & chăm sóc sức khoẻ" },
            { icon: icon7, feature: "Miễn phí kayaking" },
            { icon: icon8, feature: "Tắm nắng" },
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
            { icon: icon1, feature: "Có bể sục" },
            { icon: icon2, feature: "Lễ tân 24 giờ" },
            { icon: icon3, feature: "Quầy bar" },
            { icon: icon4, feature: "Giáp biển" },
            { icon: icon5, feature: "Phòng gia đình" },
            { icon: icon6, feature: "Trung tâm Spa & chăm sóc sức khoẻ" },
            { icon: icon7, feature: "Miễn phí kayaking" },
            { icon: icon8, feature: "Tắm nắng" },
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
            { icon: icon1, feature: "Có bể sục" },
            { icon: icon2, feature: "Lễ tân 24 giờ" },
            { icon: icon3, feature: "Quầy bar" },
            { icon: icon4, feature: "Giáp biển" },
            { icon: icon5, feature: "Phòng gia đình" },
            { icon: icon6, feature: "Trung tâm Spa & chăm sóc sức khoẻ" },
            { icon: icon7, feature: "Miễn phí kayaking" },
            { icon: icon8, feature: "Tắm nắng" },
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
            { icon: icon1, feature: "Có bể sục" },
            { icon: icon2, feature: "Lễ tân 24 giờ" },
            { icon: icon3, feature: "Quầy bar" },
            { icon: icon4, feature: "Giáp biển" },
            { icon: icon5, feature: "Phòng gia đình" },
            { icon: icon6, feature: "Trung tâm Spa & chăm sóc sức khoẻ" },
            { icon: icon7, feature: "Miễn phí kayaking" },
            { icon: icon8, feature: "Tắm nắng" },
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
            { icon: icon1, feature: "Có bể sục" },
            { icon: icon2, feature: "Lễ tân 24 giờ" },
            { icon: icon3, feature: "Quầy bar" },
            { icon: icon4, feature: "Giáp biển" },
            { icon: icon5, feature: "Phòng gia đình" },
            { icon: icon6, feature: "Trung tâm Spa & chăm sóc sức khoẻ" },
            { icon: icon7, feature: "Miễn phí kayaking" },
            { icon: icon8, feature: "Tắm nắng" },
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
      year: 2023,
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.022484029637!2d105.80947457438836!3d21.071764186301834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab917de76245%3A0xc5a28b326eab613a!2zROG7sSDDgW4gSGVyaXRhZ2UgV2VzdCBMYWtl!5e0!3m2!1svi!2s!4v1733889979170!5m2!1svi!2s",
      cabin: 23,
      material: "Kim Loại",
      trip: "Đảo Tuần Châu - Vịnh Hạ Long - Hang Luồn - Đảo Ti Tốp - Hang Sửng Sốt",
      executive: "Công ty Cổ phần tập đoàn HALO ECO",
      bage: "Lux Cruises, Lô 28 Cảng Quốc Tế Tuần Châu",
      overview: [
        {
          desc: " Du thuyền được thiết kế theo phong cách quốc tế với nội thất trang trí Đông Dương, lấy cảm hứng từ nét đẹp yêu kiều của người phụ nữ Á Đông",
        },
        {
          desc: "Du thuyền có  39 phòng cao cấp đều có ban công riêng và bồn tắm full view biển",
        },
        {
          desc: " Catherine là một khu nghỉ dưỡng thu nhỏ với hàng loạt dịch vụ giải trí cao cấp trên tàu: 02 nhà hàng, 02 phòng Spa riêng biệt cho nam và nữ, 02 phòng Karaoke sang trọng, Phòng thử rượu & cigars, Bể bơi vô cực 40m3, Phòng Poker (Texas hold’em), Sân golf mini…",
        },
        {
          desc: "Tại đây, du khách sẽ có khoảng thời gian vui vẻ để trải nghiệm các món ăn được lấy cảm hứng và có nguồn gốc địa phương, được chuẩn bị cẩn thận bởi các đầu bếp chuyên nghiệp của Catherine.",
        },
      ],
      infor: "Hạ thuỷ 2019 - Tàu vỏ Kim loại - 20 phòng",
      reviews: {
        average_rating: 4.91,
        ratings: {
          "1_star": 3,
          "2_star": 0,
          "3_star": 3,
          "4_star": 1,
          "5_star": 2,
        },
        perPage_reviews: 5,
        total_reviews: 9,
        comments: [
          {
            rating: 5,
            comment: "Dịch vụ rất tuyệt vời, mình rất hài lòng!",
            username: "NguyenVanA",
            dateReview: "2024-12-13",
          },
          {
            rating: 5,
            comment: "Sản phẩm chất lượng, giao hàng nhanh.",
            username: "LeMinhB",
            dateReview: "2024-12-12",
          },
          {
            rating: 4,
            comment: "Tạm ổn, nhưng vẫn cần cải thiện ở khâu đóng gói.",
            username: "TranThanhC",
            dateReview: "2024-12-11",
          },
          {
            rating: 5,
            comment: "Rất đáng tiền, sẽ quay lại ủng hộ!",
            username: "PhamThiD",
            dateReview: "2024-12-10",
          },
          {
            rating: 5,
            comment: "Mình cực kỳ hài lòng, nhân viên hỗ trợ rất nhiệt tình.",
            username: "HoangAnhE",
            dateReview: "2024-12-09",
          },
        ],
      },
      price: 60000000,
      star: 5.0,
      label: [
        { icon: icon1, feature: "Có bể sục" },
        { icon: icon2, feature: "Lễ tân 24 giờ" },
        { icon: icon3, feature: "Quầy bar" },
        { icon: icon4, feature: "Giáp biển" },
        { icon: icon5, feature: "Phòng gia đình" },
        { icon: icon6, feature: "Trung tâm Spa & chăm sóc sức khoẻ" },
        { icon: icon7, feature: "Miễn phí kayaking" },
        { icon: icon8, feature: "Tắm nắng" },
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
            { icon: icon1, feature: "Có bể sục" },
            { icon: icon2, feature: "Lễ tân 24 giờ" },
            { icon: icon3, feature: "Quầy bar" },
            { icon: icon4, feature: "Giáp biển" },
            { icon: icon5, feature: "Phòng gia đình" },
            { icon: icon6, feature: "Trung tâm Spa & chăm sóc sức khoẻ" },
            { icon: icon7, feature: "Miễn phí kayaking" },
            { icon: icon8, feature: "Tắm nắng" },
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
            { icon: icon1, feature: "Có bể sục" },
            { icon: icon2, feature: "Lễ tân 24 giờ" },
            { icon: icon3, feature: "Quầy bar" },
            { icon: icon4, feature: "Giáp biển" },
            { icon: icon5, feature: "Phòng gia đình" },
            { icon: icon6, feature: "Trung tâm Spa & chăm sóc sức khoẻ" },
            { icon: icon7, feature: "Miễn phí kayaking" },
            { icon: icon8, feature: "Tắm nắng" },
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
            { icon: icon1, feature: "Có bể sục" },
            { icon: icon2, feature: "Lễ tân 24 giờ" },
            { icon: icon3, feature: "Quầy bar" },
            { icon: icon4, feature: "Giáp biển" },
            { icon: icon5, feature: "Phòng gia đình" },
            { icon: icon6, feature: "Trung tâm Spa & chăm sóc sức khoẻ" },
            { icon: icon7, feature: "Miễn phí kayaking" },
            { icon: icon8, feature: "Tắm nắng" },
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
            { icon: icon1, feature: "Có bể sục" },
            { icon: icon2, feature: "Lễ tân 24 giờ" },
            { icon: icon3, feature: "Quầy bar" },
            { icon: icon4, feature: "Giáp biển" },
            { icon: icon5, feature: "Phòng gia đình" },
            { icon: icon6, feature: "Trung tâm Spa & chăm sóc sức khoẻ" },
            { icon: icon7, feature: "Miễn phí kayaking" },
            { icon: icon8, feature: "Tắm nắng" },
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
            { icon: icon1, feature: "Có bể sục" },
            { icon: icon2, feature: "Lễ tân 24 giờ" },
            { icon: icon3, feature: "Quầy bar" },
            { icon: icon4, feature: "Giáp biển" },
            { icon: icon5, feature: "Phòng gia đình" },
            { icon: icon6, feature: "Trung tâm Spa & chăm sóc sức khoẻ" },
            { icon: icon7, feature: "Miễn phí kayaking" },
            { icon: icon8, feature: "Tắm nắng" },
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
      year: 2023,
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.022484029637!2d105.80947457438836!3d21.071764186301834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab917de76245%3A0xc5a28b326eab613a!2zROG7sSDDgW4gSGVyaXRhZ2UgV2VzdCBMYWtl!5e0!3m2!1svi!2s!4v1733889979170!5m2!1svi!2s",
      cabin: 23,
      material: "Kim Loại",
      trip: "Đảo Tuần Châu - Vịnh Hạ Long - Hang Luồn - Đảo Ti Tốp - Hang Sửng Sốt",
      executive: "Công ty Cổ phần tập đoàn HALO ECO",
      bage: "Lux Cruises, Lô 28 Cảng Quốc Tế Tuần Châu",
      overview: [
        {
          desc: " Du thuyền được thiết kế theo phong cách quốc tế với nội thất trang trí Đông Dương, lấy cảm hứng từ nét đẹp yêu kiều của người phụ nữ Á Đông",
        },
        {
          desc: "Du thuyền có  39 phòng cao cấp đều có ban công riêng và bồn tắm full view biển",
        },
        {
          desc: " Catherine là một khu nghỉ dưỡng thu nhỏ với hàng loạt dịch vụ giải trí cao cấp trên tàu: 02 nhà hàng, 02 phòng Spa riêng biệt cho nam và nữ, 02 phòng Karaoke sang trọng, Phòng thử rượu & cigars, Bể bơi vô cực 40m3, Phòng Poker (Texas hold’em), Sân golf mini…",
        },
        {
          desc: "Tại đây, du khách sẽ có khoảng thời gian vui vẻ để trải nghiệm các món ăn được lấy cảm hứng và có nguồn gốc địa phương, được chuẩn bị cẩn thận bởi các đầu bếp chuyên nghiệp của Catherine.",
        },
      ],
      infor: "Hạ thuỷ 2019 - Tàu vỏ Kim loại - 20 phòng",
      reviews: {
        average_rating: 4.91,
        ratings: {
          "1_star": 3,
          "2_star": 0,
          "3_star": 3,
          "4_star": 1,
          "5_star": 2,
        },
        perPage_reviews: 5,
        total_reviews: 9,
        comments: [
          {
            rating: 5,
            comment: "Dịch vụ rất tuyệt vời, mình rất hài lòng!",
            username: "NguyenVanA",
            dateReview: "2024-12-13",
          },
          {
            rating: 5,
            comment: "Sản phẩm chất lượng, giao hàng nhanh.",
            username: "LeMinhB",
            dateReview: "2024-12-12",
          },
          {
            rating: 4,
            comment: "Tạm ổn, nhưng vẫn cần cải thiện ở khâu đóng gói.",
            username: "TranThanhC",
            dateReview: "2024-12-11",
          },
          {
            rating: 5,
            comment: "Rất đáng tiền, sẽ quay lại ủng hộ!",
            username: "PhamThiD",
            dateReview: "2024-12-10",
          },
          {
            rating: 5,
            comment: "Mình cực kỳ hài lòng, nhân viên hỗ trợ rất nhiệt tình.",
            username: "HoangAnhE",
            dateReview: "2024-12-09",
          },
        ],
      },
      price: 50000000,
      star: 5.0,
      label: [
        { icon: icon1, feature: "Có bể sục" },
        { icon: icon2, feature: "Lễ tân 24 giờ" },
        { icon: icon3, feature: "Quầy bar" },
        { icon: icon4, feature: "Giáp biển" },
        { icon: icon5, feature: "Phòng gia đình" },
        { icon: icon6, feature: "Trung tâm Spa & chăm sóc sức khoẻ" },
        { icon: icon7, feature: "Miễn phí kayaking" },
        { icon: icon8, feature: "Tắm nắng" },
      ],
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
            { icon: icon1, feature: "Có bể sục" },
            { icon: icon2, feature: "Lễ tân 24 giờ" },
            { icon: icon3, feature: "Quầy bar" },
            { icon: icon4, feature: "Giáp biển" },
            { icon: icon5, feature: "Phòng gia đình" },
            { icon: icon6, feature: "Trung tâm Spa & chăm sóc sức khoẻ" },
            { icon: icon7, feature: "Miễn phí kayaking" },
            { icon: icon8, feature: "Tắm nắng" },
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
            { icon: icon1, feature: "Có bể sục" },
            { icon: icon2, feature: "Lễ tân 24 giờ" },
            { icon: icon3, feature: "Quầy bar" },
            { icon: icon4, feature: "Giáp biển" },
            { icon: icon5, feature: "Phòng gia đình" },
            { icon: icon6, feature: "Trung tâm Spa & chăm sóc sức khoẻ" },
            { icon: icon7, feature: "Miễn phí kayaking" },
            { icon: icon8, feature: "Tắm nắng" },
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
            { icon: icon1, feature: "Có bể sục" },
            { icon: icon2, feature: "Lễ tân 24 giờ" },
            { icon: icon3, feature: "Quầy bar" },
            { icon: icon4, feature: "Giáp biển" },
            { icon: icon5, feature: "Phòng gia đình" },
            { icon: icon6, feature: "Trung tâm Spa & chăm sóc sức khoẻ" },
            { icon: icon7, feature: "Miễn phí kayaking" },
            { icon: icon8, feature: "Tắm nắng" },
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
            { icon: icon1, feature: "Có bể sục" },
            { icon: icon2, feature: "Lễ tân 24 giờ" },
            { icon: icon3, feature: "Quầy bar" },
            { icon: icon4, feature: "Giáp biển" },
            { icon: icon5, feature: "Phòng gia đình" },
            { icon: icon6, feature: "Trung tâm Spa & chăm sóc sức khoẻ" },
            { icon: icon7, feature: "Miễn phí kayaking" },
            { icon: icon8, feature: "Tắm nắng" },
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
            { icon: icon1, feature: "Có bể sục" },
            { icon: icon2, feature: "Lễ tân 24 giờ" },
            { icon: icon3, feature: "Quầy bar" },
            { icon: icon4, feature: "Giáp biển" },
            { icon: icon5, feature: "Phòng gia đình" },
            { icon: icon6, feature: "Trung tâm Spa & chăm sóc sức khoẻ" },
            { icon: icon7, feature: "Miễn phí kayaking" },
            { icon: icon8, feature: "Tắm nắng" },
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
      year: 2023,
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.022484029637!2d105.80947457438836!3d21.071764186301834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab917de76245%3A0xc5a28b326eab613a!2zROG7sSDDgW4gSGVyaXRhZ2UgV2VzdCBMYWtl!5e0!3m2!1svi!2s!4v1733889979170!5m2!1svi!2s",
      cabin: 23,
      material: "Kim Loại",
      trip: "Đảo Tuần Châu - Vịnh Hạ Long - Hang Luồn - Đảo Ti Tốp - Hang Sửng Sốt",
      executive: "Công ty Cổ phần tập đoàn HALO ECO",
      bage: "Lux Cruises, Lô 28 Cảng Quốc Tế Tuần Châu",
      overview: [
        {
          desc: " Du thuyền được thiết kế theo phong cách quốc tế với nội thất trang trí Đông Dương, lấy cảm hứng từ nét đẹp yêu kiều của người phụ nữ Á Đông",
        },
        {
          desc: "Du thuyền có  39 phòng cao cấp đều có ban công riêng và bồn tắm full view biển",
        },
        {
          desc: " Catherine là một khu nghỉ dưỡng thu nhỏ với hàng loạt dịch vụ giải trí cao cấp trên tàu: 02 nhà hàng, 02 phòng Spa riêng biệt cho nam và nữ, 02 phòng Karaoke sang trọng, Phòng thử rượu & cigars, Bể bơi vô cực 40m3, Phòng Poker (Texas hold’em), Sân golf mini…",
        },
        {
          desc: "Tại đây, du khách sẽ có khoảng thời gian vui vẻ để trải nghiệm các món ăn được lấy cảm hứng và có nguồn gốc địa phương, được chuẩn bị cẩn thận bởi các đầu bếp chuyên nghiệp của Catherine.",
        },
      ],
      infor: "Hạ thuỷ 2019 - Tàu vỏ Kim loại - 20 phòng",
      reviews: {
        average_rating: 4.91,
        ratings: {
          "1_star": 3,
          "2_star": 0,
          "3_star": 3,
          "4_star": 1,
          "5_star": 2,
        },
        perPage_reviews: 5,
        total_reviews: 9,
        comments: [
          {
            rating: 5,
            comment: "Dịch vụ rất tuyệt vời, mình rất hài lòng!",
            username: "NguyenVanA",
            dateReview: "2024-12-13",
          },
          {
            rating: 5,
            comment: "Sản phẩm chất lượng, giao hàng nhanh.",
            username: "LeMinhB",
            dateReview: "2024-12-12",
          },
          {
            rating: 4,
            comment: "Tạm ổn, nhưng vẫn cần cải thiện ở khâu đóng gói.",
            username: "TranThanhC",
            dateReview: "2024-12-11",
          },
          {
            rating: 5,
            comment: "Rất đáng tiền, sẽ quay lại ủng hộ!",
            username: "PhamThiD",
            dateReview: "2024-12-10",
          },
          {
            rating: 5,
            comment: "Mình cực kỳ hài lòng, nhân viên hỗ trợ rất nhiệt tình.",
            username: "HoangAnhE",
            dateReview: "2024-12-09",
          },
        ],
      },
      price: 40000000,
      star: 5.0,
      label: [
        { icon: icon1, feature: "Có bể sục" },
        { icon: icon2, feature: "Lễ tân 24 giờ" },
        { icon: icon3, feature: "Quầy bar" },
        { icon: icon4, feature: "Giáp biển" },
        { icon: icon5, feature: "Phòng gia đình" },
        { icon: icon6, feature: "Trung tâm Spa & chăm sóc sức khoẻ" },
        { icon: icon7, feature: "Miễn phí kayaking" },
        { icon: icon8, feature: "Tắm nắng" },
      ],
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
            { icon: icon1, feature: "Có bể sục" },
            { icon: icon2, feature: "Lễ tân 24 giờ" },
            { icon: icon3, feature: "Quầy bar" },
            { icon: icon4, feature: "Giáp biển" },
            { icon: icon5, feature: "Phòng gia đình" },
            { icon: icon6, feature: "Trung tâm Spa & chăm sóc sức khoẻ" },
            { icon: icon7, feature: "Miễn phí kayaking" },
            { icon: icon8, feature: "Tắm nắng" },
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
            { icon: icon1, feature: "Có bể sục" },
            { icon: icon2, feature: "Lễ tân 24 giờ" },
            { icon: icon3, feature: "Quầy bar" },
            { icon: icon4, feature: "Giáp biển" },
            { icon: icon5, feature: "Phòng gia đình" },
            { icon: icon6, feature: "Trung tâm Spa & chăm sóc sức khoẻ" },
            { icon: icon7, feature: "Miễn phí kayaking" },
            { icon: icon8, feature: "Tắm nắng" },
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
            { icon: icon1, feature: "Có bể sục" },
            { icon: icon2, feature: "Lễ tân 24 giờ" },
            { icon: icon3, feature: "Quầy bar" },
            { icon: icon4, feature: "Giáp biển" },
            { icon: icon5, feature: "Phòng gia đình" },
            { icon: icon6, feature: "Trung tâm Spa & chăm sóc sức khoẻ" },
            { icon: icon7, feature: "Miễn phí kayaking" },
            { icon: icon8, feature: "Tắm nắng" },
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
            { icon: icon1, feature: "Có bể sục" },
            { icon: icon2, feature: "Lễ tân 24 giờ" },
            { icon: icon3, feature: "Quầy bar" },
            { icon: icon4, feature: "Giáp biển" },
            { icon: icon5, feature: "Phòng gia đình" },
            { icon: icon6, feature: "Trung tâm Spa & chăm sóc sức khoẻ" },
            { icon: icon7, feature: "Miễn phí kayaking" },
            { icon: icon8, feature: "Tắm nắng" },
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
            { icon: icon1, feature: "Có bể sục" },
            { icon: icon2, feature: "Lễ tân 24 giờ" },
            { icon: icon3, feature: "Quầy bar" },
            { icon: icon4, feature: "Giáp biển" },
            { icon: icon5, feature: "Phòng gia đình" },
            { icon: icon6, feature: "Trung tâm Spa & chăm sóc sức khoẻ" },
            { icon: icon7, feature: "Miễn phí kayaking" },
            { icon: icon8, feature: "Tắm nắng" },
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
      year: 2023,
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.022484029637!2d105.80947457438836!3d21.071764186301834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab917de76245%3A0xc5a28b326eab613a!2zROG7sSDDgW4gSGVyaXRhZ2UgV2VzdCBMYWtl!5e0!3m2!1svi!2s!4v1733889979170!5m2!1svi!2s",
      cabin: 23,
      material: "Kim Loại",
      trip: "Đảo Tuần Châu - Vịnh Hạ Long - Hang Luồn - Đảo Ti Tốp - Hang Sửng Sốt",
      executive: "Công ty Cổ phần tập đoàn HALO ECO",
      bage: "Lux Cruises, Lô 28 Cảng Quốc Tế Tuần Châu",
      overview: [
        {
          desc: " Du thuyền được thiết kế theo phong cách quốc tế với nội thất trang trí Đông Dương, lấy cảm hứng từ nét đẹp yêu kiều của người phụ nữ Á Đông",
        },
        {
          desc: "Du thuyền có  39 phòng cao cấp đều có ban công riêng và bồn tắm full view biển",
        },
        {
          desc: " Catherine là một khu nghỉ dưỡng thu nhỏ với hàng loạt dịch vụ giải trí cao cấp trên tàu: 02 nhà hàng, 02 phòng Spa riêng biệt cho nam và nữ, 02 phòng Karaoke sang trọng, Phòng thử rượu & cigars, Bể bơi vô cực 40m3, Phòng Poker (Texas hold’em), Sân golf mini…",
        },
        {
          desc: "Tại đây, du khách sẽ có khoảng thời gian vui vẻ để trải nghiệm các món ăn được lấy cảm hứng và có nguồn gốc địa phương, được chuẩn bị cẩn thận bởi các đầu bếp chuyên nghiệp của Catherine.",
        },
      ],
      infor: "Hạ thuỷ 2019 - Tàu vỏ Kim loại - 20 phòng",
      reviews: {
        average_rating: 4.91,
        ratings: {
          "1_star": 3,
          "2_star": 0,
          "3_star": 3,
          "4_star": 1,
          "5_star": 2,
        },
        perPage_reviews: 5,
        total_reviews: 9,
        comments: [
          {
            rating: 5,
            comment: "Dịch vụ rất tuyệt vời, mình rất hài lòng!",
            username: "NguyenVanA",
            dateReview: "2024-12-13",
          },
          {
            rating: 5,
            comment: "Sản phẩm chất lượng, giao hàng nhanh.",
            username: "LeMinhB",
            dateReview: "2024-12-12",
          },
          {
            rating: 4,
            comment: "Tạm ổn, nhưng vẫn cần cải thiện ở khâu đóng gói.",
            username: "TranThanhC",
            dateReview: "2024-12-11",
          },
          {
            rating: 5,
            comment: "Rất đáng tiền, sẽ quay lại ủng hộ!",
            username: "PhamThiD",
            dateReview: "2024-12-10",
          },
          {
            rating: 5,
            comment: "Mình cực kỳ hài lòng, nhân viên hỗ trợ rất nhiệt tình.",
            username: "HoangAnhE",
            dateReview: "2024-12-09",
          },
        ],
      },
      price: 30000000,
      star: 5.0,
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
            { icon: icon1, feature: "Có bể sục" },
            { icon: icon2, feature: "Lễ tân 24 giờ" },
            { icon: icon3, feature: "Quầy bar" },
            { icon: icon4, feature: "Giáp biển" },
            { icon: icon5, feature: "Phòng gia đình" },
            { icon: icon6, feature: "Trung tâm Spa & chăm sóc sức khoẻ" },
            { icon: icon7, feature: "Miễn phí kayaking" },
            { icon: icon8, feature: "Tắm nắng" },
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
            { icon: icon1, feature: "Có bể sục" },
            { icon: icon2, feature: "Lễ tân 24 giờ" },
            { icon: icon3, feature: "Quầy bar" },
            { icon: icon4, feature: "Giáp biển" },
            { icon: icon5, feature: "Phòng gia đình" },
            { icon: icon6, feature: "Trung tâm Spa & chăm sóc sức khoẻ" },
            { icon: icon7, feature: "Miễn phí kayaking" },
            { icon: icon8, feature: "Tắm nắng" },
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
            { icon: icon1, feature: "Có bể sục" },
            { icon: icon2, feature: "Lễ tân 24 giờ" },
            { icon: icon3, feature: "Quầy bar" },
            { icon: icon4, feature: "Giáp biển" },
            { icon: icon5, feature: "Phòng gia đình" },
            { icon: icon6, feature: "Trung tâm Spa & chăm sóc sức khoẻ" },
            { icon: icon7, feature: "Miễn phí kayaking" },
            { icon: icon8, feature: "Tắm nắng" },
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
            { icon: icon1, feature: "Có bể sục" },
            { icon: icon2, feature: "Lễ tân 24 giờ" },
            { icon: icon3, feature: "Quầy bar" },
            { icon: icon4, feature: "Giáp biển" },
            { icon: icon5, feature: "Phòng gia đình" },
            { icon: icon6, feature: "Trung tâm Spa & chăm sóc sức khoẻ" },
            { icon: icon7, feature: "Miễn phí kayaking" },
            { icon: icon8, feature: "Tắm nắng" },
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
            { icon: icon1, feature: "Có bể sục" },
            { icon: icon2, feature: "Lễ tân 24 giờ" },
            { icon: icon3, feature: "Quầy bar" },
            { icon: icon4, feature: "Giáp biển" },
            { icon: icon5, feature: "Phòng gia đình" },
            { icon: icon6, feature: "Trung tâm Spa & chăm sóc sức khoẻ" },
            { icon: icon7, feature: "Miễn phí kayaking" },
            { icon: icon8, feature: "Tắm nắng" },
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
      year: 2023,
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.022484029637!2d105.80947457438836!3d21.071764186301834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab917de76245%3A0xc5a28b326eab613a!2zROG7sSDDgW4gSGVyaXRhZ2UgV2VzdCBMYWtl!5e0!3m2!1svi!2s!4v1733889979170!5m2!1svi!2s",
      cabin: 23,
      material: "Kim Loại",
      trip: "Đảo Tuần Châu - Vịnh Hạ Long - Hang Luồn - Đảo Ti Tốp - Hang Sửng Sốt",
      executive: "Công ty Cổ phần tập đoàn HALO ECO",
      bage: "Lux Cruises, Lô 28 Cảng Quốc Tế Tuần Châu",
      overview: [
        {
          desc: " Du thuyền được thiết kế theo phong cách quốc tế với nội thất trang trí Đông Dương, lấy cảm hứng từ nét đẹp yêu kiều của người phụ nữ Á Đông",
        },
        {
          desc: "Du thuyền có  39 phòng cao cấp đều có ban công riêng và bồn tắm full view biển",
        },
        {
          desc: " Catherine là một khu nghỉ dưỡng thu nhỏ với hàng loạt dịch vụ giải trí cao cấp trên tàu: 02 nhà hàng, 02 phòng Spa riêng biệt cho nam và nữ, 02 phòng Karaoke sang trọng, Phòng thử rượu & cigars, Bể bơi vô cực 40m3, Phòng Poker (Texas hold’em), Sân golf mini…",
        },
        {
          desc: "Tại đây, du khách sẽ có khoảng thời gian vui vẻ để trải nghiệm các món ăn được lấy cảm hứng và có nguồn gốc địa phương, được chuẩn bị cẩn thận bởi các đầu bếp chuyên nghiệp của Catherine.",
        },
      ],
      infor: "Hạ thuỷ 2019 - Tàu vỏ Kim loại - 20 phòng",
      reviews: {
        average_rating: 4.91,
        ratings: {
          "1_star": 3,
          "2_star": 0,
          "3_star": 3,
          "4_star": 1,
          "5_star": 2,
        },
        perPage_reviews: 5,
        total_reviews: 9,
        comments: [
          {
            rating: 5,
            comment: "Dịch vụ rất tuyệt vời, mình rất hài lòng!",
            username: "NguyenVanA",
            dateReview: "2024-12-13",
          },
          {
            rating: 5,
            comment: "Sản phẩm chất lượng, giao hàng nhanh.",
            username: "LeMinhB",
            dateReview: "2024-12-12",
          },
          {
            rating: 4,
            comment: "Tạm ổn, nhưng vẫn cần cải thiện ở khâu đóng gói.",
            username: "TranThanhC",
            dateReview: "2024-12-11",
          },
          {
            rating: 5,
            comment: "Rất đáng tiền, sẽ quay lại ủng hộ!",
            username: "PhamThiD",
            dateReview: "2024-12-10",
          },
          {
            rating: 5,
            comment: "Mình cực kỳ hài lòng, nhân viên hỗ trợ rất nhiệt tình.",
            username: "HoangAnhE",
            dateReview: "2024-12-09",
          },
        ],
      },
      price: 20000000,
      star: 5.0,
      label: [
        { icon: icon1, feature: "Có bể sục" },
        { icon: icon2, feature: "Lễ tân 24 giờ" },
        { icon: icon3, feature: "Quầy bar" },
      ],
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
            { icon: icon1, feature: "Có bể sục" },
            { icon: icon2, feature: "Lễ tân 24 giờ" },
            { icon: icon3, feature: "Quầy bar" },
            { icon: icon4, feature: "Giáp biển" },
            { icon: icon5, feature: "Phòng gia đình" },
            { icon: icon6, feature: "Trung tâm Spa & chăm sóc sức khoẻ" },
            { icon: icon7, feature: "Miễn phí kayaking" },
            { icon: icon8, feature: "Tắm nắng" },
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
            { icon: icon1, feature: "Có bể sục" },
            { icon: icon2, feature: "Lễ tân 24 giờ" },
            { icon: icon3, feature: "Quầy bar" },
            { icon: icon4, feature: "Giáp biển" },
            { icon: icon5, feature: "Phòng gia đình" },
            { icon: icon6, feature: "Trung tâm Spa & chăm sóc sức khoẻ" },
            { icon: icon7, feature: "Miễn phí kayaking" },
            { icon: icon8, feature: "Tắm nắng" },
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
            { icon: icon1, feature: "Có bể sục" },
            { icon: icon2, feature: "Lễ tân 24 giờ" },
            { icon: icon3, feature: "Quầy bar" },
            { icon: icon4, feature: "Giáp biển" },
            { icon: icon5, feature: "Phòng gia đình" },
            { icon: icon6, feature: "Trung tâm Spa & chăm sóc sức khoẻ" },
            { icon: icon7, feature: "Miễn phí kayaking" },
            { icon: icon8, feature: "Tắm nắng" },
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
            { icon: icon1, feature: "Có bể sục" },
            { icon: icon2, feature: "Lễ tân 24 giờ" },
            { icon: icon3, feature: "Quầy bar" },
            { icon: icon4, feature: "Giáp biển" },
            { icon: icon5, feature: "Phòng gia đình" },
            { icon: icon6, feature: "Trung tâm Spa & chăm sóc sức khoẻ" },
            { icon: icon7, feature: "Miễn phí kayaking" },
            { icon: icon8, feature: "Tắm nắng" },
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
            { icon: icon1, feature: "Có bể sục" },
            { icon: icon2, feature: "Lễ tân 24 giờ" },
            { icon: icon3, feature: "Quầy bar" },
            { icon: icon4, feature: "Giáp biển" },
            { icon: icon5, feature: "Phòng gia đình" },
            { icon: icon6, feature: "Trung tâm Spa & chăm sóc sức khoẻ" },
            { icon: icon7, feature: "Miễn phí kayaking" },
            { icon: icon8, feature: "Tắm nắng" },
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
      year: 2023,
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.022484029637!2d105.80947457438836!3d21.071764186301834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab917de76245%3A0xc5a28b326eab613a!2zROG7sSDDgW4gSGVyaXRhZ2UgV2VzdCBMYWtl!5e0!3m2!1svi!2s!4v1733889979170!5m2!1svi!2s",
      cabin: 23,
      material: "Kim Loại",
      trip: "Đảo Tuần Châu - Vịnh Hạ Long - Hang Luồn - Đảo Ti Tốp - Hang Sửng Sốt",
      executive: "Công ty Cổ phần tập đoàn HALO ECO",
      bage: "Lux Cruises, Lô 28 Cảng Quốc Tế Tuần Châu",
      overview: [
        {
          desc: " Du thuyền được thiết kế theo phong cách quốc tế với nội thất trang trí Đông Dương, lấy cảm hứng từ nét đẹp yêu kiều của người phụ nữ Á Đông",
        },
        {
          desc: "Du thuyền có  39 phòng cao cấp đều có ban công riêng và bồn tắm full view biển",
        },
        {
          desc: " Catherine là một khu nghỉ dưỡng thu nhỏ với hàng loạt dịch vụ giải trí cao cấp trên tàu: 02 nhà hàng, 02 phòng Spa riêng biệt cho nam và nữ, 02 phòng Karaoke sang trọng, Phòng thử rượu & cigars, Bể bơi vô cực 40m3, Phòng Poker (Texas hold’em), Sân golf mini…",
        },
        {
          desc: "Tại đây, du khách sẽ có khoảng thời gian vui vẻ để trải nghiệm các món ăn được lấy cảm hứng và có nguồn gốc địa phương, được chuẩn bị cẩn thận bởi các đầu bếp chuyên nghiệp của Catherine.",
        },
      ],
      infor: "Hạ thuỷ 2019 - Tàu vỏ Kim loại - 20 phòng",
      reviews: {
        average_rating: 4.91,
        ratings: {
          "1_star": 3,
          "2_star": 0,
          "3_star": 3,
          "4_star": 1,
          "5_star": 2,
        },
        perPage_reviews: 5,
        total_reviews: 9,
        comments: [
          {
            rating: 5,
            comment: "Dịch vụ rất tuyệt vời, mình rất hài lòng!",
            username: "NguyenVanA",
            dateReview: "2024-12-13",
          },
          {
            rating: 5,
            comment: "Sản phẩm chất lượng, giao hàng nhanh.",
            username: "LeMinhB",
            dateReview: "2024-12-12",
          },
          {
            rating: 4,
            comment: "Tạm ổn, nhưng vẫn cần cải thiện ở khâu đóng gói.",
            username: "TranThanhC",
            dateReview: "2024-12-11",
          },
          {
            rating: 5,
            comment: "Rất đáng tiền, sẽ quay lại ủng hộ!",
            username: "PhamThiD",
            dateReview: "2024-12-10",
          },
          {
            rating: 5,
            comment: "Mình cực kỳ hài lòng, nhân viên hỗ trợ rất nhiệt tình.",
            username: "HoangAnhE",
            dateReview: "2024-12-09",
          },
        ],
      },
      price: 10000000,
      star: 5.0,
      label: [
        { icon: icon1, feature: "Có bể sục" },
        { icon: icon2, feature: "Lễ tân 24 giờ" },
        { icon: icon3, feature: "Quầy bar" },
        { icon: icon4, feature: "Giáp biển" },
        { icon: icon5, feature: "Phòng gia đình" },
        { icon: icon6, feature: "Trung tâm Spa & chăm sóc sức khoẻ" },
        { icon: icon7, feature: "Miễn phí kayaking" },
        { icon: icon8, feature: "Tắm nắng" },
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
            { icon: icon1, feature: "Có bể sục" },
            { icon: icon2, feature: "Lễ tân 24 giờ" },
            { icon: icon3, feature: "Quầy bar" },
            { icon: icon4, feature: "Giáp biển" },
            { icon: icon5, feature: "Phòng gia đình" },
            { icon: icon6, feature: "Trung tâm Spa & chăm sóc sức khoẻ" },
            { icon: icon7, feature: "Miễn phí kayaking" },
            { icon: icon8, feature: "Tắm nắng" },
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
            { icon: icon1, feature: "Có bể sục" },
            { icon: icon2, feature: "Lễ tân 24 giờ" },
            { icon: icon3, feature: "Quầy bar" },
            { icon: icon4, feature: "Giáp biển" },
            { icon: icon5, feature: "Phòng gia đình" },
            { icon: icon6, feature: "Trung tâm Spa & chăm sóc sức khoẻ" },
            { icon: icon7, feature: "Miễn phí kayaking" },
            { icon: icon8, feature: "Tắm nắng" },
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
            { icon: icon1, feature: "Có bể sục" },
            { icon: icon2, feature: "Lễ tân 24 giờ" },
            { icon: icon3, feature: "Quầy bar" },
            { icon: icon4, feature: "Giáp biển" },
            { icon: icon5, feature: "Phòng gia đình" },
            { icon: icon6, feature: "Trung tâm Spa & chăm sóc sức khoẻ" },
            { icon: icon7, feature: "Miễn phí kayaking" },
            { icon: icon8, feature: "Tắm nắng" },
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
            { icon: icon1, feature: "Có bể sục" },
            { icon: icon2, feature: "Lễ tân 24 giờ" },
            { icon: icon3, feature: "Quầy bar" },
            { icon: icon4, feature: "Giáp biển" },
            { icon: icon5, feature: "Phòng gia đình" },
            { icon: icon6, feature: "Trung tâm Spa & chăm sóc sức khoẻ" },
            { icon: icon7, feature: "Miễn phí kayaking" },
            { icon: icon8, feature: "Tắm nắng" },
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
            { icon: icon1, feature: "Có bể sục" },
            { icon: icon2, feature: "Lễ tân 24 giờ" },
            { icon: icon3, feature: "Quầy bar" },
            { icon: icon4, feature: "Giáp biển" },
            { icon: icon5, feature: "Phòng gia đình" },
            { icon: icon6, feature: "Trung tâm Spa & chăm sóc sức khoẻ" },
            { icon: icon7, feature: "Miễn phí kayaking" },
            { icon: icon8, feature: "Tắm nắng" },
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
