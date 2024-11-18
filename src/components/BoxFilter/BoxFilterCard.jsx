import Checkbox from "../Checkbox";
import styles from "./BoxFilterCard.module.css";

function BoxFilterCard({ dataStarRanking, dataUtilies, handleCheckboxChange, selected, handleReset }) {
  return (
    <div className={styles.checkboxCard}>
      <div className={styles.headerCard}>
        <div className={styles.titleCard}>Lọc kết quả</div>
        <div className={styles.reset} onClick={() => handleReset()}>
          Đặt lại
        </div>
      </div>

      <Checkbox data={dataStarRanking} handleCheckboxChange={handleCheckboxChange} labels="stars" selected={selected} />
      <Checkbox data={dataUtilies} handleCheckboxChange={handleCheckboxChange} labels="labels" selected={selected} />
    </div>
  );
}

export default BoxFilterCard;
