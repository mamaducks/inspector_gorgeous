import { Box, CardContent, Divider, Typography } from "@material-ui/core";
import { useMediaQuery } from "react-responsive";

export function LayoutBox({
  children,
  image,
  heading,
  summary,
  reverse,
  ...props
}) {
  const isWide = useMediaQuery({
    query: "(min-device-width: 600px)",
  });

  return (
    <Box
      display="flex"
      flexDirection={!!reverse ? "row-reverse" : "row"}
      justifyContent="space-evenly"
      alignContent="space-between"
      margin="25px 0"
      alignItems="center"
    >
      {isWide && (
        <img
          alt=""
          src={image}
          maxWidth="80%"
          width="60%"
          height="auto"
          style={{ alignSelf: "center", paddingBlock: "10px" }}
          {...props}
        />
      )}
      <div>{children}</div>
    </Box>
  );
}

export function MainContent({ heading, children, ...props }) {
  return (
    <CardContent {...props}>
      <Typography color="textPrimary" variant="h5" gutterBottom>
        {heading}
      </Typography>
      <Divider style={{ margin: "10px 0" }} />

      <Typography variant="subtitle1" component="p">
        {children}
      </Typography>
    </CardContent>
  );
}
