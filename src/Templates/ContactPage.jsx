import React from "react";
import { Title } from "../Components/App/HeaderTitle";
import { Box, Container } from "@material-ui/core";
import MapImage from "../img/locationimg.png";
import { ContactInfo, InfoView } from "../Components/Profile/ContactInfo";
import { DisplayEvenBox, MyMapBox, MyInfoBox } from "../Components/Box/MyBox";
import ContactForm from "../Components/App/ContactForm";
import { OldMap } from "../App/Map";

const location = {
  address: "located in Berlin NJ",
  lat: 39.7912,
  lng: 74.9291,
};

export const ContactPage = () => {
  return (
    <>
      {/* <Title title="Contact Us" /> */}
      <Container style={{ display: "flex", flexDirection: "column" }}>
        <Box display="flex" flexDirection="column">
          <Box
            paddingTop="25px"
            letterSpacing={1.4}
            lineHeight={1.4}
            width="70%"
            alignSelf="center"
          >
             Buyer Beware is based out of Berlin, NJ and offers Home
            Inspection services to areas of New Jersey and Philadelphia.
            {/* We welcome you to contact us with any questions, comments, or
            concerns. */}
          </Box>

          <Box
            display="flex"
            justifyContent="space-evenly"
            width="80%"
            alignSelf="center"
          >
            {/* <img
              alt=""
              src={MapImage}
              width="415"
              height="380"
              style={{ padding: 20, alignSelf: "center" }}
            /> */}
            <OldMap location={location} />
            {/* <ContactInfo /> */}
            <InfoView />
          </Box>

          <Box letterSpacing={1.2} alignSelf="center">
            Monday thru Friday 8:00 am - 7:00 pm Saturday 9:00 am - 5:00 pm
            Sunday Closed
          </Box>
        </Box>
      </Container>

      <Box
        textAlign="center"
        letterSpacing={1.5}
        lineHeight={3}
        fontWeight={700}
        color="#cdcdcd"
        marginTop="21px"
        marginBottom="15px"
        style={{ backgroundColor: "#c54299" }}
      >
        Traditional Home Inspections • Pre-Listing Inspections • Radon Testing •
        Termite Inspections
      </Box>

      <Container>
        <DisplayEvenBox>
          <Box letterSpacing={1.2} lineHeight={1.2}>
            Call or email us if you have any questions or use our online
            scheduler to set up a home inspection.
            <div>
              Let us know how we can help you, by filling out the form. We will
              get back to you as soon as possible. Feel free to call us if you
              are in need of assistance immediately.
            </div>
          </Box>
          <ContactForm />
        </DisplayEvenBox>
      </Container>
    </>
  );
};
