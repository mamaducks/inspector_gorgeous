import {
  Box,
  CardActions,
  CardContent,
  Container,
  Divider,
  Typography,
} from "@material-ui/core";
import { useMediaQuery } from "react-responsive";
import { makeStyles } from "@material-ui/core";
import styles from "../../styles.css";
const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
  },
  content: {
    fontWeight: "300",
    fontSize: "1.1rem"
  },
});

export function FlexBox({ children, ...props }) {
  return (
    <Box display="flex" justifyContent="space-evenly" {...props}>
      {children}
    </Box>
  );
}

export function DivBox({ children, ...props }) {
  return (
    <Box
      justifyContent="center"
      display="flex"
      flexDirection="column"
      alignContent="end"
      fontWeight="lighter"
      letterSpacing={1}
      textAlign="center"
      fontSize="1.25rem"
      {...props}
    >
      {children}
    </Box>
  );
}

export function NewContainer({ children, ...props }) {
  const classes = useStyles();

  return (
    <Container className={classes.container} {...props}>
      {children}
    </Container>
  );
}

export function LayoutBox({
  children,
  image,
  heading,
  summary,
  reverse,
  ...props
}) {
  const isWide = useMediaQuery({
    query: "(min-device-width: 600px)",
  });

  return (
    <Box
      display="flex"
      flexDirection={!!reverse ? "row-reverse" : "row"}
      justifyContent="space-evenly"
      alignContent="space-between"
      margin="25px 0"
      alignItems="center"
      // flexWrap="wrap"
    >
      {isWide && (
        <img
          alt=""
          src={image}
          maxWidth="80%"
          width="60%"
          height="auto"
          style={{ alignSelf: "center", paddingBlock: "10px" }}
          {...props}
        />
      )}
      <div>{children}</div>
    </Box>
  );
}

export function MainContent({ heading, children, ...props }) {
  const classes = useStyles();
  return (
    <CardContent {...props}>
      <Typography color="textPrimary" variant="h5" gutterBottom>
        {heading}
      </Typography>
      <Divider style={{ margin: "10px 0" }} />

      <Typography variant="subtitle1" component="p" className={classes.content}>
        {children}
      </Typography>
    </CardContent>
  );
}
