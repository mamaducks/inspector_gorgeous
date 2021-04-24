import { Box, Container, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  info: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "auto",
    width: "60%",
  },
});

export const HomeBody = () => {
  const classes = useStyles();

  return (
    <Box className={classes.info}>
      <Container>
        <h3>
          {" "}
          WHAT TO EXPECT FROM YOUR HOME INSPECTION DRONE ROOF INSPECTION |
          INFRARED THERMOGRAPHY
        </h3>

        <h5>
          We promise to provide detailed reports clearly identifying any
          material defect along with a recommendation for what to do as well as
          what can happen if not repaired. Your home inspection and report will
          cover the condition of the home’s heating system; central air
          conditioning system (temperature permitting); interior plumbing and
          electrical systems; the roof, attic and visible insulation; walls,
          ceilings, floors, windows and doors; the foundation, basement and
          structural components. Roof inspections will be done via drone which
          will capture any defects in vivid detail including roof coverings,
          drainage systems, vent penetrations as well as any flashing. Infrared
          Thermography is used by LDG for the most thorough inspections
          available.
        </h5>
      </Container>
    </Box>
  );
};
