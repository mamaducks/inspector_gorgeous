import {
  Box,
  Container,
  makeStyles,
  Typography,
  Grid,
} from "@material-ui/core";
import purpleBG from "../../img/purpleBG.png";
import Curve from "../../img/housecurve.png";
import Window from "../../img/windowhouse.png";
import PinkMag from "../../img/pinklistmag.png";
import pinkHome from "../../img/pinkhome.png";

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
            <Box
              fontSize={14}
              letterSpacing={2}
              lineHeight={1.8}
              width="70em"
              textAlign="center"
              color="#010101"
            >
              WHAT TO EXPECT FROM YOUR HOME INSPECTION
            </Box>

            <Box
              fontSize={14}
              letterSpacing={2}
              lineHeight={1.7}
              textAlign="end"
              color="#404040"
              fontWeight={400}
              width="63em"
              style={{ paddingTop: 20 }}
            >
              We will provide you with a detailed reports clearly identifying
              any material defect along with a recommendation for what to do as
              well as what can happen if not repaired. Your home inspection and
              report will cover the condition of the home’s heating system;
              central air conditioning system (temperature permitting); interior
              plumbing and electrical systems; the roof, attic and visible
              insulation; walls, ceilings, floors, windows and doors; the
              foundation, basement and structural components. Roof inspections
              will be done via drone which will capture any defects in vivid
              detail including roof coverings, drainage systems, vent
              penetrations as well as any flashing. Infrared Thermography is
              used by LDG for the most thorough inspections available.
            </Box>
          </div>
        </Box>
        <Grid item xs={12}>
          <Box display="flex" justifyContent="space-between">
            <Box
              className={classes.homeP}
              fontSize={14}
              letterSpacing={2}
              lineHeight={2}
              width="110em"
              alignSelf="center"
            >
              Our New Jersey home inspection is an in-depth objective visual
              analysis of a home`s structure and mechanical systems. An
              inspection will determine the areas of the home that are not
              performing properly, as well as items that are beyond their useful
              life or are unsafe.
              <div>
                We inspect the following, when visible and accessible: • Roof •
                Structural Components • Attic, Ventilation & Insulation •
                Exterior Cladding • Porch & Deck • Attached Garage • Foundation
                • Basement / Crawlspace • Electrical System • Plumbing System •
                HVAC System Interior including; Built-In Appliances, Ceilings,
                Floors & Walls, Windows and Doors
              </div>
            </Box>

            <Box className={classes.BottomImageBox}>
              <img alt="" src={pinkHome} className={classes.ImgB} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};
