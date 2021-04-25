import { ThemeProvider } from "@material-ui/core/styles";
import React from "react";
import theme from "../theme";
import { AppBar } from "../Components/App/AppBar";
import { Router } from "./Router";
import { Header } from "../Components/App/Header";
import { Quote } from "../Components/App/RequestQuote";
export function App() {
  return (
    <>
      <AppBar />
      <Header />
      <div className="container">
        <Router />
      </div>
      <Quote />
    </>
  );
}
