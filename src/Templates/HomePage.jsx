import { Container, Grid } from "@material-ui/core";
import House from "../img/homePage.png";
import CheckBox from "../img/inspectList.png";
import { LayoutRBox } from "../Components/Box/MyBox";
import { ScheduleButtonNew } from "../Components/App/ScheduleButton";
import { Services } from "../Components/Services/ServiceTypes";
import {PadBox} from "../Components/Box/MyBox"
export const HomePage = () => {
  return (
    <Container>
      <Grid container>
        <Grid item xs={12}>
          <PadBox/>
          <LayoutRBox
            image={House}
            width="530px"
            height="380px"
            heading="Let Us Help You Get to Know Your Home"
            summary=" At Buyer Beware Home Inspections, we fully understand the
          importance of a thorough home inspection, and that’s why we work
          so hard to offer you the very best. Let us provide an unbiased,
          comprehensive, visual inspection of your entire home and
          property. Walk through the home with us on inspection day, and
          learn about the home’s features, as well as tips for care and
          maintenance. We take the time to find the smallest details and
          issues and answer all your questions. With over 20 years of all
          aspects of real estate construction experience under our belts,
          we have the knowledge needed to help you get to know your new
          home."
          />
          <PadBox/>
          <Services image={CheckBox} width="400px" height="320px" />
<PadBox />
          <ScheduleButtonNew title="Schedule your Inspection "   />
         
        </Grid>
      </Grid>
    </Container>
  );
};
