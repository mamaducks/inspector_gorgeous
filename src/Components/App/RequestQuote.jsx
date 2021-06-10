import { AppBar, Box, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { Phone } from "../App/Phone";
import { ScheduleButtonNew } from "../App/ScheduleButton";
import {
  PadBox
} from "../Box/MyBox";
import { MailTo } from "./MailTo";

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
    paddingTop: "4px",
    // padding: "7px",
  },
  smallText: {
    fontWeight: "500",
    paddingRight: "4px",
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
      <AppBar position="sticky" elevation={0} className={classes.root}>
        {/* <Toolbar className={classes.title} disableGutters="true"> */}
        <Grid container className={classes.title}>
          <Grid item xs={4}>
            <PadBox>
              <Box
                letterSpacing={0.5}
                lineHeight={1.4}
                fontSize="14px"
                textAlign="center"
              >
                <Box fontSize="16px" lineHeight="16px" fontWeight="600">
                  BUYER BEWARE HOME INSPECTION
                </Box>

                <Box fontSize="15px">
                  <div>Proudly Serving South Jersey</div>
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
                <Box
                  fontSize="16px"
                  fontWeight="bold"
                  display="flex"
                  justifyContent="center"
                  flexDirection="column"
                >
                  <div className={classes.smallText}>
                    Call Today for a Quote{" "}
                  </div>
                  <Phone style={{ fontSize: "15px" }} />
                </Box>
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
                    <MailTo
                      label="Click Here"
                      style={{ color: "#a71976", fontWeight: "bold" }}
                    />{" "}
                    to Send Us an Email
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
