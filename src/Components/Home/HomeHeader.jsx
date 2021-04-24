import { Box, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import styles from "../../Styles/headerstyle.module.css";

const useStyles = makeStyles({
  root: {
    display: "flex",
    backgroundColor: "#9f7dab1f",
    padding: 25,
  },
  logoBox: {
    flexGrow: 2,
    alignItems: "center",
    display: "flex",
    justifyContent: "space-around",
  },
  image: {
    height: 250,
    width: 250,
    backgroundColor: "green",
  },
  profilePaper: {
    padding: 20,
    width: 480,
  },
});

export const HomeHeader = () => {
  return (
    <Box item className={styles.root}>
      <Container className={styles.logoBox}>
        <Box className={styles.image}>
          <h5>A picture of you</h5>
        </Box>

        <Box className={styles.profilePaper}>
          <h2>Some header catchy about your awesome business </h2>

          <h3>Serving South Jersey area to wherever else you will go </h3>
        </Box>
      </Container>
    </Box>
  );
};
