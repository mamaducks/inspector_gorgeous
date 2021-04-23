import React from "react";
import { render } from "react-dom";
import { StylesProvider } from "@material-ui/styles";

import { RecoilRoot } from "recoil";
import { App } from "./App/App";

render(
  <RecoilRoot>
     <StylesProvider injectFirst >
      <App />
   </StylesProvider>
  </RecoilRoot>,
  document.getElementById("root")
);
