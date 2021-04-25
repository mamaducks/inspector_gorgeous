import { Box, Container, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  image: {
    height: 250,
    width: 250,
    backgroundColor: "#49008033",
  },
});
export const HomeHeader = () => {
  const classes = useStyles();
  return (
    <Container>
      <Box className={classes.image}>
        <h5>A picture of you</h5>
      </Box>
      <Box style={{ alignSelf: "center" }}>
        <Box lineHeight={3} fontWeight="bold">
          <Typography>
            Some header catchy about your awesome business
          </Typography>{" "}
        </Box>
        <Box>
          <Typography>
            Serving South Jersey area to wherever else you will go
          </Typography>{" "}
        </Box>
      </Box>
    </Container>
  );
};
