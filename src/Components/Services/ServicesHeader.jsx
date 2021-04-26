import { Box, Container, Typography } from "@material-ui/core";
import React from "react";

export function ServicesHeader() {
  return (
    <>
      <Box direction="column">
        <Container>
          <div>
            <div>
              <Box
                fontFamily="Helvetica"
                fontSize={14}
                letterSpacing={2}
                lineHeight={1.8}
                textAlign="center"
                color="#786379"
              >
                A home inspection is only as good as the inspector. That’s why
                IG Inspections LLC is your best choice for home inspections in
                New Jersey. With over 30 years experience restoring, building,
                and designing homes, whether you’re a homeowner, homebuyer, or
                agent we’ll provide you with a detailed description of a home’s
                condition so you can move forward confidently and with peace of
                mind.
              </Box>
            </div>
            <div>
              Home Inspections\nWe offer the following specialized inspection
              services:\n\n• Pre-Listing Inspection for Seller\n\n• Pre-Purchase
              Inspection for Buyer\n\n• New Construction Home Inspection\n\n•
              Multi-Unit Property Inspection\n\n• Radon Testing\n\n• Townhouse
              Home Inspection\n\n• Condo Inspection
            </div>
          </div>
        </Container>
      </Box>
    </>
  );
}
