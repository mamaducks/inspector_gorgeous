import {useMediaQuery} from 'react-responsive';
import {AppBar, Box, Typography} from '@material-ui/core';
import House from './littleHouse.png';
import {FooterButtons} from './FooterButtons';
import {FooterRight} from './FooterRight';

export const Footer = () => {
  const isWide = useMediaQuery({
    query: '(min-device-width: 700px)',
  });
  return (
    <>
      <AppBar position="sticky" elevation={0}>
        <Box
          display="flex"
          color="#a71976"
          alignItems="center"
          flexWrap="wrap"
          // alignContent="center"
        >
          <Box textAlign="center" flex="auto" paddingTop="10px">
            <Typography
              variant="subtitle1"
              paddingTop="8px"
              paddingBottom="1px"
              gutterBottom
            >
              BUYER BEWARE HOME INSPECTION
            </Typography>
            <Typography variant="subtitle2" lineHeight="1.4">
              Proudly Serving South Jersey
            </Typography>
            <Typography variant="caption">
              Burlington, Camden, Gloucester, Cumberland, Atlantic, and Cape May
              Counties
            </Typography>
          </Box>

          <Box
            // margin="5px"
            display="flex"
            flex="auto"
            alignItems="center"
            style={{justifyContent: 'center'}}
          >
            {isWide && (
              <img
                alt=""
                src={House}
                width="165px"
                maxHeight="100px"
                style={{paddingInline: '5px'}}
              />
            )}

            <FooterButtons />
          </Box>

          <FooterRight />
        </Box>
      </AppBar>
    </>
  );
};
