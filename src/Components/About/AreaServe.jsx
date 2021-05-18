import { Box, makeStyles, Grid } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#095565",
  },
  promise: {
    alignSelf: "center",
    width: "55%",
  },
  box: {
    display: "flex",
    justifyContent: "space-evenly",
    backgroundColor: "#f5f5f5",
    marginTop: 15,
  },
  promiseLeft: {
    alignSelf: "center",
    color: "green",
  },
  locate: {
    display: "flex"
  }
});

export function AreaServe() {
  const classes = useStyles();
  return (
    <Grid container xs={12} justify="center" backgroundColor="#095565">
        <Grid item xs={3} className={classes.promiseLeft}>
      <Box
        fontSize={16}
        letterSpacing={2}
        lineHeight={1.5}
        flexDirection="column"
        className={classes.promise}
      >
        <Box textAlign="center">SERVICE AREA</Box>
        </Box>
        </Grid>
        <Grid item xs={6}>
          <Box
            fontSize={18}
            lineHeight={1.5}
            color="#751f66"
            flexDirection="column"
            style={{ padding: 20 }}
          >
        <div className={classes.locate}>
          <div>New Jersey:</div>
           Counties of Burlington, Camden, Gloucester, Salem,
          Cumberland, Atlantic, and Cape May
        </div>
        <div className={classes.locate}>
          <div>Pennsylvania:</div>
           Counties of Philadelphia, Delaware, Chester, Montgomery
          and Bucks New Jersey License Number: NJ24GI00149500
        </div>
      </Box>
      </Grid>

    </Grid>
  );
}
