import { makeStyles, Card, CardActionArea, Box, Grid, GridList } from "@material-ui/core";
import React from "react";
import { services } from "./ServiceList";
import { HeaderBox } from "../Box/MyBox";

const ITEMS_PER_ROW = 4;

const useStyles = makeStyles({
  list: {
    display: "flex",
    justifyContent: "space-evenly",
    padding: 33,
    flexWrap: "wrap",
  },
  listItem: {
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    flexDirection: "column",
    width: "25%",
  },
  listImg: {
    width: 55,
    height: 55,
    paddingBottom: 15,
  },
});
export const ServiceCard = () => {
  return (
    <Grid>
      <Box color="#b23a87" fontWeight="bold" lineHeight={2} textAlign="center">
        FULL SERVICE INSPECTIONS INCLUDE -
      </Box>
      <GridList>
        <ServiceListing services />
      </GridList>
    </Grid>
  );
};

export function ServiceListing() {
  const classes = useStyles();

  return (
    <div className={classes.list}>
      {services.map(({ text, image }) => {
        return (
          <div key={text} className={classes.listItem}>
            <img alt="" src={image} className={classes.listImg} />
            <Box fontSize="larger" fontWeight="lighter" color="#b23a87">
              {text}
            </Box>
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
