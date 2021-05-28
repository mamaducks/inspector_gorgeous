import { IconButton, AppBar as MuiAppBar, Box, Icon } from "@material-ui/core";
import { AiFillFacebook, AiFillLinkedin, AiOutlineMail } from "react-icons/ai";
import { FiInstagram } from "react-icons/fi";
import { makeStyles } from "@material-ui/core";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { MailTo } from "./MailTo";
import { Logo } from "../App/Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
  
} from "@fortawesome/free-brands-svg-icons";

const useStyles = makeStyles({
  root: {
    display: "flex",
    paddingLeft: 21,
    paddingRight: 12,
    "& span": {
      flexGrow: 2,
      display: "flex",
      justifyContent: "flex-end",
      alignSelf: "flex-end",
    },
    
  },
});

export function AppBar() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Logo />
      <span>
        <Box width= "21%"
    display= "flex"
    justifyContent= "space-evenly"
    paddingBottom="12px">
        <IconButton>
          <MailTo
            label={
              <AiOutlineMail color="black" fontSize="2rem" display="flex" />
            }
          />
          {/* <AiOutlineMail/> */}
        </IconButton>
{/* 
        <IconButton>
          <AiFillFacebook />
        </IconButton>

        <IconButton>
          <FiInstagram />
        </IconButton>
        <IconButton>
          <AiFillLinkedin />
        </IconButton> */}
        <a href="https://www.facebook.com/learnbuildteach/"
  className="facebook social">
  <FontAwesomeIcon color="black" icon={faFacebook} size="2x" />
</a>
<a href="https://www.instagram.com/learnbuildteach"
  className="instagram social">
  <FontAwesomeIcon color="black" icon={faInstagram} size="2x" />
</a>
<a href="https://www.instagram.com/learnbuildteach"
  className="instagram social">
  <FontAwesomeIcon color="black" icon={faLinkedin} size="2x" />
</a>
</Box>
      </span>
    </div>
  );
}
