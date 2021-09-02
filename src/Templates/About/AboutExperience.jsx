import {LayoutBox, MainContent} from '../../App/AppBoxes';
import {DialogButton} from '../../Schedule/RequestsDialogButtons';
import {Request} from '../../Schedule/InspectionForm';
import Check from './checkCert.png';

export function AboutExperience() {
  return (
    <LayoutBox image={Check} reverse>
      <MainContent heading="Background and Experience">
        Adrienne has completed all of the state’s required approved professional
        home inspection courses and has also passed the NACHI exam to become a
        certified member. She has completed extensive training, both in the
        classroom and in the field and is fully licensed by the state, and fully
        insured. Throughout the year she takes continuing education courses to
        stay abreast on new products and inspection techniques.
        <br />
        Contact Adrienne at Buyer Beware Home Inspections today to schedule your
        reliable, professional in-depth home inspection in the Southern New
        Jersey area.
        <br />
        License: NJ license # 24GI00213700
        <DialogButton
          title="Request an Inspection"
          content={<Request />}
          style={{marginTop: '8px'}}
        />
      </MainContent>
    </LayoutBox>
  );
}
