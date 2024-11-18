import React from "react";
import style from "./Partner.module.css";
import SlidePartner from "../../components/SlidePartner";

import partner1 from "../../assets/image/partner/partner1.png";
import partner2 from "../../assets/image/partner/partner2.png";
import partner3 from "../../assets/image/partner/partner3.png";
import partner4 from "../../assets/image/partner/partner4.png";
import partner5 from "../../assets/image/partner/partner5.png";
import partner6 from "../../assets/image/partner/partner6.png";
import partner7 from "../../assets/image/partner/partner7.png";
import partner8 from "../../assets/image/partner/partner8.png";
import partner9 from "../../assets/image/partner/partner9.png";
import partner10 from "../../assets/image/partner/partner10.png";
import ContentBox from "../../components/ContentBox";

const logoPartners = [
  {
    image: partner1,
  },
  {
    image: partner2,
  },
  {
    image: partner3,
  },
  {
    image: partner4,
  },
  {
    image: partner5,
  },
  {
    image: partner6,
  },
  {
    image: partner7,
  },
  {
    image: partner8,
  },
  {
    image: partner9,
  },
  {
    image: partner10,
  },
];
function Partner() {
  return (
    <div className={`bg_image ${style.background}`}>
      <div className={`container section`}>
        <ContentBox
          title1={"Đối tác Cùng các"}
          title2={"Hãng Du thuyền Lớn"}
          desc={" Đối tác hàng đầu với các hãng du thuyền danh tiếng: Ưu đãi độc quyền dành riêng cho bạn"}
        />

        <div>
          <SlidePartner logoPartners={logoPartners} />
        </div>
      </div>
    </div>
  );
}

export default Partner;
