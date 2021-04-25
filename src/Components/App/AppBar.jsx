import React from "react";
import {
  Toolbar,
  IconButton,
  Typography,
  AppBar as MuiAppBar,
  Box,
} from "@material-ui/core";
import { AiOutlineTwitter, AiFillFacebook } from "react-icons/ai";
import { FiInstagram } from "react-icons/fi";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 2,
    display: "flex",
    justifyContent: "flex-end",
    paddingRight: 12,
  },
}));

export function AppBar() {
  const classes = useStyles();
  return (
    <MuiAppBar position="static" elevation={0}>
      <Toolbar disableGutters>
        <IconButton>
          <AiFillFacebook />
        </IconButton>
        <IconButton>
          <AiOutlineTwitter />
        </IconButton>
        <IconButton>
          <FiInstagram />
        </IconButton>

        <Box fontSize={15} letterSpacing={2} className={classes.title}>
          <Typography>REQUEST A QUOTE 609-adriennes#</Typography>
        </Box>
      </Toolbar>
    </MuiAppBar>
  );
}
