import { makeStyles, Box, Grid, Container } from "@material-ui/core";
import React from "react";
import MapImage from "../../img/locationimg.png";
import { PhoneInfo, AddressInfo } from "./ContactInfo";

const useStyles = makeStyles({
  map: {
    display: "flex",
    justifyContent: "center",
    padding: 25,
    alignItems: "center",
    // backgroundColor: "#2790b90a",
  },
  info: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
export const ContactGrid = () => {
  const classes = useStyles();

  return (
    <>
      {/* <Box className={classes.logo}>
          <img src={IgLogo} width="373" height="340" />
        </Box> */}

      <Container
        style={{ display: "flex", justifyContent: "center", paddingTop: 10 }}
      >
        <Box>
          WE ARE BASED OUT OF BERLIN, NJ AND OFFER HOME INSPECTION SERVICES FOR
          AREAS OF NEW JERSEY AND PHILADELPHIA.
        </Box>
        <Grid item xs={6} className={classes.map}>
          <img alt="" src={MapImage} width="415" height="380" />
        </Grid>
        <Grid item xs={6} direction="column" className={classes.info}>
          <PhoneInfo />
          <AddressInfo />
        </Grid>
      </Container>
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
      <Box>
        Let us know how we can help you, by filling out the form below. We will
        get back with you as soon as possible. Feel free to call us if you are
        in need of assistance immediately.
      </Box>
    </>
  );
};
