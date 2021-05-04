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
            color="#406368"
          >
            WHAT TO EXPECT FROM YOUR HOME INSPECTION DRONE ROOF INSPECTION |
            INFRARED THERMOGRAPHY
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
        </Box>
      </Container>
    </Box>
  );
};
