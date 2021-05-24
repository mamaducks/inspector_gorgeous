import { makeStyles } from "@material-ui/core";
import { IconButton, Box, Icon } from "@material-ui/core";
import { AiFillFacebook, AiFillLinkedin, AiOutlineMail } from "react-icons/ai";
import { FiInstagram } from "react-icons/fi";
import { MailTo } from "./MailTo";

const useStyles = makeStyles({
  title: {
    flexGrow: 2,
    display: "flex",
    justifyContent: "flex-end",
  },
  mail: {
    color: "black",
    fontSize: "2rem",
    alignItems: "center",
    display: "flex",
  },
});

export function Social() {
  const classes = useStyles();

  return (
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
  );
}
