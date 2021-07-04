import { useMediaQuery } from "react-responsive";
import { FaMobileAlt } from "react-icons/fa";
import { IoLocationOutline, IoMailOutline } from "react-icons/io5";
import { Days, ContactBox, InfoBox } from "./ContactBox";
import { FlexBox } from "../../Components/Box/AppBoxes";
import { BusinessInfoButton } from "../../Components/Schedule/BusinessInfoButton";
import MapImage from "../../img/mapNJ.png";

export const ContactMap = () => {
  const isWide = useMediaQuery({
    query: "(min-device-width: 800px)",
  });
  return (
    <FlexBox flexWrap="wrap">
      {isWide && (
        <img
          alt=""
          src={MapImage}
          style={{ paddingBlock: "10px" }}
          maxWidth="100%"
          height="auto"
        />
      )}
      <FlexBox
        alignSelf="center"
        flexDirection="column"
        lineHeight="2"
        fontSize="1.2vw"
      >
        <InfoBox Icon={<FaMobileAlt />} info="p: 609-670-0451" />
        <InfoBox Icon={<IoLocationOutline />} info="Berlin, NJ 08009" />
        <InfoBox
          Icon={<IoMailOutline />}
          info="BuyerBewareHomeInspections@gmail.com"
          paddingBottom="5px"
        />
        <BusinessInfoButton />
      </FlexBox>
      {isWide && (
        <ContactBox
          marginBlock="12px"
          justifyContent="space-evenly"
          fontSize="1.2vw"
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
  );
};
