import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import styles from "./SliderDetail.module.css";
import Image1 from "../assets/image/card/1.webp";
import Image2 from "../assets/image/card/2.webp";
import Image3 from "../assets/image/card/3.webp";
import Image4 from "../assets/image/card/4.webp";
import Image5 from "../assets/image/card/5.webp";
import Image6 from "../assets/image/card/6.webp";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const images = [
  { title: "Tìm du thuyền", path: "findboat", image: Image1 },
  { title: "Tìm vé máy bay", path: "findplane", image: Image2 },
  { title: "Doanh nghiệp", path: "introduce", image: Image3 },
  { title: "Blog", path: "blog", image: Image4 },
  { title: "Blog", path: "blog", image: Image5 },
  { title: "Blog", path: "blog", image: Image6 },
];

function Arrow({ className, style, onClick, position, icon }) {
  return (
    <div className={className} onClick={onClick}>
      {position === "left" ? <FaArrowLeft /> : <FaArrowRight />}
    </div>
  );
}

function SliderDetail() {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const slider1 = useRef(null);
  const slider2 = useRef(null);

  useEffect(() => {
    setNav1(slider1.current);
    setNav2(slider2.current);
  }, []);

  // Cấu hình slider chính (ảnh lớn)
  const settingsMain = {
    asNavFor: nav2,
    ref: slider1,
    slidesToShow: 1,
    infinite: true,
    centerMode: true,
    centerPadding: "170px",
    speed: 500,
    arrows: true,
    prevArrow: <Arrow icon={<FaArrowLeft />} position="left" />,
    nextArrow: <Arrow icon={<FaArrowRight />} position="right" />,
    focusOnSelect: true,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
          centerPadding: "0",
        },
      },
    ],
  };

  // Cấu hình slider phụ (thumbnail)
  const settingsThumbs = {
    asNavFor: nav1,
    ref: slider2,
    slidesToShow: 5,
    swipeToSlide: true,
    focusOnSelect: true,
    infinite: true,
    arrows: false,
    centerMode: true,
    centerPadding: "0px",
  };

  return (
    <>
      <div className={styles.sliderContainer}>
        {/* Slider chính */}
        <div className={`${styles.mainSliderWrapper} sliderGlobal`}>
          <Slider {...settingsMain}>
            {images.map((data, index) => (
              <div key={index} className={styles.mainSlide}>
                <img src={data.image} alt={data.title} className={styles.mainImage} />
              </div>
            ))}
          </Slider>

          {/* Slider phụ (thumbnails) */}
          <div className={`${styles.thumbnailWrapper} thumbnailWrapperGolobal`}>
            <Slider {...settingsThumbs}>
              {images.map((data, index) => (
                <div className={`${styles.thumbnailSlide} `} key={index}>
                  <div className={`${styles.thumbnailContent} thumnailActive`}>
                    <img src={data.image} alt={`Thumbnail ${index + 1}`} className={styles.thumbnailImage} />
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
}

export default SliderDetail;
