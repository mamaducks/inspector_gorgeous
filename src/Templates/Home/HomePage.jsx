import {Container} from '@material-ui/core';

import {HomeHeader} from './HomeHeader';
import {InspectList} from './HomeInspectList';

export const HomePage = () => {
  return (
    <Container>
      <HomeHeader />
      <InspectList />
    </Container>
  );
};
