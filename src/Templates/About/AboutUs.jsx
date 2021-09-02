import { LayoutBox, MainContent } from "../../App/AppBoxes";
import About from "./blueHouse.png";
import { Box, Button } from "@material-ui/core";

export function AboutUs() {
  return (
      <LayoutBox image={About}>
        <MainContent heading="About Us">
          Adrienne Soto is the founder and primary home inspector at Buyer
          Beware Home Inspections LLC. Before she inspected homes, she was a
          longtime designer/remodeler and has a vast knowledge of many aspects
          of real estate with over 20 years of experience in restoring, building
          and designing homes in the New Jersey area.
          <br />
          Working with many contractors and inspectors through the years has
          given her experience and a keen sense of knowing what to look for when
          inspecting a property. Adrienne enjoys all aspects of building and
          maintaining homes, and is eager to share this information with her
          clients.
        </MainContent>
        <Box display="flex" justifyContent="center" padding="5px">
            <Button
              variant="contained"
              color="secondary"
              href="https://www.spectora.com/inspection-request/my-inspection-company-2f689b3a14"
            >
              View my Profile
            </Button>
          </Box>
      </LayoutBox>

     
  );
}
