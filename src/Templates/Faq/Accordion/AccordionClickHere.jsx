import {Quote} from '../../../Schedule/Quote';
import React, {useState} from 'react';
import {Button, Dialog} from '@material-ui/core';

export function ClickHere() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button color="secondary" onClick={() => setOpen(true)}>
        Click Here
      </Button>
      to request your free quote!
      <div>
        <Dialog
          open={open}
          onClose={() => setOpen(false)}
          fullWidth
          maxWidth="md"
        >
          {<Quote />}
        </Dialog>
      </div>
    </>
  );
}
