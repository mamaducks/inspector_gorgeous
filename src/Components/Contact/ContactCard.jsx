import { makeStyles, Grid, Card, CardContent } from "@material-ui/core";
import React from "react";
import { ContactGrid } from "./ContactInfoGrid";

const useStyles = makeStyles({
  // logo: {
  //   display: "flex",
  //   justifyContent: "center",
  // },
  cardGrid: {
    display: "flex",
    justifyContent: "space-evenly",
  },
  card: {
    margin: 30,
  },
});

var cardContent = [
  {
    text:
      "PRE-INSPECTION Prior to putting your house on the market, find out the condition of your home. It can help eliminate price negotiation. An inspection can address major issues to ensure you get your selling price.",
  },
  {
    text:
      "FULL HOME INSPECTION GET QUOTE You found your perfect house. Make sure it’s perfect. A home inspection will identify any and all major issues found, including but not limited to: Structure, Interior, Foundation, HVAC, Electrical, Plumbing.",
  },
  {
    text:
      "PRE-DRYWALL INSPECTION GET QUOTE To ensure a house is built according to its specifications is by performing a pre-drywall inspection. Pre-drywall refers to the part of the building process just prior to the drywall being installed. This inspection is done after the installation of the doors, windows, foundation, flooring, wall and roofing, plumbing and electrical.",
  },
];

const Contact = () => {
  const classes = useStyles();

  return (
    <>
      {cardContent.map(({text}) => (
        <Card className={classes.card}>
          <CardContent>{text}</CardContent>
        </Card>
      ))}
    </>
  );
};

export const ContactCard = () => {
  const classes = useStyles();

  return (
    <>
      <ContactGrid />
      <Grid className={classes.cardGrid}>
        <Contact />
      </Grid>
    </>
  );
};
