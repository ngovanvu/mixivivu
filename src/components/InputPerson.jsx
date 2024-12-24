import React from "react";
import styles from "./InputPerson.module.css";

function InputPerson({ icon, age, setAge, title, min }) {
  const handleInputChange = (e) => {
    const value = e.target.value;

    // Kiểm tra giá trị đầu vào
    if (value === "" || isNaN(Number(value))) {
      setAge(""); // Đặt giá trị rỗng nếu người dùng xóa
    } else {
      const numericValue = Math.max(Number(min), Number(value)); // Cho phép giá trị >= min
      setAge(numericValue);
    }
  };

  return (
    <div className={styles.selectInput}>
      <div>
        <label htmlFor="departure" className={styles.inputGroup}>
          {icon}
          <input
            id="departure"
            type="number"
            value={age === "" ? "" : Number(age)} // Hiển thị giá trị hoặc rỗng
            onChange={handleInputChange}
            min={Number(min)} // Cho phép giá trị tối thiểu từ giao diện là min
          />
          <label htmlFor="departure" className="sm">
            {title}
          </label>
        </label>
      </div>
    </div>
  );
}

export default InputPerson;
