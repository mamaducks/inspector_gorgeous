import React, { useState } from "react";
import { Box, Button, Dialog } from "@material-ui/core";
import { ScheduleAppointment } from "../App/ScheduleMeeting";

export function ScheduleButtonNew({ title, ...props }) {
  const [open, setOpen] = useState(false);
  const [appointment, setAppointment] = useState(null)
  return (
    <Box display="flex" justifyContent="center" width="100%">
      <Button variant="contained" {...props} onClick={() => setOpen(true)}>
        {title}
      </Button>

      <div>
        <Dialog
          open={open}
          onClose={() => setOpen(false)}
          fullWidth
          maxWidth="md"
        >
          <ScheduleAppointment setAppointment/>
        </Dialog>
      </div>
    </Box>
  );
}

// export function ScheduleButton({...props}) {
//   const [open, setOpen] = useState(false);
//   return (
//     <Box
//       display="flex"
//       justifyContent="center"
//       width="100%"
//       style={{ padding: 25 }}
//     >
//       <Button variant="contained" {...props}>Schedule your inspection today</Button>

//       <Button variant="contained" color="primary" onClick={() => setOpen(true)}>
//         Open simple dialog
//       </Button>
//       <div>
//         <Dialog
//           open={open}
//           onClose={() => setOpen(false)}
//           fullWidth
//           maxWidth="md"
//         >
//           <ScheduleAppointment />
//         </Dialog>
//       </div>
//     </Box>
//   );
// }
