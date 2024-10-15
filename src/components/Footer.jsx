import { Link } from "react-router-dom";
import style from "./Footer.module.css";
import logo from "./../assets/image/logo-trans/white-logo.webp";
function Footer() {
  return (
    <div className={style.backgroud}>
      <div className={`${style.section} container`}>
        <div className={style.infor}>
          <Link to="/">
            <div className={style.logo}>
              <img src={logo} alt="logo footer" loading="lazy" />
            </div>
          </Link>
          <div>
            <div className={`md ${style.desc}`}>Công ty TNHH Du Lịch và Dịch Vụ Mixivivu</div>
            <div className={`md ${style.desc}`}>
              Tầng 7, số nhà 25, ngõ 38 phố Yên Lãng, phường Láng Hạ, quận Đống Đa, TP. Hà Nội
            </div>
            <div className={`md ${style.desc}`}>
              Mã số doanh nghiệp: 0110376372 do Sở Kế hoạch và Đầu tư Thành phố Hà Nội cấp ngày 05/06/2023
            </div>
          </div>
        </div>

        <div className={style.list}>
          <div className={style.content}>
            <span className={style.title}>giới thiệu</span>
            <div className={style.items}>
              <Link to="/ve-chung-toi" target="_blank">
                Về chúng tôi
              </Link>
              <Link to="/ve-chung-toi" target="_blank">
                Điều khoản và điều kiện
              </Link>{" "}
              <Link to="/ve-chung-toi" target="_blank">
                Chính sách riêng tư
              </Link>{" "}
              <Link to="/ve-chung-toi" target="_blank">
                Hướng dẫn sử dụng
              </Link>{" "}
              <Link to="/ve-chung-toi" target="_blank">
                Hình thức thanh toán
              </Link>{" "}
              <Link to="/ve-chung-toi" target="_blank">
                Liên hệ
              </Link>{" "}
              <Link to="tel:0922222016" target="_blank">
                Hotline: 0922222016
              </Link>{" "}
              <Link to="mailto:info@mixivivu.com" target="_blank">
                Email: info@mixivivu.com
              </Link>
            </div>
          </div>
          <div className={style.content}>
            <span className={style.title}>giới thiệu</span>
            <div className={style.items}>
              <Link to="/ve-chung-toi" target="_blank">
                Vịnh Hạ Long
              </Link>
              <Link to="/ve-chung-toi" target="_blank">
                Vịnh Lan Hạ
              </Link>{" "}
              <Link to="/ve-chung-toi" target="_blank">
                Đảo Cát Bà
              </Link>{" "}
            </div>
          </div>
          <div className={style.content}>
            <span className={style.title}>du thuyen</span>
            <div className={style.items}>
              <Link to="/ve-chung-toi" target="_blank">
                Blog
              </Link>
              <Link to="/ve-chung-toi" target="_blank">
                Quy định chung và lưu ý
              </Link>{" "}
              <Link to="/ve-chung-toi" target="_blank">
                Câu hỏi thường gặp
              </Link>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
