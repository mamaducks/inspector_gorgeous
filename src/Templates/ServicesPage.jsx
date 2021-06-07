import {
  ServiceCard,
  ServiceInclude,
} from "../Components/Services/ServiceListCard";
import { ScheduleButtonNew } from "../Components/App/ScheduleButton";
import { Box, Container, Grid } from "@material-ui/core";
import { LayoutRBox, PadBox, DisplayCenterBox, LayoutBox } from "../Components/Box/MyBox";
import { Services, ServicesInclude } from "../Components/Services/ServiceTypes";

import ManMag from "../img/magman.png";
import ThumbUp from "../img/guythumbup.png";
import MagHouse from "../img/magnifyhouse.png";
import {
  AppServiceList,
  allServiceState,
} from "../Components/Services/ServiceList";

export function ServicesPage() {
  return (
    <>
      {/* <Title title="Services" /> */}

      <Container>
        <Grid xs={12}>
          <Grid item xs={12}>
            <LayoutRBox
              image={MagHouse}
              width="400px"
              height="320px"
              heading="content header"
              summary="A home inspection is only as good as the inspector.
               With over 30 years experience restoring, building,
              and designing homes Buyer Beware is the top choice in south
              jersey for your home inspection services. "
              second="
              Whether you’re a
              homeowner, homebuyer, or agent we’ll provide you with a
              detailed description of a home’s condition so you can move
              forward confidently and with peace of mind 
              and knowledge to make informed decisions about your home."
            ></LayoutRBox>
          </Grid>
          <PadBox />
          <Grid>
            <Services image={ManMag} />
            <PadBox />
            <Box fontWeight="bold" textAlign="center" paddingTop="23px">
              Our Full Service Inspections include:
            </Box>
            <ServiceInclude />
            {/* <ServicesInclude services/> */}
            {/* <Service /> */}
<DisplayCenterBox>
            <Box  letterSpacing={0.5} lineHeight={1.3} width="58rem" alignSelf="center">
              Your detailed Buyer Beware Inspection Report will be done by a
              highly trained home inspector with details about your homes
              condition, images and recommendations, delivered within 24 hours
              (next business day) – often the same day
            </Box>
            </DisplayCenterBox>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
