import { Link, useLocation, useSearchParams } from "react-router-dom";
import styles from "./PageNav.module.css";

const nav = [
  {
    title: "Tìm du thuyền",
    path: "findboat",
  },
  {
    title: "Tìm vé máy bay",
    path: "findplane",
  },
  // {
  //   title: "Doanh nghiệp",
  //   path: "introduce",
  // },
  // {
  //   title: "Blog",
  //   path: "blog",
  // },
];

function PageNav() {
  const location = useLocation();
  const path = location.pathname.split("/").pop();

  return (
    <>
      <nav className={styles.nav}>
        <ul className="md">
          {nav &&
            nav.map((data, index) => (
              <li className={data.path === path ? styles.active : ""} key={index}>
                <Link to={data.path}>{data.title}</Link>
              </li>
            ))}
        </ul>
      </nav>
      {/* 
      <div className={styles.nav_mobile} ref={menuRef}>
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
