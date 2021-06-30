import { LayoutBox, NewContainer } from "../Components/Box/AppBoxes";
import { ScheduleButtonNew } from "../Components/Schedule/ScheduleButton";
import { INSPECT_TYPE } from "../Components/Services/services";
import House from "../img/homePage.png";
import CheckBox from "../img/inspectList.png";
import ManMag from "../img/magman.png"

export const HomePage = () => {
  return (
    <NewContainer>
        <LayoutBox
          image={House}
          width="600px"
          height="400px"
          heading="Let Us Help You Get to Know Your Home"
        >
          At Buyer Beware Home Inspections, we fully understand the importance
          of a thorough home inspection, and that’s why we work so hard to offer
          you the very best. Let us provide an unbiased, comprehensive, visual
          inspection of your entire home and property. Walk through the home
          with us on inspection day, and learn about the home’s features, as
          well as tips for care and maintenance. We take the time to find the
          smallest details and issues and answer all your questions. With over
          20 years of experience in various aspects of real estate including buying, restoring and selling homes, we have the knowledge needed to help you get to know your
          home.
        </LayoutBox>

        <LayoutBox
          heading="We Offer the Following Inspection Services:"
          image={CheckBox}
          width="500px"
          height="300px"
          reverse
        >
          <ul style={{ listStyleType: "square", fontWeight: "300" }}>
            {INSPECT_TYPE.map((service) => (
              <li key={service}>{service}</li>
            ))}
          </ul>
        </LayoutBox>

        <ScheduleButtonNew title="Schedule your Inspection " />
    </NewContainer>
  );
};
