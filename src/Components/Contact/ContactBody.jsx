import { Icon, makeStyles, Typography, Box, Grid } from "@material-ui/core";
import React from "react";
import { IoMdPin, IoIosPhonePortrait } from "react-icons/io";
import IgLogo from "../../../src/I.png";
import MapImage from "/Users/leonaduckworth/code/InspectorGorgeous/inspector_gorgeous/src/locationimg.png";
import Banner from "/Users/leonaduckworth/code/InspectorGorgeous/inspector_gorgeous/src/greenBanner.png";
import Cut from "/Users/leonaduckworth/code/InspectorGorgeous/inspector_gorgeous/src/greenCut.png";
import Circle from "/Users/leonaduckworth/code/InspectorGorgeous/inspector_gorgeous/src/circle.png";
const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "space-evenly",
  },
  infoBox: {
    padding: 25,
    alignItems: "center",
    display: "flex",
    backgroundColor: "#f3f0e8",
    width: 300,
    height: 250,
    flexDirection: "column",
    justifyContent: "center",
    backgroundImage: `url(${Circle})`,
  },
  logo: {
    display: "flex",
    justifyContent: "center",
    alignSelf: "center",
  },
  gridLeft: {
    justifyContent: "space-between",
    display: "flex",
    flexDirection: "column",
  },
  infoBackground: {},
  otherInfoBack: {
    backgroundImage: `url(${Cut})`,
  },
});

export const ContactBody = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={2}>
      <Grid item xs={6} className={classes.logo}>
        <img src={MapImage} width="300" height="250" />
      </Grid>
      <Grid item xs={6}>
        <Box style={{ padding: 20 }}>
          <div className={classes.infoBox}>
            <Icon>
              <IoMdPin color="#786379" />
            </Icon>
            <Box
              style={{ padding: 20 }}
              fontFamily="Helvetica"
              lineHeight={2}
              color="white"
            >
              Washington Ave
            </Box>
            <Box fontFamily="Helvetica" lineHeight={2} color="white">
              Berlin NJ 08009
            </Box>
          </div>
        </Box>
        <Box style={{ padding: 20 }}>
          <div className={classes.infoBox}>
            <Icon>
              <IoIosPhonePortrait color="#786379" />
            </Icon>
            <Box
              style={{ padding: 20 }}
              fontFamily="Helvetica"
              lineHeight={2}
              color="white"
            >
              p: 609-445-6778
            </Box>
            <Box fontFamily="Helvetica" lineHeight={2} color="white">
              fax: 609-890-6786
            </Box>
          </div>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Box className={classes.logo}>
          <img src={IgLogo} width="400" height="400" />
        </Box>
      </Grid>
      <Grid>
        <Typography>
          We offer very flexible appointments including early evening (daylight
          permitting). We understand tight timeframes and will do our best to
          accommodate your deadlines.
        </Typography>
        <Box>
          PRE-INSPECTION Prior to putting your house on the market, find out the
          condition of your home. It can help eliminate price negotiation. An
          inspection can address major issues to ensure you get your selling
          price. GET QUOTE FULL HOME INSPECTION GET QUOTE You found your perfect
          house. Make sure it’s perfect. A home inspection will identify any and
          all major issues found, including but not limited to: Structure,
          Interior, Foundation, HVAC, Electrical, Plumbing. PRE-DRYWALL
          INSPECTION GET QUOTE To ensure a house is built according to its
          specifications is by performing a pre-drywall inspection.
          "Pre-drywall" refers to the part of the building process just prior to
          the drywall being installed. This inspection is done after the
          installation of the doors, windows, foundation, flooring, wall and
          roofing, plumbing and electrical.
        </Box>
      </Grid>
    </Grid>
  );
};
