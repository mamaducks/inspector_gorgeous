import React from "react";
import { Title } from "../Components/App/HeaderTitle";
import { Box, Container } from "@material-ui/core";
import MapImage from "../img/mapNJ.png";
import { ContactInfo, InfoView } from "../Components/Profile/ContactInfo";
import { DisplayEvenBox, MyMapBox, MyInfoBox } from "../Components/Box/MyBox";
import ContactForm from "../Components/App/ContactForm";
import { OldMap } from "../App/Map";
import {Social} from "../Components/App/SocialMedia";
import Heart from "../img/heart.svg"
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
        <Box display="flex" flexDirection="column" >
          <Box
            paddingTop="25px"
            paddingBottom="20px"
            letterSpacing={1.2}
            lineHeight={1.4}
            textAlign="center"
            alignSelf="center"
          >
             Buyer Beware Home Inspections is based out of Berlin, NJ
             <div> We offer Home
            Inspection services to areas of New Jersey and Philadelphia
            </div>
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
            {/* <OldMap location={location} /> */}
            <img alt="" src={MapImage} />
            {/* <ContactInfo /> */}
            <InfoView />
          </Box>

          <Box letterSpacing={1} alignSelf="center" paddingTop="20px" >
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
        color="#ffffff"
        marginTop="21px"
        marginBottom="15px"
        style={{ backgroundColor: "#a71976" }}
      >
        Traditional Home Inspections • Pre-Listing Inspections • Radon Testing •
        Termite Inspections
      </Box>

      <Container>
        
          <Box letterSpacing={1} lineHeight={2} >
            <Box textAlign="center" fontSize="22px" display="flex" alignItems="center" >Have any questions?{" "} We'd <img alt="" src={Heart} width="40px" height="35px" style={{padding:"4px"}}/>to hear from you!</Box>
            {/* Feel free to call or email us if you have any questions or reach out to us online */}
            <Box paddingTop="10px">
            <div style={{ borderTop: "2px solid #a71976 ", marginLeft: 20, marginRight: 20 }}></div>
            <div>
            <Social fontSize="60px" alignSelf="center" width="100%" justifyContent="space-evenly" paddingTop="10px" color="#a71976"/>
            </div>
            </Box>
          </Box>
          {/* <ContactForm /> */}
      
      </Container>
    </>
  );
};
