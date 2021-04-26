import { makeStyles, Grid, Box } from "@material-ui/core";
import Cut from "/Users/leonaduckworth/code/InspectorGorgeous/inspector_gorgeous/src/blueBG.png";

const useStyles = makeStyles({
  box: {
    display: "flex",
    justifyContent: "space-evenly",
    backgroundColor: "#f5f5f5",
    marginTop: 15
  },
  promiseLeft: {
    alignSelf: "center",
    color: "green",
  },
});

export const OurPromise = () => {
  const classes = useStyles();
  return (
    <>
      <Grid className={classes.box}>
        <Grid item xs={3} className={classes.promiseLeft}>
          <div>
            <Box
              fontSize={14}
              fontFamily="Helvetica"
              lineHeight={2}
              letterSpacing={2}
              color="#786379"
              flexDirection="column"
            >
              <div>Your Satisfaction Guaranteed </div>
              <div> Our Promise to you</div>
            </Box>
          </div>
        </Grid>
        <Grid item xs={6}>
        <Box
              fontSize={14}
              fontFamily="Helvetica"
              lineHeight={1.5}
              color="#786379"
              flexDirection="column"
              style={{padding: 20}}
            >
          We belief that our customer’s needs are of the utmost importance. We
          take our time during your inspection, to guide you through the
          process. We encourage our clients to be at the inspection and address
          any concerns they may have with the property. We welcome the
          opportunity to earn your trust and deliver you the best customer
          service in the industry. This is our promise to you!
          </Box>
        </Grid>
      </Grid>
    </>
  );
};
