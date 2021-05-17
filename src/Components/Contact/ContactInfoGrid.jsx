import { makeStyles, Box, Grid, Container } from "@material-ui/core";
import React from "react";
import MapImage from "../../img/locationimg.png";
import { PhoneInfo, AddressInfo } from "./ContactInfo";

const useStyles = makeStyles({
  map: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "column",
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
        <Grid item xs={6} className={classes.map}>
          {" "}
          WE ARE BASED OUT OF BERLIN, NJ AND OFFER HOME INSPECTION SERVICES FOR
          AREAS OF NEW JERSEY AND PHILADELPHIA.
          <img alt="" src={MapImage} width="415" height="380" />
          <Box>
            <div>Monday thru Friday 8:00 am - 7:00 pm </div>
            <div>Saturday 9:00 am - 5:00 pm</div>
            <div>Sunday Closed</div>
          </Box>
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
        style={{ backgroundColor: "#bf66b0" }}
      >
        Traditional Home Inspections * Pre-Listing Inspections * Radon Testing *
        Termite Inspections
      </Box>

      <Container
        style={{ display: "flex", justifyContent: "center", paddingTop: 10 }}
      >
        <Grid item xs={6} className={classes.map}>
          <div>
            Call or email us if you have any questions or use our online
            scheduler to set up a home inspection.
          </div>
          <Box>
            Let us know how we can help you, by filling out the form. We will
            get back with you as soon as possible. Feel free to call us if you
            are in need of assistance immediately.
          </Box>
        </Grid>
        <Grid item xs={6} direction="column" className={classes.info}>
          <form>
            <input></input>
            <input></input>
            <input></input>
          </form>
        </Grid>
      </Container>
    </>
  );
};
