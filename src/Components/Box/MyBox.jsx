import { Box, Grid } from "@material-ui/core";

// const MyStyles = {
//   Flex: { display: "flex" },
//   Center: { display: "flex", justifyContent: "center" },
//   DisplayEven: {
//     display: "flex",
//     justifyContent: "space-evenly",
//   },
// };

// function GG() {
//   return (
//     <Box {...MyStyles.Flex} {...MyStyles.Center}>
//       ff
//     </Box>
//   );
// }

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

// export function DisplayBox({ children }) {
//   return (
//     <Box display="flex" justifyContent="space-between">
//       {children}
//     </Box>
//   );
// }

// export function DisplayEvenBox({ children }) {
//   return (
//     <Box display="flex" justifyContent="space-evenly">
//       {children}
//     </Box>
//   );
// }

// export function DisplayCenterBox({ children }) {
//   return (
//     <Box display="flex" justifyContent="center" alignItems="center">
//       {children}
//     </Box>
//   );
// }
export function MyFlexBox({ children }) {
  return <Box display="flex">{children}</Box>;
}

export function PadBox({ children, ...props }) {
  return (
    <Box p={10} style={{ padding: 10 }} {...props}>
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

export function ContactSocialBox({ children }) {
  return (
    <Box letterSpacing={1} lineHeight={2} style={{ paddingBlock: "20px" }}>
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

export function MyQuoteBox({ children }) {
  return (
    <PadBox>
      <Box letterSpacing={1} lineHeight={1.4} textAlign="center">
        {children}
      </Box>
    </PadBox>
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
      lineHeight={1.4}
      letterSpacing={1}
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

export function Summary({ children, ...props }) {
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

export function HeadingBox({ heading, ...props }) {
  return (
    <Box fontWeight="300" lineHeight={3} fontSize="larger" {...props}>
      {heading}
    </Box>
  );
}

export function OuterLayout({ image, children, ...props }) {
  return (
    <Box display="flex" justifyContent="space-evenly" paddingTop="25px">
      <img alt="" src={image} style={{ alignSelf: "center" }} {...props} />
      {children}
    </Box>
  );
}

export function InnerContent({ heading, summary, ...props }) {
  return (
    <Box
      lineHeight={1.5}
      letterSpacing={1}
      justifyContent="space-evenly"
      display="flex"
      flexDirection="column"
      alignContent="end"
      width="33rem"
      {...props}
    >
      {heading}

      <Box>{summary}</Box>
    </Box>
  );
}

export function LayoutRBox({
  image,
  heading,
  summary,
  second,
  third,
  fourth,
  ...props
}) {
  return (
    <Box
      display="flex"
      justifyContent="space-evenly"
      alignContent="space-between"
      paddingTop="25px"
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
        <Box lineHeight={2} fontSize="17px">
          {heading}
        </Box>

        <Box fontSize="16px">
          <div>{summary}</div>
          <div>{second}</div>
          <div>{third}</div>
          <div>{fourth}</div>
        </Box>
      </Box>
    </Box>
  );
}

export function LayoutRightBox({
  image,
  heading,
  summary,
  second,
  third,
  fourth,
  ...props
}) {
  return (
    <Box
      display="flex"
      justifyContent="space-evenly"
      alignContent="space-between"
      paddingTop="25px"
    >
      <Box style={{ alignSelf: "center" }}> {image}</Box>
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
        <Box lineHeight={2} fontSize="17px">
          {heading}
        </Box>

        <Box fontSize="16px">
          <div>{summary}</div>
          <div>{second}</div>
          <div>{third}</div>
          <div>{fourth}</div>
        </Box>
      </Box>
    </Box>
  );
}

export function LayoutLBox({
  image,
  heading,
  summary,
  second,
  third,
  fourth,
  ...props
}) {
  return (
    <Box
      display="flex"
      justifyContent="space-evenly"
      alignContent="space-between"
      paddingTop="25px"
    >
      <Box
        lineHeight={1.5}
        letterSpacing={1}
        justifyContent="space-evenly"
        display="flex"
        flexDirection="column"
        alignContent="end"
        width="33rem"
        fontWeight="lighter"
      >
        <Box lineHeight={2} fontSize="17px">
          {heading}
        </Box>

        <Box fontSize="16px">
          <div>{summary}</div>
          <div>{second}</div>
          <div>{third}</div>
          <div>{fourth}</div>
        </Box>
      </Box>
      <img alt="" src={image} style={{ alignSelf: "center" }} {...props} />
    </Box>
  );
}

export function ListLayoutBox({ heading, image, button, children, ...props }) {
  return (
    <Box display="flex" justifyContent="space-evenly" paddingTop="25px">
      <Box letterSpacing={1} lineHeight={1.5} alignSelf="flex-end">
        <Box fontWeight="lighter" fontSize="16px" lineHeight={1.5}>
          {heading}
        </Box>

        <Box display="flex" justifyContent="flex-start">
          <ul style={{ listStyleType: "square", fontWeight: "300" }}>
            {children}
          </ul>
        </Box>
        {button}
      </Box>

      <Box alignSelf="center">
        <img alt="" src={image} width="100" height="100" {...props} />
      </Box>
    </Box>
  );
}

export function ListLayoutRBox({ heading, image, button, children, ...props }) {
  return (
    <Box display="flex" justifyContent="space-evenly" paddingTop="25px">
      <Box alignSelf="center">
        <img alt="" src={image} width="100" height="100" {...props} />
      </Box>

      <Box letterSpacing={1} lineHeight={1.5} alignSelf="flex-end">
        <Box fontWeight="lighter" fontSize="16px" lineHeight={1.5}>
          {heading}
        </Box>

        <Box display="flex" justifyContent="flex-start">
          <ul style={{ listStyleType: "square", fontWeight: "300" }}>
            {children}
          </ul>
        </Box>
        
        {button}
      </Box>
    </Box>
  );
}

export function LayoutBox({ heading, image, button, children, ...props }) {
  return (
    <Box display="flex" justifyContent="space-evenly" paddingTop="25px">
      <Box letterSpacing={1} lineHeight={1.5} alignSelf="flex-end">
        <Box fontWeight="lighter" fontSize="16px" lineHeight={1.5}>
          {heading}
        </Box>

        <Box display="flex" justifyContent="flex-start">
          <ul style={{ listStyleType: "square", fontWeight: "300" }}>
            {children}
          </ul>
        </Box>
        {button}
      </Box>

      <Box alignSelf="center">
        <img alt="" src={image} width="100" height="100" {...props} />
      </Box>
    </Box>
  );
}
