import { Box, Container, makeStyles } from "@material-ui/core";
import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { Social } from "../App/AppBar/SocialMedia";
import { ContactSocialBox, DisplayEvenBox } from "../Components/Box/MyBox";
import { InfoCard } from "../Components/ContactInfo/InfoCard";
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
    paddingTop: "20px",
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
    marginBlock: "20px",
  },
  divLine: {
    borderTop: "2px solid #a71976 ",
    marginLeft: 20,
    marginRight: 20,
  },
  socialBox: {
    textAlign: "center",
    fontSize: "22px",
    display: "flex",
    alignItems: "center",
    "& img": {
      width: "40px",
      height: "35px",
      padding: "4px",
    },
  },
  socialButtons: {
    fontSize: "45px",
    alignSelf: "center",
    width: "100%",
    justifyContent: "space-evenly",
    paddingTop: "10px",
    color: "#a71976",
  },
});

export const ContactPage = () => {
  const classes = useStyles();
  return (
    <>
      <Container className={classes.root}>
        <Box className={classes.root}>
          <Box className={classes.header}>
            <img alt="" src={Happy} />
            <Box alignSelf="center" width="43rem" fontSize="18px">
              Buyer Beware Home Inspections is based out of Berlin, NJ
              <div>
                {" "}
                We offer Home Inspection services to areas of New Jersey and
                Philadelphia
              </div>
            </Box>
          </Box>

          <DisplayEvenBox>
            <img alt="" src={MapImage} />
            <InfoCard />
          </DisplayEvenBox>

          <Box className={classes.hours}>
            <div>Monday thru Friday</div> 8:00 am - 7:00 pm <div>Saturday</div>{" "}
            9:00 am - 5:00 pm
            <div>Sunday </div>Closed
          </Box>
        </Box>
      </Container>

      <Box className={classes.pageLine}>
        Traditional Home Inspections • Pre-Listing Inspections • Radon Testing •
        Termite Inspections
      </Box>

      <Container>
        <ContactSocialBox>
          <Box className={classes.socialBox}>
            Have any questions? We'd <img alt="" src={Heart} />
            to hear from you!
          </Box>
          <Box paddingTop="15px">
            <div className={classes.divLine}></div>
            <div>
              <Social
                color="#a71976"
                className={classes.socialButtons}
                label={<HiOutlineMail color="#a71976" fontSize="45px" />}
              />
            </div>
          </Box>
        </ContactSocialBox>
      </Container>
    </>
  );
};
