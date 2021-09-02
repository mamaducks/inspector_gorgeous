import {useMediaQuery} from 'react-responsive';
import {Box} from '@material-ui/core';
import {Schedule} from '../Schedule/Schedule';
import {Quote} from '../Schedule/Quote';
import {RiMoneyDollarCircleLine} from 'react-icons/ri';
import {AiOutlineSchedule} from 'react-icons/ai';
import {DialogButton} from '../Schedule/RequestsDialogButtons';

export function FootQuoteButtonNew({title, titleWide, content}) {
  const isWide = useMediaQuery({
    query: '(min-device-width: 650px)',
  });

  if (isWide) {
    return <DialogButton title={titleWide} content={content} size="small"/>;
  }
  return <DialogButton title={title} content={content} size="small"/>;
}

export const FooterButtons = () => {
 
  return (
    <Box
      display="flex"
      style={{flexDirection: 'column', justifyContent: 'center'}}
    >
      <FootQuoteButtonNew
        title={<RiMoneyDollarCircleLine />}
        titleWide="Get a Quote"
        content={<Quote />}
        contentWide={<Quote />}
      />
      <FootQuoteButtonNew
        title={<AiOutlineSchedule />}
        titleWide="Schedule Online"
        content={<Schedule />}
        contentWide={<Schedule />}
      />
    </Box>
  );
};
