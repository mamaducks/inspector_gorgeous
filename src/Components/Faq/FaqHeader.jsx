import { Box, Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import {PBox} from "../../MyBox"

import { Expect } from "../Home/Expect";

const useStyles = makeStyles({
  info: {},
});

export const FaqHeader = () => {
  const classes = useStyles();

  return (
    <Container>
      <Box direction="column">
        <Box
          fontSize={14}
          fontFamily="Helvetica"
          lineHeight={2}
          letterSpacing={2}
          color="#000000"
        >
          <Expect />
        </Box>
        
        {/* <Box
          fontFamily="Helvetica"
          fontSize={14}
          letterSpacing={2}
          lineHeight={1.8}
          textAlign="center"
          color="#786379"
        >
          Home Inspections We offer the following specialized inspection
          services: • Pre-Listing Inspection for Seller • Pre-Purchase
          Inspection for Buyer New Construction Home Inspection • Multi-Unit
          Property Inspection • Townhouse Home Inspection• • Condo Inspection •
          During Construction Home Inspection • Radon Testing • Termite / WDI
          (Wood Destroying Insect)
        </Box>

        <Box
          fontFamily="Helvetica"
          fontSize={14}
          letterSpacing={2}
          lineHeight={1.8}
          textAlign="center"
          color="#786379"
          style={{ paddingTop: 20 }}
        >
          Other Inspection Services: Oil Tank Sweeps / Inspection Swimming pool
          Mold Septic Well water testing Home Energy Reports
        </Box> */}
      </Box>
    </Container>
  );
};
