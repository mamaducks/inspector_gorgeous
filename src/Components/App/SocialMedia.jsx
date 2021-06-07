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

export function Social({color, ...props}) {
  const classes = useStyles();

  return (
    <Box flexGrow={2} display="flex" justifyContent="center" {...props}>
      <IconButton>
        <MailTo label={<AiOutlineMail className={classes.mail} color={color} />} />
        {/* <AiOutlineMail/> */}
      </IconButton>

      <IconButton>
        <AiFillFacebook color={color}/>
      </IconButton>

      <IconButton>
        <FiInstagram color={color}/>
      </IconButton>
      <IconButton>
        <AiFillLinkedin color={color}/>
      </IconButton>
    </Box>
  );
}
