import { FaArrowRight } from "react-icons/fa";
import styles from "./DataNotFound.module.css";
import sadImage from "../assets/image/header/buon_transparent.png";
import Button from "./Button";

function DataNotFound() {
  return (
    <div>
      <div className={styles.cardNotFound}>
        <div className={styles.imageNotFound}>
          <div className={styles.image}>
            <img alt="mixivivu" src={sadImage} width="100%" height="100%" loading="lazy" />
          </div>
        </div>
        <div className={styles.contentNotFound}>
          <h5>Rất tiếc, Mixivivu không tìm thấy kết quả cho bạn</h5>
          <p>Nhấn OK để bắt đầu tìm kiếm mới.</p>
        </div>
        <Button paddingType="paddingBig" colorType="normal">
          <div className="md">Ok</div>
          <FaArrowRight />
        </Button>
      </div>
    </div>
  );
}

export default DataNotFound;
