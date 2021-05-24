import React from "react";
import { Box, Button } from "@material-ui/core";

export function ScheduleButton() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      width="100%"
      style={{ padding: 25 }}
    >
      <Button variant="contained">Schedule your inspection today</Button>
    </Box>
  );
}
