import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { MailTo } from "./MailTo";

const useStyles = makeStyles({
  title: {
    backgroundColor: "#786379",
    display: "flex",
    justifyContent: "space-evenly",
    height: 80,
    alignItems: "center",
  },
});

export const Quote = () => {
  const classes = useStyles();

  return (
    <Box
      className={classes.title}
      height="75%"
      fontFamily="Helvetica"
      fontSize={14}
      textAlign="center"
      letterSpacing={1}
      color="white"
    >
      <Box>REQUEST A QUOTE {"  "}609-adriennes#</Box>
      <Box style={{ display: "flex" }}>
        <Box style={{ paddingRight: 10 }}>Email Us:</Box>
        <MailTo />
      </Box>
    </Box>
  );
};
