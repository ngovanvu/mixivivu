import React from "react";
import styles from "./ContactPage.module.css";
import Iframe from "react-iframe";
import { useForm } from "react-hook-form";
import Button from "../../components/Button";
import { FaArrowRight } from "react-icons/fa6";
import Partner from "../Home/Partner";

function ContactPage() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // Hàm xử lý submit
  const onSubmit = (formData) => {
    // console.log("Dữ liệu gửi đi:", formData);

    // Thông báo thành công hoặc gửi dữ liệu đến backend
    alert("Form Submitted: " + JSON.stringify(formData));
    reset();
    // toggleForm();
  };

  return (
    <div>
      <div className={styles.ContactPage}>
        <Iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.4807552086777!2d105.81419397438677!3d21.01344138830619!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab05255ac095%3A0xac1b475116786bdb!2sMixiVivu!5e0!3m2!1svi!2s!4v1735092879236!5m2!1svi!2s"
          height="720"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          width="100%"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade" // Chú ý camelCase ở đây
          className={styles.located}
        />
        <div className={`${styles.cardContact} card`}>
          <div className={styles.title}>
            <h4>Khám phá Hạ Long thông qua Du thuyền</h4>
            <p className="lg">
              Khám phá Hạ Long qua Du thuyền cùng Mixivivu - Hãy liên hệ ngay để trải nghiệm hành trình tuyệt vời!
            </p>
          </div>

          <div className={styles.formContact}>
            <form action="#" onSubmit={handleSubmit(onSubmit)}>
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
                      Nội dung
                    </label>
                  </label>
                  {/* Hiển thị lỗi */}
                  {errors.addInfo && <div className={styles.error}>{errors.addInfo.message}</div>}
                </div>
              </div>
              <div className={styles.footerForm}>
                <div className={styles.buttonList}>
                  <Button paddingType="paddingBig" colorType="blue" btnDefaults={true} isSumit={true}>
                    <div className="md">Đặt Ngay</div>
                    <FaArrowRight />
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className={styles.partnerContact}>
        <Partner />
      </div>
    </div>
  );
}

export default ContactPage;
