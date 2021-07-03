import { Box } from "@material-ui/core";

export function Days({ children }) {
  return (
    <Box fontWeight="bold" style={{ paddingInline: "10px" }}>
      {children}
    </Box>
  );
}

export function ContactBox({ children, ...props }) {
  return (
    <Box
      textAlign="center"
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
        {Icon}
      </Box>
      <Box color="#32474b" textAlign="center" letterSpacing={1}>
        {info}
      </Box>
    </Box>
  );
}
