import React from "react";
import { AppBarHeader } from "./AppBar";
import { Footer } from "./Footer";
import { Router } from "./Router";
import styles from "../styles.css";
export function App() {
  return (
    <>
      <AppBarHeader />
      <div className="container">
        <Router />
      </div>
      <Footer />
    </>
  );
}
