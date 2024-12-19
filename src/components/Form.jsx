import React, { useState } from "react";
import { FaXmark, FaCalendarDay, FaCaretDown, FaAngleDown, FaMinus, FaPlus, FaArrowRight } from "react-icons/fa6";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./Form.module.css";
import { useForm } from "react-hook-form";
import vi from "date-fns/locale/vi"; // Import locale tiếng Việt
import { registerLocale } from "react-datepicker";
import Button from "./Button";
import CardTypeRoom from "./CardTypeRoom";

// Đăng ký locale tiếng Việt
registerLocale("vi", vi);
function Form({ toggleForm, showForm, dataCard, totalBill, resetCard }) {
  console.log(dataCard.length);

  // const [startDate, setStartDate] = useState(new Date());
  // const [adult, setAdult] = useState(1);
  // const [numChildren, setNumChildrem] = useState(0);
  const [showNumber, setShowNumber] = useState(false);
  const toggleNumber = () => {
    setShowNumber((prev) => !prev);
  };

  const {
    register,
    handleSubmit,
    setValue,
    getValue,
    reset,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: { startDate: new Date(), adult: 1, numChildren: 0 },
    // , mode: "onBlur"
  });

  const startDate = watch("startDate");
  const adult = watch("adult");
  const numChildren = watch("numChildren");

  // Hàm xử lý submit
  const onSubmit = (formData) => {
    // Kết hợp dữ liệu từ form và dataCard
    const finalData = {
      ...formData,
      dataCard: totalBill > 0 ? dataCard : "", // Thêm dữ liệu dataCard vào
      totalBill, // Có thể gửi tổng hóa đơn nếu cần
    };

    console.log("Dữ liệu gửi đi:", finalData);

    // Thông báo thành công hoặc gửi dữ liệu đến backend
    alert("Form Submitted : " + JSON.stringify(finalData));
    reset();
    resetCard();
    toggleForm();
  };

  const handleAdultChange = (increment) => {
    setValue("adult", Math.max(1, adult + increment)); // Người lớn không được nhỏ hơn 1
  };
  const handleChildrenChange = (increment) => {
    setValue("numChildren", Math.max(0, numChildren + increment)); // Trẻ em không được nhỏ hơn 0
  };
  return (
    <div>
      <div className={`${styles.modalForm} ${showForm ? styles.show : ""}`}>
        <div className={styles.modalContentForm}>
          <div>
            <div className={styles.modelBtn} onClick={() => toggleForm()}>
              <FaXmark />
            </div>
            <form action="#" onSubmit={handleSubmit(onSubmit)}>
              <div className={styles.formBook}>
                <h6>Đặt Du Thuyền</h6>
                <div className={styles.divider}></div>
                <div className={styles.detailList}>
                  {dataCard &&
                    dataCard?.map((item, index) => (item.quantity > 0 ? <CardTypeRoom item={item} key={index} /> : ""))}
                </div>
                <div className={styles.contentForm}>
                  <div className={styles.groupInput}>
                    <div className="datePickerMixi">
                      <DatePicker
                        locale="vi" // Sử dụng locale tiếng Việt
                        showWeekDays // Hiển thị các ngày trong tuần
                        selected={startDate}
                        onChange={(date) => setValue("startDate", date)}
                        dateFormat="dd/MM/yyyy"
                        minDate={new Date()}
                        customInput={
                          <label className={styles.customInput}>
                            <FaCalendarDay className={styles.icon} />
                            <input
                              type="text"
                              value={startDate ? startDate.toLocaleDateString("vi-VN") : ""}
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

                    <div className={styles.roomPickerMixi}>
                      <div onClick={toggleNumber}>
                        <label htmlFor="number" className={styles.number}>
                          <input
                            id="number"
                            value={`${adult} Người Lớn - ${numChildren} - Trẻ em `}
                            type="button"
                            className={styles.price_title}
                          />
                          {/* <label htmlFor="number">Số lượng</label> */}
                          <FaAngleDown />
                        </label>
                      </div>

                      <div className={`${styles.roomDropdown} ${showNumber ? styles.showNumber : ""}`}>
                        <div className={styles.content}>
                          <div className={styles.item}>
                            <div className={styles.value}>{adult}</div>
                            <div className={styles.desc}>Người Lớn</div>

                            <div className={styles.roomPickerBtn}>
                              <div
                                className={`${styles.itemBtn} ${styles.borRight}`}
                                onClick={(e) => {
                                  e.preventDefault();
                                  handleAdultChange(-1);
                                }}
                              >
                                <FaMinus />
                              </div>
                              <div
                                className={styles.itemBtn}
                                onClick={(e) => {
                                  e.preventDefault();
                                  handleAdultChange(1);
                                }}
                              >
                                <FaPlus />
                              </div>
                            </div>
                          </div>
                          <div className={styles.item}>
                            <div className={styles.value}>{numChildren}</div>
                            <div className={styles.desc}>Trẻ em</div>

                            <div className={styles.roomPickerBtn}>
                              <div
                                className={`${styles.itemBtn} ${styles.borRight}`}
                                onClick={(e) => {
                                  e.preventDefault();
                                  handleChildrenChange(-1);
                                }}
                              >
                                <FaMinus />
                              </div>
                              <div
                                className={styles.itemBtn}
                                onClick={(e) => {
                                  e.preventDefault();
                                  handleChildrenChange(1);
                                }}
                              >
                                <FaPlus />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.applyBtn} onClick={toggleNumber}>
                          <Button paddingType="paddingNormal" colorType="blue" btnDefaults={true}>
                            <div className="sm">Áp Dụng</div>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div>
                      <label htmlFor="full_name" className={styles.inputForm}>
                        <input
                          autoComplete="nope"
                          type="text"
                          id="full_name"
                          name="full_name"
                          placeholder="Nhập họ và tên"
                          {...register("full_name", {
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
                        <label htmlFor="full_name" className={styles.inputRequired}>
                          Họ và tên
                        </label>
                      </label>
                      {/* Hiển thị lỗi */}
                      {errors.full_name && <div className={styles.error}>{errors.full_name.message}</div>}
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

                  <div>
                    <div>
                      <label htmlFor="addInfo" className={styles.inputForm}>
                        <textarea
                          autoComplete="nope"
                          type="text"
                          id="addInfo"
                          name="addInfo"
                          placeholder="Nhập yêu cầu của bạn"
                          {...register("addInfo", {
                            required: "Nhập yêu cầu của bạn", // Thông báo lỗi
                          })}
                        ></textarea>
                        <label htmlFor="addInfo" className={styles.inputRequired}>
                          Yêu cầu của bạn
                        </label>
                      </label>
                      {/* Hiển thị lỗi */}
                      {errors.addInfo && <div className={styles.error}>{errors.addInfo.message}</div>}
                    </div>
                  </div>
                </div>
                <div className={styles.footerForm}>
                  <div className={styles.totalMoney}>
                    <div className={`sm ${styles.totalTitle}`}>Tổng tiền</div>
                    <div className={`${styles.price}`}>
                      {new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" })
                        .format(totalBill)
                        .replace(/\./g, ",")}
                    </div>
                  </div>
                  <div className={styles.buttonList}>
                    <Button paddingType="paddingBig" colorType="normal">
                      <div className="md">Đăng Ký Tư Vấn</div>
                    </Button>
                    <Button paddingType="paddingBig" colorType="blue" isSumit={true}>
                      <div className="md">Đặt Ngay</div>
                      <FaArrowRight />
                    </Button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
