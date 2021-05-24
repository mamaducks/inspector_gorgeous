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
  appBar: {
    // top: "auto",
    // bottom: 0,
    color: "#a4358c",
  },
  title: {
    backgroundColor: "#c3c3c3",
    display: "flex",
    justifyContent: "space-evenly",
    height: 90,
    alignItems: "center",
  },
  addHour: {
    display: "flex",
    flexDirection: "column",
  },
});

export const MyAddress = () => {
  return (
    <Box letterSpacing={1} lineHeight={1.5}>
      <div>BUYERS BEWARE HOME INSPECTION</div>
      <div>Covering all of South Jersey</div>
    </Box>
  );
};

export const MyEmail = () => {
  const classes = useStyles();
  
  return (
    <DisplayEvenBox>
      <Box letterSpacing={2} style={{ paddingRight: 7 }}>
        Email Us:
        {/* BuyerBewareHomeInspections@gmail.com" */}
      </Box>
      <MailTo label="Click Here" className={classes.appBar}/>
    </DisplayEvenBox>
  );
};

export const CallAnytime = () => {
  return (
    <ListBox>
      <div>Available 7 Days A Week</div>
      <div>We love hearing from you anytime!</div>

      <Box>REQUEST A QUOTE 609-adriennes#</Box>
    </ListBox>
  );
};

export const Quote = () => {
  const classes = useStyles();

  return (
    <AppBar position="sticky" className={classes.appBar}>
      <Toolbar className={classes.title}>
        <MyAddress />

        <Box>
          <Box letterSpacing={1} lineHeight={1.5}>
            Call to schedule 609-670-0451
          </Box>
        </Box>
        <div>
          <MyEmail />
        </div>
{/* 
        <Box display="flex" flexDirection="column">
          <div>
            <IconButton >
              <FiInstagram color="#751f66" />
            </IconButton>
            buyerbewarehomeinspections
          </div>
          <div>
            <IconButton>
              <AiFillFacebook color="#751f66" />
            </IconButton>
          </div>
        </Box> */}
      </Toolbar>
    </AppBar>
  );
};
