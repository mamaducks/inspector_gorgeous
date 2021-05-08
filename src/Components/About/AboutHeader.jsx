import { ProfileList } from "../Profile/Profile";
import { Box, Container } from "@material-ui/core";
import EmmaLogo from "../../img/emmaLogo.png";
import { AboutYou } from "./AboutYou";

export function AboutHeader() {
  return (
    <Box container spacing={3}>
      <AboutYou />
      <Container style={{ padding: 20 }}>
        <img alt="" src={EmmaLogo} width="350" height="350" />
        <ProfileList />
      </Container>
    </Box>
  );
}
