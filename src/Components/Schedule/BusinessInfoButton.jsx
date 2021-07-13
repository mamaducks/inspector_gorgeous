import { Box, Button } from "@material-ui/core";
import { useMediaQuery } from "react-responsive";
import { Schedule } from "../../Components/Schedule/Schedule";
import { Quote } from "../../Components/Schedule/Quote";
import { Request } from "../../Components/Schedule/InspectionForm";
import { BusinessButton } from "./RequestsDialogButtons";
import {
  RiMoneyDollarCircleLine,
  RiCalendarEventLine,
  RiUserShared2Fill,
  RiFileTextLine,
} from "react-icons/ri";
import { AiOutlineSchedule } from "react-icons/ai";
import { GrSchedules } from "react-icons/gr";

export function BusinessInfoButton() {
  const isWide = useMediaQuery({
    query: "(min-device-width: 900px)",
  });

  if (isWide) {
    return (
      <Box
        padding="10px"
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
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
      </Box>
    );
  }
  return (
    <Box display="flex" justifyContent="center">
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
    </Box>
  );
}
