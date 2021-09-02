import {LayoutBox, MainContent} from '../../App/AppBoxes';
import {DialogButton} from '../../Schedule/RequestsDialogButtons';
import {Schedule} from '../../Schedule/Schedule';
import Corner from './corner.png';

export function FaqExpect() {
  return (
    <LayoutBox image={Corner} reverse>
      <MainContent heading="What to expect">
        Our New Jersey home inspection is a thorough, objective visual analysis
        of a home`s structure and mechanical systems.
        <br />
        Our home inspectors are always reliable, professional, and
        knowledgeable. We will do an in-depth inspection and provide a
        comprehensive report on the condition of the property. Walk through the
        home with us on inspection day, and learn about the home’s features, as
        well as tips for care and maintenance.
        <br />
      </MainContent>

      <DialogButton
        title="Schedule Online"
        content={<Schedule />}
        style={{marginTop: '10px'}}
      />
    </LayoutBox>
  );
}
