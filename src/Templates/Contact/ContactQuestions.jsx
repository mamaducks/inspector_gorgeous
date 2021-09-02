import {
  Box,
  CardActions,
  CardContent,
  Divider,
  Typography,
} from '@material-ui/core';
import {BsHeart} from 'react-icons/bs';
import {Social} from '../../Social/SocialMedia';

export const ContactQuestions = () => {

  return (
    <Box alignSelf="center" paddingTop="5px">
      <CardContent style={{padding: '0px'}}>
        <Typography
          color="textPrimary"
          variant="h5"
          gutterBottom
          style={{alignItems: 'center', flexWrap: 'nowrap'}}
        >
          Have any questions? We'd
          <BsHeart
            fontSize="1.1rem"
            color="#a71976"
            style={{paddingInline: '8px'}}
          />
          to hear from you!
        </Typography>

        <Divider />

        <CardActions>
          <Social color="#a71976" style={{justifyContent: 'space-around'}} />
        </CardActions>
      </CardContent>
    </Box>
  );
};
