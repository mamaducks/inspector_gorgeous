import { ThemeProvider } from "@material-ui/core/styles";
import React from "react";
import theme from "../theme";
import { AppBar } from "../Components/App/AppBar";
import { Router } from "./Router";
import {Header} from "../Components/App/Header"

export function App() {
 

  return (
    <ThemeProvider theme={theme}>
      <AppBar />
<Header />
     
     
      <div>
        <div className="container">
        
          <Router />
        </div>
      </div>
    </ThemeProvider>
  );
}

