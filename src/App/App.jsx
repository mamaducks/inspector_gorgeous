import React from "react";
import { AppBar } from "./AppBar";
import { Footer } from "./Footer";
import { Router } from "./Router";

export function App() {
  return (
    <>
      <AppBar />


      <div className="container">
        <Router />
      </div>

      <Footer />
    </>
  );
}
