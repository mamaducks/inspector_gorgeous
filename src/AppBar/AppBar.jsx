import {Box} from '@material-ui/core';
import {useMediaQuery} from 'react-responsive';
import {MenuButton} from './MenuButton';
import {Social} from '../Social/SocialMedia';
import {AppBarTabs} from './AppBarTabs';
import {AppBarLogo} from './AppBarLogo';

export function AppBarHeader() {
  const isWide = useMediaQuery({
    query: '(min-width: 48rem)',
  });

  return (
    <>
      <Box margin="5px" display="flex" height="120px" alignItems="center">
        <AppBarLogo />

        {!isWide && <MenuButton />}

        {isWide && <Social />}
      </Box>

      {isWide && <AppBarTabs />}
    </>
  );
}
