import { makeStyles, Card, CardActionArea, Box } from "@material-ui/core";
import React from "react";
import { newServices } from "./ServiceList";
import ManMag from "../../img/manmag.png";
import { ImageBox } from "../Box/MyBox";

const ITEMS_PER_ROW = 4;

const useStyles = makeStyles({
  root: {
    padding: 10,
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
  },
  list: {
    display: "flex",
    justifyContent: "space-evenly",
    padding: 24,
    flexWrap: "wrap",
  },
  listItem: {
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    flexDirection: "column",
    width: "25%",
    padding: 1,
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
      <ImageBox>
        <img alt="" src={ManMag} className={classes.listImg} />
      </ImageBox>
      <Box className={classes.root}>
        <Box
          letterSpacing={1}
          lineHeight={1.5}
          textAlign="center"
          width="87em"
          color="#751f66"
          style={{}}
        >
          • Pre-Listing Inspection for Seller • Pre-Purchase Inspection for
          Buyer • New Construction Home Inspection • Multi-Unit Property
          Inspection {"  "}
          <Box>
            • Townhouse Home Inspection • Condo Inspection • During Construction
            Home Inspection • Radon Testing • Termite / WDI (Wood Destroying
            Insect)
          </Box>
        </Box>
        <Box letterSpacing={2} lineHeight={2} width="68em" textAlign="center">
          Your detailed Buyer Beware Inspection Report will be done by a highly
          trained home inspector with details about your homes condition, images
          and recommendations, delivered within 24 hours (next business day) –
          often the same day
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
      {newServices.map(({ text, title }) => {
        return (
          <div key={text} className={classes.listItem}>
            <div key={title} className={classes.listImg} />
            <Box fontSize="larger" color="#b23a87">
              {title}
            </Box>
            <h4 style={{ fontWeight: "lighter" }}>{text}</h4>
          </div>
        );
      })}
    </div>
  );
}
