import React from "react";
import { Container, Box, Grid, Button, makeStyles } from "@material-ui/core";
import MagList from "../img/newEmmaLogo.png";
import CheckBox from "../img/checkedbox.png";
import {
  DisplayBox,
  ImageBox,
  DisplayCenterBox,
} from "../Components/Box/MyBox";
import { ScheduleButton } from "../Components/App/ScheduleButton";
import { INSPECT_TYPE } from "../Components/Services/Services";

export const HomePage = () => {
  return (
    <Container>
      <Grid container>
        <Grid item xs={12}>
          <DisplayBox>
            <ImageBox>
              <img alt="" src={MagList} width="345" height="320" />
            </ImageBox>

            <Box
              lineHeight={1.5}
              letterSpacing={1}
              justifyContent="center"
              display="flex"
              flexDirection="column"
            >
              <Box fontWeight="bold" lineHeight={3}>
                Let Us Help You Get to Know Your Home
              </Box>
              <Box width="45em">
                At Buyer Beware Home Inspections, we fully understand the
                importance of a thorough home inspection, and that’s why we work
                so hard to offer you the very best. Let us provide an unbiased,
                comprehensive, visual inspection of your entire home and
                property. Walk through the home with us on inspection day, and
                learn about the home’s features, as well as tips for care and
                maintenance. We take the time to find the smallest details and
                issues and answer all your questions. With over 20 years of all
                aspects of real estate construction experience under our belts,
                we have the knowledge needed to help you get to know your new
                home.
              </Box>
            </Box>
          </DisplayBox>
          <Box display="flex">
            <div>
              <Box letterSpacing={1} lineHeight={1.5}>
                <Box fontWeight="bold" lineHeight={2}>
                  We offer the following specialized inspection services:
                </Box>

                <Box display="flex" justifyContent="flex-start">
                  <ul>
                    {INSPECT_TYPE.map((service) => (
                      <li key={service}>{service}</li>
                    ))}
                  </ul>
                </Box>
              </Box>
            </div>
            <Box alignSelf="center">
              <img alt="" src={CheckBox} width="100" height="100" />
            </Box>
          </Box>
          <ScheduleButton />
        </Grid>
      </Grid>
    </Container>
  );
};
