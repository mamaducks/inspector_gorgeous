import { DialogButton } from "../../Schedule/RequestsDialogButtons";
import { LayoutBox, MainContent } from "../../App/AppBoxes";
import { Schedule } from "../../Schedule/Schedule";
import MagHouse from "./houseMagnify.png";

export function ServiceHeader() {
  return (
      <LayoutBox
        image={MagHouse}
      >
        <MainContent heading="Home Inspection Services">
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
        </MainContent>
       
        <DialogButton title="Schedule Today" content={<Schedule />} />
      </LayoutBox>
      )};