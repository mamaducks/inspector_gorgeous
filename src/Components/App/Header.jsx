// Imports
import {
  Link,
  makeStyles,
  Tab as MuiTab,
  Tabs as MuiTabs,
} from "@material-ui/core";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
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

    // borderColor: "#095565",
  },
  tab: {
    // justifyContent: "space-evenly",
    // display: "flex",
    letterSpacing: 2,
  },
  button: {
    display: "flex",
    justifyContent: "space-evenly",
  },
});

export const HeadTabs = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Tabs>
        <div className={classes.tabList}>
          <div className={classes.tab}>
            <TabList>
              <Tab>
                <Link href="/" underline="none">
                  HOME
                </Link>
              </Tab>

              <Tab>
                <Link href={routes.services.link} underline="none">
                  SERVICES
                </Link>
              </Tab>

              {/* <Tab>
              <Link href={routes.pages.pricing} underline="none">
                PRICING
              </Link>
            </Tab> */}

              <Tab>
                <Link href={routes.about.link} underline="none">
                  ABOUT
                </Link>
              </Tab>

              <Tab>
                <Link href={routes.faq.link} underline="none">
                  FAQ
                </Link>
              </Tab>

              <Tab>
                <Link href={routes.contact.link} underline="none">
                  CONTACT
                </Link>
              </Tab>
            </TabList>

            <TabPanel />
            <TabPanel />
            <TabPanel />
            <TabPanel />
            <TabPanel />
          </div>
        </div>
      </Tabs>
    </div>
  );
};

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
