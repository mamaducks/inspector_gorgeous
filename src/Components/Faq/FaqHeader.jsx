import { makeStyles } from "@material-ui/core/styles";
import React from "react";

const useStyles = makeStyles({
  info: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "auto",
    width: "60%",
    padding: 15
  },
});

export const FaqHeader = () => {
  const classes = useStyles();

  return (
    <div className={classes.info}>
      <h3>QUESTION ACCORDIAN</h3>

      <h5>
        ANSWER ACCORDIAN Our mission is to help you connect quickly with
        investors and sell your home fast. Stop paying to list your home,
        scheduling inconvenient viewings, and shelling out money for realtor
        fees.
      </h5>
    </div>
  );
};
