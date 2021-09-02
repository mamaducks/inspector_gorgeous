import { useMediaQuery } from "react-responsive";
import { FaMobileAlt } from "react-icons/fa";
import { IoLocationOutline, IoMailOutline } from "react-icons/io5";
import { BusinessInfoButton } from "../../../Schedule/BusinessInfoButton";
import MapImage from "./mapNJ.png";
import { Box, CardContent } from "@material-ui/core";
import {Info} from "./ContactInfo";
import {Hours} from "./ContactHours";

export const ContactMap = () => {
  const isWide = useMediaQuery({
    query: "(min-device-width: 800px)",
  });
  return (
    <Box
      display="flex"
      justifyContent="space-evenly"
      flexWrap="wrap"
      alignItems="center"
    >
      {isWide && <img alt="" src={MapImage} width="60%" height="auto" />}
      <CardContent>
        <Info Icon={<FaMobileAlt />} info="p: 609-670-0451" />
        <Info Icon={<IoLocationOutline />} info="Berlin, NJ 08009" />
        <Info
          Icon={<IoMailOutline />}
          info="BuyerBewareHomeInspections@gmail.com"
          paddingBottom="5px"
        />
        <BusinessInfoButton />
      </CardContent>

      <Hours />
    </Box>
  );
};
