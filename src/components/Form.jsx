import React, { useState } from "react";
import { FaXmark, FaCalendarDay, FaCaretDown } from "react-icons/fa6";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./Form.module.css";
import vi from "date-fns/locale/vi"; // Import locale tiếng Việt
import { registerLocale } from "react-datepicker";

// Đăng ký locale tiếng Việt
registerLocale("vi", vi);
function Form() {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div>
      <div className={`${styles.modalDark}`}>
        <div className={styles.modalContent}>
          <div>
            <div className={styles.modelBtn}>
              <FaXmark />
            </div>
            <form action="#">
              <div className={styles.formBook}>
                <h6>Đặt Du Thuyền</h6>
                <div className={styles.divider}></div>
                <div className={styles.contentForm}>
                  <div className={styles.groupInput}>
                    <div className="datePickerMixi">
                      <DatePicker
                        locale="vi" // Sử dụng locale tiếng Việt
                        showWeekDays // Hiển thị các ngày trong tuần
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        dateFormat="dd/MM/yyyy"
                        minDate={new Date()}
                        customInput={
                          <lable className={styles.customInput}>
                            <FaCalendarDay className={styles.icon} />
                            <input
                              type="text"
                              value={startDate ? startDate.toLocaleDateString("vi-VN") : ""}
                              className={styles.input}
                              readOnly
                            />
                            <FaCaretDown className={styles.icon} />
                            <label className="sm">Ngày nhận phòng</label>
                          </lable>
                        }
                        className={styles.datePicker}
                      />
                    </div>

                    <div className={styles.roomPickerMixi}></div>
                  </div>

                  <div></div>
                  <div></div>
                  <div></div>
                </div>
                <div className={styles.footerForm}></div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
