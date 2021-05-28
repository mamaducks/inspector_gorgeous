import { Box, Container, Grid } from "@material-ui/core";
import { FaqAccordion } from "../Components/App/FaqAccordion";

import { DisplayBox, LayoutBox, LayoutRBox } from "../Components/Box/MyBox";
import { OurPromise } from "../Components/Profile/Promise";
import { SERVICES } from "../Components/Services/Services";
import { ScheduleButton } from "../Components/App/ScheduleButton";
import House from "../img/round.png";
import Corner from "../img/corner.png";

import PinkMag from "../img/pinklistmag.png";
import Thumbup from "../img/guythumbup.png";
import ThumbCheck from "../img/thumbupCheck.png";
import GuyCheck from "../img/guycheck.png";
import MagHouse from "../img/maghouse.png";
import { Title } from "../Components/App/HeaderTitle";
import Building from "../img/bldginspect.png";

export const FaqPage = () => {
  return (
    <Box direction="column">
      <Container>
        <Grid xs={12} style={{paddingTop: "25px"}}>
          <LayoutRBox
            image={House}
            width="345"
            height="320"
            heading="WHAT TO EXPECT FROM YOUR HOME INSPECTION"
            summary=" Buyers Beware inspector will provide you with the best home
            inspection service and a comprehensive report on the condition
            of the property. Our home inspectors are always reliable,
            professional, and knowledgeable."
            second="Our New Jersey home inspection is an in-depth objective visual
          analysis of a home`s structure and mechanical systems. An
          inspection will determine the areas of the home that are not
          performing properly, as well as items that are beyond their
          useful life or are unsafe."
            third="We will provide you with a detailed reports clearly
          identifying any material defect along with a recommendation
          for what to do as well as what can happen if not repaired."
          />
          <Grid item xs={12} style={{paddingTop: "25px"}}>
            <LayoutBox
              heading="WE INSPECT THE FOLLOWING WHEN VISIBLE AND ACCESSIBLE:"
              image={Corner}
              width="365px"
              height="430px"
            >
              {SERVICES.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </LayoutBox>
            <ScheduleButton />
            <FaqAccordion />
          </Grid>
          {/* <OurPromise /> */}
        </Grid>
      </Container>
    </Box>
  );
};
