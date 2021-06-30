import { Box, Container, Divider } from "@material-ui/core";

export function PadBox({ children, ...props }) {
  return (
    <Box p={10} style={{ padding: 10 }} {...props}>
      {children}
    </Box>
  );
}

export function NewContainer({children}) {
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
  return (
    <Box
      display="flex"
      flexDirection={!!reverse ? "row-reverse" : "row"}
      justifyContent="space-evenly"
      alignContent="space-between"
      margin="25px 0"
    >
      <img alt="" src={image} style={{ alignSelf: "center" }} {...props} />

      <Box
        lineHeight={1.5}
        letterSpacing={1}
        justifyContent="center"
        display="flex"
        flexDirection="column"
        alignContent="end"
        width="33rem"
        fontWeight="lighter"
      >
        <Box fontSize="1.25em">
          {heading}
        </Box>

        <Divider style={{ margin: "10px 0" }} />

        {children}
      </Box>
    </Box>
  );
}



export function InfoBox({ Icon, info, children, ...props }) {
  return (
    <Box padding="10px" paddingBottom="24px" {...props}>
      <Box
        alignItems="center"
        display="flex"
        flexDirection="column"
        color="#a51b77"
        paddingBottom="8px"
      >
        <img alt="" src={Icon} width="50px" height="50px" />
      </Box>
      <Box color="#32474b" textAlign="center" fontSize="16px">
        {info}
      </Box>
    </Box>
  );
}

export function DivBox( {children, ...props} ) {
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
  )
}
