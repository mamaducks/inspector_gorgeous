import { useMediaQuery } from "react-responsive";
import { AppBar, Box, Icon, IconButton, Typography } from "@material-ui/core";
import { FaPhoneAlt } from "react-icons/fa";
import { MailTo } from "../Components/Social/MailTo";
import { Schedule } from "../Components/Schedule/Schedule";
import { Quote } from "../Components/Schedule/Quote";
import House from "../img/littleHouse.png";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { AiOutlineSchedule } from "react-icons/ai";
import React, { useState } from "react";
import { Button, Dialog } from "@material-ui/core";

export function FooterButton({ title, icon, content }) {
  const [open, setOpen] = useState(false);

  return (
    <Box display="flex" justifyContent="center" width="100%" margin="4px">
      <Button
        variant="outlined"
        size="small"
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

export function FootQuoteButton() {
  const isWide = useMediaQuery({
    query: "(min-device-width: 650px)",
  });

  if (isWide) {
    return <FooterButton title="Get a Quote" content={<Quote />} />;
  }
  return (
    <FooterButton title={<RiMoneyDollarCircleLine />} content={<Quote />} />
  );
}

export function FootBookButton() {
  const isWide = useMediaQuery({
    query: "(min-device-width: 650px)",
  });

  if (isWide) {
    return <FooterButton title="Schedule Online" content={<Schedule />} />;
  }
  return <FooterButton title={<AiOutlineSchedule />} content={<Schedule />} />;
}

function FooterBox({ children, ...props }) {
  return (
    <Box
      // letterSpacing={0.5}
      // lineHeight={1.4}
      textAlign="center"
      // fontSize="1em"
      {...props}
    >
      {children}
    </Box>
  );
}

export const Footer = () => {
  const isWide = useMediaQuery({
    query: "(min-device-width: 700px)",
  });
  return (
    <>
      <AppBar position="sticky" elevation={0}>
        <Box
          display="flex"
          justifyContent="space-evenly"
          color="#a71976"
          alignItems="center"
          flexWrap="wrap"
          style={{  paddingTop: "10px" }}
        >
          <FooterBox>
            <Typography
              variant="subtitle1"
              noWrap="true"
              display="block"
              // lineHeight={0.2}
              // fontSize="1.5rem"
            >
              BUYER BEWARE HOME INSPECTION
              <Typography variant="subtitle2">
                Proudly Serving South Jersey
              </Typography>
              <Typography variant="caption" display="block" textAlign="start" gutterBottom >
                Burlington, Camden, Gloucester, Cumberland,
                  Atlantic, and Cape May Counties
                </Typography>
              </Typography>
          </FooterBox>
          <FooterBox display="flex" paddingRight="35px">
            {isWide && (
              <img
                alt=""
                src={House}
                style={{ paddingRight: "10px" }}
                maxWidth="100%"
                height="auto"
              />
            )}
            <Box
              display="flex"
              padding="10px"
              alignItems="center"
              flexDirection="column"
            >
              <FootQuoteButton />
              <FootBookButton />
            </Box>
          </FooterBox>
          <FooterBox
            display="flex"
            // padding="10px"
            // alignItems="center"
            justifyContent="center"
            flexDirection="column"
          >
            <Box display="flex" paddingBottom="4px">
              <Icon style={{ display: "flex", alignItems: "center" }}>
                <FaPhoneAlt fontSize="0.8em" color="#c54097" />
              </Icon>
              <Typography variant="body1" noWrap="true" display="block">
                1-609-670-0451
              </Typography>
            </Box>
            <Box display="flex" justifyContent="center" color="#a71976">
              <MailTo
                style={{
                  color: "#c54097",
                  fontWeight: "bold",
                  fontSize: "1.5em",
                  paddingRight: "5px",
                }}
              />
              <Typography variant="body1" noWrap="true" display="block">
                Send us an email
              </Typography>
            </Box>
          </FooterBox>
        </Box>
      </AppBar>
    </>
  );
};
