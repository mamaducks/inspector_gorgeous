import { Box } from "@material-ui/core";
import { IoIosPhonePortrait } from "react-icons/io";
import { IoMdPin } from "react-icons/io";
import { MyFlexBox } from "../Box/MyBox";
import Phone from "../../img/phoneSVG.svg"
import Locate from "../../img/locateSVG.svg"
import Email from "../../img/emailSVG.svg"

export function InfoView() {
  return (
    <MyFlexBox>
      <Box letterSpacing={1} lineHeight={2} alignSelf="center">
        <AllInfo Icon={Phone}>
          <InfoBox info="p: 609-670-0451" />
        </AllInfo>
        <AllInfo Icon={Locate}>
          <InfoBox info="Washington Ave" />
          <InfoBox info="Berlin NJ 08009" />
        </AllInfo>
        {/* <AllInfo Icon={Email}>
          <InfoBox info="BuyersBewareHomeInspections@gmail.com" />
        </AllInfo> */}
      </Box>
    </MyFlexBox>
  );
}

export function AllInfo({ Icon, children, ...props }) {
  return (
    <Box padding="10px" width="175px" paddingBottom="24px" {...props}>
      <Box
        alignItems="center"
        display="flex"
        flexDirection="column"
        color="#a51b77"
        fontSize={40}
        paddingBottom="8px"
      >
       <img alt="" src={Icon} width="60px" height="60px"/>
      </Box>
      {children}
    </Box>
  );
}

export function InfoBox({ info }) {
  return (
    <Box padding="7px" lineHeight={1} color="#32474b" textAlign="center">
      {info}
    </Box>
  );
}