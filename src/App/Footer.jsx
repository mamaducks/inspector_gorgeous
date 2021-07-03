import { AppBar, Box, Icon } from "@material-ui/core";
import { FaPhoneAlt } from "react-icons/fa";
import { MailTo } from "../Components/Social/MailTo";
import { FooterButton } from "../Components/Schedule/RequestsDialogButtons";
import { Schedule } from "../Components/Schedule/Schedule";
import { Quote } from "../Components/Schedule/Quote";

function FootOuterBox({ children }) {
  return (
    <Box padding="10px">
      <Box
        display="flex"
        justifyContent="space-evenly"
        color="#a71976"
        alignItems="center"
        flexWrap="wrap"
      >
        {children}
      </Box>
    </Box>
  );
}

function FooterBox({ children, ...props }) {
  return (
    <Box
      letterSpacing={0.5}
      lineHeight={1.4}
      textAlign="center"
      fontSize="1rem"
      {...props}
    >
      {children}
    </Box>
  );
}

export const Footer = () => {
  return (
    <>
      <AppBar position="sticky" elevation={0}>
        <FootOuterBox>
          <FooterBox>
            <Box lineHeight="16px" fontWeight="600">
              BUYER BEWARE HOME INSPECTION
            </Box>

            <Box fontSize="0.8rem">
              <div>Proudly Serving South Jersey</div>
              <Box fontSize="0.7rem">
                Burlington, Camden, Gloucester, Cumberland, Atlantic, and Cape
                May Counties
              </Box>
            </Box>
          </FooterBox>
          <FooterBox>
            <FooterButton title="Get a Quote" content={<Quote />} />
            <FooterButton title="Schedule Online" content={<Schedule />} />
          </FooterBox>
          <FooterBox>
            <Box
              display="flex"
              justifyContent="center"
              paddingBottom="5px"
              alignItems="center"
              fontSize="0.8rem"
            >
              <Icon>
                <FaPhoneAlt fontSize="18px" />
              </Icon>

              <div>1-609-670-0451</div>
            </Box>
            <Box fontSize="0.8rem">
              <div >
                <MailTo
                  label="Click Here"
                  style={{ color: "#a71976", fontWeight: "bold" }}
                />{" "}
                to send us an email
              </div>
            </Box>
          </FooterBox>
        </FootOuterBox>
      </AppBar>
    </>
  );
};
