import { Button } from "@material-ui/core";
import { useMediaQuery } from "react-responsive";
import { Schedule } from "../Schedule/Schedule";
import { Quote } from "../Schedule/Quote";
import { Request } from "./InspectionForm";
import { BusinessButton } from "./RequestsDialogButtons";
import {
  RiMoneyDollarCircleLine,
  RiUserShared2Fill,
  RiFileTextLine,
} from "react-icons/ri";
import { AiOutlineSchedule } from "react-icons/ai";
import {FlexColumnBox} from "../App/AppBoxes";

export function BusinessInfoButton() {
  const isWide = useMediaQuery({
    query: "(min-device-width: 900px)",
  });

  if (isWide) {
    return (
      <FlexColumnBox>
        <BusinessButton
          title="Get a Quote"
          icon={<RiMoneyDollarCircleLine />}
          content={<Quote />}
        />

        <BusinessButton
          title="Schedule Online"
          icon={<AiOutlineSchedule />}
          content={<Schedule />}
        />

        <BusinessButton
          title="Request an Inspection"
          icon={<RiFileTextLine />}
          content={<Request />}
        />
      </FlexColumnBox>
    );
  }
  return (
    <FlexColumnBox>
      <Button
        variant="contained"
        size="small"
        alignItems="center"
        color="secondary"
        startIcon={<RiUserShared2Fill />}
        href="https://www.spectora.com/inspection-request/my-inspection-company-2f689b3a14"
      >
        View my Profile
      </Button>
    </FlexColumnBox>
  );
}
