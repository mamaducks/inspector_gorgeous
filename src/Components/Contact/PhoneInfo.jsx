import { Icon, makeStyles, Box } from "@material-ui/core";
import React from "react";
import { IoIosPhonePortrait } from "react-icons/io";
import PurpleBlot from "../../img/purpleBlot.png";

const useStyles = makeStyles({
  infoBottom: {
    backgroundImage: `url(${PurpleBlot})`,
    padding: 25,
    alignItems: "center",
    display: "flex",
    width: 300,
    height: 250,
    flexDirection: "column",
    justifyContent: "center",
  },
});

export const PhoneInfo = () => {
  const classes = useStyles();

  return (
    <Box style={{ padding: 20 }}>
      <div className={classes.infoBottom}>
        <Icon>
          <IoIosPhonePortrait color="white" />
        </Icon>
        <Box
          style={{ padding: 20 }}
          fontFamily="Helvetica"
          lineHeight={2}
          color="white"
        >
          p: 609-445-6778
        </Box>
        <Box fontFamily="Helvetica" lineHeight={2} color="white">
          fax: 609-890-6786
        </Box>
      </div>
    </Box>
  );
};
