import { AppBar, Box, Icon } from "@material-ui/core";
import React from "react";
import { ScheduleButtonNew } from "../Components/Schedule/ScheduleButton";
import { MailTo } from "./MailTo";
import { FooterBox } from "../Components/Box/AppBoxes";
import { FaPhoneAlt } from "react-icons/fa";

function FootOuter({ children }) {
  return (
    <Box
      display="flex"
      justifyContent="space-evenly"
      color="#a71976"
      alignItems="center"
      paddingTop="4px"
    >
      {children}
    </Box>
  );
}

export const Quote = () => {
  return (
    <>
      <AppBar position="sticky" elevation={0}>
        <FootOuter>
          <FooterBox>
            <Box lineHeight="16px" fontWeight="600">
              BUYER BEWARE HOME INSPECTION
            </Box>

            <Box fontSize="15px">
              <div>Proudly Serving South Jersey</div>
              <Box fontSize="12px">
                Burlington, Camden, Gloucester, Cumberland, Atlantic, and Cape
                May Counties
              </Box>
            </Box>
          </FooterBox>
          <FooterBox fontWeight="bold">
            Call Today for a Quote
            <Box display="flex">
              <Icon>
                <FaPhoneAlt />
              </Icon>

              <div>1-609-670-0451</div>
            </Box>
            <Box paddingTop="5px">
              <ScheduleButtonNew
                title="Schedule Online"
                size="small"
                fontSize="14px"
              />
            </Box>
          </FooterBox>
          <FooterBox>
            Email Us
            <Box>
              <div>
                <MailTo
                  label="Click Here"
                  style={{ color: "#a71976", fontWeight: "bold" }}
                />{" "}
                to send us an email
              </div>
            </Box>
          </FooterBox>
        </FootOuter>
      </AppBar>
    </>
  );
};
