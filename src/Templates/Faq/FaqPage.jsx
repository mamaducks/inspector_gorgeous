import { FaqAccordion } from "../Faq/FaqAccordion";
import { LayoutBox, NewContainer } from "../../Components/Box/AppBoxes";
import { SERVICES } from "../../Templates/Services/services";
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
        Our New Jersey home inspection is a thorough, objective visual analysis
        of a home`s structure and mechanical systems. 
         <br />
        <br />
        Buyers Beware inspector will do an in-depth inspection and provide a
        comprehensive report on the condition of the property. Our home
        inspectors are always reliable, professional, and knowledgeable. Walk through the home
          with us on inspection day, and learn about the home’s features, as
          well as tips for care and maintenance. 
       
        <br />
      </LayoutBox>

      <LayoutBox
        image={House}
        width="500px"
        height="300px"
        heading="What We Inspect"
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
