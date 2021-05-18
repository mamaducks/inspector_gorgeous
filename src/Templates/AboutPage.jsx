import { AreaServe } from "../Components/About/AreaServe";
import { OurPromise } from "../Components/About/Promise";
import { Title } from "../Components/App/HeaderTitle";
import { ProfileList } from "../Components/Profile/Profile";
import { Box, Card, Container } from "@material-ui/core";
import EmmaLogo from "../img/emmaLogo.png";
import { AboutYou } from "../Components/About/AboutYou";

export function AboutPage() {
  return (
    <>
      <Title title="About Us" />
     
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
      <AreaServe/>
      <OurPromise />
    </>
  );
}
