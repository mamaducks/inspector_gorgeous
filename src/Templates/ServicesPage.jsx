import { Container } from "@material-ui/core";
import { ScheduleButtonNew } from "../Components/App/ScheduleButton";
import {
  LayoutLBox,
  ListLayoutRBox, PadBox
} from "../Components/Box/MyBox";
import {
  servicesCard
} from "../Components/Services/ServiceList";
import {
  ServiceCard,
  ServiceCardGrid
} from "../Components/Services/ServiceListCard";
import MagHouse from "../img/houseMagnify.png";
import ManMag from "../img/manmag.png";


export function ServicesPage() {
  return (
    <Container
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
      }}
    >
      <LayoutLBox
        image={MagHouse}
        width="530px"
        height="380px"
        heading="Home Inspection Services"
        summary=" Home inspections provide valuable information before you
              buy a home. We will look at things like a home’s
              foundation, structural components, roof, HVAC, plumbing,
              and electrical systems, then provide a detailed report of
              a home’s condition so you can move forward confidently
              with peace of mind and knowledge to make informed
              decisions about your home."
        second="With over 20 years experience restoring, building, and
              designing homes Buyer Beware is the top choice in south
              jersey for your home inspection services."
      />

      <ListLayoutRBox
        heading="WE INSPECT THE FOLLOWING WHEN VISIBLE AND ACCESSIBLE:"
        image={ManMag}
        width="305"
        height="259"
        button={<ScheduleButtonNew title="Schedule Today" />}
      >
        <ServiceCardGrid servicesCard={servicesCard} />

        <PadBox />
      </ListLayoutRBox>

      <ServiceCard />
    </Container>
  );
}
