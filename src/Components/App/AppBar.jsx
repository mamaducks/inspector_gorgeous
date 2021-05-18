import {
  IconButton,
  Typography,
  AppBar as MuiAppBar,
  Box,
  Icon,
} from "@material-ui/core";
import {
  AiOutlineTwitter,
  AiFillFacebook,
  AiFillLinkedin,
} from "react-icons/ai";
import { FiInstagram } from "react-icons/fi";
import { makeStyles } from "@material-ui/core";
import { FaPhoneAlt } from "react-icons/fa";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 1,
    alignItems: "center",
    backgroundColor: "#b33a87",
    display: "flex",
  },
  title: {
    flexGrow: 2,
    display: "flex",
    justifyContent: "flex-end",
  },
  phone: {
    display: "flex",
    paddingLeft: 15,
    color: "white",
  },
  phoneIcon: {
    paddingRight: 20,
  },
}));

export function AppBar() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Box letterSpacing={2} className={classes.phone}>
        <Icon className={classes.phoneIcon}>
          <FaPhoneAlt />
        </Icon>
        <Typography>1-800-456-3456 609-adriennes#</Typography>
      </Box>

      <Box letterSpacing={2} className={classes.title}>
        <IconButton>
          <AiFillFacebook />
        </IconButton>
        <IconButton>
          <AiOutlineTwitter />
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
