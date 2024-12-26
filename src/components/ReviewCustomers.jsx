import styles from "./ReviewCustomers.module.css";
import React, { useEffect, useState } from "react";
import imgP from "../assets/image/home/heading-border.webp";
import Button from "./Button";
import { FaArrowRight, FaCalendarDay, FaCaretDown, FaMagnifyingGlass, FaRegStar, FaStar } from "react-icons/fa6";
import { Element, Link } from "react-scroll";
import StarRating from "./StarRating";
import Pagination from "./Pagination";
import { useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import { toast } from "react-toastify";

function Review({ data }) {
  const dataReview = data.reviews;
  const [perPage, setPerPage] = useState(dataReview.perPage_reviews);
  const [page, setPage] = useState(1);
  const [dataFinal, setDatatFinal] = useState([]);
  const [rating, setRating] = useState(0);
  const [hoveredStar, setHoveredStar] = useState(0);

  const getPercentage = (count) => {
    return dataReview.total_reviews > 0 ? (count / dataReview.total_reviews) * 100 : 0;
  };

  useEffect(() => {
    const startIndex = (page - 1) * perPage;
    const paginatedData = dataReview.comments.slice(startIndex, startIndex + perPage);
    setDatatFinal(paginatedData);
  }, [page, perPage, dataReview.comments]);
  useEffect(() => {
    setPage(1);
  }, [perPage]);

  const {
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: { dateReview: new Date() },
  });
  const dateReview = watch("dateReview");

  // Hàm xử lý submit
  const onSubmit = (formData) => {
    const finalData = {
      ...formData,
      dateReview: dateReview.toLocaleDateString("sv-SE", { timeZone: "Asia/Ho_Chi_Minh" }),
      rating, // Thêm dữ liệu đánh giá sao
    };

    //add thêm dữ liệu mới submit vào comments
    const updateComments = [finalData, ...dataReview.comments];

    // cập nhật số lượng sao cho ratings
    const updateRatings = { ...dataReview.ratings };
    // console.log("updateRatings", updateRatings[`${rating}_star`]); // lấy ra value của ratings theo key
    updateRatings[`${rating}_star`] += 1; // tăng thêm 1

    const updatedTotalReviews = dataReview.total_reviews + 1;

    // console.log(updateRatings);
    // ở đây do số sao sẽ bằng = số đánh giá *  số sao =>  khi ta tính reduce => sum + (đánh giá * số sao)
    const updateTotalStar = Object.entries(updateRatings).reduce((sum, [key, value]) => sum + parseInt(key) * value, 0);
    // console.log("updateTotalStar", updateTotalStar);

    // tính trung bình điểm đánh gí
    const updatedAverageRating = updateTotalStar / updatedTotalReviews;
    // console.log(updatedAverageRating);

    dataReview.comments = updateComments;
    dataReview.ratings = updateRatings;
    dataReview.total_reviews = updatedTotalReviews;
    dataReview.average_rating = parseFloat(updatedAverageRating.toFixed(2));

    // console.log("Dữ liệu gửi đi:", finalData);
    // console.log("Cập nhật dữ liệu ratings:", dataReview);
    toast.success("Thêm đánh giá thành công");

    // Reset form
    reset();
    setRating(0);
    alert("Form Submitted: " + JSON.stringify(finalData));
  };

  return (
    <div>
      <div className={styles.reviewHeader}>
        <div className={styles.header}>
          <div className={styles.title}>
            <h4>Đánh giá ({dataReview.total_reviews})</h4>
            <div>
              <img src={imgP} alt="''" />
            </div>
          </div>
        </div>
        <div className={styles.reviewBtn}>
          <div className={styles.searchInput}>
            <label className={styles.inputGroup}>
              <FaMagnifyingGlass />
              <input placeholder="Tìm đánh giá" />
            </label>
          </div>
          <Link
            className="nav-link"
            to="formReview"
            smooth={true}
            duration={50}
            spy={true}
            offset={-200}
            activeClass={styles.active}
          >
            <Button paddingType="paddingNormal" colorType="blue">
              <FaRegStar />
              <div className="sm">Gửi Đánh Giá</div>
            </Button>
          </Link>
        </div>
      </div>
      <div className={styles.ratingList}>
        <div className={`${styles.staticCard} ${styles.card}`}>
          <div className={`${styles.point} `}>
            <h4>{dataReview.average_rating}</h4>
            <FaRegStar />
          </div>
          <div className={styles.content}>
            {Object.entries(dataReview.ratings).map(([key, value]) => (
              <div className={styles.item}>
                <span className="md">{key.replace("_star", " sao")}</span>
                <div className={styles.progressBar}>
                  <div style={{ width: `${getPercentage(value)}%` }} className={styles.progress}></div>
                </div>
                <span className={styles.numberReview}>{value} đánh giá</span>
              </div>
            ))}
          </div>
        </div>
        {dataFinal.map((comment, index) => (
          <div className={`${styles.rateCard} ${styles.card}`} key={index}>
            <div>
              <StarRating rating={comment.rating} />
            </div>
            <span className="md">{comment.username}</span>
            <p className="sm">{comment.comment}</p>
            <div className={styles.dateReview}>
              <p className="sm">{comment.dateReview}</p>
            </div>
          </div>
        ))}
        <div className={styles.pagination}>
          <Pagination
            filteredData={dataReview.comments}
            perPage={perPage}
            page={page}
            setPage={setPage}
            setPerPage={setPerPage}
          />
        </div>
      </div>

      <Element name="formReview">
        <form action="#" onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.form}>
            <div className={styles.formBook}>
              <div className={styles.voteStar}>
                <span className="sm">Chất lượng</span>
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    onMouseEnter={() => setHoveredStar(star)} // Khi di chuột vào
                    onMouseLeave={() => setHoveredStar(0)} // Khi rời chuột ra
                    onClick={() => setRating(star)} // Chọn sao
                    style={{
                      cursor: "pointer",
                      color: star <= (hoveredStar || rating) ? "orange" : "gray", // Hover hoặc đã chọn
                      fontSize: "1.5rem",
                      transition: "color 0.2s ease", // Thêm chuyển động mượt
                    }}
                  >
                    {star <= (hoveredStar || rating) ? <FaRegStar /> : <FaRegStar />}
                  </span>
                ))}
              </div>

              <div>
                <div>
                  <label htmlFor="username" className={styles.inputForm}>
                    <input
                      autoComplete="nope"
                      type="text"
                      id="username"
                      name="username"
                      placeholder="Nhập họ và tên"
                      {...register("username", {
                        required: "Bạn phải nhập họ và tên", // Thông báo lỗi
                        minLength: {
                          value: 2,
                          message: "Họ và tên phải có ít nhất 2 ký tự",
                        },
                        maxLength: {
                          value: 50,
                          message: "Họ và tên không được vượt quá 50 ký tự",
                        },
                      })}
                    />
                    <label htmlFor="username" className={styles.inputRequired}>
                      Họ và tên
                    </label>
                  </label>
                  {/* Hiển thị lỗi */}
                  {errors.username && <div className={styles.error}>{errors.username.message}</div>}
                </div>
              </div>

              <div>
                <div>
                  <label htmlFor="phone" className={styles.inputForm}>
                    <input
                      autoComplete="nope"
                      type="text"
                      id="phone"
                      name="phone"
                      placeholder="Nhập số điện thoại"
                      {...register("phone", {
                        required: "Bạn phải nhập số điện thoại", // Thông báo lỗi
                        minLength: {
                          value: 10,
                          message: "Họ và tên phải có ít nhất 10 số",
                        },
                        maxLength: {
                          value: 11,
                          message: "Họ và tên không được vượt quá 11 số",
                        },
                        pattern: {
                          value: /(((\+|)84)|0)(3|5|7|8|9)+([0-9]{8})/,
                          message: "Số điện thoại không hợp lệ vui lòng kiểm tra lại!",
                        },
                      })}
                    />
                    <label htmlFor="phone" className={styles.inputRequired}>
                      Số Điện Thoại
                    </label>
                  </label>
                  {/* Hiển thị lỗi */}
                  {errors.phone && <div className={styles.error}>{errors.phone.message}</div>}
                </div>
              </div>

              <div>
                <div>
                  <label htmlFor="email" className={styles.inputForm}>
                    <input
                      autoComplete="nope"
                      type="text"
                      id="email"
                      name="email"
                      placeholder="Nhập email"
                      {...register("email", {
                        required: "Bạn phải nhập email", // Thông báo lỗi
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                          message: "Email không hợp lệ vui lòng kiểm tra lại!",
                        },
                      })}
                    />
                    <label htmlFor="email" className={styles.inputRequired}>
                      Email
                    </label>
                  </label>
                  {/* Hiển thị lỗi */}
                  {errors.email && <div className={styles.error}>{errors.email.message}</div>}
                </div>
              </div>

              <div className="datePickerMixi">
                <DatePicker
                  locale="vi" // Sử dụng locale tiếng Việt
                  showWeekDays // Hiển thị các ngày trong tuần
                  selected={dateReview}
                  onChange={(dateReview) => setValue("dateReview", dateReview)}
                  dateFormat="dd/MM/yyyy"
                  maxDate={new Date()}
                  customInput={
                    <label className={styles.customInput}>
                      <FaCalendarDay className={styles.icon} />
                      <input
                        type="text"
                        value={dateReview ? dateReview.toLocaleDateString("vi-VN") : ""}
                        className={styles.input}
                        readOnly
                      />
                      <FaCaretDown className={styles.icon} />
                      <label className="sm">Ngày nhận phòng</label>
                    </label>
                  }
                  className={styles.datePicker}
                />
              </div>
            </div>
            <div>
              <div>
                <label htmlFor="comment" className={styles.inputForm}>
                  <textarea
                    autoComplete="nope"
                    type="text"
                    id="comment"
                    name="comment"
                    placeholder="Nhập đánh giá của bạn"
                    {...register("comment", {
                      required: "Nhập đánh giá của bạn", // Thông báo lỗi
                    })}
                  ></textarea>
                  <label htmlFor="comment" className={styles.inputRequired}>
                    Đánh giá của bạn
                  </label>
                </label>
                {/* Hiển thị lỗi */}
                {errors.comment && <div className={styles.error}>{errors.comment.message}</div>}
              </div>
            </div>
          </div>
          <div className={styles.footerForm}>
            <Button paddingType="paddingBig" colorType="blue" isSumit={true}>
              <div className="md">Gửi</div>
              <FaArrowRight />
            </Button>
          </div>
        </form>
      </Element>
    </div>
  );
}

export default Review;
