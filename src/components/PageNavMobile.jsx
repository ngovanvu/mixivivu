import { Link } from "react-router-dom";
import styles from "./PageNavMobile.module.css";

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

          <Link to="introduce">
            <li>Doanh nghiệp</li>
          </Link>

          <Link to="blog">
            <li>Blog</li>
          </Link>
        </ul>
      </div>
    </>
  );
}

export default PageNavMobile;
