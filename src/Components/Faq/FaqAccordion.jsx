import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Container,
} from "@material-ui/core";
import { MdExpandMore } from "react-icons/md";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

const AccordionBox = ({ heading, body }) => {
  const classes = useStyles();

  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<MdExpandMore />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography className={classes.heading}>{heading}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>{body}</Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export function FaqAccordion() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container>
        <AccordionBox heading="WHY CHOOSE US?" body="am i just the coolest " />
        <AccordionBox
          heading="HAT DOES YOUR STANDARD HOME INSPECTION COVER?"
          body="dont you just want to love me all the time "
        />
        <AccordionBox
          heading="HOW LONG WILL IT TAKE TO RECEIVE MY HOME INSPECTION REPORT?"
          body="do you want to be my lover"
        />
        <AccordionBox
          heading="SHOULD THE HOME BUYER ATTEND THE HOME INSPECTION?
"
          body="dont you just want to love me all the time "
        />
        <AccordionBox
          heading="CAN I SEE AN EXAMPLE OF YOUR HOME INSPECTION REPORT?
"
          body="do you want to be my lover"
        />
        <AccordionBox heading="PRICING" body="do you want to be my lover" />
      </Container>
    </div>
  );
}
