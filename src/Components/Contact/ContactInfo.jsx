import { makeStyles, Box } from "@material-ui/core";
import { IoIosPhonePortrait } from "react-icons/io";
import { IoMdPin } from "react-icons/io";
import {
  DisplayEvenBox,
  MyFlexBox,
  DisplayCenterBox,
  ImageBox,
} from "../Box/MyBox";
import Mag from "../../img/magnifyhome.png";

const useStyles = makeStyles({
  infoBottom: {
    // backgroundImage: `url(${Banner})`,
    alignItems: "center",
    display: "flex",
    width: 235,
    height: 175,
    flexDirection: "column",
    justifyContent: "center",
    border: "solid",
    borderColor: "#996691",
    borderRadius: 5,
    backgroundColor: "#f9f9f9",
  },
  midImage: {
    width: 120,
    height: 120,
  },
  infoGrid: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
  },
});

export const ContactInfo = ({ Icon, topLine, bottomLine }) => {
  const classes = useStyles();

  return (
    <Box style={{ padding: 10 }}>
      <div className={classes.infoBottom}>
        <Icon color="#751f66">{Icon}</Icon>
        <Box style={{ padding: 10 }} lineHeight={2} color="#32474b">
          {topLine}
        </Box>
        <Box lineHeight={2} color="#32474b">
          {bottomLine}
        </Box>
      </div>
    </Box>
  );
};

export const PhoneInfo = () => {
  return (
    <ContactInfo
      Icon={IoIosPhonePortrait}
      topLine="P: 609-445-6778"
      bottomLine="Fax: 609-890-6786"
    />
  );
};

export const AddressInfo = () => {
  return (
    <ContactInfo
      Icon={IoMdPin}
      topLine="Washington Ave"
      bottomLine="Berlin NJ 08009"
    />
  );
};

export function InfoGrid() {
  const classes = useStyles();

  return (
    <MyFlexBox>
      <Box letterSpacing={1} lineHeight={2} alignSelf= "center">
        <Box style={{ padding: 10, width: 175, paddingBottom: 24}}>
          <div className={classes.infoGrid}>
            <IoIosPhonePortrait color="#751f66" fontSize={40} style={{ paddingBottom: 8 }}/>
            <Box style={{ padding: 7 }} lineHeight={1} color="#32474b" >
              p: 609-445-6778
            </Box>
            <Box lineHeight={1} color="#32474b">
              fax: 609-890-6786
            </Box>
          </div>
        </Box>

        <Box style={{ padding: 10,  width: 175 }}>
          <div className={classes.infoGrid}>
            <IoMdPin color="#751f66" fontSize={38} style={{ paddingBottom: 8 }}/>
            <Box style={{ padding: 7 }} lineHeight={1} color="#32474b">
              Washington Ave
            </Box>
            <Box lineHeight={1} color="#32474b">
              Berlin NJ 08009
            </Box>
          </div>
        </Box>
      </Box>

    </MyFlexBox>
  );
}
