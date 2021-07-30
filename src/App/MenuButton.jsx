import React, { useState } from "react";
import { Box, Button, IconButton, Menu, MenuItem } from "@material-ui/core";
import routes from "./Routes";
import { IoMdMenu } from "react-icons/io";

export function MenuButton() {
  const [open, setOpen] = useState(false);

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-label="menu"
        component="span"
        variant="contained"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <IoMdMenu color="black" />
      </IconButton>
      {/* <Button variant="contained" aria-haspopup="true" onClick={handleClick}>
          open menu
        </Button> */}

      <Menu
        id="simple-menu"
        value={window.location.pathname}
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {Object.values(routes).map(({ link, label }) => (
          <MenuItem
            key={link}
            //   label={label}
            href={link}
            component="a"
            value={link}
            onClick={handleClose}
          >
            {label}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
