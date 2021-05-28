import React, { useState } from "react";
import { Box, Button, Dialog } from "@material-ui/core";
import { ScheduleAppointment } from "../App/ScheduleMeeting";

export function ScheduleButton() {
  const [open, setOpen] = useState(false);
  return (
    <Box
      display="flex"
      justifyContent="center"
      width="100%"
      style={{ padding: 25 }}
    >
      <Button variant="contained">Schedule your inspection today</Button>

      <Button variant="contained" color="primary" onClick={() => setOpen(true)}>
        Open simple dialog
      </Button>
      <div>
        <Dialog
          open={open}
          onClose={() => setOpen(false)}
          fullWidth
          maxWidth="md"
        >
          <ScheduleAppointment />
        </Dialog>
      </div>
    </Box>
  );
}
