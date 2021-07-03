import { Box } from "@material-ui/core";
import { useMediaQuery } from "react-responsive";
import { FlexBox } from "../../Components/Box/AppBoxes";
import { Schedule } from "../../Components/Schedule/Schedule";
import { Quote } from "../../Components/Schedule/Quote";
import { DialogButton } from "../../Components/Schedule/RequestsDialogButtons";
import { Request } from "../../Components/Schedule/InspectionForm";

import { GrFormSchedule, GrDocumentUser } from "react-icons/gr";
import { RiMoneyDollarCircleLine, RiUserShared2Fill } from "react-icons/ri";

export function Days({ children }) {
  return (
    <Box fontWeight="bold" style={{ paddingInline: "10px" }}>
      {children}
    </Box>
  );
}

export function BusinessInfoBox() {
  const isWide = useMediaQuery({
    query: "(min-device-width: 900px)",
  });

  if (isWide) {
    return (
      <FlexBox>
        <DialogButton
          title={
            <div>
              <GrFormSchedule fontSize="20px" />
              Schedule Online
            </div>
          }
          content={<Schedule />}
        />
        <DialogButton
          title={
            <div>
              <RiMoneyDollarCircleLine fontSize="20px" />
              Get a Quote
            </div>
          }
          content={<Quote />}
        />
        <DialogButton
          title={
            <div>
              <GrDocumentUser fontSize="20px" />
              Request an Inspection
            </div>
          }
          content={<Request />}
        />
      </FlexBox>
    );
  }
  return (
    <a href="https://www.spectora.com/inspection-request/my-inspection-company-2f689b3a14">
      <RiUserShared2Fill />
      View my Profile
    </a>
  );
}

export function ContactBox({ children, ...props }) {
  return (
    <Box
      textAlign="center"
      // fontSize="22px"
      display="flex"
      fontWeight="lighter"
      alignItems="center"
      justifyContent="center"
      letterSpacing={1}
      {...props}
    >
      {children}
    </Box>
  );
}

export function InfoBox({ Icon, info, children, ...props }) {
  return (
    <Box padding="10px" paddingBottom="24px" {...props}>
      <Box
        alignItems="center"
        display="flex"
        flexDirection="column"
        color="#a51b77"
        paddingBottom="8px"
      >
        {Icon}
      </Box>
      <Box color="#32474b" textAlign="center"  letterSpacing={1}>
        {info}
      </Box>
    </Box>
  );
}
