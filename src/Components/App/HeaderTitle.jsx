import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

export const Title = ({ title }) => {
  return (
    <Box
      fontFamily="Helvetica"
      height="75%"
      fontSize={16}
      letterSpacing={3}
      lineHeight={5}
      textAlign="center"
      color="text.primary"
      style={{ backgroundColor: "lightblue" }}
    >
      {title}
    </Box>
  );
};
