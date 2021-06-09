import { IconButton, AppBar as MuiAppBar, Box, Icon } from "@material-ui/core";
import { AiFillFacebook, AiFillLinkedin, AiOutlineMail } from "react-icons/ai";
import { FiInstagram } from "react-icons/fi";
import { makeStyles } from "@material-ui/core";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { MailTo } from "./MailTo";
import { Logo } from "../App/Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Phone } from "./Phone";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
  
} from "@fortawesome/free-brands-svg-icons";
import {HiOutlineMail} from 'react-icons/hi';

import { Social } from "../App/SocialMedia";

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "space-between",
  },
});

export function AppBar() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Logo />

      <Box display="flex" justifyContent="flex-end">
        <Social
          color="black"
          alignSelf="flex-end"
          display="flex"
          justifyContent="space-evenly"
          paddingBottom="10px"
          minWidth="200px"
          size="2x"
          label={<HiOutlineMail color="black" />}
          />
      </Box>
    </div>
  );
}
