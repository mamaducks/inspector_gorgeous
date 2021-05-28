import { ServiceCard } from "../Components/Services/ServiceListCard";
import { ScheduleButton } from "../Components/App/ScheduleButton";
import { Box, Container, Grid } from "@material-ui/core";
import { LayoutRBox } from "../Components/Box/MyBox";
import { Services } from "../Components/Services/ServiceTypes";

import ManMag from "../img/magman.png";
import ThumbUp from "../img/guythumbup.png";
import MagHouse from "../img/magnifyhouse.png";

export function ServicesPage() {
  return (
    <>
      {/* <Title title="Services" /> */}

      <Container>
        <Grid xs={12}>
          <Grid item xs={12}>
            <LayoutRBox
              image={MagHouse}
              height="250px"
              width="250px"
              heading="content header"
              summary="A home inspection is only as good as the inspector. That’s why
              IG Inspections LLC is your best choice for home inspections in
              New Jersey. With over 30 years experience restoring, building,
              and designing homes Buyer Beware is the top choice in south
              jersey for your home inspection services. Whether you’re a
              homeowner, homebuyer, or agent we’ll provide you with a
              detailed description of a home’s condition so you can move
              forward confidently and with peace of mind."
              second="Our inspections give you detailed report so you have the comfort
              and knowledge to make informed decisions about your home. Some
              issues are easily identified and others need a more in-depth and
              educated analysis. We will inspect all of the systems within your
              home – from roof to basement – to ensure that everything is in
              proper working order. I encourage you to attend, and accompany me
              during the inspection."
              third="Feel free to ask questions as we inspect the premises together.
              I will give you a full explanation, in non-technical terms, to
              provide you with a better understanding of the systems within
              your home. You can then consider what needs to be addressed and
              budgeted for immediate attention or what can be put it on the
              to-do list."
              fourth="Your detailed Buyer Beware Inspection Report will be done by a
              highly trained home inspector with details about your homes
              condition, images and recommendations, delivered within 24
              hours (next business day) – often the same day"
            ></LayoutRBox>
          </Grid>
          <Grid>
            <Services image={ManMag} />

            <Box fontWeight="bold" textAlign="center" paddingTop="23px">
              Our Full Service Inspections include:
            </Box>
          </Grid>
        </Grid>
      </Container>

      <div>
        {/* <NewServiceCard /> */}
        <ServiceCard />
        {/* <ContactCard /> */}
        <ScheduleButton />
      </div>
    </>
  );
}
