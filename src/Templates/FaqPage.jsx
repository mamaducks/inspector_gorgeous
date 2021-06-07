import { Box, Container, Grid } from "@material-ui/core";
import { FaqAccordion } from "../Components/App/FaqAccordion";

import { DisplayCenterBox, LayoutBox, LayoutRBox, PadBox } from "../Components/Box/MyBox";
import { OurPromise } from "../Components/Profile/Promise";
import { SERVICES } from "../Components/Services/Services";
import { ScheduleButtonNew } from "../Components/App/ScheduleButton";
import House from "../img/houseMag.png";
import Corner from "../img/houseC.png";

import PinkMag from "../img/pinklistmag.png";
import Thumbup from "../img/guythumbup.png";
import ThumbCheck from "../img/thumbupCheck.png";
import GuyCheck from "../img/guycheck.png";
// import MagHouse from "../img/maghouse.png";
import { Title } from "../Components/App/HeaderTitle";
import Building from "../img/bldginspect.png";

export const FaqPage = () => {
  return (
    <Box direction="column">
      <Container>
        <Grid xs={12} style={{paddingTop: "25px"}}>
          <LayoutRBox
            image={House}
            width="500"
            height="400"
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
              width="600px"
              height="400px"
              button={<ScheduleButtonNew title="Schedule Today"/>}
            >
              {SERVICES.map((service) => (
                <li key={service}>{service}</li>
              ))}
              <PadBox/>
             
            </LayoutBox>
            
            <FaqAccordion />
          </Grid>
          {/* <OurPromise /> */}
        </Grid>
      </Container>
    </Box>
  );
};

// const Question = {
//   summary="A home inspection is only as good as the inspector.
//                With over 30 years experience restoring, building,
//               and designing homes Buyer Beware is the top choice in south
//               jersey for your home inspection services. "
//               second="
//               Whether you’re a
//               homeowner, homebuyer, or agent we’ll provide you with a
//               detailed description of a home’s condition so you can move
//               forward confidently and with peace of mind.
//               Our inspections give you detailed report so you have the comfort
//               and knowledge to make informed decisions about your home. Some
//               issues are easily identified and others need a more in-depth and
//               educated analysis. We will inspect all of the systems within your
//               home – from roof to basement – to ensure that everything is in
//               proper working order. I encourage you to attend, and accompany me
//               during the inspection."
//               third="Feel free to ask questions as we inspect the premises together.
//               I will give you a full explanation, in non-technical terms, to
//               provide you with a better understanding of the systems within
//               your home. You can then consider what needs to be addressed and
//               budgeted for immediate attention or what can be put it on the
//               to-do list."
//               fourth="Your detailed Buyer Beware Inspection Report will be done by a
//               highly trained home inspector with details about your homes
//               condition, images and recommendations, delivered within 24
//               hours (next business day) – often the same day"
//               summary=""
// }