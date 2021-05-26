import React from "react";
import { Title } from "../Components/App/HeaderTitle";
import { Box, Container } from "@material-ui/core";
import MapImage from "../img/locationimg.png";
import { ContactInfo } from "../Components/Profile/ContactInfo";
import { DisplayEvenBox, MyMapBox, MyInfoBox } from "../Components/Box/MyBox";
import ContactForm from "../Components/App/ContactForm";
import {ScheduleMeetingComponentInYourApp} from "../Components/App/ScheduleMeeting";

export const ContactPage = () => {
  return (
    <>
      {/* <Title title="Contact Us" /> */}
      <Container style={{ display: "flex", flexDirection: "column" }}>
        <Box
          paddingTop={4}
          letterSpacing={1.5}
          lineHeight={1.6}
          width="55rem"
          alignSelf="center"
        >
          We welcome you to contact us with any questions, comments, or
          concerns. Buyer Beware is based out of Berlin, NJ and offers Home
          Inspection services to areas of New Jersey and Philadelphia
        </Box>

        <Box
          display="flex"
          justifyContent="space-evenly"
          paddingTop="10px"
          paddingBottom="10px"
          width="70%"
          alignSelf="center"
        >
          <img
            alt=""
            src={MapImage}
            width="415"
            height="380"
            style={{ padding: 20, alignSelf: "center" }}
          />

          <ContactInfo />
        </Box>

        <Box
          letterSpacing={1.5}
          lineHeight={1.6}
          width="55rem"
          alignSelf="center"
        >
          Monday thru Friday 8:00 am - 7:00 pm Saturday 9:00 am - 5:00 pm Sunday
          Closed
        </Box>
      </Container>

      <Box
        textAlign="center"
        letterSpacing={1.5}
        lineHeight={3}
        fontWeight={700}
        color="#cdcdcd"
        style={{ backgroundColor: "#a51b77", marginBottom: 15, marginTop: 15 }}
      >
        Traditional Home Inspections • Pre-Listing Inspections • Radon Testing •
        Termite Inspections
      </Box>

      <Container>
        <DisplayEvenBox>
          <Box letterSpacing={1.5} lineHeight={1.6}>
            Call or email us if you have any questions or use our online
            scheduler to set up a home inspection.
            <div>
              Let us know how we can help you, by filling out the form. We will
              get back with you as soon as possible. Feel free to call us if you
              are in need of assistance immediately.
            </div>
          </Box>
          <ContactForm />
        </DisplayEvenBox>
        <ScheduleMeetingComponentInYourApp />
      </Container>
    </>
  );
};
