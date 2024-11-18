import bannervid from "../../assets/image/header/Mixivivuduthuyen.mp4";
import style from "./Banner.module.css";
import BoxSearch from "../../components/BoxSearch";

function Banner() {
  return (
    <div className={style.banner_vid}>
      <video autoPlay loop muted src={bannervid} className={style.video}></video>
      <div className={style.card_searchbox}>
        <div className={`${style.card} ${style.card_searchboxMobile}>`}>
          <BoxSearch
            title={"Bạn lựa chọn du thuyền Hạ Long nào?"}
            desc={"Hơn 100 tour du thuyền hạng sang giá tốt đang chờ bạn"}
          />
        </div>
      </div>
    </div>
  );
}

export default Banner;
