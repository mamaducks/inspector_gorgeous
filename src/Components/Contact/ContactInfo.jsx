import { makeStyles, Box } from "@material-ui/core";
import React from "react";
import { IoIosPhonePortrait } from "react-icons/io";
import { IoMdPin } from "react-icons/io";

const useStyles = makeStyles({
  infoBottom: {
    // backgroundImage: `url(${Banner})`,
    alignItems: "center",
    display: "flex",
    width: 270,
    height: 226,
    flexDirection: "column",
    justifyContent: "center",
    border: "solid",
    borderColor: "#b23a87",
    borderRadius: 5,
    backgroundColor: "#e4e8e9",
  },
});

export const ContactInfo = ({ Icon, topLine, bottomLine }) => {
  const classes = useStyles();

  return (
    <Box style={{ padding: 20 }}>
      <div className={classes.infoBottom}>
        <Icon color="#32474b">{Icon}</Icon>
        <Box
          style={{ padding: 20 }}
          fontFamily="Helvetica"
          lineHeight={2}
          color="#32474b"
        >
          {topLine}
        </Box>
        <Box fontFamily="Helvetica" lineHeight={2} color="#32474b">
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
      topLine="p: 609-445-6778"
      bottomLine="fax: 609-890-6786"
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
