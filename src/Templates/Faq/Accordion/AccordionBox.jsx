import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { MdExpandMore } from "react-icons/md";

const useStyles = makeStyles((theme) => ({
  accord: {
    backgroundColor: "#e4dadf",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  body: {
    backgroundColor: "#f9f5f7",
    fontWeight: "lighter",
    letterSpacing: 1,
    fontSize: "1rem",
  },
}));

export const AccordionBox = ({ heading, body }) => {
  const classes = useStyles();

  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<MdExpandMore />}
        aria-controls="panel-content"
        id="panel-header"
        className={classes.accord}
      >
        <Box className={classes.heading}>{heading}</Box>
      </AccordionSummary>
      <AccordionDetails className={classes.body}>
        <Box>{body}</Box>
      </AccordionDetails>
    </Accordion>
  );
};
