import { makeStyles, Box, Grid, GridList } from "@material-ui/core";
import React from "react";
import { services } from "./ServiceList";

const ITEMS_PER_ROW = 4;

const useStyles = makeStyles({
  list: {
    display: "flex",
    justifyContent: "center",
    padding: 20,
    flexWrap: "wrap",
  },
  listItem: {
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    flexDirection: "column",
    width: "21%",
    marginBottom: 20,
    padding: 12,
    "& img": {
      width: 75,
      height: 67,
      paddingBottom: 15,
    }
  },
});

export const ServiceCard = () => {
  return (
    <Grid>
      
        <ServiceListing services />
      
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
            <img alt="" src={image} />
            <Box fontSize="larger" fontWeight="lighter" color="#b23a87">
              {text}
            </Box>
          </div>
        );
      })}
    </div>
  );
}

