import { useMediaQuery } from "react-responsive";
import { AppBar, Box, Icon } from "@material-ui/core";
import { FaPhoneAlt } from "react-icons/fa";
import { MailTo } from "../Components/Social/MailTo";
import { FooterButton } from "../Components/Schedule/RequestsDialogButtons";
import { Schedule } from "../Components/Schedule/Schedule";
import { Quote } from "../Components/Schedule/Quote";
import House from "../img/littleHouse.png";

function FootOuterBox({ children }) {
  return (
    <Box padding="8px">
      <Box
        display="flex"
        justifyContent="space-around"
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
  const isWide = useMediaQuery({
    query: "(min-device-width: 700px)",
  });
  return (
    <>
      <AppBar position="sticky" elevation={0}>
        <FootOuterBox>
          <FooterBox>
            <Box lineHeight={1.5} fontWeight="600" fontSize="0.9vw">
              BUYER BEWARE HOME INSPECTION
            </Box>

            <Box fontSize="0.7vw" lineHeight={1.2}>
              <div>Proudly Serving South Jersey</div>
              <Box fontSize="0.6vw">
                Burlington, Camden, Gloucester, Cumberland, Atlantic, and Cape
                May Counties
              </Box>
            </Box>
          </FooterBox>
          <FooterBox display="flex" justifyContent="center" alignItems="center">
            {isWide && (
              <img
                alt=""
                src={House}
                style={{ paddingRight: "10px" }}
                maxWidth="100%"
                height="auto"
              />
            )}
            <div>
              <FooterButton title="Get a Quote" content={<Quote />} />
              <FooterButton title="Schedule Online" content={<Schedule />} />
            </div>
          </FooterBox>
          <FooterBox>
            <Box
              display="flex"
              justifyContent="center"
              paddingBottom="2px"
              alignItems="center"
              fontSize="1vw"
            >
              <Icon style={{ display: "flex", alignItems: "center" }}>
                <FaPhoneAlt fontSize="1vw" color="#a71976" />
              </Icon>
              1-609-670-0451
            </Box>
            <Box fontSize="1vw" color="#a71976">
              <div>
                <MailTo
                  label="Click Here"
                  style={{ color: "#c54097", fontWeight: "bold" }}
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
