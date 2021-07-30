import React from "react";
import { AppBarHeader, AppBarHeaderCopy } from "./AppBar";
import { Footer } from "./Footer";
import { Router } from "./Router";
import styles from "../styles.css";
export function App() {
  return (
    <>
      {/* <AppBarHeader /> */}
      <AppBarHeaderCopy/>
      <div className="container">
        
        <Router />
      </div>
      <Footer className="footer" />
    </>
  );
}
