import { Box, Tab, Tabs } from "@material-ui/core";
import { HiOutlineMail } from "react-icons/hi";
import routes from "./Routes";
import { Social } from "../Components/Social/SocialMedia";
import { FlexBox } from "../Components/Box/AppBoxes";
import EmmaLogo from "../img/emmaLogoSmall.png";

function Logo() {
  return (
    <Box display="flex" fontWeight="lighter" paddingBottom="4px">
      <img alt="" src={EmmaLogo} width="70" height="70" />

      <Box
        paddingLeft="4px"
        flexDirection="column"
        display="flex"
        justifyContent="center"
      >
        <Box fontSize="2.5vw" fontWeight="500">
          BUYER BEWARE
        </Box>

        <Box alignSelf="flex-end" fontSize="2vw">
          HOME INSPECTION, LLC
        </Box>
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
          fontSize="35px"
          label={<HiOutlineMail color="black" fontSize="35px" />}
        />
      </FlexBox>
      <Box style={{ backgroundColor: "#a71976", padding: "1px" }}>
        <FlexBox color="white" justifyContent="space-between">
          <Tabs value={window.location.pathname} variant="scrollable">
            {Object.values(routes).map(({ link, label }) => (
              <Tab
                key={link}
                label={label}
                href={link}
                component="a"
                value={link}
              />
            ))}
          </Tabs>
        </FlexBox>
      </Box>
    </>
  );
}
