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
    padding: 30,
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
      <Container disableGutters className={classes.accordion}>
        <AccordionBox heading="WHY CHOOSE US?" body="am i just the coolest " />
        <AccordionBox
          heading="HAT DOES YOUR STANDARD HOME INSPECTION COVER?"
          body="Our standard inspection is an evaluation of the
          home’s visible and accessible interior and exterior structure,
          systems and components. We will inspect the following,
          when visible and accessible: • Roof • Structural Components •
          Attic, Ventilation & Insulation • Exterior Cladding • Porch &
          Deck • Attached Garage • Foundation • Basement / Crawlspace •
          Electrical System • Plumbing System • HVAC System Interior
          including; Built-In Appliances, Ceilings, Floors & Walls,
          Windows and Doors"
        />
        <AccordionBox
          heading="HOW LONG WILL IT TAKE TO RECEIVE MY HOME INSPECTION REPORT?"
          body=" We will provide you with a narrative report
          that includes digital photos."
        />
        <AccordionBox
          heading="SHOULD THE HOME BUYER ATTEND THE HOME INSPECTION?
"
          body="We encourage you to accompany us during
          the inspection, when it is safe to do so. This allows us to
          answer any questions, point out emergency switches and shutoff
          valves, discuss important maintenance items, and familiarize you
          with your new home."
        />
        <AccordionBox
          heading="CAN I SEE AN EXAMPLE OF YOUR HOME INSPECTION REPORT?
"
          body="do you want to be my lover"
        />
      </Container>
    </div>
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
      roofing contractor to provide a full evaluation.
       Attic and Crawl Space
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
      and grounding.
       Plumbing Inspections A home inspector can only be
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
