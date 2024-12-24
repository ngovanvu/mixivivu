import styles from "./MenuContent.module.css";
import React from "react";
import { Element } from "react-scroll";
import ListCardRoom from "../ListCardRoom.jsx";
import dataCardBoat from "../../data/dataCardBoat.js";
import Feature from "../Feature.jsx";
import SideBar from "../SideBar.jsx";
import Map from "../Map.jsx";
import Review from "../ReviewCustomers.jsx";

function MenuContent({ filterData }) {
  return (
    <div className={styles.content}>
      <div className={styles.contentFeature}>
        <Element name="feature">
          <Feature data={filterData} />
        </Element>

        <Element name="roomPrice">
          <ListCardRoom dataCardBoat={dataCardBoat} />
        </Element>
        <Element name="map">
          <Map data={filterData} />
        </Element>
        <Element name="review">
          <Review data={filterData} />
        </Element>
      </div>
      <div className={styles.sideBar}>
        <SideBar data={filterData} />
      </div>
    </div>
  );
}

export default MenuContent;
