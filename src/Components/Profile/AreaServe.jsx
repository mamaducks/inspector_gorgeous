import { Box, makeStyles, Grid, Container } from "@material-ui/core";
import { CenterBox } from "../Box/MyBox";

const useStyles = makeStyles({
  // promiseLeft: {
  //   alignSelf: "center",
  //   color: "green",
  // },
});

export function AreaServe() {
  const classes = useStyles();
  return (
    <Container>
      <Box
        display="flex"
        justifyContent="space-evenly"
        color="#751f66"
        letterSpacing={1.5}
        lineHeight={1.6}
      >
        <CenterBox>SERVICE AREA</CenterBox>
        <div>
        <Box textAlign="center">South Jersey</Box>
        <Box>
          Burlington, Camden, Gloucester, Cumberland, Atlantic, and Cape May
          Counties
        </Box>
        </div>
      </Box>
      {/* <Grid container xs={12} justify="center" backgroundColor="#095565">
        <Grid
          item
          xs={3}
          style={{ alignSelf: "center" }}
          className={classes.promiseLeft}
        >
          <CenterBox>SERVICE AREA</CenterBox>
        </Grid>
        <Grid item xs={6}>
          <Box color="#751f66" flexDirection="column" style={{ padding: 20 }}>
            <Box letterSpacing={1.5} lineHeight={1.6}>
              <Box textAlign="center">South Jersey</Box>
              Burlington, Camden, Gloucester, Cumberland, Atlantic, and Cape May
              Counties
            </Box>
          </Box>
        </Grid>
      </Grid> */}
    </Container>
  );
}
