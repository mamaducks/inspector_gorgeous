import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Card,
  Container,
  Dialog,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React, { useState } from "react";
import { MdExpandMore } from "react-icons/md";
import Report from "../../img/reportA.png";
import Reporter from "../../img/reportB.png";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: 50,
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  accordion: {
    flexDirection: "column",
    padding: 2,
    borderRadius: 5,
  },
  body: {
    backgroundColor: "#f1e9ee",
  },
  medroot: {
    maxWidth: 345,
    display: "flex",
    justifyContent: "center",
  },
  media: {
    height: 150,
  },
}));

const AccordionBox = ({ heading, body }) => {
  const classes = useStyles();

  return (
    <Accordion disableGutters>
      <AccordionSummary
        expandIcon={<MdExpandMore />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography className={classes.heading}>{heading}</Typography>
      </AccordionSummary>
      <AccordionDetails className={classes.body}>
        <Typography>{body}</Typography>
      </AccordionDetails>
    </Accordion>
  );
};

const MediaBox = ({ image }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  return (
    <Card className={classes.medroot}>
      <img
        alt=""
        src={image}
        width="400px"
        height="350px"
        onClick={() => setOpen(true)}
      />

      <Dialog open={open} onClick={() => setOpen(false)}>
        <img alt="" src={image} width="300px" height="450px" />
      </Dialog>
    </Card>
  );
};

const ExampleReport = () => {
  return (
    <div>
      <Box textAlign="center">
        Your detailed Buyer Beware Inspection Report will be done by a highly
        trained home inspector with details about your homes condition, images
        and recommendations, delivered within 24 hours (next business day) –
        often the same day so you can move forward confidently with knowledge
        and peace of mind
      </Box>

      <Box display="flex" justifyContent="center">
        <MediaBox image={Report} />
        <MediaBox image={Reporter} />
      </Box>
    </div>
  );
};

export function FaqAccordion() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container disableGutters className={classes.accordion}>
        <AccordionBox
          heading="WHAT DOES YOUR HOME INSPECTION COVER?"
          body="
          A Home Inspection is a visual, non-invasive, performance-based evaluation of the  home’s visible and accessible interior and exterior structure,
          systems and components.  This includes the exterior of the property, foundation, roofing system, central air conditioning system, heating system, interior plumbing, interior electric, basement, ceilings, walls, floors and attic
          "
        />
        <AccordionBox
          heading="WHY PERFORM A HOME INSPECTION?"
          body="​
          Purchasing a home is the single biggest investment that most people make in their lives.  Knowing how the systems of your potential new home are functioning is integral.  Undetected deficiencies can mean thousands of dollars out of your pocket. Having a proper inspection 
          will give you piece of mind and knowledge to make informed decisions about your home "
        />
        <AccordionBox
          heading="HOW LONG WILL IT TAKE TO RECEIVE MY HOME INSPECTION REPORT?"
          body=" Your detailed Buyer Beware Inspection Report will be done by a highly trained home inspector with details about your homes condition, images and recommendations, delivered within 24 hours (next business day) – often the same day."
        />
        <AccordionBox
          heading="SHOULD THE HOME BUYER ATTEND THE HOME INSPECTION?
"
          body="We encourage you to accompany us during the inspection, when it is safe to do so.  We will provide answers to any questions you may have during the home inspection, as well as point out emergency switches and shutoff valves, discuss important maintenance items, and familiarize you with your new home. It’s a good idea to go to the inspection and hear the findings firsthand."
        />
        <AccordionBox
          heading="CAN I SEE AN EXAMPLE OF YOUR HOME INSPECTION REPORT?
"
          body={<ExampleReport />}
        />
        <AccordionBox
          heading="HOW MUCH IS A HOME INSPECTION?"
          body="The cost of a Home Inspection can vary widely depending on the type of home, the size of the home, and maybe most importantly - on the Inspector themselves.   We believe in fair, honest, upfront pricing.  We are proud to offer senior and military discounts.  Call today to request your free quote."
        />
        <AccordionBox heading="testtts" body={<MediaBox />} />​
      </Container>
    </div>
  );
}
