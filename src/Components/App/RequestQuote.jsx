import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { MailTo } from "./MailTo";
import { AppBar, Toolbar } from "@material-ui/core";

const useStyles = makeStyles({
  appBar: {
    // top: "auto",
    // bottom: 0,
    color: "#751f66",
  },
  title: {
    backgroundColor: "#c3c3c3",
    display: "flex",
    justifyContent: "space-evenly",
    height: 80,
    alignItems: "center",
  },
});

export const Quote = () => {
  const classes = useStyles();

  return (
    <AppBar position="sticky" className={classes.appBar}>
      <Toolbar className={classes.title}>
        <Box>REQUEST A QUOTE {"  "}609-adriennes#</Box>
        <Box style={{ display: "flex" }}>
          <Box style={{ paddingRight: 10 }}>Email Us:</Box>
          <MailTo />
        </Box>
      </Toolbar>
    </AppBar>
  );
};
