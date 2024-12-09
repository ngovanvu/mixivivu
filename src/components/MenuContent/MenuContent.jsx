import styles from "./MenuContent.module.css";
import React from "react";
import { Element } from "react-scroll";
import ListCardRoom from "../ListCardRoom.jsx";
import dataCardBoat from "../../data/dataCardBoat.js";
import Feature from "../Feature.jsx";
import SideBar from "../SideBar.jsx";
import Map from "../Map.jsx";

function MenuContent({ filterData }) {
  console.log("fill", filterData);

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
          <Map />
        </Element>
        <Element name="review">
          <h1>Projects Section</h1>
          <h1>Projects Section</h1>
          <h1>Projects Section</h1>
          <h1>Projects Section</h1>
          <h1>Projects Section</h1>
          <h1>Projects Section</h1>
        </Element>
      </div>
      <div className={styles.sideBar}>
        <SideBar data={filterData} />
      </div>
    </div>
  );
}

export default MenuContent;
