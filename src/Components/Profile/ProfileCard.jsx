import { ProfileList } from "../Profile/Profile";
import { Card, Paper, Container } from "@material-ui/core";
import EmmaLogo from "../../img/newEmmaLogo.png";

export function ProfileCard() {
    return (
      <Container style={{ padding: 10 }}>
        <Paper 
          style={{
            display: "flex",
          }}
        >
          <img
            alt=""
            src={EmmaLogo}
            width="320"
            height="245"
            style={{ paddingLeft: 25 }}
          />
  
          <ProfileList />
        </Paper>
      </Container>
    );
  }