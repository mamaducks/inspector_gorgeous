import { ProfileList } from "../Profile/Profile";
import { Card, Container } from "@material-ui/core";
import EmmaLogo from "../../img/newEmmaLogo.png";

export function ProfileCard() {
    return (
      <Container style={{ padding: 10 }}>
        <Card
          style={{
            display: "flex",
          }}
        >
          <img
            alt=""
            src={EmmaLogo}
            width="350"
            height="280"
            style={{ paddingLeft: 25 }}
          />
  
          <ProfileList />
        </Card>
      </Container>
    );
  }