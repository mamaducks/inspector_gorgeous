import React from "react";
import { Router } from "./Router";
import { HeadTabs, Phone } from "../Components/App/Header";
import { Quote } from "../Components/App/RequestQuote";
import {AppBar} from "../Components/App/AppBar";

export function App() {
  return (
    <>
    <AppBar />
      <HeadTabs />
     

      <div className="container">
        <Router />
      </div>

      <Quote />
    </>
  );
}
