import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, IconButton} from "@material-ui/core";
import { MailTo } from "./MailTo";
import { FiMail } from "react-icons/fi";
import { RiUserShared2Fill } from "react-icons/ri";

export function Social({ color, size, label, ...props }) {
  return (
    <Box
      display="flex"
      justifyContent="space-evenly"
      paddingBottom="10px"
      minWidth="200px"
      {...props}
    >
      <IconButton>
        <MailTo label={<FiMail color={color} />} />
      </IconButton>

      <a
        href="https://www.facebook.com/Home-Inspections-105580485123207/"
        className="facebook social"
      >
        <FontAwesomeIcon color={color} icon={faFacebook} size={size} />
      </a>
      <a
        href="https://www.instagram.com/buyerbewarehomeinspections"
        className="instagram social"
      >
        <FontAwesomeIcon color={color} icon={faInstagram} size={size} />
      </a>
      <a href="https://www.spectora.com/inspection-request/my-inspection-company-2f689b3a14">
        <RiUserShared2Fill color={color} size={size} />
      </a>
    </Box>
  );
}
