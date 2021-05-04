import { ProfileList } from "../../Components/Profile/Profile";
import { Box, Container, Grid } from "@material-ui/core";
import IgLogo from "/Users/leonaduckworth/code/InspectorGorgeous/inspector_gorgeous/src/img/I.png";
import Adrienne from "/Users/leonaduckworth/code/InspectorGorgeous/inspector_gorgeous/src/img/adrienne.JPG";
import EmmaLogo from "../../img/emmaLogo.png"


const AboutYou = () => {
  return (
    <Grid container justify="space-evenly" spacing={3} >
      <Grid item xs={3} style={{ alignSelf: "center" }}>
        <img src={Adrienne} width="300" height="300" />
      </Grid>
      <Grid item xs={6} style={{ alignSelf: "center" }}>
        <Box
          fontSize={14}
          fontFamily="Helvetica"
          lineHeight={2}
          letterSpacing={2}
          color="#095565"
        >
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
      </Grid>
    </Grid>
  );
};

export function AboutHeader() {
  return (
    <Box container spacing={3}>
      <AboutYou />
      <Container style={{padding: 20}}>
        <img src={EmmaLogo} width="350" height="350" />
        <ProfileList  />
      </Container>
    </Box>
  );
}
