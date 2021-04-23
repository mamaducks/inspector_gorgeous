import { Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";

const useStyles = makeStyles({
  info: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "auto",
    width: "60%",
  },
  navigation: {
    display: "flex",
    justifyContent: "space-evenly",
    paddingTop: 15,
    marginBottom: 20,
    "& > div": {
      alignItems: "center",
      display: "flex",
      flexDirection: "column",
      maxWidth: 400,
    },
  },
});

export const FaqHeader = () => {
  const classes = useStyles();

  return (
    <div className={classes.info}>
      <h3>QUESTION ACCORDIAN?</h3>

      <h5>
        ANSWER ACCORDIAN Our mission is to help you connect quickly with
        investors and sell your home fast. Stop paying to list your home,
        scheduling inconvenient viewings, and shelling out money for realtor
        fees.
      </h5>
    </div>
  );
};
