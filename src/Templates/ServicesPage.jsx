import { Box, Container, Link, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { Quote } from "../Components/RequestQuote";
import { ServicesBody } from "../Components/Services/ServiceBody";

export function ServicesPage() {

  return (
    <>
      <div>
        <ServicesBody />
      </div>
      <div>
        <Quote />
      </div>
    </>
  );
}
