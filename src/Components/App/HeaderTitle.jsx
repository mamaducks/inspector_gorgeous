import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  title: {
    backgroundColor: "#e8e8e8",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 80,
  },
});

export const Title = ({title}) => {
    const classes = useStyles();

    return (
<Box className={classes.title}>
   <h4>{title}</h4> 
</Box>
    );
}