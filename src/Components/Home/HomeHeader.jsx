import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  image: {
    height: 250,
    width: 250,
    backgroundColor: "green",
  },
});

export const HomeHeader = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.image}>
        <Box>
          <h5>A picture of you</h5>
        </Box>
      </div>
      <div>
        <h2>Some header catchy about your awesome business </h2>

        <h3>Serving South Jersey area to wherever else you will go </h3>
      </div>
    </>
  );
};
