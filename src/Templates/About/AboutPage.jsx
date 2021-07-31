import { ProfileCard } from "./ProfileCard";
import {
  LayoutBox,
  MainContent,
} from "../../Components/Box/AppBoxes";
import { DialogButton } from "../../Components/Schedule/RequestsDialogButtons";
import { Request } from "../../Components/Schedule/InspectionForm";
import About from "../../img/houseB.png";
import Check from "../../img/checkCert.png";
import { Container } from "@material-ui/core";
export function AboutPage() {
  return (
    <Container>
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
      </LayoutBox>

      <LayoutBox image={Check} reverse>
        <MainContent
          heading="Background and Experience"
          style={{ maxWidth: "80%" }}
        >
          Adrienne has completed all of the state’s required approved
          professional home inspection courses and exams, and has also passed
          the NACHI exam to become a certified member. She has completed
          extensive training, both in the classroom and in the field. Throughout
          the year she takes continuing education courses to stay abreast on new
          products and inspection techniques.
          <br />
          Our Home Inspectors are fully licensed by the state, and fully
          insured. Contact Adrienne at Buyer Beware Home Inspections today to
          schedule your reliable, professional in-depth home inspection in the
          Southern New Jersey area.
          <DialogButton
            title="Request an Inspection"
            content={<Request />}
            style={{ marginTop: "8px" }}
          />
        </MainContent>
      </LayoutBox>

      <ProfileCard />
    </Container>
  );
}
