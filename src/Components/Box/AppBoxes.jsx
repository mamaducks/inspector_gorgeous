import { Box, Divider } from "@material-ui/core";

export function PadBox({ children, ...props }) {
  return (
    <Box p={10} style={{ padding: 10 }} {...props}>
      {children}
    </Box>
  );
}
export function LayoutBox({
  children,
  image,
  heading,
  summary,
  second,
  third,
  fourth,
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

export function InfoBox({ Icon, children, ...props }) {
  return (
    <Box padding="10px" paddingBottom="24px" {...props}>
      <Box
        alignItems="center"
        display="flex"
        flexDirection="column"
        color="#a51b77"
        paddingBottom="8px"
      >
        <img alt="" src={Icon} width="45px" height="45px" />
      </Box>
      {children}
    </Box>
  );
}
