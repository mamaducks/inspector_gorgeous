import { makeStyles, Grid, Box } from "@material-ui/core";
import { CenterBox, MyGrid, LongBox } from "../Box/MyBox";

const useStyles = makeStyles({

  promiseLeft: {
    alignSelf: "center",
    color: "green",
  },
});

export const OurPromise = () => {
  const classes = useStyles();
  return (
    <>
      <MyGrid>
        <Grid item xs={3} className={classes.promiseLeft}>
          <CenterBox>
            <div>Your Satisfaction Guaranteed </div>
            <div> Our Promise to you</div>
          </CenterBox>
        </Grid>
        <Grid item xs={6}>
          <LongBox>
            We belief that our customer’s needs are of the utmost importance. We
            take our time during your inspection, to guide you through the
            process. We encourage our clients to be at the inspection and
            address any concerns they may have with the property. We welcome the
            opportunity to earn your trust and deliver you the best customer
            service in the industry. This is our promise to you!
          </LongBox>
        </Grid>
      </MyGrid>
    </>
  );
};
