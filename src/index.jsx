import React from "react";
import { render } from "react-dom";
import { ThemeProvider,  } from "@material-ui/styles";
import theme from "./theme.jsx"
import { RecoilRoot } from "recoil";
import { App } from "./App/App";


render(
  <RecoilRoot>
     <ThemeProvider theme={theme} >
      
      <App />
   </ThemeProvider>
  </RecoilRoot>,
  document.getElementById("root")
);
