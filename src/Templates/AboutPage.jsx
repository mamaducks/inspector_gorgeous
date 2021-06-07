import { Box, Container, Grid } from "@material-ui/core";
import { LayoutRBox, PadBox, Summary } from "../Components/Box/MyBox";
import { AreaServe } from "../Components/Profile/AreaServe";
import { ProfileCard } from "../Components/Profile/ProfileCard";
import About from "../img/houseB.png";

const Bio = () => {
  return (
    <Container>
      <Grid container>
       

        <Box display="flex" justifyContent="space-evenly" paddingTop="25px">
          <img
            alt=""
            src={About}
            width="550"
            height="400"
            style={{ alignSelf: "center" }}
          />

          <Box lineHeight={1.5} letterSpacing={0.5} width="40%">
            Adrienne Soto is the founder and primary home inspector at Buyer
            Beware Home Inspections LLC. Adrienne has a vast knowledge in many
            aspects of real estate with over 20 years of experience in
            restoring, building and designing homes in the New Jersey area. She
            enjoys all aspects of building and maintaining homes, and is eager
            to share this information with her clients.
            <div> Working with
            many contractors and inspectors through the years has given Adrienne
            the experience and a keen sense of knowing what to look for when
            inspecting a property. Adrienne has completed all of the state’s
            required approved professional home inspection courses and exams,
            and has also passed the NACHI exam to become a certified member.
            Throughout the year she takes continuing education courses to stay
            abreast on new products, codes and inspection techniques. Contact
            Adrienne at Buyer Beware Home Inspections today to schedule your
            reliable, professional, and knowledgeable home inspection in the
            Southern New Jersey area. 
            </div>
            {/* second="Industry Experience and
            Background — Before becoming a licensed // home inspector, Adrienne
            worked as a home remodeler. She has over // 20 years of experience
            in redesigning and remodeling, which makes // her a knowledgable
            inspector for anyone who is buying or selling a // home who wants to
            be taught how the home works, how to repair // them, and all that is
            necessary for maintaining them. She enjoys // all aspects of
            building and maintaining homes, and her eagerness // to share this
            information with her clients will help them // understand exactly
            what they’re getting when they purchase their // new home. Contact
            Adrienne at Buyer Beware Home Inspections today // to schedule your
            reliable, professional, and knowledgeable home // inspection in the
            Southern New Jersey area. */}
          </Box>
        </Box>
      </Grid>
    </Container>
  );
};

export function AboutPage() {
  return (
    <>
      {/* <Title title="About Us" /> */}

      <PadBox/>
        <Bio />
    
<PadBox/>
      <ProfileCard />

      {/* <AreaServe /> */}
      {/* <OurPromise /> */}
    </>
  );
}
