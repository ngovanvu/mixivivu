import React, { useEffect, useRef, useState } from "react";

import styles from "./FindBoatDetailPage.module.css";
import SliderDetail from "../../components/SliderDetail";
import BreadCumbs from "../../components/BreadCumbs";
import DetailPageHeader from "../../components/DetailPageHeader";
import dataCardBoat from "../../data/dataCardBoat";
import { useParams } from "react-router-dom";
import BoxFeatures from "../../components/BoxFeatures";

function FindBoatDetailPage() {
  const { slug } = useParams();
  const filterData = dataCardBoat.data.find((item) => slug === item.slug);
  return (
    <>
      <BreadCumbs breadLink={"Tìm Du Thuyền"} filterData={filterData} />
      <DetailPageHeader filterData={filterData} />
      <SliderDetail />
      <BoxFeatures filterData={filterData} />
    </>
  );
}

export default FindBoatDetailPage;
