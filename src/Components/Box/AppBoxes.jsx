import { Box, Container, Divider } from "@material-ui/core";
import { useMediaQuery } from "react-responsive";

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
      lineHeight={1.5}
      letterSpacing={1}
      textAlign="center"
      {...props}
    >
      {children}
    </Box>
  );
}

export function NewContainer({ children }) {
  return (
    <Container
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
      }}
    >
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
    query: "(min-device-width: 700px)",
  });

  return (
    <Box
      display="flex"
      flexDirection={!!reverse ? "row-reverse" : "row"}
      justifyContent="space-evenly"
      alignContent="space-between"
      margin="25px 0"
      flexWrap="wrap"
    >
      {isWide && (
        <img alt="" src={image} style={{ alignSelf: "center" }} {...props} />
      )}

      <Box
        lineHeight={1.5}
        letterSpacing={1}
        justifyContent="center"
        display="flex"
        flexDirection="column"
        alignContent="end"
        width="33rem"
        fontWeight="lighter"
        paddingTop="10px"
      >
        <Box fontSize="1.25em">{heading}</Box>

        <Divider style={{ margin: "10px 0" }} />

        {children}
      </Box>
    </Box>
  );
}
