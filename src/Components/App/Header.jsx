// Imports
import React from "react";
import { Toolbar, Button, ButtonGroup, Link } from "@material-ui/core";
import EmmaLogo from "../../img/emmaLogo.png";

import routes from "../../App/Routes";
import { makeStyles } from "@material-ui/core";
import IgLogo from "../../img/I.png";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { AppBar } from "./AppBar";
import { AboutPage } from "../../Templates/AboutPage";
import { HomePage } from "../../Templates/HomePage";
import { FaqPage } from "../../Templates/FaqPage";
import { ContactPage } from "../../Templates/ContactPage";
import { ServicesPage } from "../../Templates/ServicesPage";

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 2,
    justifyContent: "space-between",

    display: "flex",
  },
  bookIt: {
    justifyContent: "flex-end",
    display: "flex",
  },
  tabList: {
    display: "flex",
    alignSelf: "flex-end",
    fontFamily: "Helvetica",
    height: 40,
    flexGrow: 1,
    fontSize: 19,
    justifyContent: "center",
    // borderColor: "#095565",
  },
  tab: {
    width: "70%",
    justifyContent: "space-evenly",
    display: "flex",
  },
}));

// Component
export const Header = () => {
  const classes = useStyles();
  // render
  return (
    // <div className={classes.root}>
    <Tabs variant="primary">
      <div className={classes.title}>
        <img alt="" src={EmmaLogo} width="188" height="115" />

        <div className={classes.tabList}>
          <div className={classes.tab}>
            <Link href="/" underline="none">
              Home
            </Link>{" "}
            <Link href={routes.pages.services} underline="none">
              Services
            </Link>
            <Link href={routes.pages.pricing} underline="none">
              Pricing
            </Link>
            <Link href={routes.pages.about} underline="none">
              About
            </Link>{" "}
            <Link href={routes.pages.faq} underline="none">
              Faq
            </Link>{" "}
            <Link href={routes.pages.contact} underline="none">
              Contact
            </Link>
          </div>
        </div>
      </div>
      <div>
        <AppBar />
      </div>
    </Tabs>

    // </div>
  );
};
