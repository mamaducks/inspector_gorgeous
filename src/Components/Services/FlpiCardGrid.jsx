import { Box } from "@material-ui/core";
import React from "react";
import { FlipCardDetails } from "./FlipCardDetails";

export const ServiceCardGrid = ({ servicesCard }) => {

  console.log(servicesCard);
  return (
    <Box display="flex" justifyContent="center" flexWrap="wrap">
      {servicesCard.map((data, index) => (
        <div key={index}>
          <FlipCardDetails {...data} />
        </div>
      ))}
    </Box>
  );
};
