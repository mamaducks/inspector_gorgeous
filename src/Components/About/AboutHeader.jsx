import { ProfileList } from "../../Components/Profile";
import { Box, Container } from "@material-ui/core";
import styles from "../../Styles/headerstyle.module.css";

export function AboutHeader() {
  return (
    <Box item className={styles.root}>
      <Container className={styles.logoBox}>
        <Box className={styles.image}>Logo image </Box>

        <Box className={styles.profilePaper}>
          <ProfileList />
        </Box>
      </Container>
    </Box>
  );
}
