import { Box, Divider } from "@material-ui/core";
import { useMediaQuery } from "react-responsive";
import { BsHeart } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { FaMobileAlt, FaMapMarkerAlt } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { Days, BusinessInfoBox, ContactBox, InfoBox } from "./ContactBox";
import { Social } from "../../Components/Social/SocialMedia";
import { NewContainer, DivBox, FlexBox } from "../../Components/Box/AppBoxes";
import Happy from "../../img/happyHouse.png";
import MapImage from "../../img/mapNJ.png";

export const ContactPage = () => {
  const isWide = useMediaQuery({
    query: "(min-device-width: 700px)",
  });

  return (
    <>
      <NewContainer>
        <FlexBox alignSelf="center" style={{ paddingBlock: "20px" }}>
          <img
            alt=""
            src={Happy}
            width="80px"
            height="80px"
            style={{
              paddingRight: "30px",
            }}
          />

          <DivBox>
            <Box fontSize="1.5rem">
              Buyer Beware Home Inspections is based out of Berlin, NJ
            </Box>
            <Divider />
            We offer Home Inspection services to areas of New Jersey and
            Philadelphia
          </DivBox>
        </FlexBox>

        <FlexBox flexWrap="wrap">
          <img alt="" src={MapImage} style={{ paddingBlock: "10px" }} maxWidth="100%" height="auto"/>
          <FlexBox
            alignSelf="center"
            flexDirection="column"
            lineHeight="2"
            fontSize="1.25rem"
          >
            <InfoBox Icon={<FaMobileAlt />} info="p: 609-670-0451" />
            <InfoBox Icon={<FaMapMarkerAlt />} info="Berlin, NJ 08009" />
            <InfoBox
              Icon={<FiMail />}
              info="BuyerBewareHomeInspections@gmail.com"
            />
            <BusinessInfoBox />
          </FlexBox>
          {isWide && (
            <ContactBox
              marginBlock="12px"
              justifyContent="space-evenly"
              fontSize="1.2rem"
              alignSelf="center"
              style={{ paddingBlock: "10px" }}
              flexWrap="wrap"
            >
              <FlexBox>
                <Days>Monday thru Friday</Days>
                8:00 am - 7:00 pm{" "}
              </FlexBox>
              <FlexBox>
                <Days>Saturday</Days>
                9:00 am - 5:00 pm
              </FlexBox>
              <FlexBox>
                <Days>Sunday </Days>
                Closed
              </FlexBox>
            </ContactBox>
          )}
        </FlexBox>
      </NewContainer>

      <NewContainer>
        <Box alignSelf="center" style={{ paddingBlock: "5px" }}>
          <ContactBox flexWrap="wrap">
            {" "}
            Have any questions? We'd{" "}
            <BsHeart
              fontSize="45px"
              color="#a71976"
              style={{ padding: "8px" }}
            />
            to hear from you!
          </ContactBox>
          <Divider />

          <Social
            color="#a71976"
            fontSize="35px"
            style={{ paddingBottom: "12px" }}
            label={<HiOutlineMail color="#a71976" fontSize="35px" />}
          />
        </Box>
      </NewContainer>
      <ContactBox
        fontWeight="700"
        fontSize="1.2rem"
        lineHeight={2}
        style={{ color: "#ffffff", backgroundColor: "#a71976" }}
      >
        Traditional Home Inspections • Pre-Listing Inspections • Radon Testing •
        Termite Inspections
      </ContactBox>
    </>
  );
};
