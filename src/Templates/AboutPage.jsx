import { Box, Container, Grid, makeStyles } from "@material-ui/core";
import {
  HeaderBox,
  LayoutLBox,
  LayoutRBox,
  LayoutRightBox,
  MyMapBox,
  PadBox,
  Summary,
} from "../Components/Box/MyBox";
import { AreaServe } from "../Components/Profile/AreaServe";
import { ProfileCard } from "../Components/Profile/ProfileCard";
import About from "../img/houseB.png";
import Back from "../img/houseBack.png";
import Inspect from "../img/inspector.png";
import House from "../img/houseMag.png";

const useStyles = makeStyles({
  image: {
    position: "relative",
    width: "900px",
    height: "600px",
    "& h2": {
      position: "absolute",
      top: "200px",
      left: 0,
      width: "100%",
    },
  },
});

const ImgText = () => {
  return (
    <Box lineHeight={1.5} letterSpacing={0.5}>
      Adrienne Soto is the founder and primary home inspector at Buyer Beware
      Home Inspections LLC. Before she inspected homes, she was a longtime
      designer/remodeler and has a vast knowledge of many aspects of real estate
      and over 20 years of experience in restoring, building and designing homes
      in the New Jersey area. Working with many contractors and inspectors
      through the years has given her the experience and a keen sense of knowing
      what to look for when inspecting a property. Adrienne enjoys all aspects
      of building and maintaining homes, and is eager to share this information
      with her clients.
    </Box>
  );
};

const GridDisplay = () => {
  return (
    <Grid style={{ display: "flex", justifyContent: "space-between" }}>
      <Grid item></Grid>
      <Grid item></Grid>
    </Grid>
  );
};

const Bio = () => {
  const classes = useStyles();

  return (
    <>
      {/* <Container> */}
      {/* <Grid container style={{justifyContent:"space-between"}}> */}

      <MyMapBox>
        <LayoutRBox
          image={About}
          width="600"
          height="400"
          heading="About Us"
          summary="Adrienne Soto is the founder and primary home inspector at Buyer
        Beware Home Inspections LLC. Before she inspected homes, she was a
        longtime designer/remodeler and has a vast knowledge of many
        aspects of real estate and over 20 years of experience in
        restoring, building and designing homes in the New Jersey area."
          second="Working with many contractors and inspectors through the
        years has given her experience and a keen sense of knowing
        what to look for when inspecting a property. Adrienne enjoys all
        aspects of building and maintaining homes, and is eager to share
        this information with her clients."
        />
        <LayoutLBox
          image={Inspect}
          width="600"
          height="400"
          heading="Background and Experience"
          summary="Adrienne has completed all of the state’s required approved
        professional home inspection courses and exams, and has also
        passed the NACHI exam to become a certified member. She has completed extensive training, both in the classroom and in the field. Throughout the
        year she takes continuing education courses to stay abreast on new
        products, codes and inspection techniques.Our Home Inspectors are fully licensed by the state, and fully insured.  Contact Adrienne at
        Buyer Beware Home Inspections today to schedule your reliable,
        professional in-depth home inspection in the Southern
        New Jersey area."
        />
      </MyMapBox>
      {/* <Box display="flex" justifyContent="space-evenly" paddingTop="25px">
          <img alt="" src={About} width="600" height="400" />

          <Box lineHeight={1.5} letterSpacing={0.5} width="40%">
            <HeaderBox fontSize="larger">About Us</HeaderBox>
            <div>
              Adrienne Soto is the founder and primary home inspector at Buyer
              Beware Home Inspections LLC. Before she inspected homes, she was a
              longtime designer/remodeler and has a vast knowledge of many
              aspects of real estate and over 20 years of experience in
              restoring, building and designing homes in the New Jersey area.
              <br /> Working with many contractors and inspectors through the
              years has given her the experience and a keen sense of knowing
              what to look for when inspecting a property. Adrienne enjoys all
              aspects of building and maintaining homes, and is eager to share
              this information with her clients.
            </div> */}
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
            Southern New Jersey area.
          </Box>
        </Box> */}
      {/* <Box display="flex" justifyContent="space-evenly" paddingTop="25px">
          <Box lineHeight={1.5} letterSpacing={0.5} width="40%">
            <div>
              {" "}
              Adrienne has completed all of the state’s required approved
              professional home inspection courses and exams, and has also
              passed the NACHI exam to become a certified member. She has completed extensive training, both in the classroom and in the field. Throughout the
              year she takes continuing education courses to stay abreast on new
              products, codes and inspection techniques.Our Home Inspectors are fully licensed by the state, and fully insured.  Contact Adrienne at
              Buyer Beware Home Inspections today to schedule your reliable,
              professional in-depth home inspection in the Southern
              New Jersey area.
            </div>
          </Box>
          <img
            alt=""
            src={Inspect}
            width="515"
            height="309"
            style={{ alignSelf: "center" }}
          />
        </Box> */}
      {/* </Grid> */}
      {/* </Container> */}
    </>
  );
};

export function AboutPage() {
  return (
    <>
      {/* <Title title="About Us" /> */}

      <PadBox />
      <Bio />

      <PadBox />
      <ProfileCard />

      {/* <AreaServe /> */}
      {/* <OurPromise /> */}
    </>
  );
}
