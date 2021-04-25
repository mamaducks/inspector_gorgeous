import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";

const useStyles = makeStyles({
  info: {},
});

export const FaqHeader = () => {
  const classes = useStyles();

  return (
    <Box
      textAlign="center"
      fontSize={16}
      letterSpacing={1}
      fontFamily="Helvetica"
      lineHeight={5}
    >
      <Typography>
        Our mission is to help you connect quickly with investors and sell your
        home fast. Stop paying to list your home, scheduling inconvenient
        viewings, and shelling out money for realtor fees.
      </Typography>
    </Box>
  );
};
