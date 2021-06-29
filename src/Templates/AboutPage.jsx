import { Box } from "@material-ui/core";
import { LayoutBox, NewContainer } from "../Components/Box/AppBoxes";
import { ProfileCard } from "../Components/Profile/ProfileCard";
import About from "../img/houseB.png";
import Inspect from "../img/inspector.png";

export function AboutPage() {
  return (
    <NewContainer>
      <LayoutBox
        image={About}
        width="600"
        reverse
        height="400"
        heading="About Us"
      >
        <Box fontSize="16px">
          Adrienne Soto is the founder and primary home inspector at Buyer
          Beware Home Inspections LLC. Before she inspected homes, she was a
          longtime designer/remodeler and has a vast knowledge of many aspects
          of real estate with over 20 years of experience in restoring, building
          and designing homes in the New Jersey area.
          <br />
          <br />
          Working with many contractors and inspectors through the years has
          given her experience and a keen sense of knowing what to look for when
          inspecting a property. Adrienne enjoys all aspects of building and
          maintaining homes, and is eager to share this information with her
          clients.
        </Box>
      </LayoutBox>

      <LayoutBox
        image={Inspect}
        width="600"
        height="400"
        heading="Background and Experience"
      >
        Adrienne has completed all of the state’s required approved professional
        home inspection courses and exams, and has also passed the NACHI exam to
        become a certified member. She has completed extensive training, both in
        the classroom and in the field. Throughout the year she takes continuing
        education courses to stay abreast on new products, codes and inspection
        techniques.Our Home Inspectors are fully licensed by the state, and
        fully insured. Contact Adrienne at Buyer Beware Home Inspections today
        to schedule your reliable, professional in-depth home inspection in the
        Southern New Jersey area.
      </LayoutBox>

      <ProfileCard />
    </NewContainer>
  );
}
