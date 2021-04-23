import { createMuiTheme } from "@material-ui/core/styles";
import React from "react";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#b993d6",
    },
    secondary: {
      main: "#691c88",
    },
    background: {
      paper: "#fff",
    },
  },
});

export default theme;
