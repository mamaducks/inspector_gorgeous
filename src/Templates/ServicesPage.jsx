import { LayoutBox, NewContainer } from "../Components/Box/AppBoxes";
import { ScheduleButtonNew } from "../Components/Schedule/ScheduleButton";
import MagHouse from "../img/houseMagnify.png";
import ManMag from "../img/manmag.png";
import { Box, Divider } from "@material-ui/core";
import { DisplayService } from "../Components/Services/DisplayServices";

export function ServicesPage() {
  return (
    <NewContainer>
      <LayoutBox
        image={MagHouse}
        width="530px"
        height="380px"
        heading="Home Inspection Services"
      >
        Home inspections provide valuable information before you buy a home. We
        will look at things like a home’s foundation, structural components,
        roof, HVAC, plumbing, and electrical systems, then provide a detailed
        report of a home’s condition so you can move forward confidently with
        peace of mind and knowledge to make informed decisions about your home.
        <br />
        <br />
        With over 20 years experience restoring, building, and designing homes
        Buyer Beware is the top choice in south jersey for your home inspection
        services.
      </LayoutBox>

      <Box
        lineHeight={1.5}
        letterSpacing={1}
        justifyContent="center"
        display="flex"
        flexDirection="column"
        alignContent="end"
        fontWeight="lighter"
        fontSize="1.25em"
      >
        We Inspect the Following When Visible and Accessible:
        <Divider style={{ margin: "10px 0" }} />
      </Box>
      <DisplayService />
      <Divider style={{ margin: "10px 0" }} />
      <ScheduleButtonNew title="Schedule Today" />
    </NewContainer>
  );
}
