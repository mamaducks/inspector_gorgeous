import { ProfileList } from "../../Components/Profile";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    display: "flex",
  },
  profilePaper: {
    padding: 20,
    width: 480,
  },
  logo: {
    height: 250,
    width: 250,
    backgroundColor: "green",
  },
});

export function AboutHeader() {
  const classes = useStyles();

  return (
    <Box item className={classes.root}>
      <Box className={classes.logo}>Logo image </Box>
      <Box className={classes.profilePaper}>
        <ProfileList />
      </Box>
    </Box>
  );
}
