import {
  ServiceCard,
  ServiceInclude,
} from "../Components/Services/ServiceListCard";
import { ScheduleButtonNew } from "../Components/App/ScheduleButton";
import { Box, Container, Grid } from "@material-ui/core";
import {
  LayoutRBox,
  PadBox,
  DisplayCenterBox,
  LayoutBox,
  OuterLayout,
  InnerContent,
  HeadingBox,
  MyFlexBox,
} from "../Components/Box/MyBox";
import { Services, ServicesInclude } from "../Components/Services/ServiceTypes";

import ManMag from "../img/magman.png";
import ThumbUp from "../img/guythumbup.png";
import MagHouse from "../img/houseMagnify.png";
import {
  AppServiceList,
  allServiceState,
} from "../Components/Services/ServiceList";
import Drone from "../img/drone.png";
import Thermal from "../img/thermal.png";

export function ServicesPage() {
  return (
    <>
      {/* <Title title="Services" /> */}

      <Container>
        <Grid>
          <Grid item xs={12}>
            <OuterLayout image={MagHouse} width="530px" height="380px">
              <InnerContent
                heading={<HeadingBox heading="Home Inspection Services" lineHeight={1} />}
                summary={
                  <>
                    <div>
                      Home inspections provide valuable information before you
                      buy a home. We will look at things like a home’s
                      foundation, structural components, roof, HVAC, plumbing,
                      and electrical systems, then provide a detailed report of
                      a home’s condition so you can move forward confidently
                      with peace of mind and knowledge to make informed
                      decisions about your home.
                    </div>
                    <div>
                      With over 20 years experience restoring, building, and
                      designing homes Buyer Beware is the top choice in south
                      jersey for your home inspection services."
                    </div>
                  </>
                }
              />
            </OuterLayout>
            
          </Grid>
          <PadBox />
          <Grid>
            <Services image={Drone} />
            <PadBox />
            <Box
              fontSize="18px"
              fontWeight="400"
              textAlign="center"
              lineHeight={2}
              paddingTop="23px"
            >
              Our Full Service Inspections Include &mdash;
            </Box>
            <ServiceInclude />
            {/* <ServicesInclude services/> */}
            {/* <Service /> */}
          </Grid>
          {/* <Box display="flex">
            <div>
            Tools We Use During Your Inspection
            <MyFlexBox>

            <div>

            <div>Thermal Camera</div>
            <img alt="" src={Drone} style={{ alignSelf: "center" }} width="200px" height="200px" />
            </div>

           <div>
            <div>Ariel Drone</div>
            <img alt="" src={Thermal} style={{ alignSelf: "center" }} width="200px" height="200px" />
            </div>

            
            </MyFlexBox>
            </div>
          </Box> */}
        </Grid>
      </Container>
    </>
  );
}
