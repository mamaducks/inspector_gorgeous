import { createTheme } from "@material-ui/core/styles";

const theme = createTheme({
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
      default: "#f3f1f2",
    },
  },

  typography: {
    h5: {
      fontSize: "clamp(1.5rem, 1.3vw, 2rem)",

      paddingLeft: "5px",
    },
    subtitle1: {
      fontWeight: 300,
      fontSize: "clamp(1.1rem, 1vw, 1.8rem)",
      paddingLeft: "5px",
      lineHeight: "1.2",
    },
    subtitle2: {
      lineHeight: "1.4",
      fontWeight: 300,
      fontSize: "clamp(0.8rem, 0.8vw, 1.8rem)",
    },
    caption: {
      fontWeight: 300,
      fontSize: "clamp(0.8rem, 0.7vw, 1.8rem)",
      lineHeight: "1.2",
    },
    body1: {
      letterSpacing: "0.1em",
      fontSize: "clamp(1rem, 1vw, 1.8rem)",
      fontWeight: 300,
    },
    body2: {
      fontWeight: 300,
      fontSize: "clamp(1.1rem, 1vw, 1.8rem)",
      paddingLeft: "5px",
    },
  },

  overrides: {
    MuiDivider: {
      root: {
        margin: "10px 0",
      },
    },

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
    MuiCardContent: {
      root: {
        padding: "10px",
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
        fontSize: "clamp(1.1rem, 1vw, 1.8rem)",
      },
    },
  },
});

export default theme;
