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
    paddingLeft: 21,
    paddingRight: 12,
    alignItems: "center",
    backgroundColor: "#b33a87",
    display: "flex",
    letterSpacing: 1.3,
    color: "white",
    fontSize: 19,
    alignSelf: "center",
    margin: 0
  },
  title: {
    flexGrow: 2,
    display: "flex",
    justifyContent: "flex-end",
    letterSpacing: 2,
  },
}));

export function AppBar() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Icon>
        <FaPhoneAlt />
      </Icon>
      <div>1-800-456-3456</div>

      <Box className={classes.title}>
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
