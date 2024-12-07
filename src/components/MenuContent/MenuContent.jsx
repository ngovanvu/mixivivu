import styles from "./MenuContent.module.css";
import React from "react";
import { Element } from "react-scroll";
import ListCardRoom from "../ListCardRoom.jsx";
import dataCardBoat from "../../data/dataCardBoat.js";

function MenuContent() {
  return (
    <div className={styles.content}>
      <div className={styles.contentFeature}>
        <Element name="feature">
          <h1>Home Section</h1>
        </Element>

        <Element name="roomPrice">
          <ListCardRoom dataCardBoat={dataCardBoat} />
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
      <div className={styles.sideBar}>sideBar</div>
    </div>
  );
}

export default MenuContent;
