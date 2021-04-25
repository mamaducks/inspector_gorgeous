import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  title: {
    height: 80,
    alignItems: "center",
    backgroundColor: "lightblue",
    display: "flex",
    justifyContent: "space-evenly",
  },
});

export const Quote = () => {
  const classes = useStyles();

  const Mailto = ({ email, subject = "", body = "", label = "", children }) => {
    let params = subject || body ? "?" : "";
    if (subject) params += `subject=${encodeURIComponent(subject)}`;
    if (body) params += `${subject ? "&" : ""}body=${encodeURIComponent(body)}`;

    return (
      <a href={`mailto:${email}${params}`} style={{ color: "beige" }}>
        {children}
      </a>
    );
  };
  return (
    <Box
      className={classes.title}
      height="75%"
      fontFamily="Helvetica"
      fontSize={14}
      textAlign="center"
      letterSpacing={1}
      color="text.primary"
      style={{ backgroundColor: "lightblue" }}
    >
      <Box>REQUEST A QUOTE {"  "}609-adriennes#</Box>
      <Box style={{ display: "flex" }}>
        <Box style={{ paddingRight: 10 }}>Email Us:</Box>

        <Mailto
          email="scrubblies@gmail.com"
          subject="I'm interested in a quote!"
          body="Enter the details of your message and contact information."
        >
          boxingmom@gmail.com
        </Mailto>
      </Box>
    </Box>
  );
};
