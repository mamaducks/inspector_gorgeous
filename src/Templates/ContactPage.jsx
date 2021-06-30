import { Box, Container, Divider, makeStyles } from "@material-ui/core";
import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { Social } from "../App/AppBar/SocialMedia";

import { LayoutBox } from "../Components/Box/AppBoxes";
import { NewContainer } from "../Components/Box/AppBoxes";
import Happy from "../img/happyHouse.png";
import Heart from "../img/heart.svg";
import MapImage from "../img/mapNJ.png";
import Locate from "../img/locateSVG.svg";
import Mail from "../img/mailSVG.svg";
import Phone from "../img/phoneSVG.svg";
import { InfoBox } from "../Components/Box/AppBoxes";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
  },
  header: {
    paddingBlock: "25px",
    letterSpacing: 1,
    lineHeight: 1.3,
    marginInline: "20px",
    alignSelf: "center",
    display: "flex",
    justifyContent: "space-evenly",
    "& img": {
      width: "75px",
      height: "75px",
      paddingRight: "25px",
    },
  },

});


function ContactHeader() {
  const classes = useStyles();
  return (
    <Box className={classes.header}>
      <img alt="" src={Happy} />
      <Box
        justifyContent="center"
        display="flex"
        flexDirection="column"
        alignContent="end"
        width="43rem"
        fontWeight="lighter"
        lineHeight={1.3}
        letterSpacing={1}
      >
        <Box fontSize="1.15em">
          Buyer Beware Home Inspections is based out of Berlin, NJ
        </Box>
        <Divider />
        We offer Home Inspection services to areas of New Jersey and
        Philadelphia
      </Box>
    </Box>
  );
}


function InfoMap() {
  return (
    <Box display="flex" justifyContent="space-evenly">
      <img alt="" src={MapImage} />
      {/* <InfoCard /> */}
      <Box display="flex">
        <Box alignSelf="center">
          <InfoBox Icon={Phone} info="p: 609-670-0451" />
          <InfoBox Icon={Locate} info="Berlin, NJ 08009" />
          {/* <AllInfo Icon={Email}>
            <InfoBox info="BuyersBewareHomeInspections@gmail.com" />
          </AllInfo> */}
          <InfoBox
            Icon={Mail}
            info={
              <>
                <div>Buyer Beware Home Inspections</div>
                <div>P. O. Box 463</div>
                <div>Bordentown, NJ 08505</div>
              </>
            }
          />
        </Box>
      </Box>
    </Box>
  );
}


function Hours() {
  return (
    <Box
      letterSpacing={1}
      lineHeight={2}
      alignSelf="center"
      marginBlock="12px"
      display="flex"
      fontWeight="lighter"
      justifyContent="space-evenly"
      fontSize="18px"
      paddingInline="10px"
    >
      <Days>Monday thru Friday</Days> 8:00 am - 7:00 pm <Days>Saturday</Days>{" "}
      9:00 am - 5:00 pm
      <Days>Sunday </Days>Closed
    </Box>
  );
}


function ServicesLine() {
  return (
    <Box
      textAlign="center"
      letterSpacing={1.5}
      lineHeight={1.5}
      fontWeight="700"
      fontSize="larger"
      style={{ color: "#ffffff", backgroundColor: "#a71976" }}
    >
      Traditional Home Inspections • Pre-Listing Inspections • Radon Testing •
      Termite Inspections
    </Box>
  );
}

function SocialBox() {
  return (
    <Box
      textAlign="center"
      fontSize="22px"
      display="flex"
      fontWeight="lighter"
      alignItems="center"
      justifyContent="center"
    >
      Have any questions? We'd{" "}
      <img alt="" src={Heart} width="40px" height="35px" padding="4px" />
      to hear from you!
    </Box>
  );
}

function Days({ children }) {
  return (
    <Box fontWeight="bold" style={{ paddingInline: "20px" }}>
      {children}
    </Box>
  );
}


export const ContactPage = () => {
  const classes = useStyles();
  return (
    <>
      <NewContainer>
        
          <ContactHeader />

          <InfoMap />
      
        <Hours />


      </NewContainer>

      <ServicesLine />

      <NewContainer>
        <Box style={{ paddingBlock: "15px" }}>
          <SocialBox />

          <Divider />

          <Social
            color="#a71976"
            justifyContent="space-evenly"
            fontSize="40px"
            label={<HiOutlineMail color="#a71976" fontSize="40px" />}
          />
        </Box>
      </NewContainer>
    </>
  );
};
