import { Box, Container, Typography } from "@material-ui/core";

import React from "react";


import { Expect } from "../Home/Expect";



export const FaqHeader = () => {
 

  return (
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
  );
};
