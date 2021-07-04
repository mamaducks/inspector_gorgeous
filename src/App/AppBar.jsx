import { Box, Tab, Tabs } from "@material-ui/core";
import routes from "./Routes";
import { Social } from "../Components/Social/SocialMedia";
import { FlexBox } from "../Components/Box/AppBoxes";
import EmmaLogo from "../img/emmaLogoSmall.png";

function Logo() {
  return (
    <Box display="flex" fontWeight="lighter" paddingBottom="4px" maxHeight="95px" >
      <img alt="" src={EmmaLogo} maxWidth="100%" height="auto" />

      <Box
        paddingLeft="4px"
        flexDirection="column"
        display="flex"
        justifyContent="center"
      >
        <Box fontSize="2.2vw" fontWeight="500" alignSelf="flex-start">
          BUYER BEWARE
        </Box>

        <Box alignSelf="flex-end" fontSize="1.8vw">
          HOME INSPECTION, LLC
        </Box>
      </Box>
    </Box>
  );
}

export function AppBar() {
  return (
    <>
      <FlexBox justifyContent="space-between" maxHeight="125px">
        <Logo />

        <Social
          color="black"
          alignSelf="flex-end"
          fontSize="2.2vw"
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
