import { MailTo } from "./MailTo";
import { FiInstagram } from "react-icons/fi";
import { RiUserSharedLine } from "react-icons/ri";
import { FaFacebookSquare } from "react-icons/fa";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(({ palette, spacing }) => ({
  social: {
    display: "flex",
    justifyContent: "flex-end",
    paddingBottom: "10px",
    width: "100%",
    fontSize: "2em",
    "& > a": {
      marginLeft: spacing(),
    },
  },
}));

export function Social({ color, size, label, ...props }) {
  const classes = useStyles();

  return (
    <div className={classes.social} {...props}>
      <a href="https://www.facebook.com/Home-Inspections-105580485123207/">
        <FaFacebookSquare color="black" />
      </a>

      <a
        href="https://www.instagram.com/buyerbewarehomeinspections"
        className="instagram social"
      >
        <FiInstagram color="black" />
      </a>

      <a href="https://www.spectora.com/inspection-request/my-inspection-company-2f689b3a14">
        <RiUserSharedLine color="black" />
      </a>

      <MailTo color="black" />
    </div>
  );
}
