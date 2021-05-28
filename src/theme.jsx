import { createMuiTheme } from "@material-ui/core/styles";
import React from "react";

const theme = createMuiTheme({
  palette: {
    type: "light",
    primary: {
      main: "#cdcdcd",
    },
    secondary: {
      main: "#2790b9",
    },
    text: {
      primary: "#494649",
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
    // MuiAppBar: {
    //   root: {
    //     paddingLeft: 45,
    //     paddingRight: 45,
    //   },
    // },
    MuiToolbar: {
      root: {
        paddingLeft: 9,
        paddingRight: 12,
      },
    },
    MuiIcon: {
      root: {
        paddingRight: 15,
      },
    },
    MuiBox: {
      // root: {
      //   fontSize: 14,
      //   lineHeight: 2,
      //   letterSpacing: 2,
      // },
      //     fontFamily: "Helvetica",
      //     fontSize: 88
    },

    MuiButton: {
      // Name of the component ⚛️ / style sheet
      root: {
        // Name of the rule
        // Some CSS
      },
      label: {
        fontSize: 17,
        color: "#01333c",
      },
    },
    MuiIconButton: {
      root: { color: "black", fontSize: "2rem" },
    },
    MuiContainer: {
      root: {
        justifyContent: "space-evenly",
        display: "flex",
      },
    },

    MuiListItemIcon: {
      root: {
        fontSize: 24,
        color: "#a61b77",
        minWidth: 42
      },
    },
    // MuiDialogPaperWidthSm: {
    //   maxWidth: "md"
    // }
    // MuiListItemText: {
    //   root: {
    //     fontFamily: "Helvetica"
    //   }
    // }
  },
 
});

export default theme;
