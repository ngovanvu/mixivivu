import React, { useState } from "react";

const duLieuXepHangSao = [
  { id: "r3", nhan: "3 sao" },
  { id: "r4", nhan: "4 sao" },
  { id: "r5", nhan: "5 sao" },
];

function BoLocXepHangSao() {
  // State để theo dõi các checkbox được chọn
  const [xepHangDuocChon, setXepHangDuocChon] = useState([]);

  // Hàm xử lý thay đổi checkbox
  const handleCheckboxChange = (id) => {
    setXepHangDuocChon((prevSelected) => {
      if (prevSelected.includes(id)) {
        // Nếu đã được chọn, thì bỏ chọn
        return prevSelected.filter((rating) => rating !== id);
      } else {
        // Nếu chưa được chọn, thì thêm vào
        return [...prevSelected, id];
      }
    });
  };

  return (
    <div className="filter-item">
      <label className="md">Xếp hạng sao</label>
      {duLieuXepHangSao.map((rating) => (
        <label key={rating.id} htmlFor={rating.id} className="Checkbox_container">
          <input
            id={rating.id}
            type="checkbox"
            checked={xepHangDuocChon.includes(rating.id)}
            onChange={() => handleCheckboxChange(rating.id)}
          />
          <span className="Checkbox_checkmark">
            <svg xmlns="http://www.w3.org/2000/svg" width="500" height="500" viewBox="0 0 24 24" fill="none">
              <path d="M0 0h24v24H0z" fill="none" />
            </svg>
          </span>
          <div className="Checkbox_textGroup">{rating.nhan}</div>
        </label>
      ))}
    </div>
  );
}

export default BoLocXepHangSao;
