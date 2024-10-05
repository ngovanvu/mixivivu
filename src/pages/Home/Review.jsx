import React, { useEffect, useState } from "react";
import style from "./Review.module.css";
import imgP from "../../assets/image/home/heading-border.webp";
import imgQuote from "../../assets/image/quote/quote.svg";
import Button from "../../components/Button";
const testimonials = [
  {
    located: "Du thuyền Stellar of the Seas",
    name: "Chị Thu Hà 1",
    content: "Dịch vụ rất tuyệt vời. Tôi cảm thấy rất hài lòng với chuyến đi này. Nhân viên chu đáo và tận tâm.",
  },
  {
    name: "Anh Khánh 2",
    content:
      "Tàu đẹp, sang trọng, rất ổn! Tối sinh nhật vợ anh thì tàu có tặng 1 bánh sinh nhật nhỏ. Nói chung, cả gia đình anh rất hài lòng về chuyến đi cũng như dịch vụ tư vấn của bên em.",
  },
  {
    located: "Du thuyền Stellar of the Seas",
    name: "Chị Thu Hà 3",
    content: "Dịch vụ rất tuyệt vời. Tôi cảm thấy rất hài lòng với chuyến đi này. Nhân viên chu đáo và tận tâm.",
  },
  {
    name: "Anh Khánh 4",
    content:
      "Tàu đẹp, sang trọng, rất ổn! Tối sinh nhật vợ anh thì tàu có tặng 1 bánh sinh nhật nhỏ. Nói chung, cả gia đình anh rất hài lòng về chuyến đi cũng như dịch vụ tư vấn của bên em.",
  },
  {
    located: "Du thuyền Stellar of the Seas",
    name: "Chị Thu Hà 5",
    content: "Dịch vụ rất tuyệt vời. Tôi cảm thấy rất hài lòng với chuyến đi này. Nhân viên chu đáo và tận tâm.",
  },
  {
    name: "Anh Khánh 6",
    content:
      "Tàu đẹp, sang trọng, rất ổn! Tối sinh nhật vợ anh thì tàu có tặng 1 bánh sinh nhật nhỏ. Nói chung, cả gia đình anh rất hài lòng về chuyến đi cũng như dịch vụ tư vấn của bên em.",
  },
  {
    located: "Du thuyền Stellar of the Seas",
    name: "Chị Thu Hà 7",
    content: "Dịch vụ rất tuyệt vời. Tôi cảm thấy rất hài lòng với chuyến đi này. Nhân viên chu đáo và tận tâm.",
  },
  {
    name: "Anh Khánh 8",
    content:
      "Tàu đẹp, sang trọng, rất ổn! Tối sinh nhật vợ anh thì tàu có tặng 1 bánh sinh nhật nhỏ. Nói chung, cả gia đình anh rất hài lòng về chuyến đi cũng như dịch vụ tư vấn của bên em.",
  },
  // Các testimonial khác
];

function Review() {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const currentTestimonial = testimonials[currentTestimonialIndex];
  console.log(currentTestimonial);
  useEffect(() => {
    const interval = setInterval(() => {
      // Tăng chỉ số testimonial, quay về 0 nếu vượt quá độ dài mảng
      setCurrentTestimonialIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
    }, 5000); // Chuyển testimonial sau mỗi 5 giây

    // Dọn dẹp interval khi component unmount
    return () => clearInterval(interval);
  }, []);
  const handleButtonClick = (index) => {
    setCurrentTestimonialIndex(index);
  };
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
              {currentTestimonial?.located && <p className={style.reviewQuote_contentDesc}>Du thuyền Heritage Bình Chuẩn</p>}

              <p className="lg">{currentTestimonial?.content}</p>
            </div>
            <p className={style.reviewName}>{currentTestimonial?.name}</p>
          </div>
        </div>

        <div className={style.reviewList}>
          {testimonials.map((testimonial, index) => (
            <Button
              key={testimonial.name}
              paddingType="paddingSmall"
              colorType="pink"
              onClick={() => handleButtonClick(index)}
              index={index}
              active="true"
              currentTestimonialIndex={currentTestimonialIndex}
            >
              <div className="md">{testimonial.name}</div>
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Review;
