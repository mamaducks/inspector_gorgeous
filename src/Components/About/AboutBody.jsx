import { makeStyles } from "@material-ui/core/styles";

import { Typography, Container, Box } from "@material-ui/core";

const useStyles = makeStyles({
  
 p: {
   width: "75%",
   display: "flex",
   justifyContent: "center"
 }
});

export function AboutBody() {
  const classes = useStyles();

  return (
    <Box style={{backgroundColor: "#e8e8e8", padding: 30}}>
      <Container style={{display: "flex", justifyContent: "center"}}>
      <p className={classes.p}>
        SERVICE AREA New Jersey: Counties of Burlington, Camden, Gloucester,
        Salem, Cumberland, Atlantic, and Cape May Pennsylvania: Counties of
        Philadelphia, Delaware, Chester, Montgomery and Bucks New Jersey License
        Number: NJ24GI00149500
      </p>
      </Container>
    </Box>
  );
}
