import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Container,
  Box,
  Dialog,
  Button,
  Card,
  CardMedia,
  CardActionArea,
} from "@material-ui/core";
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
    backgroundColor:"#f1e9ee"
  }
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

export function FaqAccordion() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  return (
    <div className={classes.root}>
      <Container disableGutters className={classes.accordion}>
        {/* <AccordionBox heading="WHY CHOOSE US?" body="am i just the coolest " /> */}
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
          body={
            <div>
              <Box textAlign="center">
                Your detailed Buyer Beware Inspection Report will be done by a
                highly trained home inspector with details about your homes
                condition, images and recommendations, delivered within 24 hours
                (next business day) – often the same day so you can move forward
                confidently with knowledge and peace of mind
              </Box>

              <Box display="flex" justifyContent="center">
                <Box display="flex" flexDirection="column">
                  <img
                    alt=""
                    src={Report}
                    width="150px"
                    height="150px"
                    onClick={() => setOpen(true)}
                  />{" "}
                  <DialogReport
                    open={open}
                    onClick={() => setOpen(false)}
                    image={Report}
                  />
                </Box>

                <Box display="flex" flexDirection="column">
                  <img
                    alt=""
                    src={Reporter}
                    width="150px"
                    height="150px"
                    onClick={() => setOpen(true)}
                  />
                  <DialogReport
                    open={open}
                    onClick={() => setOpen(false)}
                    image={Reporter}
                  />
                </Box>
              </Box>
            </div>
          }
        />
        <AccordionBox
        heading="HOW MUCH IS A HOME INSPECTION?"
        body="The cost of a Home Inspection can vary widely depending on the type of home, the size of the home, and maybe most importantly - on the Inspector themselves.   We believe in fair, honest, upfront pricing.  We are proud to offer senior and military discounts.  Call today to request your free quote."
        />​
      </Container>
    </div>
  );
}

function DialogReport({ image }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>View Large</Button>

      <Dialog open={open} onClose={() => setOpen(false)}>
        <img alt="" src={image} width="300px" height="450px" />
      </Dialog>
    </>
  );
}

const questions = () => {
  return (
    <Typography>
      The home inspection reveals the real physical condition of a House Roofing
      Inspections We walk on most roofing systems if they are safe and
      accessible to get a close look at any concerns. However, the inspector is
      not required to walk on the roof and you may ask why? If the roof is
      highly piched, wet or snow covered, it could be very unsafe to do so. Some
      roof coverings cannot be walked on because they can be damaged. In this
      case the inspector generally examines the roof from ground level with
      binoculars or looks out higher windows to get a view of roofing below.
      Inspectors will note torn or missing shingles and nail pops that may or
      may not indicate a full-fledged problem. To guarantee that you are buying
      a house with a durable roof, the inspector may suggest hiring a licensed
      roofing contractor to provide a full evaluation. Attic and Crawl Space
      Inspections We do not mind to get dirty and inspect all accessible attic
      and crawl spaces. A number of structural issues are discovered in the
      attic and crawl spaces. Damaged (cracked or loose) roof rafters, floor
      joists and leaking foundations are revealed when these spaces are
      inspected. Evidence of roof leakage can be visible in the attic area (on
      the boards) and may go undetected from the top of the roof. The existence
      of unsafe electrical wiring or bathroom exhaust fans terminating in the
      attic should be reported. The condition of insulation or inadequate
      ventilation can be discovered inspecting these spaces. We detected major
      structural issues and saved thousands of dollars to our clients.
      Electrical Inspections The electrical system is an important component of
      the home and feeds the mechanical systems. A home inspector is required to
      conduct a thorough visual examination of the visible aspects of electrical
      system and is not required to report on any code issues. The electrical
      inspection includes the main service panel, service lines, power outlets,
      and the existence of GFCI and AFCI breakers,light fixtures circuit wiring
      and grounding. Plumbing Inspections A home inspector can only be
      responsible for the components that are visible. Most of the home’s
      plumbing system is covered by the walls. What is visible could show the
      home’s plumbing health. Galvanized steel pipes are an indication of
      outdated piping materials. Its corrosive qualities will cause it to fail
      before other materials. The copper piping is the best choice, but there
      are many other rigid and semi-rigid synthetic materials that are
      long-lasting and affordable. Real-estate contracts are structured so that
      major systems, such as electrical and plumbing, are reviewed and obligate
      the seller to fix most deficiencies to complete the sale. But other
      imperfections that fall outside of the contract's purview may go
      unrepaired. For example, the inspector noted damaged siding or old windows
      that the seller is not required to fix but that could develop into a much
      bigger problem later.
    </Typography>
  );
};
