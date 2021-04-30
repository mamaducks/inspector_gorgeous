import {
  Link,
  Box,
  makeStyles,
  Container,
  Typography,
  Card,
  CardContent,
  CardActionArea,
} from "@material-ui/core";
import React from "react";
import { services } from "./ServiceList";
const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  box: {
    display: "flex",
    justifyContent: "space-between",
    margin: 15,
  },
  list: {
    display: "flex",
    justifyContent: "space-evenly",
    padding: 33,
  },
  listItem: {
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    flexDirection: "column",
  },
  listImg: {
    width: 55,
    height: 55,
    paddingBottom: 15,
  },
  listText: {},
});
export const ServiceCard = () => {
  return (
    <Card>
      <CardActionArea>
        <ServiceListing services />
      </CardActionArea>
    </Card>
  );
};

export function ServiceListing() {
  const classes = useStyles();

  var n = 4;

  // Slice function call
  var items = services.slice(0, n).map(({ text, image }) => {
    return (
      <div key={text} className={classes.listItem}>
        <img alt="" src={image} className={classes.listImg} />
        <h4 style={{ fontWeight: "lighter" }}>{text}</h4>
      </div>
    );
  });
  var itemsBottom = services.slice(4).map(({ text, image }) => {
    return (
      <div key={text} className={classes.listItem}>
        <img alt="" src={image} className={classes.listImg} />
        <h4 style={{ fontWeight: "lighter" }}>{text}</h4>
      </div>
    );
  });
  return (
    <div style={{ padding: 45 }}>
      <div className={classes.list}>{items}</div>
      <div className={classes.list}>{itemsBottom}</div>
    </div>
  );
}
