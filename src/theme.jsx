import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    type: "light",
    primary: {
      main: "#e6e0e4",
    },
    secondary: {
      main: "#c575aa",
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
        // paddingRight: 15,
      },
    },
MuiDivider: {
root:{
  margin: "10px 0",
  color: "green"
}
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
        // fontSize: 17,
        color: "#01333c",
      },
    },
    MuiIconButton: {
      root: { color: "black", fontSize: "2rem", padding: "0px" },
    },

    MuiContainer: {
      root: {
        justifyContent: "space-evenly",
        display: "flex",
      },
    },

    MuiTabs: {
      root: {
        color: "white",
      },
    },
    MuiTab: {
      root: {
        "&:hover": {
          color: "#c575aa",
        },
      },
    },

    MuiAccordion: {
      root: {
        "&$expanded": {
          margin: "auto",
        },
      },
    },

    MuiListItemIcon: {
      root: {
        minWidth: "unset",
        padding: 10,
      },
    },

    MuiListItemText: {
      root: {
        fontFamily: "Helvetica"
      }
    }
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
