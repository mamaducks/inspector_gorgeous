import { Box, Container, Grid } from "@material-ui/core";
import { LayoutRBox, PadBox, Summary } from "../Components/Box/MyBox";
import { AreaServe } from "../Components/Profile/AreaServe";
import { ProfileCard } from "../Components/Profile/ProfileCard";
import Adrienne from "../img/adrienne.JPG";

const Bio = () => {
  return (
    <Container>
      <Grid container>
        <Grid item xs={12}>
          <LayoutRBox
            image={Adrienne}
            width="300"
            height="300"
            summary="Adrienne Soto is the founder and primary home inspector at Buyer
          Beware Home Inspections LLC. Adrienne has a vast knowledge in
          many aspects of real estate. She has over 20 years of experience
          in restoring, building and designing homes in the New Jersey
          area. Working with many engineers, construction and plumbing
          business owners and city inspectors throughout the years has
          given her knowledge of the city codes, which also plays a big
          part when inspecting a property. Adrienne has completed all of
          the state’s required approved professional home inspection
          courses and exams, and has also passed the NACHI exam to become
          a certified member. Throughout the year she takes continuing
          education courses to stay abreast on new products, codes and
          inspection techniques."
          second="Industry Experience and Background — Before becoming a licensed
          home inspector, Adrienne worked as a home remodeler. She has over
          20 years of experience in redesigning and remodeling, which makes
          her a knowledgable inspector for anyone who is buying or selling a
          home who wants to be taught how the home works, how to repair
          them, and all that is necessary for maintaining them. She enjoys
          all aspects of building and maintaining homes, and her eagerness
          to share this information with her clients will help them
          understand exactly what they’re getting when they purchase their
          new home. Contact Adrienne at Buyer Beware Home Inspections today
          to schedule your reliable, professional, and knowledgeable home
          inspection in the Southern New Jersey area."
          />
          
        </Grid>
      </Grid>
    </Container>
  );
};

export function AboutPage() {
  return (
    <>
      {/* <Title title="About Us" /> */}

      <PadBox>
        <Bio />
      </PadBox>

      <ProfileCard />

      <AreaServe />
      {/* <OurPromise /> */}
    </>
  );
}
