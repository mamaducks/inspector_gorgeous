// Imports
import React from "react";
import { Toolbar, Button, ButtonGroup } from "@material-ui/core";
// App imports
import routes from "../../App/Routes";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 2,
    display: "flex",
  },
}));
// Component
export const Header = () => {
  const classes = useStyles();
  // render
  return (
    <Toolbar>
      <div className={classes.title}>put logo here</div>

      <ButtonGroup aria-label="small outlined button group" variant="primary">
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
