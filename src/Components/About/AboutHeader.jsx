import { ProfileList } from "../../Components/Profile";
import { Box, Container } from "@material-ui/core";
import IgLogo from "../../../src/I.png";

export function AboutHeader() {
  return (
    <Box item>
      <Container>
        <img src={IgLogo} width="400" height="400" />
        <ProfileList />
      </Container>
    </Box>
  );
}
