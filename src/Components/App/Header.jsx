// Imports
import { Link } from "@material-ui/core";
import EmmaLogo from "../../img/emmaLogo.png";

import routes from "../../App/Routes";
import { makeStyles } from "@material-ui/core";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { AppBar } from "./AppBar";

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 2,
    justifyContent: "space-between",
    paddingLeft: 17,
    display: "flex",
    paddingTop: 0,
    paddingBottom: 0,
  },
  bookIt: {
    justifyContent: "flex-end",
    display: "flex",
  },
  tabList: {
    display: "flex",
    alignSelf: "flex-end",
    height: 35,
    flexGrow: 1,
    fontSize: 18,
    justifyContent: "center",
    // borderColor: "#095565",
  },
  tab: {
    width: "70%",
    justifyContent: "space-evenly",
    display: "flex",
    letterSpacing: 2,
    fontWeight: 700,
  },
}));

export const Header = () => {
  const classes = useStyles();

  return (
    <Tabs variant="primary">
      <div className={classes.title}>
        <img alt="" src={EmmaLogo} width="150" height="80" />

        <div className={classes.tabList}>
          <div className={classes.tab}>
            <Tab>
              <Link href="/" underline="none">
                HOME
              </Link>
            </Tab>
            <Tab>
              <Link href={routes.pages.services} underline="none">
                SERVICES
              </Link>
            </Tab>
            <Tab>
              <Link href={routes.pages.pricing} underline="none">
                PRICING
              </Link>
            </Tab>
            <Tab>
              <Link href={routes.pages.about} underline="none">
                ABOUT
              </Link>
            </Tab>
            <Tab>
              <Link href={routes.pages.faq} underline="none">
                FAQ
              </Link>
            </Tab>
            <Tab>
              <Link href={routes.pages.contact} underline="none">
                CONTACT
              </Link>
            </Tab>
          </div>
        </div>
      </div>
      <div>
        <AppBar />
      </div>
    </Tabs>
  );
};
