import { Box, makeStyles, Grid } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#095565"
  },
  promise: {
    alignSelf: "center",
    width: "55%",
  },
});

export function AboutBody() {
  const classes = useStyles();
  return (
    <Grid container xs={12} justify="center" backgroundColor="#095565">
      <Box textAlign="center" fontFamily="Helvetica" >
        SERVICE AREA
      </Box>
      <Box
        fontFamily="Helvetica"
        fontSize={14}
        letterSpacing={2}
        lineHeight={1.8}
        textAlign="center"
        
        className={classes.promise}
      >
        <div>
          New Jersey: Counties of Burlington, Camden, Gloucester, Salem,
          Cumberland, Atlantic, and Cape May
        </div>
        <div>
          Pennsylvania: Counties of Philadelphia, Delaware, Chester, Montgomery
          and Bucks New Jersey License Number: NJ24GI00149500
        </div>
      </Box>
    </Grid>
  );
}
