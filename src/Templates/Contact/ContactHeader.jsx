import {Box, CardContent, Divider, Typography} from '@material-ui/core';
import {useMediaQuery} from 'react-responsive';
import Heart from './houseColor.png';

export const ContactHeader = () => {
  const isWide = useMediaQuery({
    query: '(min-device-width: 600px)',
  });

  return (
    <Box display="flex" style={{paddingTop: '10px'}}>
      {isWide && (
        <img
          alt=""
          src={Heart}
          width="90px"
          height="90px"
          style={{
            paddingRight: '30px',
            alignSelf: 'center',
          }}
        />
      )}

      <CardContent>
        <Typography color="textPrimary" variant="h5">
          Buyer Beware Home Inspections is based out of Berlin, NJ
        </Typography>
        <Divider />
        <Typography
          variant="subtitle1"
          component="p"
          // style={{ fontWeight: "300", fontSize: "1.1rem" }}
        >
          We offer Home Inspection services to areas of New Jersey and
          Philadelphia
        </Typography>
      </CardContent>
    </Box>
  );
};
