import React from "react";
import { BodyTop, BodyMiddle, BodyBottom } from "../Components/Home/HomeHeader";
import { Container, Grid } from "@material-ui/core";

export function HomePage() {
  return (
    <Container style={{ padding: 20 }}>
    <Grid container>
      <BodyTop />
      <BodyBottom />
      <BodyMiddle />
      
    </Grid>
  </Container>
  );
}
