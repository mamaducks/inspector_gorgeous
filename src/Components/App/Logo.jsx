import { SvgIcon } from "@material-ui/core";
import { Box, makeStyles } from "@material-ui/core";
import EmmaLogo from "../../img/emmaLogoSmall.png";

const useStyles = makeStyles({
  logo: {
    display: "flex",
    alignItems: "flex-end",
    fontSize: 31,
    fontWeight: "bolder",
    paddingBottom: 12,
    paddingLeft: 4,
    "& div": {
      fontWeight: "lighter",
      fontSize: 18,
      paddingLeft: 6,
      paddingBottom: 4,
    },
  },
});

export function Logo() {
  const classes = useStyles();

  return (
    <Box display="flex" paddingBottom="4px">
      <img alt="" src={EmmaLogo} width="105" height="85" />
      <Box className={classes.logo}>
        BUYER BEWARE <div>HOME INSPECTION, LLC</div>
      </Box>
    </Box>
  );
}

export function TextLogo(props) {
  return (
    <SvgIcon {...props}>
      <path d="../../../src/littlelogo.png" />
    </SvgIcon>
  );
}
