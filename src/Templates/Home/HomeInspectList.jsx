import {Box} from '@material-ui/core';
import {useMediaQuery} from 'react-responsive';
import {INSPECT_TYPE} from '../../services';
import {MainContent} from '../../App/AppBoxes';
import {DialogButton} from '../../Schedule/RequestsDialogButtons';
import {Quote} from '../../Schedule/Quote';
import {Request} from '../../Schedule/InspectionForm';

function QuoteBox() {
  const isWide = useMediaQuery({
    query: '(min-width: 48rem)',
  });

  if (isWide) {
    return <Quote style={{maxWidth: '600px', maxHeight: '640px'}} />;
  }
  return <DialogButton title="Get Quote" content={<Quote />} />;
}

export const InspectList = () => {
  return (
    <Box
      display="flex"
      justifyContent="space-evenly"
      alignContent="space-between"
      style={{
        paddingTop: '10px',
        paddingBottom: '12px',
        minWidth: '-webkit-fill-available',
      }}
      flexWrap="wrap"
    >
      <MainContent heading="We Offer the Following Inspection Services:">
        <ul
          style={{
            listStyleType: 'square',
            fontWeight: 300,
            lineHeight: 2,
            fontSize: '1.1rem',
            letterSpacing: 1,
          }}
        >
          {INSPECT_TYPE.map((service) => (
            <li key={service}>{service}</li>
          ))}
        </ul>
        <br />
        <DialogButton title="Request Inspection" content={<Request />} />
      </MainContent>
      <QuoteBox />
    </Box>
  );
};
