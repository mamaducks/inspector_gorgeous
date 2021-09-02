import {SERVICES} from '../../services';
import {LayoutBox, MainContent} from '../../App/AppBoxes';
import {DialogButton} from '../../Schedule/RequestsDialogButtons';
import {Request} from '../../Schedule/InspectionForm';
import Curve from './curve.png';

export function FaqInspect() {
  return (
    <LayoutBox image={Curve}>
      <MainContent heading="What We Inspect">
        <ul
          style={{
            listStyleType: 'square',
            fontWeight: 300,
            lineHeight: 2,
            fontSize: '1.1rem',
            letterSpacing: 1,
          }}
        >
          {SERVICES.map((service) => (
            <li key={service}>{service}</li>
          ))}
        </ul>
        <br />
        <DialogButton title="Request an Inspection" content={<Request />} />
      </MainContent>
    </LayoutBox>
  );
}
