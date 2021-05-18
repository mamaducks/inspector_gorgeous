import { ProfileList } from "../Profile/Profile";
import { Box, Card, Container } from "@material-ui/core";
import EmmaLogo from "../../img/emmaLogo.png";
import { AboutYou } from "./AboutYou";

export function AboutHeader() {
  return (
    <Box container spacing={3}>
      <AboutYou />
      <Container>
        <Card style={{ display: "flex", padding: 10 }}>
          <div style={{ padding: 10 }}>
            <img alt="" src={EmmaLogo} width="350" height="350" />
          </div>

          <ProfileList />
        </Card>
      </Container>
    </Box>
  );
}
