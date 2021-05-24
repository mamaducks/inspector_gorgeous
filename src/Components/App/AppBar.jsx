import { IconButton, AppBar as MuiAppBar, Box, Icon } from "@material-ui/core";
import { AiFillFacebook, AiFillLinkedin, AiOutlineMail } from "react-icons/ai";
import { FiInstagram } from "react-icons/fi";
import { makeStyles } from "@material-ui/core";
import { FaPhoneAlt } from "react-icons/fa";
import { MailTo } from "./MailTo";
import { Logo } from "../App/Logo";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: 21,
    paddingRight: 12,
    alignItems: "center",

    display: "flex",
    letterSpacing: 1.3,
    // color: "white",
    fontSize: "19px",
    alignSelf: "center",
    margin: 0,
  },
  
  phone: {
    fontSize: 19,
  },
  title: {
    flexGrow: 2,
    display: "flex",
    justifyContent: "flex-end",
    alignSelf: "flex-end",
  },
  mail: {
    color: "black",
    fontSize: "2rem",
    alignItems: "center",
    display: "flex",
  },
}));

export function AppBar() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Logo  />

      <Box className={classes.title}>
        <IconButton>
          <MailTo label={<AiOutlineMail className={classes.mail} />} />
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
      </Box>
    </div>
  );
}
