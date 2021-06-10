import React from "react";
import { AppBar } from "../Components/App/AppBar";
import { HeadButtons } from "../Components/App/Header";
import { Quote } from "../Components/App/RequestQuote";
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
