import { Divider } from "@material-ui/core";
import { DisplayService } from "./ServicesList/DisplayServices";
import { DialogButton } from "../../Components/Schedule/RequestsDialogButtons";
import { LayoutBox, NewContainer, DivBox } from "../../Components/Box/AppBoxes";
import { Schedule } from "../../Components/Schedule/Schedule";
import MagHouse from "../../img/houseMagnify.png";

export function ServicesPage() {
  return (
    <NewContainer>
      <LayoutBox
        image={MagHouse}
        // width="600px"
        // height="400px"
        maxWidth="100%" height="auto"
        heading="Home Inspection Services"
      >
        Home inspections provide valuable information before you buy a home.
        It’s only through a full residential inspection that you’re able to find
        out what you need to know about the home’s essential systems. We will
        look at things like a home’s foundation, structural components, roof,
        HVAC, plumbing, and electrical systems, then provide you with a detailed
        report of a home’s condition so you can move forward confidently with
        peace of mind and knowledge to make informed decisions about your home.
        <br />
        With over 20 years experience restoring, building, and designing homes
        Buyer Beware is the top choice in south jersey for your home inspection
        services.
        <DialogButton title="Schedule Today" content={<Schedule />} style={{marginTop:"12px"}}/>
      </LayoutBox>
      <DivBox fontSize="1.25rem" style={{paddingTop:"12px"}}>
        We inspect the following when accessible:
      </DivBox>
      <Divider />
      <DisplayService />
    </NewContainer>
  );
}
