import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { MailTo } from "./MailTo";
import { AppBar, Toolbar } from "@material-ui/core";
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
    color: "#751f66",
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
    <MyBox>
      <div>Buyers Beware Home Inspection </div>
      <div>Saint David Dr Mt Laurel Township, NJ 08054</div>
    </MyBox>
  );
};

// export const MyHours = () => {
//   return (
//     <Box>
//       <div>Monday thru Friday 8:00 am - 7:00 pm </div>
//       <div>Saturday 9:00 am - 5:00 pm</div>
//       <div>Sunday Closed</div>
//     </Box>
//   );
// };

export const MyEmail = () => {
  return (
    <DisplayEvenBox>
      <Box fontSize={15} letterSpacing={2} style={{ paddingRight: 10 }}>
        Email Us:
      </Box>
      <MailTo />
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
        <div className={classes.addHour}>
          <MyAddress />
        </div>
        <MyContentBox>
          <Box>REQUEST A QUOTE 609-adriennes#</Box>
        </MyContentBox>
        <div>
          <MyEmail />
        </div>
      </Toolbar>
    </AppBar>
  );
};
