import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { MailTo } from "./MailTo";
import { AppBar, Toolbar, IconButton } from "@material-ui/core";
import { FiInstagram } from "react-icons/fi";
import { AiFillFacebook } from "react-icons/ai";

import {
  MyMapBox,
  PadBox,
  MyBox,
  ListBox,
  MyContentBox,
  MyInfoBox,
  DisplayEvenBox,
} from "../Box/MyBox";

const useStyles = makeStyles({
  root: {
    paddingTop: "10px",
  },
  title: {
    backgroundColor: "#c3c3c3",
    display: "flex",
    justifyContent: "space-evenly",
    color: "#a41b77",

    alignItems: "center",
  },
});

export const Quote = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="sticky">
        <Toolbar className={classes.title} disableGutters="true">
          <Box letterSpacing={1} lineHeight={1.4}>
            <div>BUYERS BEWARE HOME INSPECTION</div>
            <div>Covering all of South Jersey</div>
          </Box>

          <Box>
            <Box letterSpacing={1} lineHeight={1.5}>
              Call to schedule 609-670-0451
            </Box>
          </Box>
          <div>
            <DisplayEvenBox>
              <Box letterSpacing={2} paddingRight="7px">
                Email Us:
              </Box>
              <MailTo label="Click Here" />
            </DisplayEvenBox>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};
