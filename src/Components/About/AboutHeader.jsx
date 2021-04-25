import { ProfileList } from "../../Components/Profile";
import { Box, Container } from "@material-ui/core";

export function AboutHeader() {
  return (
    <Box item>
      <Container>
        <Box>Logo image </Box>

        <ProfileList />
      </Container>
    </Box>
  );
}
