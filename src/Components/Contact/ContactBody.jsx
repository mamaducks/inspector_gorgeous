import { makeStyles, Box, Grid } from "@material-ui/core";
import React from "react";
import IgLogo from "../../img/adriennelogo.png";
import MapImage from "../../img/locationimg.png";
import {PhoneInfo, AddressInfo} from "./ContactInfo"

const useStyles = makeStyles({
  logo: {
    display: "flex",
    justifyContent: "center",
  },
  map: {
    display: "flex",
    justifyContent: "center",
    padding: 25,
    backgroundColor: "#2790b90a",
  },
  info: {
    display: "flex",
    justifyContent: "space-evenly",
    padding: 20,
  },
});

export const ContactBody = () => {
  const classes = useStyles();

  return (
    <>
      <ContactGrid />
      <Grid>
        <Box>
          PRE-INSPECTION Prior to putting your house on the market, find out the
          condition of your home. It can help eliminate price negotiation. An
          inspection can address major issues to ensure you get your selling
          price. GET QUOTE FULL HOME INSPECTION GET QUOTE You found your perfect
          house. Make sure it’s perfect. A home inspection will identify any and
          all major issues found, including but not limited to: Structure,
          Interior, Foundation, HVAC, Electrical, Plumbing. PRE-DRYWALL
          INSPECTION GET QUOTE To ensure a house is built according to its
          specifications is by performing a pre-drywall inspection.
          "Pre-drywall" refers to the part of the building process just prior to
          the drywall being installed. This inspection is done after the
          installation of the doors, windows, foundation, flooring, wall and
          roofing, plumbing and electrical.
        </Box>
      </Grid>
    </>
  );
};

const ContactGrid = () => {
  const classes = useStyles();

  return (
    <>
      {/* <Box className={classes.logo}>
        <img src={IgLogo} width="373" height="340" />
      </Box> */}
      <Box
        textAlign="center"
        fontSize={16}
        letterSpacing={1.5}
        lineHeight={3}
        fontWeight={700}
        fontFamily="Helvetica"
        color="white"
        style={{ backgroundColor: "#33484c" }}
      >
        Traditional Home Inspections * Pre-Listing Inspections * Radon Testing *
        Termite Inspections
      </Box>
      <Box className={classes.map}>
        <img src={MapImage} width="375" height="300" />
      </Box>
      <Grid container spacing={1} className={classes.info}>
        <PhoneInfo />
        <AddressInfo />
      </Grid>
    </>
  );
};
