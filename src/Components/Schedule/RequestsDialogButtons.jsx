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

export function FooterButton({ title, content }) {
  const [open, setOpen] = useState(false);

  return (
    <Box display="flex" justifyContent="center" width="100%" margin="3px">
      <Button variant="outlined" size="small" fullWidth onClick={() => setOpen(true)} style={{border: "1.8px solid #a71976", color:"#c54097", lineHeight:"1"}}>
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
