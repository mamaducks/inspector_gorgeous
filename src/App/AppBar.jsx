import { Box, Tab, Tabs, Icon } from "@material-ui/core";
import routes from "./Routes";
import { HiOutlineMail } from "react-icons/hi";
import { Social } from "./SocialMedia";
import { FaPhoneAlt } from "react-icons/fa";
import EmmaLogo from "../img/emmaLogoSmall.png";
import { FlexBox } from "../Components/Box/AppBoxes";

function Logo() {
  return (
    <Box
      display="flex"
      fontWeight="lighter"
      paddingBottom="4px"
      fontSize="16px"
    >
      <img alt="" src={EmmaLogo} width="70" height="70" />

      <Box
        paddingLeft="4px"
        flexDirection="column"
        display="flex"
        justifyContent="center"
      >
        <Box fontSize="30px" fontWeight="500">
          BUYER BEWARE
        </Box>

        <Box alignSelf="flex-end">HOME INSPECTION, LLC</Box>
      </Box>
    </Box>
  );
}


export function AppBar() {
  return (
    <>
      <FlexBox justifyContent="space-between">
        <Logo />

        <Social
          color="black"
          alignSelf="flex-end"
          size="2x"
          label={<HiOutlineMail color="black" />}
        />
      </FlexBox>
      <Box style={{ backgroundColor: "#a71976", padding: "1px" }}>
        <FlexBox color="white" justifyContent="space-between">
          <Tabs value={window.location.pathname}>
            {Object.values(routes).map(({ link, label }) => (
              <Tab label={label} href={link} component="a" value={link} />
            ))}
          </Tabs>

          <Box display="flex" alignSelf="center" letterSpacing={1.3}>
            <Icon>
              <FaPhoneAlt size="20px" />
            </Icon>

            <div style={{paddingInline:"12px", fontSize:"17px"}}>1-609-670-0451</div>
          </Box>
        </FlexBox>
      </Box>
    </>
  );
}
