import React from "react";
import { FaqAccordion } from "../Components/Faq/FaqAccordion";
import { Title } from "../Components/App/HeaderTitle";
import { Box, Container } from "@material-ui/core";

import { Expect } from "../Components/Faq/Expect";
export function FaqPage() {
  return (
    <Box direction="column">
      <Title title="Questions" />
      <Container>
        <Box direction="column">
          <Box
            fontSize={14}
            fontFamily="Helvetica"
            lineHeight={2}
            letterSpacing={2}
            color="#000000"
          >
            <Expect />
          </Box>
        </Box>
      </Container>
      <FaqAccordion />
    </Box>
  );
}
