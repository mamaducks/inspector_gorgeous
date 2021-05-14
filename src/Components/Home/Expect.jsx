import { Box, Container, makeStyles, Typography } from "@material-ui/core";
import purpleBG from "../../img/purpleBG.png";

const useStyles = makeStyles({
  info: {
    // backgroundImage: `url(${purpleBG})`,
  },
});

export const Expect = () => {
  const classes = useStyles();

  return (
    <Box className={classes.info} style={{}}>
      <Container>
        <Box direction="column">
          <Box
            fontFamily="Helvetica"
            fontSize={14}
            letterSpacing={2}
            lineHeight={1.8}
            textAlign="center"
            color="#010101"
          >
            WHAT TO EXPECT FROM YOUR HOME INSPECTION
          </Box>

          <Box
            fontFamily="Helvetica"
            fontSize={14}
            letterSpacing={2}
            lineHeight={1.7}
            textAlign="center"
            color="#404040"
            fontWeight={400}
            style={{ paddingTop: 20 }}
          >
            We will provide you with a detailed reports clearly identifying any
            material defect along with a recommendation for what to do as well
            as what can happen if not repaired. Your home inspection and report
            will cover the condition of the home’s heating system; central air
            conditioning system (temperature permitting); interior plumbing and
            electrical systems; the roof, attic and visible insulation; walls,
            ceilings, floors, windows and doors; the foundation, basement and
            structural components. Roof inspections will be done via drone which
            will capture any defects in vivid detail including roof coverings,
            drainage systems, vent penetrations as well as any flashing.
            Infrared Thermography is used by LDG for the most thorough
            inspections available.
          </Box>
          <Box>
            The whole house inspection we perform for you will be of the most
            complete and in-depth available in the Home Inspection Industry
            today. Our New Jersey home inspection is an objective visual
            analysis of a home`s structure and mechanical systems. An inspection
            will determine the areas of the home that are not performing
            properly, as well as items that are beyond their usefull life or are
            unsafe.
          </Box>
          <Box>
            HOME INSPECTIONS Our standard inspection is an evaluation of the
            home’s visible and accessible interior and exterior structure,
            systems and components. We encourage you to accompany us during the
            inspection, when it is safe to do so. This allows us to answer any
            questions, point out emergency switches and shutoff valves, discuss
            important maintenance items, and familiarize you with your new home.
            We will provide you with a narrative report that includes digital
            photos. We will inspect the following, when visible and accessible:
            • Roof • Structural Components • Attic, Ventilation & Insulation •
            Exterior Cladding • Porch & Deck • Attached Garage • Foundation •
            Basement / Crawlspace • Electrical System • Plumbing System • HVAC
            System Interior including; Built-In Appliances, Ceilings, Floors &
            Walls, Windows and Doors
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
