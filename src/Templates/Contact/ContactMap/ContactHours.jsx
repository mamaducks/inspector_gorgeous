import { useMediaQuery } from "react-responsive";
import { Box, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  hrInfo: {
    lineHeight: "2",
  },
  hours: {
    paddingTop: "10px",
    paddingBottom: "10px",
  },
  grid: {
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    fontWeight: "lighter",
    "& div": {
      fontWeight: "bold",
      paddingInline: "10px",
      color: "#494649",
    },
  },
}));

export function Hours() {
  const classes = useStyles();

  const isWide = useMediaQuery({
    query: "(min-width: 48rem)",
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