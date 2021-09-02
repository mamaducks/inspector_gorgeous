import {Box, Tab, Tabs} from '@material-ui/core';
import routes from '../App/Routes';

export function AppBarTabs() {
  return (
    <Box style={{backgroundColor: '#a71976', padding: '1px'}}>
      <Box display="flex" color="white" justifyContent="space-between">
        <Tabs value={window.location.pathname} variant="scrollable">
          {Object.values(routes).map(({link, label}) => (
            <Tab
              key={link}
              label={label}
              href={link}
              component="a"
              value={link}
            />
          ))}
        </Tabs>
        </Box>
    </Box>
  );
}
