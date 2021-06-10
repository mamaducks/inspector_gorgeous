import { Box, Container } from "@material-ui/core";
import { FaqAccordion } from "../Components/App/FaqAccordion";
import { ScheduleButtonNew } from "../Components/App/ScheduleButton";
import { LayoutLBox, ListLayoutRBox, PadBox } from "../Components/Box/MyBox";
import { SERVICES } from "../Components/Services/Services";
import Corner from "../img/houseC.png";
import House from "../img/houseMag.png";

export function FaqPage() {
  return (
    <Container
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
      }}
    >
      <LayoutLBox
        image={Corner}
        width="600"
        height="400"
        heading="WHAT TO EXPECT FROM YOUR HOME INSPECTION"
        summary=" Buyers Beware inspector will provide you with the best home
            inspection service and a comprehensive report on the condition
            of the property. Our home inspectors are always reliable,
            professional, and knowledgeable."
        second="Our New Jersey home inspection is an in-depth objective visual
          analysis of a home`s structure and mechanical systems. An
          inspection will determine the areas of the home that are not
          performing properly, as well as items that are beyond their
          useful life or are unsafe."
        third="We will provide you with a detailed reports clearly
          identifying any material defect along with a recommendation
          for what to do as well as what can happen if not repaired."
      />

      <ListLayoutRBox
        heading="WE INSPECT THE FOLLOWING WHEN VISIBLE AND ACCESSIBLE:"
        image={House}
        width="475px"
        height="325px"
        button={<ScheduleButtonNew title="Schedule Today" />}
      >
        <Box lineHeight={1.7}>
          {SERVICES.map((service) => (
            <li key={service}>{service}</li>
          ))}
        </Box>
        <PadBox />
      </ListLayoutRBox>

      <FaqAccordion />
    </Container>
  );
}
