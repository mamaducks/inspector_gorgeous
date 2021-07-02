import { Box, Divider } from "@material-ui/core";
import React from "react";
import { HiOutlineMail, HiOutlineHeart } from "react-icons/hi";
import { Social } from "../../Components/Social/SocialMedia";
import {
  NewContainer,
  
  DivBox,
  FlexBox,
} from "../../Components/Box/AppBoxes";
import Happy from "../../img/happyHouse.png";
import Heart from "../../img/heart.svg";
import MapImage from "../../img/mapNJ.png";
import Locate from "../../img/locateSVG.svg";
import Mail from "../../img/mailSVG.svg";
import Phone from "../../img/phoneSVG.svg";
import { InfoBox } from "../../Components/Box/AppBoxes";

function Days({ children }) {
  return (
    <Box fontWeight="bold" style={{ paddingInline: "10px" }}>
      {children}
    </Box>
  );
}


function ContactBox({ children, ...props }) {
  return (
    <Box
      textAlign="center"
      fontSize="22px"
      display="flex"
      fontWeight="lighter"
      alignItems="center"
      justifyContent="center"
      letterSpacing={1}
      {...props}
    >
      {children}
    </Box>
  );
}


export const ContactPage = () => {
  return (
    <>
      <NewContainer>
        <FlexBox alignSelf="center" style={{paddingBlock:"28px"}}>
          <img
            alt=""
            src={Happy}
            width="80px"
            height="80px"
            style={{ paddingRight: "30px" }}
          />

          <DivBox>
            <Box fontSize="1.15em">
              Buyer Beware Home Inspections is based out of Berlin, NJ
            </Box>
            <Divider />
            We offer Home Inspection services to areas of New Jersey and
            Philadelphia
          </DivBox>
        </FlexBox>
        <FlexBox>
          <img alt="" src={MapImage} />
          <FlexBox alignSelf="center" flexDirection="column">
            <InfoBox Icon={Phone} info="p: 609-670-0451" />
            <InfoBox Icon={Locate} info="Berlin, NJ 08009" />
            <InfoBox Icon={Mail} info="BuyerBewareHomeInspections@gmail.com" />
          </FlexBox>
        </FlexBox>
        
        <ContactBox
          marginBlock="12px"
          justifyContent="space-evenly"
          fontSize="17px"
          alignSelf="center"
          style={{paddingBlock:"15px"}}
        >
          <Days>Monday thru Friday</Days> 8:00 am - 7:00 pm{" "}
          <Days>Saturday</Days> 9:00 am - 5:00 pm
          <Days>Sunday </Days>Closed
        </ContactBox>
      </NewContainer>

      
      <NewContainer >
        <Box alignSelf="center" style={{ paddingTop: "15px" }}>
          <ContactBox>
            {" "}
            Have any questions? We'd{" "}
            {/* <HiOutlineHeart fontSize="45px" color="#a71976" /> */}
            <img alt="" src={Heart} width="40px" height="35px" padding="7px" color="#a71976"/>
            to hear from you!
          </ContactBox>
          <Divider />

          <Social
            color="#a71976"
            fontSize="35px"
            label={<HiOutlineMail color="#a71976" fontSize="35px" />}
          />
        </Box>
        </NewContainer>
        <ContactBox
        fontWeight="700"
        fontSize="large"
        lineHeight={2}
        style={{ color: "#ffffff", backgroundColor: "#a71976" }}
      >
        Traditional Home Inspections • Pre-Listing Inspections • Radon Testing •
        Termite Inspections
      </ContactBox>
      

    </>
  );
};
