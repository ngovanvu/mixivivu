import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick/lib/slider";
import styles from "./SliderModal.module.css";
import Image1 from "../assets/image/card/1.webp";
import Image2 from "../assets/image/card/2.webp";
import Image3 from "../assets/image/card/3.webp";
import Image4 from "../assets/image/card/4.webp";
import Image5 from "../assets/image/card/5.webp";
import Image6 from "../assets/image/card/6.webp";

function SliderModal({ detailImage }) {
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
  };

  // Cấu hình slider phụ (thumbnail)
  const settingsThumbs = {
    asNavFor: nav1,
    ref: slider2,
    slidesToShow: 5,
    swipeToSlide: true,
    focusOnSelect: true,
    centerMode: true,
    arrows: false,
    centerPadding: "0px",
  };
  return (
    <>
      <div className={`${styles.slidercontainer} `}>
        {/* First Slider */}
        <Slider className="first-slider" {...settingsMain}>
          {detailImage.map((data, index) => (
            <div className={styles.wapperImage} key={index}>
              <div className={styles.mainSlide}>
                <img src={data.image} alt={data.title} className={styles.mainImage} loading="lazy" />
              </div>
            </div>
          ))}
        </Slider>

        {/* Second Slider */}
        <Slider className={styles.secondSlider} {...settingsThumbs}>
          {detailImage.map((data, index) => (
            <div className={`${styles.thumbnailSlide} `} key={index}>
              <div className={`${styles.thumbnailContent} thumnailActive`}>
                <img loading="lazy" src={data.image} alt={`Thumbnail ${index + 1}`} className={styles.thumbnailImage} />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}

export default SliderModal;
