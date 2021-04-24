import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  title: {
    backgroundColor: "#e8e8e8",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 80,
  },
});

export const Quote = () => {
  const classes = useStyles();

  const Mailto = ({ email, subject = "", body = "", children }) => {
    let params = subject || body ? "?" : "";
    if (subject) params += `subject=${encodeURIComponent(subject)}`;
    if (body) params += `${subject ? "&" : ""}body=${encodeURIComponent(body)}`;

    return <a href={`mailto:${email}${params}`}>{children}</a>;
  };
  return (
    <Box className={classes.title}>
      <h6>REQUEST A QUOTE 609-adriennes#</h6>
      <Mailto
        email="scrubblies@gmail.com"
        subject="I'm interested in a quote!"
        body="Enter the details of your message and contact information."
      >
        boxingmom@gmail.com
      </Mailto>
    </Box>
  );
};
