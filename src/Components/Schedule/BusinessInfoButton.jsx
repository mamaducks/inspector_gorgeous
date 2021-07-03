import { Button } from "@material-ui/core";
import { useMediaQuery } from "react-responsive";
import { FlexBox } from "../../Components/Box/AppBoxes";
import { Schedule } from "../../Components/Schedule/Schedule";
import { Quote } from "../../Components/Schedule/Quote";
import { Request } from "../../Components/Schedule/InspectionForm";
import { BusinessButton } from "./RequestsDialogButtons";
import { GrFormSchedule, GrDocumentUser } from "react-icons/gr";
import { RiMoneyDollarCircleLine, RiUserShared2Fill } from "react-icons/ri";

export function BusinessInfoButton() {
  const isWide = useMediaQuery({
    query: "(min-device-width: 900px)",
  });

  if (isWide) {
    return (
      <FlexBox>
        <BusinessButton
          title="Schedule Online"
          icon={<GrFormSchedule fontSize="20px" />}
          content={<Schedule />}
        />
        <BusinessButton
          title="Get a Quote"
          icon={<RiMoneyDollarCircleLine fontSize="20px" />}
          content={<Quote />}
        />
        <BusinessButton
          title="Request an Inspection"
          icon={<GrDocumentUser fontSize="20px" />}
          content={<Request />}
        />
      </FlexBox>
    );
  }
  return (
    <Button
      variant="contained"
      color="secondary"
      startIcon={<RiUserShared2Fill />}
      href="https://www.spectora.com/inspection-request/my-inspection-company-2f689b3a14"
    >
      View my Profile
    </Button>
  );
}
