import { useMediaQuery } from "react-responsive";
import {
  AppBar,
  Box,
  Typography,
} from "@material-ui/core";
import { FaPhoneAlt } from "react-icons/fa";
import { MailTo } from "../Components/Social/MailTo";
import { Schedule } from "../Components/Schedule/Schedule";
import { Quote } from "../Components/Schedule/Quote";
import House from "../img/littleHouse.png";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { AiOutlineSchedule } from "react-icons/ai";
import React, { useState } from "react";
import {DialogButton} from "../Components/Schedule/RequestsDialogButtons";
import { Button, Dialog } from "@material-ui/core";

export function FooterButton({ title, icon, content }) {
  const [open, setOpen] = useState(false);

  return (
    <Box display="flex" justifyContent="center" width="100%" margin="4px">
      <Button
        variant="outlined"
        fullWidth
        onClick={() => setOpen(true)}
        style={{
          border: "1.8px solid #a71976",
          color: "#c54097",
          lineHeight: "1",
          padding: "2px",
        }}
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

export function FootQuoteButtonNew({ title, titleWide, content }) {
  const isWide = useMediaQuery({
    query: "(min-device-width: 650px)",
  });

  if (isWide) {
    return <DialogButton title={titleWide} content={content} />;
  }
  return <DialogButton title={title} content={content} />;
}

export const Footer = () => {
  const isWide = useMediaQuery({
    query: "(min-device-width: 700px)",
  });
  return (
    <>
      <AppBar position="sticky" elevation={0} >
        <Box display="flex" color="#a71976" alignItems="center" flexWrap="wrap" alignContent="center">
          <Box textAlign="center" flex="auto" paddingTop="10px">
            <Typography variant="subtitle1" paddingTop="8px" paddingBottom="1px">
              BUYER BEWARE HOME INSPECTION
              </Typography>
              <Typography variant="subtitle2" lineHeight="1.4">
                Proudly Serving South Jersey
              </Typography>
              <Typography variant="caption" gutterBottom >
                Burlington, Camden, Gloucester, Cumberland, Atlantic, and Cape
                May Counties
              </Typography>
          </Box>

          <Box margin="5px" display="flex" height="120px" flex="auto" text-align="center" style={{justifyContent:"center"}}>
            {/* <Box display="flex" flexGrow="1" text-align="center"> */}
              {isWide && (
                <img
                  alt=""
                  src={House}
                  // height="auto"
                  width="165px"
                  maxHeight="100px"
                  style={{ paddingInline: "5px" }}
                />
              )}
              <Box
               // alignItems="center"
                display="flex"
                style={{ flexDirection: "column", justifyContent: "center" }}
              >
                <FootQuoteButtonNew
                  title={<RiMoneyDollarCircleLine />}
                  titleWide="Get a Quote"
                  content={<Quote />}
                  contentWide={<Quote />}
                />
                <FootQuoteButtonNew
                  title={<AiOutlineSchedule />}
                  titleWide="Schedule Online"
                  content={<Schedule />}
                  contentWide={<Schedule />}
                />
              </Box>
            {/* </Box> */}
          </Box>
          {/* <Box flex="auto"> */}
            <Box display="flex" flex="auto" color="#c54097" justifyContent="center" flexDirection="column" alignItems="center">
              <Typography
                variant="body1"
                
                style={{
                  alignItems: "center",
                  display: "flex",
                }}
              >
                <FaPhoneAlt
                  fontSize="1.1em"
                  style={{
                    paddingInline: "8px",
                    display: "flex",
                    alignItems: "center",
                  }}
                />
                1-609-670-0451
              </Typography>
            
              <Typography
                variant="body1"
                gutterBottom
                style={{
                  alignItems: "center",
                  display: "flex",
                }}
              >
                <MailTo
                  style={{
                    color: "#c54097",
                    fontSize: "1.1em",
                    paddingInline: "8px",
                    display: "flex",
                    alignItems: "center",
                  }}
                />
                Send us an email
              </Typography>
            {/* </Box> */}
          </Box>
        </Box>
      </AppBar>
    </>
  );
};
