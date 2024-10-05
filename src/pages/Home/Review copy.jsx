import React, { useState } from "react";
import style from "./Review.module.css";
import imgP from "../../assets/image/home/heading-border.webp";
import imgQuote from "../../assets/image/quote/quote.svg";
import Button from "../../components/Button";
const testimonials = [
  {
    located: "Du thuyền Stellar of the Seas",
    name: "Chị Thu Hà",
    content: "Dịch vụ rất tuyệt vời. Tôi cảm thấy rất hài lòng với chuyến đi này. Nhân viên chu đáo và tận tâm.",
  },
  {
    name: "Anh Khánh",
    content:
      "Tàu đẹp, sang trọng, rất ổn! Tối sinh nhật vợ anh thì tàu có tặng 1 bánh sinh nhật nhỏ. Nói chung, cả gia đình anh rất hài lòng về chuyến đi cũng như dịch vụ tư vấn của bên em.",
  },
  // Các testimonial khác
];

function Review() {
  const [currentTestimonial, setCurrentTestimonial] = useState(testimonials[0]);
  return (
    <div className={style.reviewSection}>
      <div className={`container ${style.reviewBox}`}>
        <div className={style.reviewHeader}>
          <div className={style.reviewHeader_title}>
            <h4>
              Đánh giá từ những
              <br />
              người đã trải nghiệm
            </h4>
            <div>
              <img src={imgP} alt="''" />
            </div>
          </div>
          <div className={`lg ${style.reviewHeader_desc}`}>
            Khách hàng chia sẻ về những kỷ niệm tuyệt vời trên chuyến du lịch với chúng tôi.
          </div>
        </div>
        <div className={style.reviewQuote}>
          <div>
            <img src={imgQuote} alt="" />
          </div>
          <div className={style.reviewQuote_body}>
            <div className={style.reviewQuote_content}>
              <p className={style.reviewQuote_contentDesc}>Du thuyền Heritage Bình Chuẩn</p>
              <p className="lg">
                Anh chọn ngày đi tàu trùng với sinh nhật vợ anh. Muốn là món quà tặng vợ. Với lại, vợ anh thích chụp ảnh nữa.
                Anh thấy bạn bè bảo đặt tàu này hơi khó vì rất hot, hay kín phòng. May quá bên em lại có phòng tàu này.
              </p>
            </div>
            <p className={style.reviewName}>Chị Linh - Anh Dũng</p>
          </div>
        </div>
        <div className={style.reviewList}>
          <Button paddingType="paddingSmall" colorType="pink">
            <div className="md">Chị Thu Hà</div>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Review;
