import { Box, makeStyles, Grid } from "@material-ui/core";

const useStyles = makeStyles({
  promise: {
    alignSelf: "center",
    width: "55%",
  },
});

export function AboutBody() {
  const classes = useStyles();
  return (
    <Grid container xs={12} justify="center">
      <Box
        fontFamily="Helvetica"
        fontSize={14}
        letterSpacing={2}
        lineHeight={1.8}
        textAlign="center"
        color="#786379"
        className={classes.promise}
      >
        <div>SERVICE AREA</div>
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
