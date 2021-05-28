import { IconButton, AppBar as MuiAppBar, Box, Icon } from "@material-ui/core";
import { AiFillFacebook, AiFillLinkedin, AiOutlineMail } from "react-icons/ai";
import { FiInstagram } from "react-icons/fi";
import { makeStyles } from "@material-ui/core";
import { FaPhoneAlt } from "react-icons/fa";
import { MailTo } from "./MailTo";
import { Logo } from "../App/Logo";

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
        <IconButton>
          <MailTo
            label={
              <AiOutlineMail color="black" fontSize="2rem" display="flex" />
            }
          />
          {/* <AiOutlineMail/> */}
        </IconButton>

        <IconButton>
          <AiFillFacebook />
        </IconButton>

        <IconButton>
          <FiInstagram />
        </IconButton>
        <IconButton>
          <AiFillLinkedin />
        </IconButton>
      </span>
    </div>
  );
}
