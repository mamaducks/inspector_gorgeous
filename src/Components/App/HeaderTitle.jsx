import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { greyHead } from "../../img/greyHead.png";

const useStyles = makeStyles({
  // box: {
  //   backgroundImage: `url(${greyHead})`,
  // },
});

export const Title = ({ title }) => {
  const classes = useStyles();
  return (
    <Box
      fontFamily="Helvetica"
      height="75%"
      fontSize={16}
      letterSpacing={3}
      lineHeight={5}
      textAlign="center"
      color="#786379"
      className={classes.box}
      style={{ backgroundColor: "#f5f5f5" }}
    >
      {title}
    </Box>
  );
};
