import React from "react";
import { Router } from "./Router";
import { Header } from "../Components/App/Header";
import { Quote } from "../Components/App/RequestQuote";

export function App() {
  return (
    <>
      <Header />

      <div className="container">
        <Router />
      </div>

      <Quote />
    </>
  );
}
