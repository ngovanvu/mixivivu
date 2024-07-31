import { Link } from "react-router-dom";
import style from "./PageNav.module.css";

function PageNav({ menuRef }) {
  return (
    <>
      <nav className={style.nav}>
        <ul className="md">
          <li className={style.active}>
            <Link to="findboat">Tìm du thuyền</Link>
          </li>
          <li>
            <Link to="findplane">Tìm vé máy bay</Link>
          </li>
          <li>
            <Link to="introduce">Doanh nghiệp</Link>
          </li>
          <li>
            <Link to="blog">Blog</Link>
          </li>
        </ul>
      </nav>
      {/* 
      <div className={style.nav_mobile} ref={menuRef}>
        <ul className="md">
          <li>
            <Link to="findboat">Tìm du thuyền</Link>
          </li>
          <li>
            <Link to="findplane">Tìm vé máy bay</Link>
          </li>
          <li>
            <Link to="introduce">Doanh nghiệp</Link>
          </li>
          <li>
            <Link to="blog">Blog</Link>
          </li>
        </ul>
      </div> */}
    </>
  );
}

export default PageNav;
