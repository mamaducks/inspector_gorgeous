import React from "react";
import { Box, Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MapImage from "/Users/leonaduckworth/code/InspectorGorgeous/inspector_gorgeous/src/locationimg.png";
const useStyles = makeStyles((theme) => ({
  root: {},
}));

export function ContactHeader() {
  const classes = useStyles();
  console.log(classes);

  return (
    // <Container className={styles.contactTop}>
    <Container className={classes.root}>
      <div>
        <Box textAlign="center"></Box>
        <Box
          lineHeight={5}
          textAlign="center"
          letterSpacing={3}
          fontFamily="Helvetica"
        >
          <Typography> Please feel free to contact us</Typography>
        </Box>
        <Box textAlign="center" fontSize={14} letterSpacing={1}>
          <Typography>
            We offer very flexible appointments including early evening
            (daylight permitting). We understand tight timeframes and will do
            our best to accommodate your deadlines.
          </Typography>
          <img src={MapImage} width="300" height="250" />
        </Box>
      </div>
    </Container>
  );
}
