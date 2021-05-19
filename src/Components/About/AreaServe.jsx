import { Box, makeStyles, Grid } from "@material-ui/core";
import {
  CenterBox,
  LongBox,
  MyFlexBox,
  ContentBox,
  MyInfoBox,
} from "../Box/MyBox";

const useStyles = makeStyles({
  promiseLeft: {
    alignSelf: "center",
    color: "green",
  },
});

export function AreaServe() {
  const classes = useStyles();
  return (
    <Grid container xs={12} justify="center" backgroundColor="#095565">
      <Grid item xs={3} className={classes.promiseLeft}>
        <CenterBox>SERVICE AREA</CenterBox>
      </Grid>
      <Grid item xs={6}>
        <LongBox>
          <MyInfoBox>
            <MyFlexBox>
              <Box fontSize={15} letterSpacing={2} style={{ paddingRight: 10 }}>
                New Jersey:
              </Box>
              Counties of Burlington, Camden, Gloucester, Salem, Cumberland,
              Atlantic, and Cape May
            </MyFlexBox>
          </MyInfoBox>
          <MyInfoBox>
            <MyFlexBox>
              <Box fontSize={15} letterSpacing={2} style={{ paddingRight: 10 }}>
                Pennsylvania:
              </Box>
              <div></div>
              Counties of Philadelphia, Delaware, Chester, Montgomery and Bucks
              New Jersey License Number: NJ24GI00149500
            </MyFlexBox>
          </MyInfoBox>
        </LongBox>
      </Grid>
    </Grid>
  );
}
