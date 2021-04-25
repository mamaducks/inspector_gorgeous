import { Container, Box, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  p: {
    width: "75%",
    display: "flex",
    justifyContent: "center",
  },
});

export function AboutBody() {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Typography className={classes.p}>
        SERVICE AREA New Jersey: Counties of Burlington, Camden, Gloucester,
        Salem, Cumberland, Atlantic, and Cape May Pennsylvania: Counties of
        Philadelphia, Delaware, Chester, Montgomery and Bucks New Jersey License
        Number: NJ24GI00149500
      </Typography>
    </Container>
  );
}
