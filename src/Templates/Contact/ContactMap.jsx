import { useMediaQuery } from "react-responsive";
import { FaMobileAlt } from "react-icons/fa";
import { IoLocationOutline, IoMailOutline } from "react-icons/io5";
import { FlexBox } from "../../Components/Box/AppBoxes";
import { BusinessInfoButton } from "../../Components/Schedule/BusinessInfoButton";
import MapImage from "../../img/mapNJ.png";
import { Box, CardContent, Grid, Typography } from "@material-ui/core";

import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    ...theme.typography.button,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1),
  },
  hrInfo: {
    lineHeight: "2",
  },
  hours: {
    paddingBlock: "10px",
  },
  grid: {
    direction: "row",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    fontSize: "1.1rem",
    fontWeight: "lighter",
    "& div": {
      fontWeight: "bold",
      paddingInline: "10px",
      fontSize: "1.1rem",
      color: "#494649"
    },
  },
}));

export function Info({ Icon, info }) {
  return (
    <CardContent>
      <Box
        alignItems="center"
        display="flex"
        flexDirection="column"
        color="#a51b77"
        fontSize="2rem"
        minHeight="80px"
        justifyContent="space-between"
      >
        {Icon}
        <Typography color="textPrimary" variant="subtitle1" paddingBlock="10px" gutterBottom >
          {info}
        </Typography>
      </Box>
    </CardContent>
  );
}

export function Hours() {
  const classes = useStyles();

  const isWide = useMediaQuery({
    query: "(min-device-width: 650px)",
  });

  if (isWide) {
    return (
      <Box className={classes.hours}>
        <Typography className={classes.hrInfo}>
          <Grid container className={classes.grid}>
            <div>Monday thru Friday</div>
            8:00 am - 7:00 pm
            <div>Saturday</div>
            9:00 am - 5:00 pm
            <div>Sunday </div>
            Closed
          </Grid>
        </Typography>
      </Box>
    );
  }
  return (
    <div>
      <Typography color="textPrimary" gutterBottom>
        Monday thru Friday
        <Typography color="textSecondary"> 8:00 am - 7:00 pm</Typography>
      </Typography>
      <Typography color="textPrimary" gutterBottom>
        Saturday
        <Typography color="textSecondary"> 9:00 am - 5:00 pm</Typography>
      </Typography>
      <Typography color="textPrimary" gutterBottom>
        Sunday
        <Typography color="textSecondary">Closed</Typography>
      </Typography>
    </div>
  );
}

export const ContactMap = () => {
  const isWide = useMediaQuery({
    query: "(min-device-width: 800px)",
  });
  return (
    <FlexBox flexWrap="wrap">
      {isWide && (
        <img alt="" src={MapImage} maxWidth="100%" width="60%" height="auto" />
      )}
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
    </FlexBox>
  );
};
