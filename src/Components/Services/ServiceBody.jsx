import {
  Link,
  Box,
  makeStyles,
  Container,
  Typography,
  Card,
} from "@material-ui/core";
import React from "react";
const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  box: {
    display: "flex",
    justifyContent: "space-between",
    margin: 15,
  },
});
const ServiceCard = () => {
  return <Card>
    
  </Card>;
};
export function ServicesBody() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Box component="span" fontSize={24} textAlign="center">
        <Typography>
          FULL SERVICE INSPECTIONS include; Electrical Panels & Breakers
          *Drainage Sump Pumps * Inspectors Code of Ethics *Grounding and
          Bonding * Electrical Service Line Plumbing * GFCIs * Meter Boxes *
          Water intrusion * Fireplace Damper Door * Basement, Foundation *
          Heating Inspection * Insulation and Ventilation * Crawlspace
          Examination * Commercial Inspection * Garage Doors & openers * Grading
          and Drainage * Roofing Inspection * Roof, Flashings, and Trim * HVAC
          Inspection * Radon Measurement * Gutters and Downspouts * Exterior
          Inspection * And much more !
        </Typography>
        <Typography>
          The home inspection reveals the real physical condition of a House
          Roofing Inspections 
          We walk on most roofing systems if they are safe
          and accessible to get a close look at any concerns. However, the
          inspector is not required to walk on the roof and you may ask why? If
          the roof is highly piched, wet or snow covered, it could be very
          unsafe to do so. Some roof coverings cannot be walked on because they
          can be damaged. In this case the inspector generally examines the roof
          from ground level with binoculars or looks out higher windows to get a
          view of roofing below. Inspectors will note torn or missing shingles
          and nail pops that may or may not indicate a full-fledged problem. To
          guarantee that you are buying a house with a durable roof, the
          inspector may suggest hiring a licensed roofing contractor to provide
          a full evaluation. 
          Attic and Crawl Space Inspections 
          We do not mind to
          get dirty and inspect all accessible attic and crawl spaces. A number
          of structural issues are discovered in the attic and crawl spaces.
          Damaged (cracked or loose) roof rafters, floor joists and leaking
          foundations are revealed when these spaces are inspected. Evidence of
          roof leakage can be visible in the attic area (on the boards) and may
          go undetected from the top of the roof. The existence of unsafe
          electrical wiring or bathroom exhaust fans terminating in the attic
          should be reported. The condition of insulation or inadequate
          ventilation can be discovered inspecting these spaces. We detected
          major structural issues and saved thousands of dollars to our clients.
          Electrical Inspections 
          The electrical system is an important component
          of the home and feeds the mechanical systems. A home inspector is
          required to conduct a thorough visual examination of the visible
          aspects of electrical system and is not required to report on any code
          issues. The electrical inspection includes the main service panel,
          service lines, power outlets, and the existence of GFCI and AFCI
          breakers,light fixtures circuit wiring and grounding. 
          Plumbing
          Inspections 
          A home inspector can only be responsible for the
          components that are visible. Most of the home’s plumbing system is
          covered by the walls. What is visible could show the home’s plumbing
          health. Galvanized steel pipes are an indication of outdated piping
          materials. Its corrosive qualities will cause it to fail before other
          materials. The copper piping is the best choice, but there are many
          other rigid and semi-rigid synthetic materials that are long-lasting
          and affordable. 
          Real-estate contracts are structured so that major
          systems, such as electrical and plumbing, are reviewed and obligate
          the seller to fix most deficiencies to complete the sale. But other
          imperfections that fall outside of the contract's purview may go
          unrepaired. For example, the inspector noted damaged siding or old
          windows that the seller is not required to fix but that could develop
          into a much bigger problem later.
        </Typography>
        <Typography>
          WE ALSO INCLUDE THE FOLLOWING SERVICES WITH EVERY HOME INSPECTION:
        </Typography>
      </Box>
      <Container>
        <div>
          <Link href="/sellerLogin">Service A</Link>
          <div>Home Inspection</div>
          <Typography>
            We are DMV’s most reviewed inspection company! We understand how
            important family is and we always inspect properties with this in
            mind!
          </Typography>
        </div>
        <div>
          <Link href="/buyerLogin">Service B</Link>
          <div>Home Inspection</div>
          <Typography>
            Before you set out to buy or lease a commercial space rely on ProTec
            to perform a property condition assessment.
          </Typography>
        </div>
        <div>New Construction</div>
        <Typography>
          Our experienced new construction specialists understand how the
          building should be built and know where to look!
        </Typography>
        <div>Radon Testing</div>
        <Typography>
          Most of our customers include Radon testing! Be safe, our area is
          known to have high radon levels.
        </Typography>
        <div>Mold Testing</div>
        <Typography>
          Exposure to mold can be both dangerous and costly. We provide you with
          results quickly.
        </Typography>
        <div>Sewer Scope</div>
        <Typography>
          Sewer cameras will help ensure the main sewer line is free of problems
          that can cause headaches after you move in. Avoid expensive repairs!
        </Typography>
        <div>Termite Inspection</div>
        <Typography>
          90% of lenders require a termite inspection we can take care of that
          too!
        </Typography>
        <div>Walk & Talk</div>
        <Typography>
          Competition for contracts can be fierce. Get a walk & talk when an
          inspection is not feasible.
        </Typography>
        <div>Re-Inspection</div>
        <Typography>
          Send us your list of repairs and we will verify they have been
          completed.
        </Typography>
        <div>Pool Inspection</div>
        <Typography>
          We will not only assess the condition of the pool but will also give
          you the information necessary to take care of your pool.
        </Typography>
        <div>Generator Testing</div>
        <Typography>
          Does your new home have a whole house generator? We can inspect that
          too!
        </Typography>
        <div>Infrared Scan</div>
        <Typography>
          FREE with full home inspections. Infrared scans offer a way to observe
          things that cannot be detected with the naked eye.
        </Typography>
        <div>EIFS Inspection</div>
        <Typography>
          On our team, we have inspectors that are specifically certified to
          conduct Exterior insulation and finish system (EIFS) inspections!
        </Typography>
        <div>EMF Inspection</div>
        <Typography>Electro Magnetic Frequency? We can test for it.</Typography>
        <div>Lawn Irrigation</div>
        <Typography>
          Our inspectors can check your lawn irrigation system!
        </Typography>
      </Container>
    </div>
  );
}
