import { FaPhoneAlt } from "react-icons/fa";
import { makeStyles } from "@material-ui/core";
import { Box, Icon } from "@material-ui/core";

const useStyles = makeStyles({
  logoBox: {
    paddingLeft: 21,
    paddingRight: 12,
    alignItems: "center",
    display: "flex",
    letterSpacing: 1.3,
    fontSize: "21px",
    alignSelf: "center",
    margin: 0,
    "& div": {
      fontSize: 20,
    },
  },
});

export function Phone() {
  const classes = useStyles();
  return (
    <Box className={classes.logoBox}>
      <Icon>
        <FaPhoneAlt />
      </Icon>
      <div>1-609-670-0451</div>
    </Box>
  );
}
