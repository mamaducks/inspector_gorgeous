import { Box, Grid } from "@material-ui/core";
import Adrienne from "../../img/adrienne.JPG";
import { MyInfoBox, DisplayEvenBox } from "../Box/MyBox";

export const AboutYou = () => {
  return (
    <DisplayEvenBox>
      <Grid item xs={3} style={{ alignSelf: "center" }}>
        <img alt="" src={Adrienne} width="300" height="300" />
      </Grid>
      <Grid item xs={6} style={{ alignSelf: "center" }}>
        <MyInfoBox>
          <Box>
          Adrienne Soto is the founder and primary home inspector at IG
          Inspections llc. Adrienne has a vast knowledge in many aspects of real
          estate and all types of construction. She has over 30 years of
          experience in restoring, building and designing plans for homes in the
          New Jersey area. Working with many engineers and city inspectors
          throughout the years has given her knowledge of the city codes, which
          also plays a big part when inspecting a property. Adrienne has
          completed all of the state’s required approved professional home
          inspection courses and exams, and has also passed the NACHI exam to
          become a certified member. Throughout the year she takes continuing
          education courses for which keeps her abreast of new products, codes
          and inspection techniques.
        </Box>
        <Box>
          Hello! I am Morgan McConnell, the owner and inspector of Paramount
          Home Inspections, LLC. A good home inspection plays a crucial role in
          the home buying process. I am passionate about homes, and I believe
          that every buyer is entitled to a home that will bring them years of
          happiness. ​ Because the home buying experience can be a bit
          overwhelming, when you have the right person to lend you guidance in
          determining the practicability of a particular investment, it can
          leave you feeling satisfied and rewarded. ​ Here at Paramount Home
          Inspections, it is highly recommend the client attend the inspection
          so that we can inform you about the many facets of your new home. I
          invite you to engage with me and ask questions. I am are here to
          provide independent, unbiased inspections that will allow you to make
          an informed decision. ​ Your detailed report will include photos of
          the home, or property, and will be emailed to you same day!
        </Box>
        <Box>
          Michael Czar Licensed Home Inspector — Safeway Home Inspections is
          owned and operated by licensed home inspector, Michael Czar. After
          going through the process of purchasing his own home years ago,
          Michael became fascinated with the home inspection business and the
          desire to teach other home buyers about their new homes. He became
          licensed as a home inspector in New Jersey and has been working in the
          business now for 8 years. His favorite part of his job is that he gets
          to educate other people, and he loves getting the chance to share his
          own knowledge and experience. When Michael isn’t working, he enjoys
          spending time with his children and the rest of his family.
          Credentials ✓ Home Inspector’s License ✓ Radon License ✓ Radon
          Measurement Technician ✓ Certification to perform Tank Sweeps ✓ Member
          of NJ ALPHI (Association of Licensed Professional Home Inspectors)
        </Box>
        <Box>
          Industry Experience and Background — Before becoming a licensed home
          inspector, Michael worked as a carpentry contractor. He has over 20
          years of experience in construction, which makes him a great inspector
          for anyone who is buying or selling a home who wants to be taught how
          the home works, how to repair them, and all that is necessary for
          maintaining them. He enjoys all aspects of building and maintaining
          homes, and his eagerness to share this information with his clients
          will help them understand exactly what they’re getting when they
          purchase their new home. Read Reviews for Home Inspector Michael Czar
          Contact Michael at Safeway Home Inspections today to schedule a home
          inspection in the North or Central New Jersey area.
        </Box>
        <Box>
          Why would you choose us as your NJ inspector? NJ Licensed and
          Certified Inspector Full time home inspector InterNACHI certified
          member Fully Insured Offer “one stop “affordable packages (home
          inspection, WDI, and radon testing) Fast, reliable and professional
          Most Reports within 48 hours Emailed electronic inspection reports
          including digital pictures Extended office hours 7days/week We accept
          all payment types including check, credit cards and PayPal
        </Box>
        </MyInfoBox>
      </Grid>
      
    </DisplayEvenBox>
  );
};
