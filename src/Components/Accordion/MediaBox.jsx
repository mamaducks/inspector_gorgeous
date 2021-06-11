import { Card, Dialog } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React, { useState } from "react";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    display: "flex",
    justifyContent: "center",
  },
});

export function MediaBox({ image }) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  return (
    <Card className={classes.root}>
      <img
        alt=""
        src={image}
        width="400px"
        height="350px"
        onClick={() => setOpen(true)}
      />

      <Dialog open={open} onClick={() => setOpen(false)}>
        <img alt="" src={image} width="300px" height="450px" />
      </Dialog>
    </Card>
  );
}
