import { Box } from "@material-ui/core";
import React from "react";
import { FaqHeader } from "../Components/Faq/FaqHeader";
import { FaqAccordion } from "../Components/Faq/FaqAccordion";
import { Title } from "../Components/App/HeaderTitle";

export function FaqPage() {
  return (
    <Box direction="column">
      <Title title="Questions" />
      <FaqHeader />
      <FaqAccordion />
    </Box>
  );
}
