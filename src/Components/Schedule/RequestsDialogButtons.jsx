import React, { useState } from "react";
import { Box, Button, Dialog } from "@material-ui/core";

export function DialogButton({ title, content, ...props }) {
  const [open, setOpen] = useState(false);

  return (
    <>
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
            {content}
          </Dialog>
        </div>
      </Box>
    </>
  );
}

export function BusinessButton({ title, icon, content, ...props }) {
  const [open, setOpen] = useState(false);

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignSelf="center"
      padding="8px"
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
    </Box>
  );
}
