// Imports
import React from "react";
import { Toolbar, Button, ButtonGroup } from "@material-ui/core";
// App imports
import routes from "../../App/Routes";
import { makeStyles } from "@material-ui/core";
import IgLogo from "../../img/I.png";

const useStyles = makeStyles((theme) => ({
  title: {
    justifyContent: "space-between",
  },
}));

// Component
export const Header = () => {
  const classes = useStyles();
  // render
  return (
    <Toolbar style={{ justifyContent: "space-between" }}>
      <img src={IgLogo} width="100" height="100" />

      <ButtonGroup
        aria-label="small outlined button group"
        variant="primary"
        gutterBottom
      >
        <Button
          // classes={{ label: classes.buttonLabel }}
          href={routes.pages.home}
        >
          Home
        </Button>
        <Button href={routes.pages.about}>About</Button>
        <Button href={routes.pages.services}>Services</Button>
        <Button href={routes.pages.faq}>Faq</Button>
        <Button href={routes.pages.contact}>Contact</Button>
      </ButtonGroup>
    </Toolbar>
  );
};
