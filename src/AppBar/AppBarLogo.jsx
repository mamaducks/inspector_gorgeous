import {Typography} from '@material-ui/core';
import {useMediaQuery} from 'react-responsive';
import {Social} from '../Social/SocialMedia';
import EmmaLogo from './emmaLogoSmall.png';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
  image: {
    height: 'auto',
    maxWidth: '120px',
  },
  logoTextContainer: {
    flex: 1,
  },
  logoText: {
    display: 'inline-flex',
    flexDirection: 'column',
    fontSize: '0.8em',
  },
  logoTopLine: {
    fontSize: '1.9em',
    lineHeight: '1.2',
    textAlign: 'right',
  },
  logoBottomLine: {
    fontSize: '1.2em',
    fontWeight: '300',
    textAlign: 'right',
  },
});

export function AppBarButton() {
  const isWide = useMediaQuery({
    query: '(min-width: 48rem)',
  });

  return isWide ? <Social color="black" /> : null;
}

export function AppBarLogo() {
  const classes = useStyles();

  return (
    <>
      <img alt="" src={EmmaLogo} height="110px" className={classes.image} />
      <div className={classes.logoTextContainer}>
        <div className={classes.logoText}>
          <Typography
            variant="h4"
            noWrap="true"
            className={classes.logoTopLine}
          >
            BUYER BEWARE
          </Typography>
          <Typography variant="h6" className={classes.logoBottomLine}>
            HOME INSPECTION, LLC
          </Typography>
        </div>
      </div>
    </>
  );
}
