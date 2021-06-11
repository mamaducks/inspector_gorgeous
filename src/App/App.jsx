import React from "react";
import { AppBar } from "./AppBar/AppBar";
import { HeadButtons } from "./AppBar/Header";
import { Quote } from "../App/Footer/RequestQuote";
import { Router } from "./Router";

export function App() {
  return (
    <>
      <AppBar />

      <HeadButtons />

      <div className="container">
        <Router />
      </div>

      <Quote />
    </>
  );
}
