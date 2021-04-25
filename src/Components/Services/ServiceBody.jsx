import {
  Link,
  Box,
  makeStyles,
  Container,
  Typography,
} from "@material-ui/core";
import React from "react";
const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  box: {
    display: "flex",
    justifyContent: "space-between",
    margin: 15,
  },
});

export function ServicesBody() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Box component="span" fontSize={24} textAlign="center">
        <Typography>
          WE ALSO INCLUDE THE FOLLOWING SERVICES WITH EVERY HOME INSPECTION:
        </Typography>
      </Box>
      <Container>
        <div>
          <Link href="/sellerLogin">Service A</Link>

          <Typography>a service you have maybe a picture behind</Typography>
        </div>
        <div>
          <Link href="/buyerLogin">Service B</Link>

          <Typography>a service you have</Typography>
        </div>
      </Container>
    </div>
  );
}
