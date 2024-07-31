import { Link } from "react-router-dom";
import style from "./PageNavMobile.module.css";

function PageNavMobile() {
  return (
    <>
      <div className={style.nav_mobile}>
        <ul className="md">
          <Link to="findboat">
            <li className={style.active}>Tìm du thuyền</li>
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
