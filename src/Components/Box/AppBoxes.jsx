import { Box, Container, Divider } from "@material-ui/core";

export function PadBox({ children, ...props }) {
  return (
    <Box p={10} style={{ padding: 10 }} {...props}>
      {children}
    </Box>
  );
}


export function FlexBox({ children, ...props }) {
  return (
    <Box display="flex" justifyContent="space-evenly" {...props}>
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
        <Box fontSize="1.25em">{heading}</Box>

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

export function FootOuterBox({ children }) {
  return (
    <Box
      display="flex"
      justifyContent="space-evenly"
      color="#a71976"
      alignItems="center"
      paddingTop="4px"
    >
      {children}
    </Box>
  );
}

export function FooterBox({ children, ...props }) {
  return (
    <PadBox>
      <Box
        letterSpacing={0.5}
        lineHeight={1.4}
        textAlign="center"
        fontSize="16px"
        {...props}
      >
        {children}
      </Box>
    </PadBox>
  );
}

export function ContactBox({ children, ...props }) {
  return (
    <Box
      textAlign="center"
      fontSize="22px"
      display="flex"
      fontWeight="lighter"
      alignItems="center"
      justifyContent="center"
      letterSpacing={1}
      {...props}
    >
      {children}
    </Box>
  );
}

export function ServiceGrid({ children }) {
  return (
    <Box display="flex" justifyContent="center" flexWrap="wrap" style={{paddingBlock:"15px"}}>
      {children}
    </Box>
  );
}
export function ServiceDialog({ children }) {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      alignItems="center"
      paddingTop="25px"
      width="300px"
    >
      {children}
    </Box>
  );
}
export function ServiceCard({ children }) {
  return (
    <Box
      alignItems="center"
      justifyContent="center"
      display="flex"
      flexDirection="column"
      width="230px"
      height="180px"
      fontSize="14px"
    >
      {children}
    </Box>
  );
}
