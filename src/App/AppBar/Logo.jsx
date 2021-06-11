import { Box, makeStyles } from "@material-ui/core";
import EmmaLogo from "../../img/emmaLogoSmall.png";

const useStyles = makeStyles({
  logo: {
    display: "flex",
    fontWeight: "lighter",
    paddingBottom: "4px",
    fontSize: "16px",
  },
  smallText: {
    alignSelf: "flex-end",
  },
  largeText: {
    fontSize: "30px",
    fontWeight: "500",
  },
});

export function Logo() {
  const classes = useStyles();

  return (
    <Box className={classes.logo}>
      <img alt="" src={EmmaLogo} width="70" height="70" />

      <Box
        paddingLeft="4px"
        flexDirection="column"
        display="flex"
        justifyContent="center"
      >
        <div className={classes.largeText}>BUYER BEWARE</div>

        <div className={classes.smallText}>HOME INSPECTION, LLC</div>
      </Box>
    </Box>
  );
}
