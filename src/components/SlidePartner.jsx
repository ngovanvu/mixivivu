import React from "react";
import Slider from "react-slick/lib/slider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import style from "./SlidePartner.module.css";

function SlidePartner({ logoPartners }) {
  let quantity = logoPartners.length;

  if (quantity >= 5) {
    quantity = 5;
  } else if (quantity === 4) {
    quantity = 4;
  } else if (quantity === 3) {
    quantity = 3;
  } else if (quantity === 2) {
    quantity = 2;
  } else {
    quantity = 1;
  }
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6, // Mặc định cho màn hình lớn
    swipeToSlide: true,
    focusOnSelect: true,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024, // Cho tablet/màn hình di động lớn
        settings: {
          dots: false,
          slidesToShow: Math.min(quantity, 4), // Dùng min để đảm bảo không vượt quá số logo có sẵn
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 767, // Cho màn hình di động
        settings: {
          dots: false,
          slidesToShow: Math.max(1, quantity - 2), // Đảm bảo không hiển thị ít hơn 1 slide
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 590, // Cho màn hình nhỏ nhất
        settings: {
          slidesToShow: 1, // Luôn hiển thị 1 slide trên màn hình rất nhỏ
        },
      },
    ],
  };
  return (
    <div>
      <Slider {...settings}>
        {logoPartners &&
          logoPartners.map((partner, index) => (
            <div key={index} className={style.wrapper}>
              <div className={`slide ${style.slideImage}`}>
                <img src={partner.image} alt="" className={style.image} />
              </div>
            </div>
          ))}
      </Slider>
    </div>
  );
}

export default SlidePartner;
