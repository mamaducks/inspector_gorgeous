import { makeStyles } from "@material-ui/core/styles";

import { Typography } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    display: "flex",

    flexDirection: "column",
  },
  profilePaper: {
    padding: 20,
    width: 480,
    display: "flex",
    alignItems: "flex-end",
  },
});

export function AboutBody() {
  const classes = useStyles();

  return (
    <Typography className={classes.area}>
      SERVICE AREA New Jersey: Counties of Burlington, Camden, Gloucester,
      Salem, Cumberland, Atlantic, and Cape May Pennsylvania: Counties of
      Philadelphia, Delaware, Chester, Montgomery and Bucks New Jersey License
      Number: NJ24GI00149500
    </Typography>
  );
}
