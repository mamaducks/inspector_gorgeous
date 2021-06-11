import { Box } from "@material-ui/core";

export function Info({ info, ...props }) {
    return (
      <Box color="#32474b" textAlign="center" fontSize="16px">
        {info}
      </Box>
    );
  }