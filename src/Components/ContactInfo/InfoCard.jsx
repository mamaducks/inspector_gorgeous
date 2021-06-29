import { Box } from "@material-ui/core";
import Locate from "../../img/locateSVG.svg";
import Mail from "../../img/mailSVG.svg";
import Phone from "../../img/phoneSVG.svg";
import { InfoBox } from "../Box/AppBoxes";

export function InfoCard() {
  return (
    <Box display="flex">
      <Box alignSelf="center">
        <InfoBox Icon={Phone} info="p: 609-670-0451" />
        <InfoBox Icon={Locate} info="Berlin, NJ 08009" />
        {/* <AllInfo Icon={Email}>
            <InfoBox info="BuyersBewareHomeInspections@gmail.com" />
          </AllInfo> */}
        <InfoBox
          Icon={Mail}
          info={
            <>
              <div>Buyer Beware Home Inspections</div>
              <div>P. O. Box 463</div>
              <div>Bordentown, NJ 08505</div>
            </>
          }
        />
      </Box>
    </Box>
  );
}
