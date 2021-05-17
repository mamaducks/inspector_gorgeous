import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { MailTo } from "./MailTo";
import { AppBar, Toolbar } from "@material-ui/core";

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
    <Box>
      <div>Buyers Beware Home Inspection </div>

      <div>Saint David Dr Mt Laurel Township, NJ 08054</div>
    </Box>
  );
};

export const MyHours = () => {
  return (
    <Box>
      <div>Monday thru Friday 8:00 am - 7:00 pm </div>
      <div>Saturday 9:00 am - 5:00 pm</div>
      <div>Sunday Closed</div>
    </Box>
  );
};

export const MyEmail = () => {
  return (
    <Box style={{ display: "flex" }}>
      <Box style={{ paddingRight: 10 }}>Email Us:</Box>
      <MailTo />
    </Box>
  );
};

export const CallAnytime = () => {
  return (
    <Box>
      <div>We love hearing from you anytime!</div>
      <div>
        Call or email us if you have any questions or use our online scheduler
        to set up a home inspection.
      </div>
    </Box>
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

        <div>
          <div>We love hearing from you anytime!</div>

          <div>Available 7 days a week</div>
          <Box>REQUEST A QUOTE 609-adriennes#</Box>
          <MyEmail />
        </div>
      </Toolbar>
    </AppBar>
  );
};
