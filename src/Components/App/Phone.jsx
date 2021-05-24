import { FaPhoneAlt } from "react-icons/fa";
import { makeStyles } from "@material-ui/core";
import { Icon } from "@material-ui/core";

const useStyles = makeStyles({
  logoBox: {
    paddingLeft: 21,
    paddingRight: 12,
    alignItems: "center",

    display: "flex",
    letterSpacing: 1.3,
    color: "#cdcdcd",
    fontSize: "21px",
    alignSelf: "center",
    margin: 0,
  },
  phone: {
    fontSize: 19,
  },
});

export function Phone() {
  const classes = useStyles();
  return (
    <div className={classes.logoBox}>
      <Icon>
        <FaPhoneAlt />
      </Icon>

      <div className={classes.phone}>1-609-670-0451</div>
    </div>
  );
}
