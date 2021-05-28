import { Box } from "@material-ui/core";

export const Title = ({ title }) => {
  return (
    <Box
      fontSize={18}
      letterSpacing={3}
      lineHeight={3}
      textAlign="center"
      color="#494649"
      fontWeight={800}
      
    >
      {title}
    </Box>
  );
};
