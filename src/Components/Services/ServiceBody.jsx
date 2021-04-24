import { Link } from "@material-ui/core";
import styles from "./servicesstyle.module.css";
import React from "react";

export function ServicesBody() {
  return (
    <div className={styles.info}>
      <h4>
        WE ALSO INCLUDE THE FOLLOWING SERVICES WITH EVERY HOME INSPECTION:
      </h4>
      <div className={styles.box}>
        <div>
          <Link href="/sellerLogin">Service A</Link>

          <h6>a service you have maybe a picture behind</h6>
        </div>
        <div>
          <Link href="/buyerLogin">Service B</Link>

          <h6>a service you have</h6>
        </div>
      </div>
    </div>
  );
}
