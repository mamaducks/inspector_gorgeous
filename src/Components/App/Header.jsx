// Imports
import React from "react";
import { Toolbar, Button, ButtonGroup } from "@material-ui/core";
// App imports
import routes from "../../App/Routes";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },

  title: {
    flexGrow: 2,
    display: "flex",
  },
  buttonBox: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    padding: 5,
    alignItems: "flex-end",
    "& > *": {
      margin: theme.spacing(3),
    },
  },
}));
// Component
export const Header = () => {
  const classes = useStyles();
  // render
  return (
    <>
      <div className={classes.root}>
        <Toolbar>
          <div className={classes.title}>put logo here</div>
          <div className={classes.rootBox}>
            <ButtonGroup
              size="large"
              aria-label="small outlined button group"
              variant="primary"
            >
              <Button href={routes.pages.home}>Home</Button>
              <Button href={routes.pages.about}>About</Button>
              <Button href={routes.pages.services}>Services</Button>
              <Button href={routes.pages.faq}>Faq</Button>
              <Button href={routes.pages.contact}>Contact</Button>
            </ButtonGroup>
          </div>
        </Toolbar>
      </div>
    </>
  );
};
