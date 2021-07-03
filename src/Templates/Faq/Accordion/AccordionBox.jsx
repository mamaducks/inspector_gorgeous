import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { MdExpandMore } from "react-icons/md";
import { DivBox } from "../../../Components/Box/AppBoxes";

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
    <Accordion >
      <AccordionSummary
        expandIcon={<MdExpandMore />}
        aria-controls="panel-content"
        id="panel-header"
      >
        <DivBox className={classes.heading}>{heading}</DivBox>
      </AccordionSummary>
      <AccordionDetails className={classes.body}>
        <DivBox fontSize="1.25rem">{body}</DivBox>
      </AccordionDetails>
    </Accordion>
  );
};
