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
      // default: "#ece3e3",
      default: "#f3f1f2",
    },
  },

  typography: {
    h5: {
    fontSize: '1.2rem',
    '@media (min-width:600px)': {
      fontSize: '1.5rem',
    },
    paddingLeft: "5px"
    
  },
  subtitle1: {
    fontWeight: 400,
    fontSize: "1.1rem",
    paddingLeft: "5px",
    
  },
  subtitle2: {
lineHeight: 1,
fontWeight: 300
},
caption: {
  fontWeight: 300
},
body1: {
  letterSpacing: "0.1em"
}
  },
 

  overrides: {
    // MuiToolbar: {
    //   root: {
    //     paddingLeft: 9,
    //     paddingRight: 12,
    //   },
    // },

    MuiDivider: {
      root: {
        margin: "10px 0",
      },
    },

    // MuiButton: {
    //   root: {
    //     variant: "contained",
    //     color: "#a71976",
    //     backgroundColor: "#ece7eb"
    //   },
    //   label: {
    //     color: "#a71976",
    //   },
    // },
    // MuiButtonContained: {
    // root: {
    // backgroundColor: "#ece7eb"
    // }
    // },

    // MuiIconButton: {
    //   root: { color: "black", fontSize: "2rem", padding: "0px" },
    // },

    MuiContainer: {
      root: {
        display: "flex",
        backgroundColor: "#f3f1f2",
        boxSizing: "border-box",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        flexDirection: "column",
      },
    },

    MuiTabs: {
      root: {
        color: "white",
      },
    },
    MuiTab: {
      root: {
        display: "flex",
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
        color: "#a71976",
        fontSize: "1.8rem",
      },
    },

    MuiListItemText: {
      root: {
        fontFamily: "Helvetica",
      },
    },
  },
  // MuiButton: {
  //   outlinedSizeSmall: {
  //     root: {
  //       fontSize: "0.84rem"
  //     }
      
  //   }
  // }
});

export default theme;
