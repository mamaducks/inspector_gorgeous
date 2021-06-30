import { FaqAccordion } from "../Faq/FaqAccordion";
import { LayoutBox, NewContainer } from "../../Components/Box/AppBoxes";
import { SERVICES } from "../../Components/Services/services";
import Corner from "../../img/houseC.png";
import House from "../../img/houseMag.png";

export function FaqPage() {
  return (
    <NewContainer>
      <LayoutBox
        image={Corner}
        width="600"
        height="400"
        heading="What to expect"
        reverse
      >
        Buyers Beware inspector will provide you with the best home inspection
        service and a comprehensive report on the condition of the property. Our
        home inspectors are always reliable, professional, and knowledgeable.
        <br />
        <br />
        Our New Jersey home inspection is an in-depth objective visual analysis
        of a home`s structure and mechanical systems. An inspection will
        determine the areas of the home that are not performing properly, as
        well as items that are beyond their useful life or are unsafe.
        <br />
        <br />
        We will provide you with a detailed reports clearly identifying any
        material defect along with a recommendation for what to do as well as
        what can happen if not repaired.
      </LayoutBox>

      <LayoutBox
        image={House}
        width="500px"
        height="300px"
        heading="What do we inspect?"
      >
        <ul style={{ listStyleType: "square", fontWeight: "300" }}>
          {SERVICES.map((service) => (
            <li key={service}>{service}</li>
          ))}
        </ul>
      </LayoutBox>

      <FaqAccordion />
    </NewContainer>
  );
}
