import { Icon, makeStyles, Typography, Box } from "@material-ui/core";
import React from "react";
import { IoMdPin, IoIosPhonePortrait } from "react-icons/io";
import IgLogo from "../../../src/I.png";

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "space-evenly",
  },
  infoBox: {
    padding: 25,
    alignItems: "center",
    display: "flex",
    backgroundColor: "#f3f0e8",
    width: 300,
    height: 250,
    flexDirection: "column",
    justifyContent: "center",
  },
  logo: {
    display: "flex",
    justifyContent: "center",
  },
});

export function ContactBody() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <div className={classes.infoBox}>
          <Icon>
            <IoMdPin />
          </Icon>
          <Box style={{ padding: 20 }}>
            <Typography> Washington Ave, Berlin NJ 08009 </Typography>
          </Box>
        </div>

        <div className={classes.infoBox}>
          <Icon>
            <IoIosPhonePortrait />
          </Icon>
          <Box style={{ padding: 20 }}>
            <Typography>p: 609-445-6778 fax: 609-890-6786</Typography>
          </Box>
        </div>
      </div>
      <Box className={classes.logo}>
        <img src={IgLogo} width="400" height="400" />
      </Box>
    </>
  );
}
