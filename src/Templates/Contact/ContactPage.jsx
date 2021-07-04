import { Box, Divider } from "@material-ui/core";
import { useMediaQuery } from "react-responsive";
import { ContactBox } from "./ContactBox";
import { ContactSocial } from "./ContactSocial";
import { ContactMap } from "./ContactMap";
import { NewContainer, DivBox, FlexBox } from "../../Components/Box/AppBoxes";
import Happy from "../../img/happyHouse.png";

export const ContactPage = () => {
  const isWide = useMediaQuery({
    query: "(min-device-width: 800px)",
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
            <Box fontSize="2vw">
              Buyer Beware Home Inspections is based out of Berlin, NJ
            </Box>
            <Divider />
            <Box fontSize="1.5vw">
              We offer Home Inspection services to areas of New Jersey and
              Philadelphia
            </Box>
            
          </DivBox>
        </FlexBox>

        <ContactMap />
      </NewContainer>

      <ContactSocial />
      {isWide && (
        <ContactBox
          fontWeight="700"
          fontSize="1.2vw"
          lineHeight={2}
          style={{ color: "#ffffff", backgroundColor: "#a71976" }}
        >
          Traditional Home Inspections • Pre-Listing Inspections • Radon Testing
          • Termite Inspections
        </ContactBox>
      )}
    </>
  );
};
