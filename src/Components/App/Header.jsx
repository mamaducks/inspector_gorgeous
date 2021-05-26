// Imports
import { Link, Box, Icon } from "@material-ui/core";
import EmmaLogo from "../../img/emmaLogoSmall.png";
import { FaPhoneAlt } from "react-icons/fa";
import routes from "../../App/Routes";
import { makeStyles } from "@material-ui/core";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { AppBar } from "./AppBar";
import { Phone } from "../App/Phone";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#a61b77",
    padding: 12,
  },

  tabList: {
    display: "flex",
    fontSize: 18,
    justifyContent: "space-between",
    height: "100%",

    // borderColor: "#095565",
  },
  tab: {
    width: "70%",
    justifyContent: "space-evenly",
    display: "flex",
    letterSpacing: 2,
  },
});

export const HeadTabs = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Tabs>
        <div className={classes.tabList}>
          <Phone />
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
            {/* <Tab>
              <Link href={routes.pages.pricing} underline="none">
                PRICING
              </Link>
            </Tab> */}
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
      </Tabs>
    </div>
  );
};
