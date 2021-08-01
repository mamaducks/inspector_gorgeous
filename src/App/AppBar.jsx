import { Box, Tab, Tabs, CardContent, Typography } from "@material-ui/core";
import { useMediaQuery } from "react-responsive";

import routes from "./Routes";
import { MenuButton } from "./MenuButton";
import { Social } from "../Components/Social/SocialMedia";
import EmmaLogo from "../img/emmaLogoSmall.png";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    //flexGrow: 1,
    display: "flex",
  },
  image: {
    // width: "25%",
    height: "auto",
    maxWidth: "120px",
  },
  toolbar: {
    minHeight: 128,
    alignItems: "flex-start",
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    alignSelf: "flex-end",
    fontSize: "2em",
    paddingRight: theme.spacing(2),
    "& > a": {
      marginLeft: theme.spacing(2),
    },
  },
  grow: {
    flexGrow: 1,
  },
  text: {
    fontSize: "clamp(1rem, 2.5vw, 2rem)",
  },
}));

export function AppBarButton() {
  const isWide = useMediaQuery({
    query: "(min-width: 48rem)",
  });
  const classes = useStyles();

  if (isWide) {
    return <Social color="black" className={classes.title} />;
  }

  return <MenuButton  />;
}

export function AppBarHeader() {
  const classes = useStyles();
  const isWide = useMediaQuery({
    query: "(min-width: 48rem)",
  });

  return (
    <>
      <Box margin="5px" display="flex" height="120px">
        <Box display="flex" flexGrow="1">
          <img alt="" src={EmmaLogo} height="107px" className={classes.image} />

          <CardContent>
            <Typography
              variant="h4"
              align="right"
              noWrap="true"
              style={{fontSize: "1.9rem", lineHeight: "1.2"}}
            >
              {" "}
              BUYER BEWARE
            </Typography>

            <Typography
              variant="h6"
              align="right"
              style={{ fontWeight: "300" }}
            >
              HOME INSPECTION, LLC
            </Typography>
          </CardContent>
        </Box>

        
        <div
           style={{
            display: "flex",
            justifyContent: "flex-end",
            alignSelf: "flex-end"
          }}>
          <AppBarButton
            style={{
              maxWidth: "30%",
              display: "flex",
              justifyContent: "flex-end",
            }}
          />
          </div>
      </Box>

      {isWide && (
        <Box style={{ backgroundColor: "#a71976", padding: "1px" }}>
          <Box display="flex" color="white" justifyContent="space-between">
            <Tabs value={window.location.pathname} variant="scrollable">
              {Object.values(routes).map(({ link, label }) => (
                <Tab
                  key={link}
                  label={label}
                  href={link}
                  component="a"
                  value={link}
                />
              ))}
            </Tabs>
          </Box>
        </Box>
      )}
    </>
  );
}
