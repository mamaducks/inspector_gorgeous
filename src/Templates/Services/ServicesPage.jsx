import {Container, Divider, Typography} from '@material-ui/core';
import {DisplayService} from './ServicesList/DisplayServices';
import {ServiceHeader} from './ServiceHeader';

export function ServicesPage() {
  return (
    <Container>
      <ServiceHeader />
      <Divider />
      <Typography color="textPrimary" variant="h5">
        We inspect the following when accessible:
      </Typography>
      <Divider />
      <DisplayService />
    </Container>
  );
}
