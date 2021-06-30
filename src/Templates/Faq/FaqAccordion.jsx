import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { AccordionBox } from "../Faq/Accordion/AccordionBox";
import { ExampleReport } from "../Faq/Accordion/ExampleReport";

const useStyles = makeStyles({
  root: {
    margin: "25px 0",
  },
  accordion: {
    flexDirection: "column",
    borderRadius: 5,
    margin: "25px 50px",
    paddingBottom: "15px"
  },
});

export function FaqAccordion() {
  const classes = useStyles();

  return (
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
        heading="SHOULD THE HOME BUYER ATTEND THE HOME INSPECTION?"
        body="We encourage you to accompany us during the inspection, when it is safe to do so.  We will provide answers to any questions you may have during the home inspection, as well as point out emergency switches and shutoff valves, discuss important maintenance items, and familiarize you with your new home. It’s a good idea to go to the inspection and hear the findings firsthand."
      />

      <AccordionBox
        heading="CAN I SEE AN EXAMPLE OF YOUR HOME INSPECTION REPORT?"
        body={<ExampleReport />}
      />

      <AccordionBox
        heading="HOW MUCH IS A HOME INSPECTION?"
        body="The cost of a Home Inspection can vary widely depending on the type of home, the size of the home, and maybe most importantly - on the Inspector themselves.   We believe in fair, honest, upfront pricing.  We are proud to offer senior and military discounts.  Call today to request your free quote."
      />
    </Container>
  );
}
