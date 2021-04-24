import { Box } from "@material-ui/core";
import React from "react";
import { FaqHeader } from "../Components/Faq/FaqHeader";
import { FaqAccordion } from "../Components/Faq/FaqAccordion";
import { Quote } from "../Components/RequestQuote";

export function FaqPage() {

  return (
    <Box direction="column" style={{backgroundColor: "#6b4f6d2e"}}>
      <FaqHeader />
      <FaqAccordion />
      <Quote />
    </Box>
  );
}
