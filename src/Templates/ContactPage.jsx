import { Box, Container, Divider, makeStyles } from "@material-ui/core";
import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { Social } from "../App/AppBar/SocialMedia";

import {LayoutBox} from "../Components/Box/AppBoxes";
import { InfoCard } from "../Components/ContactInfo/InfoCard";
import { NewContainer } from "../Components/Box/AppBoxes";
import Happy from "../img/happyHouse.png";
import Heart from "../img/heart.svg";
import MapImage from "../img/mapNJ.png";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
  },
  header: {
    paddingBlock: "25px",
    letterSpacing: 1,
    lineHeight: 1.3,
    marginInline: "20px",
    alignSelf: "center",
    display: "flex",
    justifyContent: "space-evenly",
    "& img": {
      width: "75px",
      height: "75px",
      paddingRight: "25px",
    },
  },

  hours: {
    letterSpacing: 1,
    lineHeight: 2,
    alignSelf: "center",
    marginBlock: "12px",
    display: "flex",
    fontWeight: "lighter",
    justifyContent: "space-evenly",
    fontSize: "18px",
    "& div": {
      fontWeight: "bold",
      paddingInline: "6px",
    },
  },
  pageLine: {
    textAlign: "center",
    letterSpacing: 1.5,
    lineHeight: 1.5,
    fontWeight: 700,
    color: "#ffffff",
    fontSize: "larger",
    backgroundColor: "#a71976",
  },

  socialBox: {
    textAlign: "center",
    fontSize: "22px",
    display: "flex",
    fontWeight: "lighter",
    alignItems: "center",
    "& img": {
      width: "40px",
      height: "35px",
      padding: "4px",
    },
  },
  socialButtons: {
    fontSize: "40px",
    justifyContent: "space-evenly",
    color: "#a71976",
  },
});

export const ContactPage = () => {
  const classes = useStyles();
  return (
    <>
      <NewContainer>
        <Box className={classes.root}>
          <Box className={classes.header}>
            <img alt="" src={Happy} />
            <Box
              justifyContent="center"
              display="flex"
              flexDirection="column"
              alignContent="end"
              width="43rem"
              fontWeight="lighter"
              lineHeight={1.5}
              letterSpacing={1}
            >
              <Box fontSize="1.15em">
                Buyer Beware Home Inspections is based out of Berlin, NJ
              </Box>
              <Divider style={{ margin: "10px 0" }} />
              We offer Home Inspection services to areas of New Jersey and
              Philadelphia
            </Box>
          </Box>

          <Box display="flex" justifyContent="space-evenly">
            <img alt="" src={MapImage} />
            <InfoCard />
          </Box>

          <Box className={classes.hours}>
            <div>Monday thru Friday</div> 8:00 am - 7:00 pm <div>Saturday</div>{" "}
            9:00 am - 5:00 pm
            <div>Sunday </div>Closed
          </Box>
        </Box>
      </NewContainer>



      <Box className={classes.pageLine}>
        Traditional Home Inspections • Pre-Listing Inspections • Radon Testing •
        Termite Inspections
      </Box>

      <Container>
        <Box style={{ paddingBlock: "15px" }}>
          <Box className={classes.socialBox}>
            Have any questions? We'd <img alt="" src={Heart} />
            to hear from you!
          </Box>
          <Divider style={{ margin: "10px", color: "#a71976" }} />

          {/* <div className={classes.divLine}></div> */}

          <Social
            color="#a71976"
            className={classes.socialButtons}
            label={<HiOutlineMail color="#a71976" fontSize="40px" />}
          />
        </Box>
      </Container>
    </>
  );
};
