import { Box, IconButton } from "@material-ui/core";
import { MailTo } from "./MailTo";
import { FiMail, FiInstagram, FiFacebook } from "react-icons/fi";
import { RiUserSharedLine, RiFacebookCircleFill } from "react-icons/ri";
import { FaFacebookSquare } from "react-icons/fa";

export function Social({ color, size, label, ...props }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        paddingBottom: "10px",
        // minWidth="18%"
        width: "100%",
        fontSize:"2em"
        // fontSize:"2em"
        // fontSize: "1.8em",
        
      }}
      {...props}
    >
      <a
        href="https://www.facebook.com/Home-Inspections-105580485123207/"
        // className="facebook social"
      >
        <FaFacebookSquare color={color} />
      </a>
      <a
        href="https://www.instagram.com/buyerbewarehomeinspections"
        className="instagram social"
      >
        <FiInstagram color={color} />
      </a>
      <a href="https://www.spectora.com/inspection-request/my-inspection-company-2f689b3a14">
        <RiUserSharedLine color={color} />
      </a>
      <MailTo color={color} />
      {/* <IconButton
        
        color={color}
        href="https://www.facebook.com/Home-Inspections-105580485123207/"
      >
        <FacebookSquare color={color} />
      </IconButton>
      <IconButton
        aria-label="search"
        color={color}
        href="https://www.instagram.com/buyerbewarehomeinspections"
      >
        <Instagram />
      </IconButton>
      <IconButton
        aria-label="display more actions"
        edge="end"
        color="inherit"
        href="https://www.spectora.com/inspection-request/my-inspection-company-2f689b3a14"
      >
        <UserPin />
      </IconButton> */}
    </div>
  );
}
