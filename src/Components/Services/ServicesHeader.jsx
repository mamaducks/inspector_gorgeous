import { Box, Container, Typography } from "@material-ui/core";
import React from "react";

export function ServicesHeader() {
  return (
    <>
      <Box direction="column">
        <Container>
          <div>
            <Typography>
              GIVING YOU THE MOST FROM YOUR HOME INSPECTION WE OFFER THE MOST
              THOROUGH HOME INSPECTION SERVICES UTILIZING THE LATEST TECHNOLOGY
              FOR TOTAL PEACE OF MIND!
            </Typography>
            <Typography>
              Our expert home inspections provide detailed reports clearly
              identifying any material defect along with a recommendation for
              what to do as well as what can happen if not repaired. Your home
              inspection and report will cover the condition of the home’s
              heating system; central air conditioning system (temperature
              permitting); interior plumbing and electrical systems; the roof,
              attic and visible insulation; walls, ceilings, floors, windows and
              doors; the foundation, basement and structural components.
            </Typography>
          </div>
        </Container>
      </Box>
    </>
  );
}
