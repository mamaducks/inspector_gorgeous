// Imports
import React from "react";
import { Toolbar, Button, ButtonGroup } from "@material-ui/core";
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
    margin: "0 0 0px",
    display: "flex",
    justifyContent: "flex-end",
    alignSelf: "flex-end",
    fontFamily: "Helvetica",
    color: "#095565",
    height: 55,
    flexGrow: 1,
    fontSize: 17,
    justifyContent: "center",
    borderColor: "#095565",
  },
}));

// Component
export const Header = () => {
  const classes = useStyles();
  // render
  return (
    // <div className={classes.root}>

    <Tabs variant="primary" gutterBottom>
      <div className={classes.title}>
        <img src={EmmaLogo} width="188" height="115" />
        <TabList className={classes.tabList}>
          <Tab>
            <h4>Home</h4>{" "}
          </Tab>
          <Tab>
            <h4>Services</h4>
          </Tab>
          <Tab>
            <h4>About</h4>{" "}
          </Tab>
          <Tab>
            <h4>Faq</h4>{" "}
          </Tab>
          <Tab>
            <h4>Contact</h4>
          </Tab>
        </TabList>
      </div>
      <div>
        <AppBar />
      </div>
      <TabPanel>
        <HomePage />
      </TabPanel>
      <TabPanel>
        <ServicesPage />
      </TabPanel>
      <TabPanel>
        <AboutPage />
      </TabPanel>
      <TabPanel>
        <FaqPage />
      </TabPanel>
      <TabPanel>
        <ContactPage />
      </TabPanel>
    </Tabs>

    // </div>
  );
};
