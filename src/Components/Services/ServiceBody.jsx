import { Box, Container, Link, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";

const useStyles = makeStyles({
  info: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "auto",
    width: "60%",
  },
  navigation: {
    display: "flex",
    justifyContent: "space-evenly",

    "& > div": {
      alignItems: "center",
      display: "flex",
      flexDirection: "column",
    },
  },
  box: {
    display: "flex",
    justifyContent: "space-between",
    margin: 15,
  },
  background: {
    backgroundColor: "#9f7dab1f",
    padding: 25,
  },
  paragraph: {
    maxWidth: 700,
  },
});

export function ServicesBody() {
  const classes = useStyles();

  return (
    <Box direction="column" className={classes.background}>
      <div className={classes.navigation}>
        <div className={classes.info}>
          <h3>
            GIVING YOU THE MOST FROM YOUR HOME INSPECTION WE OFFER THE MOST
            THOROUGH HOME INSPECTION SERVICES UTILIZING THE LATEST TECHNOLOGY
            FOR TOTAL PEACE OF MIND!
          </h3>

          <h4 className={classes.paragraph}>
            Our expert home inspections provide detailed reports clearly
            identifying any material defect along with a recommendation for what
            to do as well as what can happen if not repaired. Your home
            inspection and report will cover the condition of the home’s heating
            system; central air conditioning system (temperature permitting);
            interior plumbing and electrical systems; the roof, attic and
            visible insulation; walls, ceilings, floors, windows and doors; the
            foundation, basement and structural components.
          </h4>
          <h4>
            WE ALSO INCLUDE THE FOLLOWING SERVICES WITH EVERY HOME INSPECTION:
          </h4>
          <div className={classes.box}>
            <div>
              <Link href="/sellerLogin">Service A</Link>

              <h6>a service you have maybe a picture behind</h6>
            </div>
            <div>
              <Link href="/buyerLogin">Service B</Link>

              <h6>a service you have</h6>
            </div>
          </div>
        </div>
      </div>
    </Box>
  );
}
