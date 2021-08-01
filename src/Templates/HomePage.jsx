import { Box, Container } from "@material-ui/core";
import { useMediaQuery } from "react-responsive";
import { INSPECT_TYPE } from "../Templates/Services/services";
import {
  LayoutBox,
  MainContent,
} from "../Components/Box/AppBoxes";
import { DialogButton } from "../Components/Schedule/RequestsDialogButtons";
import { Quote } from "../Components/Schedule/Quote";
import { Schedule } from "../Components/Schedule/Schedule";
import { Request } from "../Components/Schedule/InspectionForm";
import House from "../img/homePage.png";

function QuoteBox() {
  const isWide = useMediaQuery({
    query: "(min-device-width: 900px)",
  });

  if (isWide) {
    return <Quote style={{ maxWidth: "600px", maxHeight: "640px" }} />;
  }
  return <DialogButton title="Get Quote" content={<Quote />} />;
}

export const HomePage = () => {
  return (
    <Container>
      <LayoutBox image={House}>
        <MainContent heading="Let Us Help You Get to Know Your Home" >
          At Buyer Beware Home Inspections, we fully understand the importance
          of a thorough home inspection, and that’s why we work so hard to offer
          you the very best. Let us provide an unbiased, comprehensive, visual
          inspection of your entire home and property. We take the time to find
          the smallest details and issues and are available to answer any
          questions you may have. With over 20 years of experience in various
          aspects of real estate including buying, restoring and selling homes,
          we have the knowledge needed to help you get to know your home. Count
          on Buyer Beware Home Inspection to provide you the very best service.
        </MainContent>
        <DialogButton title="Schedule Inspection" content={<Schedule />} />
      </LayoutBox>

      <Box
        display="flex"
        justifyContent="space-evenly"
        alignContent="space-between"
        style={{ paddingBlock: "18px", minWidth: "-webkit-fill-available"}}
        flexWrap="wrap"
      >
        <MainContent heading="We Offer the Following Inspection Services:">
          <ul
            style={{
              listStyleType: "square",
              fontWeight: "300",
              lineHeight: "2",
              fontSize: "1.2rem",
            }}
          >
            {INSPECT_TYPE.map((service) => (
              <li key={service}>{service}</li>
            ))}
          </ul>
          <DialogButton title="Request Inspection" content={<Request />} />
        </MainContent>
        {/* <QuoteBox /> */}
      </Box>
    </Container>
  );
};
