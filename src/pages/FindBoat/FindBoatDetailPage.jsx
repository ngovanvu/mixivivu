import React, { useEffect, useRef, useState } from "react";

import styles from "./FindBoatDetailPage.module.css";
import SliderDetail from "../../components/SliderDetail";
import BreadCumbs from "../../components/BreadCumbs";
import DetailPageHeader from "../../components/DetailPageHeader";
import dataCardBoat from "../../data/dataCardBoat";
import { useParams } from "react-router-dom";
import BoxFeatures from "../../components/BoxFeatures";
import SideBar from "../../components/SideBar";
import Loading from "../../components/Loading";

function FindBoatDetailPage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Giả lập thời gian tải
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // 3 giây

    return () => clearTimeout(timer);
  }, []);
  const { slug } = useParams();
  const filterData = dataCardBoat.data.find((item) => slug === item.slug);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <BreadCumbs breadLink={"Tìm Du Thuyền"} filterData={filterData} />
          <DetailPageHeader filterData={filterData} />
          <SliderDetail />
          <div className={styles.sideBar}>
            <SideBar data={filterData} />
          </div>
          <BoxFeatures filterData={filterData} />
        </>
      )}
    </>
  );
}

export default FindBoatDetailPage;
