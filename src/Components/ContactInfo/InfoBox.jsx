import { Box } from "@material-ui/core";

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
