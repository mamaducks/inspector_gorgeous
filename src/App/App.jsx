import React from "react";
import { Router } from "./Router";
import { HeadTabs, Phone, HeadButtons } from "../Components/App/Header";
import { Quote } from "../Components/App/RequestQuote";
import { AppBar } from "../Components/App/AppBar";

export function App() {
  return (
    <>
      <AppBar />
      
      <HeadButtons />

      <div className="container">
        <Router>
          
        </Router>
      </div>

      <Quote />
    </>
  );
}
