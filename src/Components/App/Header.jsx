// Imports
import {
  makeStyles,
  Tab as MuiTab,
  Tabs as MuiTabs
} from "@material-ui/core";
import "react-tabs/style/react-tabs.css";
import routes from "../../App/Routes";
import { Phone } from "../App/Phone";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#a71976",
    padding: 1,
  },

  tabList: {
    display: "flex",
    fontSize: 18,
    justifyContent: "space-between",
  },
});

export const HeadButtons = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.tabList}>
        <MuiTabs value={window.location.pathname}>
          {Object.values(routes).map(({ link, label }) => (
            <MuiTab label={label} href={link} component="a" value={link} />
          ))}
        </MuiTabs>

        <Phone />
      </div>
    </div>
  );
};
