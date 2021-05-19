import { Box, Grid, makeStyles } from "@material-ui/core";

export function DisplayBox({ children }) {
  return (
    <Box display="flex" justifyContent="space-between">
      {children}
    </Box>
  );
}

export function DisplayEvenBox({ children }) {
  return (
    <Box display="flex" justifyContent="space-evenly">
      {children}
    </Box>
  );
}

export function DisplayCenterBox({ children }) {
  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      {children}
    </Box>
  );
}
export function MyFlexBox({ children }) {
  return <Box display="flex">{children}</Box>;
}

export function PadBox({ children }) {
  return <Box style={{ padding: 10 }}>{children}</Box>;
}
export function MyBox({ children }) {
  return (
    <Box fontSize={15} letterSpacing={2} lineHeight={1.7}>
      {children}
    </Box>
  );
}

export function MyInfoBox({ children }) {
  return (
    <Box
      letterSpacing={1.5}
      lineHeight={1.6}
      style={{ paddingBottom: 15, width: "60em" }}
    >
      {children}
    </Box>
  );
}

export function SpaceBox({ children }) {
  return (
    <Grid
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      {children}
    </Grid>
  );
}

export function MyMapBox({ children }) {
  return (
    <Grid
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        flexDirection: "column",
      }}
    >
      {children}
    </Grid>
  );
}

export function HeaderBox({ children }) {
  return (
    <Box
      fontWeight="bold"
      color="#751f66"
      textAlign="center"
      lineHeight={2}
      style={{ padding: 20 }}
    >
      {children}
    </Box>
  );
}

export function MainTitleBox({ children }) {
  return (
    <Box
      fontWeight="bolder"
      fontSize="x-large"
      color="#751f66"
      textAlign="center"
      lineHeight={3}
    >
      {children}
    </Box>
  );
}

export function MyMainTitleBox({ children }) {
  return (
    <Box
      fontWeight="bolder"
      fontSize="large"
      color="#751f66"
      textAlign="center"
      lineHeight={3}
    >
      {children}
    </Box>
  );
}

export function ListBox({ children }) {
  return (
    <Box fontSize={14} letterSpacing={2} lineHeight={1.5} fontWeight="bold">
      {children}
    </Box>
  );
}

export function ContentRBox({ children }) {
  return (
    <Box fontSize={15} letterSpacing={2} lineHeight={1.7} alignSelf="flex-end">
      {children}
    </Box>
  );
}

export function ContentBox({ children }) {
  return (
    <Box fontSize={15} letterSpacing={2} lineHeight={2} width="110em">
      {children}
    </Box>
  );
}

export function MyContentBox({ children }) {
  return (
    <Box fontSize={15} letterSpacing={2} lineHeight={2}>
      {children}
    </Box>
  );
}

export function MyContent({ children }) {
  return (
    <Box
      fontSize={14}
      letterSpacing={2}
      lineHeight={1.8}
      width="115em"
      alignSelf="center"
    >
      {children}
    </Box>
  );
}

export function ImageBox({ children }) {
  return (
    <Box width="100%" alignSelf="center" display="flex" justifyContent="center">
      {children}
    </Box>
  );
}

export function ImageRBox({ children }) {
  return (
    <Box
      width="100%"
      alignSelf="center"
      display="flex"
      justifyContent="flex-end"
    >
      {children}
    </Box>
  );
}

export function MyGrid({ children }) {
  return (
    <Grid
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        marginTop: 15,
      }}
    >
      {children}
    </Grid>
  );
}

export function CenterBox({ children }) {
  return (
    <Box
      fontSize={14}
      lineHeight={2}
      letterSpacing={2}
      color="#751f66"
      flexDirection="column"
    >
      {children}
    </Box>
  );
}

export function LongBox({ children }) {
  return (
    <Box
      fontSize={14}
      lineHeight={1.5}
      color="#751f66"
      flexDirection="column"
      style={{ padding: 20 }}
    >
      {children}
    </Box>
  );
}

export function ColorBox({ children }) {
  return (
    <Box
      textAlign="center"
      letterSpacing={1.5}
      lineHeight={3}
      fontWeight={700}
      color="white"
      style={{ backgroundColor: "#b23a87", marginBottom: 15 }}
    >
      {children}
    </Box>
  );
}

export function ExpectBox({ children }) {
  return (
    <Box
      fontSize={14}
      letterSpacing={2}
      lineHeight={1.7}
      textAlign="end"
      color="#404040"
      fontWeight={400}
      width="63em"
      style={{ paddingTop: 20 }}
    >
      {children}
    </Box>
  );
}

export function InspectBox({ children }) {
  return (
  <Box
    fontSize={14}
    letterSpacing={2}
    lineHeight={1.8}
    width="70em"
    textAlign="center"
    color="#010101"
  >
    {children}
  </Box>
  );
}
