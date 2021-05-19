import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

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
      lineHeight={3}
      textAlign="center"
      color="#494649"
      fontWeight={800}
      className={classes.box}
    >
      {title}
    </Box>
  );
};
