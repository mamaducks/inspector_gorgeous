import { Box, Container, Typography, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
  boxPad: {
    padding: 15,
  },
});

function BoxA({ text }) {
  return (
    <Box
      fontFamily="Helvetica"
      fontSize={14}
      letterSpacing={2}
      lineHeight={1.8}
      textAlign="center"
      color="#786379"
    >
      {text}
    </Box>
  );
}

export function ServicesHeader() {
  const classes = useStyles();

  return (
    <>
      <Container>
        <Box direction="column">
          <Box
            fontFamily="Helvetica"
            fontSize={14}
            letterSpacing={2}
            lineHeight={1.8}
            textAlign="center"
            color="#786379"
          >
            A home inspection is only as good as the inspector. That’s why IG
            Inspections LLC is your best choice for home inspections in New
            Jersey. With over 30 years experience restoring, building, and
            designing homes, whether you’re a homeowner, homebuyer, or agent
            we’ll provide you with a detailed description of a home’s condition
            so you can move forward confidently and with peace of mind.
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
            FULL SERVICE INSPECTIONS include:
          </Box>
        </Box>
      </Container>
    </>
  );
}
