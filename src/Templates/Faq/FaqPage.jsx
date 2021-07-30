import { Divider, Typography } from "@material-ui/core";
import { FaqAccordion } from "../Faq/FaqAccordion";
import { SERVICES } from "../../Templates/Services/services";
import {
  LayoutBox,
  MainContent,
  NewContainer,
} from "../../Components/Box/AppBoxes";
import { DialogButton } from "../../Components/Schedule/RequestsDialogButtons";
import { Schedule } from "../../Components/Schedule/Schedule";
import { Request } from "../../Components/Schedule/InspectionForm";
import Corner from "../../img/houseC.png";
import Curve from "../../img/curve.png";

export function FaqPage() {
  return (
    <NewContainer>
      <LayoutBox
        image={Corner}
        // width="600"
        // height="400"
        // heading="What to expect"
        reverse
      >
        <MainContent heading="What to expect">
          Our New Jersey home inspection is a thorough, objective visual
          analysis of a home`s structure and mechanical systems.
          <br />
          {/* <br /> */}
          Buyers Beware inspector will do an in-depth inspection and provide a
          comprehensive report on the condition of the property. Our home
          inspectors are always reliable, professional, and knowledgeable. Walk
          through the home with us on inspection day, and learn about the home’s
          features, as well as tips for care and maintenance.
          <br />
        </MainContent>
        {/* Our New Jersey home inspection is a thorough, objective visual analysis
        of a home`s structure and mechanical systems.
        <br />
        <br />
        Buyers Beware inspector will do an in-depth inspection and provide a
        comprehensive report on the condition of the property. Our home
        inspectors are always reliable, professional, and knowledgeable. Walk
        through the home with us on inspection day, and learn about the home’s
        features, as well as tips for care and maintenance.
        <br /> */}
        <DialogButton
          title="Schedule Online"
          content={<Schedule />}
          style={{ marginTop: "10px" }}
        />
      </LayoutBox>

      <LayoutBox
        image={Curve}
        // width="600px"
        // height="420px"
        // heading="What We Inspect"
      >
        <MainContent heading="What We Inspect">
          <ul
            style={{
              listStyleType: "square",
              fontWeight: "300",
              lineHeight: "2",
              fontSize: "1.1rem",
              letterSpacing: "1px",
            }}
          >
            {SERVICES.map((service) => (
              <li key={service}>{service}</li>
            ))}
          </ul>
          <DialogButton title="Request an Inspection" content={<Request />} />
        </MainContent>
      </LayoutBox>

      <Divider style={{ marginTop: "12px" }} />

      <FaqAccordion />
    </NewContainer>
  );
}
