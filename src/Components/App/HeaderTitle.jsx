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
      fontSize={18}
      letterSpacing={3}
      lineHeight={4}
      textAlign="center"
      color="#494649"
      fontWeight={800}
      className={classes.box}
    >
      {title}
    </Box>
  );
};
