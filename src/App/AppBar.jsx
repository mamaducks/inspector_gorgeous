import { Box, Tab, Tabs, CardContent, Typography } from "@material-ui/core";
import { useMediaQuery } from "react-responsive";

import routes from "./Routes";
import { MenuButton } from "./MenuButton";
import { Social } from "../Components/Social/SocialMedia";
import { FlexBox } from "../Components/Box/AppBoxes";
import EmmaLogo from "../img/emmaLogoSmall.png";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: "flex",
    height: "120px",
  },
  logo: {
    marginRight: theme.spacing(2),
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
  },
  grow: {
    flexGrow: 1,
  },
}));

export function AppBarButton() {
  const isWide = useMediaQuery({
    query: "(min-device-width: 650px)",
  });
  const classes = useStyles();

  if (isWide) {
    return <Social color="black" className={classes.title}  />;
  }
  return (
    <div>
      <MenuButton
        color="black"
        alignSelf="flex-end"
        paddingRight="1em"
        fontSize="1.5em"
      />
    </div>
  );
}

function Logo() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
    <Box display="flex" paddingBottom="4px" justifyContent="flex-start">
      <img alt="" src={EmmaLogo} maxWidth="80%" height="auto" />
      <CardContent>
        <Typography noWrap="true" variant="h4" align="right" fontSize="1em">
          {" "}
          BUYER BEWARE{" "}
        </Typography>

        <Typography
          variant="h6"
          align="right"
          noWrap="true"
          style={{ fontWeight: "300" }}
        >
          HOME INSPECTION, LLC
        </Typography>
      </CardContent>
    </Box>
    </div>
  );
}

export function AppBarHeader() {
  const classes = useStyles();
  const isWide = useMediaQuery({
    query: "(min-device-width: 800px)",
  });
  return (
    <>
      <FlexBox margin="5px">
        <Logo />
        <div
          style={{
            alignSelf: "flex-end",
            flexGrow: "1",
          }}
        >
          <AppBarButton
            style={{
              maxWidth: "30%",
              display: "flex",
              justifyContent: "flex-end",
            }}
          />
        </div>
      </FlexBox>
      {isWide && (
        <Box style={{ backgroundColor: "#a71976", padding: "1px" }}>
          <FlexBox color="white" justifyContent="space-between">
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
          </FlexBox>
        </Box>
      )}
    </>
  );
}
