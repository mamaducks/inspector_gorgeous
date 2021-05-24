import { AreaServe } from "../Components/Profile/AreaServe";
import { OurPromise } from "../Components/Profile/Promise";
import { Box, Container, Grid } from "@material-ui/core";
import { ProfileCard } from "../Components/Profile/ProfileCard";
import Adrienne from "../img/adrienne.JPG";
import {
  MyInfoBox,
  DisplayEvenBox,
  DisplayCenterBox,
  PadBox,
  ImageBox,
  DisplayBox,
} from "../Components/Box/MyBox";

export function AboutPage() {
  return (
    <>
      {/* <Title title="About Us" /> */}

      <PadBox>
        <Bio />
      </PadBox>
      <ProfileCard />
      <AreaServe />
      <OurPromise />
    </>
  );
}

export const Bio = () => {
  return (
    <Container>
      <Grid container>
        <Grid item xs={12}>
          <DisplayBox>
            <ImageBox>
              <img alt="" src={Adrienne} width="300" height="300" />
            </ImageBox>

            <Box
              lineHeight={1.5}
              letterSpacing={1}
              justifyContent="center"
              display="flex"
              flexDirection="column"
            >
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                width="45em"
              >
                A home inspection is only as good as the inspector. That’s why
                IG Inspections LLC is your best choice for home inspections in
                New Jersey. With over 30 years experience restoring, building,
                and designing homes, whether you’re a homeowner, homebuyer, or
                agent we’ll provide you with a detailed description of a home’s
                condition so you can move forward confidently and with peace of
                mind.
                <div>
                  Count on WIN Home Inspection to provide you with the best home
                  inspection service and an unbiased, comprehensive report on
                  the condition of the property. Our home inspectors are always
                  reliable, professional, and knowledgeable.{" "}
                </div>
                <Box>
                  Adrienne Soto is the founder and primary home inspector at IG
                  Inspections llc. Adrienne has a vast knowledge in many aspects
                  of real estate and all types of construction. She has over 30
                  years of experience in restoring, building and designing plans
                  for homes in the New Jersey area. Working with many engineers
                  and city inspectors throughout the years has given her
                  knowledge of the city codes, which also plays a big part when
                  inspecting a property. Adrienne has completed all of the
                  state’s required approved professional home inspection courses
                  and exams, and has also passed the NACHI exam to become a
                  certified member. Throughout the year she takes continuing
                  education courses for which keeps her abreast of new products,
                  codes and inspection techniques.
                </Box>
                <Box>
                  Michael Czar Licensed Home Inspector — Safeway Home
                  Inspections is owned and operated by licensed home inspector,
                  Michael Czar. After going through the process of purchasing
                  his own home years ago, Michael became fascinated with the
                  home inspection business and the desire to teach other home
                  buyers about their new homes. He became licensed as a home
                  inspector in New Jersey and has been working in the business
                  now for 8 years. His favorite part of his job is that he gets
                  to educate other people, and he loves getting the chance to
                  share his own knowledge and experience. When Michael isn’t
                  working, he enjoys spending time with his children and the
                  rest of his family. Credentials ✓ Home Inspector’s License ✓
                  Radon License ✓ Radon Measurement Technician ✓ Certification
                  to perform Tank Sweeps ✓ Member of NJ ALPHI (Association of
                  Licensed Professional Home Inspectors)
                </Box>
                <Box>
                  Industry Experience and Background — Before becoming a
                  licensed home inspector, Michael worked as a carpentry
                  contractor. He has over 20 years of experience in
                  construction, which makes him a great inspector for anyone who
                  is buying or selling a home who wants to be taught how the
                  home works, how to repair them, and all that is necessary for
                  maintaining them. He enjoys all aspects of building and
                  maintaining homes, and his eagerness to share this information
                  with his clients will help them understand exactly what
                  they’re getting when they purchase their new home. Read
                  Reviews for Home Inspector Michael Czar Contact Michael at
                  Safeway Home Inspections today to schedule a home inspection
                  in the North or Central New Jersey area.
                </Box>
              </Box>
            </Box>
          </DisplayBox>
        </Grid>
      </Grid>
    </Container>
  );
};
