import {Box, Typography} from '@material-ui/core';
import {FaPhoneAlt} from 'react-icons/fa';
import {MailTo} from '../Social/MailTo';
import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles({
  box: {
    display: 'flex',
    flex: 'auto',
    flexDirection: 'column',
    alignItems: 'center',
  },
  text: {
    display: 'flex',
    color: '#c54097',
  },
  icon: {
    paddingInline: '8px',
    display: 'flex',
    alignItems: 'center',
    fontSize: '1.1em',
    color: '#c54097',
  },
});

function Info({icon, text}) {
  const classes = useStyles();
  return (
    <Typography variant="body1" className={classes.text}>
      <Box className={classes.icon}>{icon}</Box>
      {text}
    </Typography>
  );
}

export const FooterRight = () => {
  const classes = useStyles();
  return (
    <div className={classes.box}>
      <Info icon={<FaPhoneAlt />} text="1-609-670-0451" />

      <Info icon={<MailTo className={classes.icon} />} text="Send us an email">
        Send us an email
      </Info>
      <Info text="License# 24GI00213700" />
    </div>
  );
};
