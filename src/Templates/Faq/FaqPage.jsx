import {Container} from '@material-ui/core';
import {FaqAccordion} from './Accordion/FaqAccordion';
import { FaqExpect } from './FaqExpect';
import { FaqInspect } from './FaqInspectList';

export function FaqPage() {
  return (
    <Container>
      <FaqExpect/>
      <FaqInspect/>
      <FaqAccordion />
    </Container>
  );
}
