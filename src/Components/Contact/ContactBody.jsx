import { DialogActions, Paper } from "@material-ui/core";
import React from "react";
import { ProfileList } from "../../Components/Profile";

export function ContactBody() {
  const Mailto = ({ email, subject = "", body = "", children }) => {
    let params = subject || body ? "?" : "";
    if (subject) params += `subject=${encodeURIComponent(subject)}`;
    if (body) params += `${subject ? "&" : ""}body=${encodeURIComponent(body)}`;

    return <a href={`mailto:${email}${params}`}>{children}</a>;
  };

  return (
    <Paper>
      <div>address box</div>
      <div>telephone fax box</div>
      <div>logo</div>
      <ProfileList />

      <DialogActions>
        <Mailto
          email="scrubblies@gmail.com"
          subject="I'm interested in a quote!"
          body="Enter the details of your message and contact information."
        >
          Contact me!
        </Mailto>
      </DialogActions>
    </Paper>
  );
}
