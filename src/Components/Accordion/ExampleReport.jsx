import { Box } from "@material-ui/core";
import React from "react";
import Report from "../../img/reportA.png";
import Reporter from "../../img/reportB.png";
import { MediaBox } from "./MediaBox.jsx";
import { DivBox } from "../Box/MyBox";

export const ExampleReport = () => {
  return (
    <div>
      <DivBox>
        {" "}
        Your detailed Buyer Beware Inspection Report will be done by a highly
        trained home inspector with details about your homes condition, images
        and recommendations, delivered within 24 hours (next business day) –
        often the same day so you can move forward confidently with knowledge
        and peace of mind
        </DivBox>

      <Box display="flex" justifyContent="center">
        <MediaBox image={Report} />
        <MediaBox image={Reporter} />
      </Box>
    </div>
  );
};
