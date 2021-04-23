import { DialogActions, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { ProfileList } from "../Components/Profile";

const useStyles = makeStyles({
  root: {
    padding: 25,
  },
  form: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
  header: {
    paddingBottom: "20px",
  },
});

export function ContactPage() {
  const classes = useStyles();

  const Mailto = ({ email, subject = "", body = "", children }) => {
    let params = subject || body ? "?" : "";
    if (subject) params += `subject=${encodeURIComponent(subject)}`;
    if (body) params += `${subject ? "&" : ""}body=${encodeURIComponent(body)}`;

    return <a href={`mailto:${email}${params}`}>{children}</a>;
  };

  return (
    <Paper className={classes.root}>
      <form className={classes.form}>
        <h4 className={classes.header}> Contact me for more info</h4>
        <h6>
          We offer very flexible appointments including early evening (daylight
          permitting). We understand tight timeframes and will do our best to
          accommodate your deadlines.
        </h6>
        <ProfileList />

        <DialogActions>
          <button type="submit">Contact Me</button>{" "}
          <Mailto
            email="scrubblies@gmail.com"
            subject="I'm interested in a quote!"
            body="Enter the details of your message and contact information."
          >
            Contact me!
          </Mailto>
        </DialogActions>
      </form>
    </Paper>
  );
}
