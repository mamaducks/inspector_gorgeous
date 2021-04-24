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
  overrides: {
    MuiButton: { // Name of the component ⚛️ / style sheet
      root: { // Name of the rule
        color: '#094856', // Some CSS
      },
    },
 MuiListItemIcon: {
   root: {
     fontSize: "large"
   }
 }
  }
});

export default theme;

