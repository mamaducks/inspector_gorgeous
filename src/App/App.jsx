import React from "react";
import { AppBar } from "./AppBar";
import { Quote } from "./Footer";
import { Router } from "./Router";

export function App() {
  return (
    <>
      <AppBar />


      <div className="container">
        <Router />
      </div>

      <Quote />
    </>
  );
}
