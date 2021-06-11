import { Box } from "@material-ui/core";
import Locate from "../../img/locateSVG.svg";
import Mail from "../../img/mailSVG.svg";
import Phone from "../../img/phoneSVG.svg";
import {Info} from "./Info";
import {InfoBox} from "./InfoBox";

export function InfoCard() {
    return (
      <Box display="flex">
        <Box alignSelf="center">
          <InfoBox Icon={Phone}>
            <Info info="p: 609-670-0451" />
          </InfoBox>
          <InfoBox Icon={Locate}>
            <Info info="Berlin, NJ 08009" />
          </InfoBox>
          {/* <AllInfo Icon={Email}>
            <InfoBox info="BuyersBewareHomeInspections@gmail.com" />
          </AllInfo> */}
          <InfoBox Icon={Mail}>
            <Info info="Buyer Beware Home Inspections" flexWrap="nowrap" />
            <Info info="P. O. Box 463" />
            <Info info="Bordentown, NJ 08505" />
          </InfoBox>
        </Box>
      </Box>
    );
  }