import { Container } from "@material-ui/core";
import { LayoutBox } from "../Components/Box/AppBoxes";
import { ScheduleButtonNew } from "../Components/Schedule/ScheduleButton";
import { INSPECT_TYPE } from "../Components/Services/services";
import House from "../img/homePage.png";
import CheckBox from "../img/inspectList.png";
export const HomePage = () => {
  return (
    <Container
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
      }}
    >
      <>
        <LayoutBox
          image={House}
          width="530px"
          height="380px"
          heading="Let Us Help You Get to Know Your Home"
        >
          At Buyer Beware Home Inspections, we fully understand the importance
          of a thorough home inspection, and that’s why we work so hard to offer
          you the very best. Let us provide an unbiased, comprehensive, visual
          inspection of your entire home and property. Walk through the home
          with us on inspection day, and learn about the home’s features, as
          well as tips for care and maintenance. We take the time to find the
          smallest details and issues and answer all your questions. With over
          20 years of all aspects of real estate construction experience under
          our belts, we have the knowledge needed to help you get to know your
          new home.
        </LayoutBox>

        <LayoutBox
          heading="We offer the following inspection services:"
          image={CheckBox}
          width="400px"
          height="320px"
          reverse
        >
          <ul style={{ listStyleType: "square", fontWeight: "300" }}>
            {INSPECT_TYPE.map((service) => (
              <li key={service}>{service}</li>
            ))}
          </ul>
        </LayoutBox>

        <ScheduleButtonNew title="Schedule your Inspection " />
      </>
    </Container>
  );
};
