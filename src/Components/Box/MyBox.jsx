import { Box, Grid, makeStyles } from "@material-ui/core";

const MyStyles = {
  Flex: { display: "flex" },
  Center: { display: "flex", justifyContent: "center" },
  DisplayEven: {
    display: "flex",
    justifyContent: "space-evenly",
  },
};

function GG() {
  return (
    <Box {...MyStyles.Flex} {...MyStyles.Center}>
      ff
    </Box>
  );
}
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
  return (
    <Box p={10} style={{ padding: 10 }}>
      {children}
    </Box>
  );
}
export function MyBox({ children }) {
  return (
    <Box letterSpacing={1} lineHeight={1.7}>
      {children}
    </Box>
  );
}

export function MyInfoBox({ children }) {
  return (
    <Box
      paddingTop={10}
      letterSpacing={1.5}
      lineHeight={1.6}
      paddingBottom={15}
      style={{ paddingBottom: 15, width: "60em" }}
    >
      {children}
    </Box>
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
    <Box fontWeight="bold" color="#751f66" lineHeight={2}>
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
      lineHeight={4}
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
    <Box letterSpacing={1.5} lineHeight={1.5} width="115em" alignSelf="center">
      {children}
    </Box>
  );
}

export function ImageBox({ children, ...props }) {
  return (
    <Box
      width="100%"
      alignSelf="center"
      display="flex"
      justifyContent="center"
      style={{ padding: 10 }}
      {...props}
    >
      {children}
    </Box>
  );
}

export function ImageRBox({ children, ...props }) {
  return (
    <Box
      width="100%"
      alignSelf="center"
      display="flex"
      justifyContent="flex-end"
      {...props}
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
      textAlign="center"
      alignSelf="center"
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

export function Summary({children, ...props}) {
  return (
    <Box
      letterSpacing={1.5}
      lineHeight={1.5}
      width="115em"
      alignSelf="center"
      m="0 0 20px 0"
      {...props}
    >
      {children}
    </Box>
  );
}
export function LayoutRBox({ image, heading, summary, second, third, fourth, ...props }) {
  return (
    <Box display="flex" justifyContent="space-evenly" paddingTop="25px">
     
        <img alt="" src={image} width="345" height="320" style={{alignSelf: "center"}} {...props} />
      

      <Box
        lineHeight={1.5}
        letterSpacing={1}
        justifyContent="space-evenly"
        display="flex"
        flexDirection="column"
        alignContent="end"
        width="50%"
      >
        <Box fontWeight="bold" lineHeight={2}>
          {heading}
        </Box>
        <Box >{summary}</Box>
        <Box>{second}</Box>
        <Box>{third}</Box>
        <Box>{fourth}</Box>
      </Box>
    </Box>
  );
}

export function LayoutBox({ heading, image, children, ...props }) {
  return (
    <Box display="flex" justifyContent="space-evenly" paddingTop="25px">
      <Box letterSpacing={1} lineHeight={1.5} alignSelf="center">
        <Box fontWeight="bold" lineHeight={1}>
          {heading}
        </Box>

        <Box display="flex" justifyContent="flex-start" >
          
          <ul style={{ listStyleType: "square" }}>{children}</ul>
        </Box>
      </Box>

      <Box alignSelf="center">
        <img alt="" src={image} width="100" height="100" {...props} />
      </Box>
    </Box>
  );
}
