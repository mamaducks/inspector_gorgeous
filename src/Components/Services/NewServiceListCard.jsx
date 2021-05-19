import { makeStyles, Card, CardActionArea, Box } from "@material-ui/core";
import React from "react";
import { newServices } from "./ServiceList";

const ITEMS_PER_ROW = 4;

const useStyles = makeStyles({
  list: {
    display: "flex",
    justifyContent: "space-evenly",
    padding: 33,
    flexWrap: 'wrap'
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
export const NewServiceCard = () => {
  const classes = useStyles();

  return (
    <Card>
      <Box style={{ padding: 10 }}>
        <Box
          fontSize={14}
          letterSpacing={2}
          lineHeight={3}
          color="#751f66"
          fontWeight="bold"
          textAlign="center"
        >
          A comprehensive WIN Home Inspection Report is
          prepared by a highly trained WIN home inspector, delivered within 24
          hours (next business day) – often the same day
          
        </Box>
        <Box
          fontSize={14}
          letterSpacing={2}
          lineHeight={1.5}
          textAlign="center"
          width="87em"
        >
         
            • Pre-Listing Inspection for Seller • Pre-Purchase Inspection for
            Buyer • New Construction Home Inspection • Multi-Unit Property
            Inspection {"  "}
        
            {" "}
            • Townhouse Home Inspection • Condo Inspection • During Construction
            Home Inspection • Radon Testing • Termite / WDI (Wood Destroying
            Insect)
         
        </Box>
      </Box>
      <CardActionArea>
        <NewServiceListing newServices />
      </CardActionArea>
    </Card>
  );
};

export function NewServiceListing() {
  const classes = useStyles();
  return (
    <div className={classes.list}>
      {newServices.map(({ text, image }) => {
        return (
          <div key={text} className={classes.listItem}>
            <div key={image} className={classes.listImg} />
            <h3>{image}</h3>
            <h4 style={{ fontWeight: "lighter" }}>{text}</h4>
          </div>
        );
      })}
    </div>
  );
}
