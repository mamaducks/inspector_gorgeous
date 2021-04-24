import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { Paper } from "@material-ui/core"

const useStyles = makeStyles({
  root: {
    padding: 25,
  },
  form: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
});

export function ContactHeader() {
    const classes = useStyles();
return (
  <Paper className={classes.root}>
<form className={classes.form}>
  <h6>
    We offer very flexible appointments including early evening (daylight
    permitting). We understand tight timeframes and will do our best to
    accommodate your deadlines.
  </h6>
  </form>
  </Paper>  
);
    }
