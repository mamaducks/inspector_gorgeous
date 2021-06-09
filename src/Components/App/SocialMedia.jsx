import { makeStyles } from "@material-ui/core";
import { IconButton, Box, Icon } from "@material-ui/core";
import { AiFillFacebook, AiFillLinkedin, AiOutlineMail } from "react-icons/ai";
import { FiInstagram } from "react-icons/fi";
import { MailTo } from "./MailTo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
const useStyles = makeStyles({
  title: {
    flexGrow: 2,
    display: "flex",
    justifyContent: "flex-end",
  },
  mail: {
    color: "black",
    fontSize: "2rem",
    alignItems: "center",
    display: "flex",
  },
});

export function Social({ color, size, label, ...props }) {
  const classes = useStyles();

  return (
    <Box  display="flex" justifyContent="center" {...props}>
      <IconButton>
        <MailTo
          label={label}
        />
      </IconButton>

      <a
        href="https://www.facebook.com/learnbuildteach/"
        className="facebook social"
      >
        <FontAwesomeIcon color={color} icon={faFacebook} size={size} />
      </a>
      <a
        href="https://www.instagram.com/learnbuildteach"
        className="instagram social"
      >
        <FontAwesomeIcon color={color} icon={faInstagram} size={size} />
      </a>
      <a
        href="https://www.instagram.com/learnbuildteach"
        className="instagram social"
      >
        <FontAwesomeIcon color={color} icon={faLinkedin} size={size} />
      </a>
      {/* <AiOutlineMail
              color={color}
              fontSize={size}
              display="flex"
              className={classes.mail}
            /> */}
    </Box>
  );
}
