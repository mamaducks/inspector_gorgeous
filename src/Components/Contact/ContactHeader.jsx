import React from "react";
import { Box, Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

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
        <Box textAlign="center">map view picture of your location</Box>
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
        </Box>
      </div>
    </Container>
  );
}
