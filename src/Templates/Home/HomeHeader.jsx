
import {LayoutBox, MainContent} from '../../App/AppBoxes';
import {DialogButton} from '../../Schedule/RequestsDialogButtons';
import {Schedule} from '../../Schedule/Schedule';
import House from './homePage.png';

export const HomeHeader = () => {
  return (
    <LayoutBox image={House}>
      <MainContent heading="Let Us Help You Get to Know Your Home">
        At Buyer Beware Home Inspections, we fully understand the importance of
        a thorough home inspection, and that’s why we work so hard to offer you
        the very best. Let us provide an unbiased, comprehensive, visual
        inspection of your entire home and property. We take the time to find
        the smallest details and issues and are available to answer any
        questions you may have. With over 20 years of experience in various
        aspects of real estate including buying, restoring and selling homes, we
        have the knowledge needed to help you get to know your home. Count on
        Buyer Beware Home Inspection to provide you the very best service.
      </MainContent>
      <DialogButton title="Schedule Inspection" content={<Schedule />} />
    </LayoutBox>
  );
};
