import { Box, Typography } from "@material-ui/core";
import { IoIosPhonePortrait } from "react-icons/io";
import { IoMdPin } from "react-icons/io";
import { MyFlexBox } from "../Box/MyBox";
import Phone from "../../img/phoneSVG.svg";
import Locate from "../../img/locateSVG.svg";
import Email from "../../img/emailSVG.svg";
import Mail from "../../img/mailSVG.svg"

export function InfoView() {
  return (
    <MyFlexBox>
      <Box alignSelf="center">
        <AllInfo Icon={Phone}>
          <InfoBox info="p: 609-670-0451" />
        </AllInfo>
        <AllInfo Icon={Locate}>
          <InfoBox info="Berlin, NJ 08009" />
        </AllInfo>
        {/* <AllInfo Icon={Email}>
          <InfoBox info="BuyersBewareHomeInspections@gmail.com" />
        </AllInfo> */}
        <AllInfo Icon={Mail}>
          
          <InfoBox info="Buyer Beware Home Inspections" flexWrap="nowrap"  />
          <InfoBox info="P. O. Box 463" />
          <InfoBox info="Bordentown, NJ 08505" />
        </AllInfo>
      </Box>
    </MyFlexBox>
  );
}

export function AllInfo({ Icon, children, ...props }) {
  return (
    <Box padding="10px"  paddingBottom="24px" {...props}>
      <Box
        alignItems="center"
        display="flex"
        flexDirection="column"
        color="#a51b77"
        paddingBottom="8px"
      >
        <img alt="" src={Icon} width="45px" height="45px" />
      </Box>
      {children}
    </Box>
  );
}

export function InfoBox({ info, ...props }) {
  return (
    <Box  color="#32474b" textAlign="center" fontSize="16px" >
      {info}
    </Box>
  );
}
