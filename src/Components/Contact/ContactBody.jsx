import { Icon, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { IoMdPin, IoIosPhonePortrait } from "react-icons/io";

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "space-evenly",
  },
  infoBox: {
    padding: 45,
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
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
          <Typography> somewhere in south jersey Maple Ave Berlin</Typography>
        </div>

        <div className={classes.infoBox}>
          <Icon>
            <IoIosPhonePortrait />
          </Icon>

          <Typography>p: 609-445-6778 fax: 609-890-6786</Typography>
        </div>
      </div>
      <div className={classes.logo}>logo</div>
    </>
  );
}
