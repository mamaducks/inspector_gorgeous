import {
    Accordion,
    AccordionDetails,
    AccordionSummary, Typography
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { MdExpandMore } from "react-icons/md";
  
  const useStyles = makeStyles((theme) => ({
  
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
  
    body: {
      backgroundColor: "#f1e9ee",
    },
   
  }));

export const AccordionBox = ({ heading, body }) => {
    const classes = useStyles();
  
    return (
      <Accordion disableGutters>
        <AccordionSummary
          expandIcon={<MdExpandMore />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>{heading}</Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.body}>
          <Typography>{body}</Typography>
        </AccordionDetails>
      </Accordion>
    );
  };