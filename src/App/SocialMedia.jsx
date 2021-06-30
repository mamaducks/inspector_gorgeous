import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, IconButton } from "@material-ui/core";
import { MailTo } from "./MailTo";

export function Social({ color, size, label, ...props }) {
  return (
    <Box display="flex" justifyContent="space-evenly" paddingBottom="10px" minWidth="200px" {...props}>
      <IconButton>
        <MailTo label={label} />
      </IconButton>

      <a
        href="https://www.facebook.com/Wizard-Wands-109736221325090/"
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
    </Box>
  );
}
