import {
  Container,
} from "@material-ui/core";
import { ContactMap } from "./ContactMap/ContactMap";
import { ContactHeader } from "./ContactHeader";
import { ContactQuestions } from "./ContactQuestions";

export const ContactPage = () => {

  return (
      <Container>
        <ContactHeader/>
        <ContactMap />
        <ContactQuestions />
      </Container>

   
  );
};
