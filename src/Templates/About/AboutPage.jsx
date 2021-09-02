import { Container } from "@material-ui/core";
import {AboutUs} from "./AboutUs";
import { AboutExperience } from "./AboutExperience";
import { ProfileCard } from "./AboutProfile";

export function AboutPage() {
  return (
    <Container>
      <AboutUs/>
      <AboutExperience />
      <ProfileCard />
    </Container>
  );
}
