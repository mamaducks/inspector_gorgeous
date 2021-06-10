import { Box, Grid, makeStyles } from "@material-ui/core";
import {
  LayoutLBox,
  LayoutRBox, MyMapBox,
  PadBox
} from "../Components/Box/MyBox";
import { ProfileCard } from "../Components/Profile/ProfileCard";
import About from "../img/houseB.png";
import Inspect from "../img/inspector.png";

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

// const ImgText = () => {
//   return (
//     <Box lineHeight={1.5} letterSpacing={0.5}>
//       Adrienne Soto is the founder and primary home inspector at Buyer Beware
//       Home Inspections LLC. Before she inspected homes, she was a longtime
//       designer/remodeler and has a vast knowledge of many aspects of real estate
//       and over 20 years of experience in restoring, building and designing homes
//       in the New Jersey area. Working with many contractors and inspectors
//       through the years has given her the experience and a keen sense of knowing
//       what to look for when inspecting a property. Adrienne enjoys all aspects
//       of building and maintaining homes, and is eager to share this information
//       with her clients.
//     </Box>
//   );
// };

// const GridDisplay = () => {
//   return (
//     <Grid style={{ display: "flex", justifyContent: "space-between" }}>
//       <Grid item></Grid>
//       <Grid item></Grid>
//     </Grid>
//   );
// };

// const Bio = () => {
//   const classes = useStyles();

//   return (
    

//       <MyMapBox>
//         <LayoutRBox
//           image={About}
//           width="600"
//           height="400"
//           heading="About Us"
//           summary="Adrienne Soto is the founder and primary home inspector at Buyer
//         Beware Home Inspections LLC. Before she inspected homes, she was a
//         longtime designer/remodeler and has a vast knowledge of many
//         aspects of real estate and over 20 years of experience in
//         restoring, building and designing homes in the New Jersey area."
//           second="Working with many contractors and inspectors through the
//         years has given her experience and a keen sense of knowing
//         what to look for when inspecting a property. Adrienne enjoys all
//         aspects of building and maintaining homes, and is eager to share
//         this information with her clients."
//         />
//         <LayoutLBox
//           image={Inspect}
//           width="600"
//           height="400"
//           heading="Background and Experience"
//           summary="Adrienne has completed all of the state’s required approved
//         professional home inspection courses and exams, and has also
//         passed the NACHI exam to become a certified member. She has completed extensive training, both in the classroom and in the field. Throughout the
//         year she takes continuing education courses to stay abreast on new
//         products, codes and inspection techniques.Our Home Inspectors are fully licensed by the state, and fully insured.  Contact Adrienne at
//         Buyer Beware Home Inspections today to schedule your reliable,
//         professional in-depth home inspection in the Southern
//         New Jersey area."
//         />
//       </MyMapBox>
    
//   );
// };

export function AboutPage() {
  return (
    <>
      <PadBox />
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

      <PadBox />
      <ProfileCard />
    </>
  );
}
