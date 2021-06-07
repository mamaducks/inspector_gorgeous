import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { MailTo } from "./MailTo";
import { AppBar, Toolbar, IconButton } from "@material-ui/core";
import { FiInstagram } from "react-icons/fi";
import { AiFillFacebook } from "react-icons/ai";
import { Box, Button, Dialog, Link, Grid } from "@material-ui/core";
import { ScheduleAppointment } from "../App/ScheduleMeeting";
import {
  MyMapBox,
  PadBox,
  MyBox,
  ListBox,
  MyContentBox,
  MyInfoBox,
  DisplayEvenBox,
  MyQuoteBox,
} from "../Box/MyBox";
import { ScheduleButtonNew } from "../App/ScheduleButton";

const useStyles = makeStyles({
  root: {
    paddingTop: "10px",
    "& button": {},
  },
  title: {
    // backgroundColor: "#c3c3c3",
    display: "flex",
    // justifyContent: "space-between",
    color: "#a71976",
    alignItems: "center",
    // padding: "7px",
   
  },
});

const QuoteBox = ({ topText, btmText, ...props }) => {
  return (
    <PadBox>
      <Box
        letterSpacing={0.5}
        lineHeight={1.4}
        fontSize="14px"
        textAlign="center"
      >
        <Box {...props}>{topText}</Box>
        <Box>{btmText}</Box>
      </Box>
    </PadBox>
  );
};

export const Quote = () => {
  const classes = useStyles();

  return (
    <>
      <PadBox />

      <AppBar position="sticky" elevation={0}>
        {/* <Toolbar className={classes.title} disableGutters="true"> */}
        <Grid xs={12} className={classes.title}>
          <Grid item xs={4}>
            <PadBox>
              <Box
                letterSpacing={0.5}
                lineHeight={1.4}
                fontSize="14px"
                textAlign="center"
              >
                <Box fontSize="16px">BUYERS BEWARE HOME INSPECTION</Box>
                <Box fontSize="15px">
                  <div>Serving Counties of South Jersey</div>
                  <Box fontSize="12px">
                    Burlington, Camden, Gloucester, Cumberland, Atlantic, and
                    Cape May Counties
                  </Box>
                </Box>
              </Box>
            </PadBox>
          </Grid>
          <Grid item xs={4}>
            <PadBox>
              <Box
                letterSpacing={0.5}
                lineHeight={1.4}
                fontSize="14px"
                textAlign="center"
              >
                <Box fontSize="17px">Call to schedule 609-670-0451</Box>
                <Box paddingTop="5px">
                  <ScheduleButtonNew
                    title="Schedule Online"
                    size="small"
                    fontSize="14px"
                  />
                </Box>
              </Box>
            </PadBox>
          </Grid>
          <Grid item xs={4}>
            <PadBox>
              <Box
                letterSpacing={0.5}
                lineHeight={1.4}
                fontSize="15px"
                textAlign="center"
              >
                <Box fontSize="16px">Email Us</Box>
                <Box>
                  <div>
                    <MailTo label="Click Here" /> to send us an email
                  </div>
                </Box>
              </Box>
            </PadBox>
          </Grid>
        </Grid>
        {/* </Toolbar> */}
      </AppBar>
    </>
  );
};
