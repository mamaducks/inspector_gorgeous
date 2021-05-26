import React from "react";
import { FaqAccordion } from "../Components/App/FaqAccordion";
import { Title } from "../Components/App/HeaderTitle";

import { Box, Container, makeStyles, Grid } from "@material-ui/core";
import PinkMag from "../img/pinklistmag.png";
import Thumbup from "../img/guythumbup.png";
import { DisplayBox } from "../Components/Box/MyBox";
import { OurPromise } from "../Components/Profile/Promise";
import { SERVICES } from "../Components/Services/Services";

export const FaqPage = () => {
  return (
    <Box direction="column">
      <Container>
        <Grid xs={12}>
          <Box display="flex" padding="7px">
            <Box
              width="100%"
              alignSelf="center"
              display="flex"
              justifyContent="center"
            >
              <img alt="" src={PinkMag} width="190px" height="190px" />
            </Box>

            <Box paddingBottom="30px">
              <Box
                fontWeight="bold"
                color="#751f66"
                lineHeight={3}
                textAlign="center"
              >
                WHAT TO EXPECT FROM YOUR HOME INSPECTION
              </Box>

              <Box
                textAlign="start"
                lineHeight={1.5}
                letterSpacing={1.7}
                width="51em"
              >
                <div>
                  Buyers Beware inspector will provide you with the best home
                  inspection service and a comprehensive report on the condition
                  of the property. Our home inspectors are always reliable,
                  professional, and knowledgeable.{" "}
                </div>
                Our New Jersey home inspection is an in-depth objective visual
                analysis of a home`s structure and mechanical systems. An
                inspection will determine the areas of the home that are not
                performing properly, as well as items that are beyond their
                useful life or are unsafe. We will provide you with a detailed
                reports clearly identifying any material defect along with a
                recommendation for what to do as well as what can happen if not
                repaired. covering the condition of the home’s heating system;
                central air conditioning system (temperature permitting);
                interior plumbing and electrical systems; the roof, attic and
                visible insulation; walls, ceilings, floors, windows and doors;
                the foundation, basement and structural components. Roof
                inspections will be done via drone which will capture any
                defects in vivid detail including roof coverings, drainage
                systems, vent penetrations as well as any flashing. Infrared
                Thermography is used by LDG for the most thorough inspections
                available.
              </Box>
            </Box>
          </Box>
          <Grid item xs={12}>
            <DisplayBox>
              <Box alignSelf="center">
                <Box fontWeight="bold" color="#751f66" lineHeight={3}>
                  WE INSPECT THE FOLLOWING WHEN VISIBLE AND ACCESSIBLE:
                </Box>

                <Box
                  letterSpacing={1}
                  lineHeight={1.5}
                  // textAlign="center"
                  width="58em"
                  color="#751f66"
                  fontSize={17}
                >
                  <ul>
                    {SERVICES.map((service) => (
                      <li key={service}>{service}</li>
                    ))}
                  </ul>
                </Box>
              </Box>

              <Box
                width="100%"
                alignSelf="center"
                display="flex"
                justifyContent="center"
                paddingLeft="20px"
              >
                <img alt="" src={Thumbup} width="200px" height="200px" />
              </Box>
            </DisplayBox>
            <FaqAccordion />
          </Grid>
          {/* <OurPromise /> */}
        </Grid>
      </Container>
    </Box>
  );
};
