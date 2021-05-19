import { Box, Container, makeStyles, Grid } from "@material-ui/core";
import PinkMag from "../../img/pinklistmag.png";
import pinkHome from "../../img/pinkhome.png";
import Thumbup from "../../img/guythumbup.png";
import {
  ExpectBox,
  HeaderBox,
  MyInfoBox,
  MyBox,
  MyContent,
  InspectBox,
  ListBox,
  MyContentBox,
  DisplayBox,
} from "../Box/MyBox";

const useStyles = makeStyles({
  info: {
    // backgroundImage: `url(${purpleBG})`,
  },
  imageBox: {
    width: "100%",
    alignSelf: "center",
  },
  BottomImageBox: {
    width: "100%",
    alignSelf: "center",
    display: "flex",
    justifyContent: "center",
    paddingLeft: 20,
  },
  ImgA: {
    width: 190,
    height: 190,
  },
  ImgB: {
    width: 200,
    height: 200,
  },
});

export const Expect = () => {
  const classes = useStyles();

  return (
    <Container>
      <Grid xs={12}>
        <Box display="flex" justifyContent="space-between">
          <Box className={classes.imageBox}>
            <img alt="" src={PinkMag} className={classes.ImgA} />
          </Box>
          <div>
            <HeaderBox>WHAT TO EXPECT FROM YOUR HOME INSPECTION</HeaderBox>

            <ExpectBox>
              Our New Jersey home inspection is an in-depth objective visual
              analysis of a home`s structure and mechanical systems. An
              inspection will determine the areas of the home that are not
              performing properly, as well as items that are beyond their useful
              life or are unsafe. We will provide you with a detailed reports
              clearly identifying any material defect along with a
              recommendation for what to do as well as what can happen if not
              repaired. covering the condition of the home’s heating system;
              central air conditioning system (temperature permitting); interior
              plumbing and electrical systems; the roof, attic and visible
              insulation; walls, ceilings, floors, windows and doors; the
              foundation, basement and structural components. Roof inspections
              will be done via drone which will capture any defects in vivid
              detail including roof coverings, drainage systems, vent
              penetrations as well as any flashing. Infrared Thermography is
              used by LDG for the most thorough inspections available.
            </ExpectBox>
          </div>
        </Box>
        <Grid item xs={12}>
          <DisplayBox>
            <MyContentBox>
              <HeaderBox>
                We inspect the following, when visible and accessible:
              </HeaderBox>
              We inspect the following, when visible and accessible: • Roof •
              Structural Components • Attic, Ventilation & Insulation • Exterior
              Cladding • Porch & Deck • Attached Garage • Foundation • Basement
              / Crawlspace • Electrical System • Plumbing System • HVAC System
              Interior including; Built-In Appliances, Ceilings, Floors & Walls,
              Windows and Doors
            </MyContentBox>

            <Box className={classes.BottomImageBox}>
              <img alt="" src={Thumbup} className={classes.ImgB} />
            </Box>
          </DisplayBox>
        </Grid>
      </Grid>
    </Container>
  );
};
