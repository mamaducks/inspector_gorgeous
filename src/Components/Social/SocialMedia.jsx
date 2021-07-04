import { Box } from "@material-ui/core";
import { MailTo } from "./MailTo";
import { FiMail, FiInstagram, FiFacebook } from "react-icons/fi";
import { RiUserSharedLine } from "react-icons/ri";

export function Social({ color, size, label, ...props }) {
  return (
    <Box
      display="flex"
      justifyContent="space-evenly"
      paddingBottom="10px"
      minWidth="175px"
      {...props}
    >
      <MailTo label={<FiMail color={color}/>} />

      <a
        href="https://www.facebook.com/Home-Inspections-105580485123207/"
        className="facebook social"
      >
        <FiFacebook color={color} />
      </a>
      <a
        href="https://www.instagram.com/buyerbewarehomeinspections"
        className="instagram social"
      >
        <FiInstagram color={color} />
      </a>
      <a href="https://www.spectora.com/inspection-request/my-inspection-company-2f689b3a14">
        <RiUserSharedLine color={color} size={size} />
      </a>
    </Box>
  );
}
