import { Box, makeStyles } from "@material-ui/core";
import { HiOutlineMail } from "react-icons/hi";
import { Logo } from "../App/Logo";
import { Social } from "../App/SocialMedia";

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "space-between",
  },
});

export function AppBar() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Logo />

      <Box display="flex" justifyContent="flex-end">
        <Social
          color="black"
          alignSelf="flex-end"
          display="flex"
          justifyContent="space-evenly"
          paddingBottom="10px"
          minWidth="200px"
          size="2x"
          label={<HiOutlineMail color="black" />}
        />
      </Box>
    </div>
  );
}
