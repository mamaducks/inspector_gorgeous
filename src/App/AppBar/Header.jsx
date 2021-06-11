import { makeStyles, Tab, Tabs } from "@material-ui/core";
import "react-tabs/style/react-tabs.css";
import routes from "../Routes";
import { Phone } from "./Phone";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#a71976",
    padding: 1,
  },

  tabList: {
    color: "white",
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
        <Tabs value={window.location.pathname}>
          {Object.values(routes).map(({ link, label }) => (
            <Tab label={label} href={link} component="a" value={link} />
          ))}
        </Tabs>

        <Phone />
      </div>
    </div>
  );
};
