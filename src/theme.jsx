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

  overrides: {
    MuiToolbar: {
      root: {
        paddingLeft: 9,
        paddingRight: 12,
      },
    },

    MuiDivider: {
      root: {
        margin: "10px 0",
      },
    },

    MuiButton: {
      // Name of the component ⚛️ / style sheet
      root: {
        // Name of the rule
        // Some CSS
      },
      label: {
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
        fontFamily: "Helvetica",
      },
    },
  },
});

export default theme;
