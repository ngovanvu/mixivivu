import React from "react";
import styles from "./Contact.module.css";

import { FaMobileScreen } from "react-icons/fa6";
import Button from "./Button";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <div className={styles.contact}>
      <div className={styles.phone}>
        <div className={styles.icon}>
          <FaMobileScreen />
        </div>
        <a href="tel:0922222016">Hotline: 0922222016</a>
      </div>
      <Link to="/contact">
        <div>
          <Button paddingType="paddingSmall" colorType="blue" btnDefaults={true}>
            <div className="md">Liên hệ Mixivivu</div>
          </Button>
        </div>
      </Link>
    </div>
  );
}

export default Contact;
