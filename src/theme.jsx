import { createMuiTheme } from "@material-ui/core/styles";
import React from "react";

const theme = createMuiTheme({
  palette: {
    type: "light",
    primary: {
      main: "#786379",
    },
    secondary: {
      main: "#2790b9",
    },
    text: {
      primary: "rgba(46,95,103,0.87)",
      secondary: "#000000",
    },
    background: {
      default: "#ece3e3",
    },
  },

  // typography: {
  //   fontFamily: ["Helvetica", "Roboto", "Arial", "sans-serif"].join(","),
  //   fontSize: 14,
  //   fontWeightLight: 300,
  //   fontWeightRegular: 400,
  //   fontWeightMedium: 500,
  // },
  //      typography: {
  //        fontFamily: [

  //          '"Helvetica"',
  //  '-apple-system',
  //          'BlinkMacSystemFont',
  //          '"Segoe UI"',
  //         'Roboto',

  //         'Arial',
  //         'sans-serif',
  //         '"Apple Color Emoji"',
  //         '"Segoe UI Emoji"',
  //         '"Segoe UI Symbol"',
  //       ].join(','),
  //   fontSize: 13,
  //   display4: {
  //     fontSize: 13,
  //   },
  //   display3: {
  //     fontSize: 13,
  //   },
  //   display2: {
  //     fontSize: 13,
  //   },
  //   display1: {
  //     fontSize: 13,
  //   },
  //   headline: {
  //     fontSize: 13,
  //   },
  //   title: {
  //     fontSize: 13,
  //   },
  //   subheading: {
  //     fontSize: 13,
  //   },
  //   body2: {
  //     fontSize: 13,
  //   },
  //   body1: {
  //     fontSize: 13,
  //   },
  //   caption: {
  //     fontSize: 13,
  //   },
  //   button: {
  //     fontSize: 13,
  //   },
  // },

  overrides: {
    MuiAppBar: {
      root: {
        paddingLeft: 45,
        paddingRight: 45,
      },
    },
    MuiToolbar: {
      gutters: {},
    },
    // MuiBox: {

    //     fontFamily: "Helvetica",
    //     fontSize: 88

    // },

    MuiButton: {
      // Name of the component ⚛️ / style sheet
      root: {
        // Name of the rule
        // Some CSS
      },
      label: {
        fontSize: 17,
      },
    },
    MuiIconButton: {
      root: { color: "white" },
    },
    MuiContainer: {
      root: {
        justifyContent: "space-evenly",
        display: "flex",
        padding: 20,
      },
    },

    MuiListItemIcon: {
      root: {
        fontSize: 30,
        color: "#796379",
      },
    },
    // MuiListItemText: {
    //   root: {
    //     fontFamily: "Helvetica"
    //   }
    // }
  },
});

export default theme;
