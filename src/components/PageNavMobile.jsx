import { Link } from "react-router-dom";
import styles from "./PageNavMobile.module.css";
import { FaMobileScreen } from "react-icons/fa6";
import Button from "./Button";

function PageNavMobile() {
  return (
    <>
      <div className={styles.nav_mobile}>
        <ul className="md">
          <Link to="findboat">
            <li className={styles.active}>Tìm du thuyền</li>
          </Link>

          <Link to="findplane">
            <li>Tìm vé máy bay </li>
          </Link>
          <div className={styles.phone}>
            <div className={styles.icon}>
              <FaMobileScreen />
            </div>
            <a href="tel:0922222016">Hotline: 0922222016</a>
          </div>

          {/* <Link to="/contact">
            <div>
              <Button paddingType="paddingSmall" colorType="blue" btnDefaults={true}>
                <div className="md">Liên hệ Mixivivu</div>
              </Button>
            </div>
          </Link> */}
          {/* <Link to="introduce">
            <li>Doanh nghiệp</li>
          </Link>

          <Link to="blog">
            <li>Blog</li>
          </Link> */}
        </ul>
      </div>
    </>
  );
}

export default PageNavMobile;
