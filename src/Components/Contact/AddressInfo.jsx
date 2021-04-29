import { Icon, makeStyles, Box } from "@material-ui/core";
import React from "react";
import { IoMdPin } from "react-icons/io";
import BlueBlot from "/Users/leonaduckworth/code/InspectorGorgeous/inspector_gorgeous/src/img/blueBlot.png";

const useStyles = makeStyles({
  infoBox: {
    padding: 25,
    alignItems: "center",
    display: "flex",
    width: 300,
    height: 250,
    flexDirection: "column",
    justifyContent: "center",
    backgroundImage: `url(${BlueBlot})`,
  },
});

export const AddressInfo = () => {
  const classes = useStyles();

  return (
    <Box style={{ padding: 20 }}>
      <div className={classes.infoBox}>
        <Icon>
          <IoMdPin color="white" />
        </Icon>
        <Box
          style={{ padding: 20 }}
          fontFamily="Helvetica"
          lineHeight={2}
          color="white"
        >
          Washington Ave
        </Box>
        <Box fontFamily="Helvetica" lineHeight={2} color="white">
          Berlin NJ 08009
        </Box>
      </div>
    </Box>
  );
};
