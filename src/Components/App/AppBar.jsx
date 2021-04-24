import React from "react";
import {
  Toolbar,
  Button,
  IconButton,
  Typography,
  AppBar as MuiAppBar,
} from "@material-ui/core";
import { AiOutlineTwitter, AiFillFacebook } from "react-icons/ai";
import { FiInstagram } from "react-icons/fi";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

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
    <div className={classes.root}>
      <MuiAppBar position="static">
        <Toolbar>
          <IconButton>
            <AiFillFacebook />
          </IconButton>
          <IconButton>
            <AiOutlineTwitter />
          </IconButton>
          <IconButton>
            <FiInstagram />
          </IconButton>

          <Typography variant="h6" className={classes.title}>
            Request a quote 609-adriennes#
          </Typography>
        </Toolbar>
      </MuiAppBar>
    </div>
  );
}
