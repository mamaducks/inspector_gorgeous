
import { Box, CardContent, Typography } from "@material-ui/core";

export function Info({ Icon, info }) {
  return (
    <CardContent>
      <Box
        alignItems="center"
        display="flex"
        flexDirection="column"
        color="#a51b77"
        fontSize="2rem"
        minHeight="65px"
        justifyContent="space-between"
      >
        {Icon}
        <Typography
          color="textPrimary"
          variant="subtitle1"
          paddingTop="10px"
          paddingBottom="10px"
          gutterBottom
        >
          {info}
        </Typography>
      </Box>
    </CardContent>
  );
}
