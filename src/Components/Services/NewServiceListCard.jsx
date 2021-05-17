import { makeStyles, Card, CardActionArea, Box } from "@material-ui/core";
import React from "react";
import { newServices } from "./ServiceList";

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
export const NewServiceCard = () => {
  const classes = useStyles();

  return (
    <Card >
      <Box>
            <Box>INSPECTION</Box>
            <Box
              fontSize={14}
              letterSpacing={2}
              lineHeight={1.8}
              textAlign="center"
              color="#095565"
            >
              A comprehensive WIN Home Inspection Report is prepared by a highly
              trained WIN home inspector, delivered within 24 hours (next
              business day) – often the same day.{" "}
            </Box>
            <Box
              fontSize={14}
              letterSpacing={2}
              lineHeight={1.8}
              textAlign="center"
              color="#095565"
            >
              FULL SERVICE INSPECTIONS include:
            </Box>
            </Box>
      <CardActionArea >
        <NewServiceListing newServices />
      </CardActionArea>
    </Card>
  );
};

export function NewServiceListing() {
  const classes = useStyles();
  return (
    <div>
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
