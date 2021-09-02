import React, { useState } from "react";
import { Box, Button, Dialog } from "@material-ui/core";
import { FlexColumnBox } from "../App/AppBoxes";

export function DialogButton({ title, content, ...props }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Box display="flex" justifyContent="center" width="100%" padding="5px">
        <Button variant="contained" color="secondary" {...props} onClick={() => setOpen(true)}>
          {title}
        </Button>

        <div>
          <Dialog
            open={open}
            onClose={() => setOpen(false)}
            fullWidth
            maxWidth="md"
          >
            {content}
          </Dialog>
        </div>
      </Box>
    </>
  );
}

export function BusinessButton({ title, icon, content }) {
  const [open, setOpen] = useState(false);

  return (
    <FlexColumnBox
      padding="5px"
      width="80%"
    >
      <Button
        variant="contained"
        color="secondary"
        startIcon={icon}
        fontSize="1rem"
        fullWidth
        onClick={() => setOpen(true)}
      >
        {title}
      </Button>

      <div>
        <Dialog
          open={open}
          onClose={() => setOpen(false)}
          fullWidth
          maxWidth="md"
        >
          {content}
        </Dialog>
      </div>
    </FlexColumnBox>
  );
}
