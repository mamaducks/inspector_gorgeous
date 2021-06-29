import {
    Accordion,
    AccordionDetails,
    AccordionSummary
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { MdExpandMore } from "react-icons/md";
import { DivBox } from "../Box/AppBoxes";

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
          <DivBox className={classes.heading}>{heading}</DivBox>
        </AccordionSummary>
        <AccordionDetails className={classes.body}>
          <DivBox fontSize="14px">{body}</DivBox>
        </AccordionDetails>
      </Accordion>
    );
  };