import { Box } from "@material-ui/core";
import React from "react";
import { FaqHeader } from "../Components/Faq/FaqHeader";
import { FaqAccordion } from "../Components/Faq/FaqAccordion";
import { Quote } from "../Components/RequestQuote";

export function FaqPage() {

  return (
    <Box direction="column">
      <FaqHeader />
      <FaqAccordion />
      <Quote />
    </Box>
  );
}
