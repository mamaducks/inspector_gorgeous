import { makeStyles, Card, CardActionArea } from "@material-ui/core";
import React from "react";
import { services } from "./ServiceList";

const ITEMS_PER_ROW = 4;

const useStyles = makeStyles({
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
    width: '25%'
  },
  listImg: {
    width: 55,
    height: 55,
    paddingBottom: 15,
  },
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

  return (
    <div>
      {services.map(({ text, image }) => {
        return (
          <div key={text} className={classes.listItem}>
            <img alt="" src={image} className={classes.listImg} />
            <h4 style={{ fontWeight: "lighter" }}>{text}</h4>
          </div>
        );
      })}
    </div>
  );
}

export function ServiceListingCrappy() {
  const classes = useStyles();

  var items = services.slice(0, ITEMS_PER_ROW).map(({ text, image }) => {
    return (
      <div key={text} className={classes.listItem}>
        <img alt="" src={image} className={classes.listImg} />
        <h4 style={{ fontWeight: "lighter" }}>{text}</h4>
      </div>
    );
  });

  var itemsBottom = services.slice(ITEMS_PER_ROW).map(({ text, image }) => {
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
