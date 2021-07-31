import { MailTo } from "./MailTo";
import { FiInstagram } from "react-icons/fi";
import { RiUserSharedLine } from "react-icons/ri";
import { FaFacebookSquare } from "react-icons/fa";

export function Social({ color, size, label, ...props }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        paddingBottom: "10px",
        width: "100%",
        fontSize: "2em",
      }}
      {...props}
    >
      <a
        href="https://www.facebook.com/Home-Inspections-105580485123207/"
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
      
    </div>
  );
}
