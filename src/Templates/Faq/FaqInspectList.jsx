import {SERVICES} from '../../services';
import {LayoutBox, MainContent} from '../../App/AppBoxes';
import {DialogButton} from '../../Schedule/RequestsDialogButtons';
import {Request} from '../../Schedule/InspectionForm';
import Curve from './curve.png';
import { ulList } from '../../App/ulList';

export function FaqInspect() {
  return (
    <LayoutBox image={Curve}>
      <MainContent heading="What We Inspect">
        <ulList>
          {SERVICES.map((service) => (
            <li key={service}>{service}</li>
          ))}
        </ulList>
        <br />
        <DialogButton title="Request an Inspection" content={<Request />} />
      </MainContent>
    </LayoutBox>
  );
}
