import { Box, makeStyles, Grid } from "@material-ui/core";
import { CenterBox } from "../Box/MyBox";

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
        <Box color="#751f66" flexDirection="column" style={{ padding: 20 }}>
          <Box
            letterSpacing={1.5}
            lineHeight={1.6}
           
          >
            <Box textAlign="center">South Jersey</Box>
           
              Burlington, Camden, Gloucester, Cumberland, Atlantic,
              and Cape May Counties
           
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
