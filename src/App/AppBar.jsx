import {
  Box,
  Tab,
  Tabs,
  CardContent,
  Typography,
  Paper,
} from "@material-ui/core";
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
    // height: "120px",
  },
  // logo: {
  //   marginRight: theme.spacing(2),
  // },
  image: {
    width: "25%",
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
    fontSize: "2em"
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
    query: "(min-device-width: 650px)",
  });
  const classes = useStyles();

  if (isWide) {
    return <Social color="black" className={classes.title} />;
  }
  return (
    <div>
      <MenuButton
        alignSelf="flex-end"
        paddingRight="1em"
        fontSize="1.8em"
      />
    </div>
  );
}

// function Logo() {
//   const classes = useStyles();
//   return (
//     <div className={classes.root}>
//       <Box display="flex">
//         <img
//           alt=""
//           src={EmmaLogo}
//           maxWidth="95%"
//           height="auto"
//           className={classes.image}
//         />
//         <CardContent>
//           {/* <Typography noWrap="true" variant="h4" align="right" fontSize="clamp(1rem, 2.5vw, 2rem)">
//           {" "}
//           BUYER BEWARE{" "}
//         </Typography> */}

//           <Typography
//             noWrap="true"
//             variant="h4"
//             align="right"
//             fontSize="1.2rem"
//           >
//             {" "}
//             BUYER BEWARE{" "}
//           </Typography>

//           <Typography
//             variant="h6"
//             align="right"
//             noWrap="true"
//             style={{ fontWeight: "300" }}
//           >
//             HOME INSPECTION, LLC
//           </Typography>
//         </CardContent>
//       </Box>
//     </div>
//   );
// }

export function AppBarHeaderCopy() {
  const classes = useStyles();
  const isWide = useMediaQuery({
    query: "(min-device-width: 800px)",
  });
  return (
    <>
      <Box margin="5px" display="flex" height="120px">
        <Box display="flex" flexGrow="1">
          <img alt="" src={EmmaLogo} height="auto" className={classes.image} />

          <CardContent>
            {/* <Typography noWrap="true" variant="h4" align="right" fontSize="clamp(1rem, 2.5vw, 2rem)">
          {" "}
          BUYER BEWARE{" "}
        </Typography> */}

            <Typography
              noWrap="true"
              variant="h4"
              align="right"
              fontSize="1.2rem"
            >
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
      </Box>
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

// export function AppBarHeader() {
//   const classes = useStyles();
//   const isWide = useMediaQuery({
//     query: "(min-device-width: 800px)",
//   });
//   return (
//     <>
//       <FlexBox margin="5px">
//         <Logo />
//         <div
//           style={{
//             alignSelf: "flex-end",
//             flexGrow: "1",
//           }}
//         >
//           <AppBarButton
//             style={{
//               maxWidth: "30%",
//               display: "flex",
//               justifyContent: "flex-end",
//             }}
//           />
//         </div>
//       </FlexBox>
//       {isWide && (
//         <Box style={{ backgroundColor: "#a71976", padding: "1px" }}>
//           <FlexBox color="white" justifyContent="space-between">
//             <Tabs value={window.location.pathname} variant="scrollable">
//               {Object.values(routes).map(({ link, label }) => (
//                 <Tab
//                   key={link}
//                   label={label}
//                   href={link}
//                   component="a"
//                   value={link}
//                 />
//               ))}
//             </Tabs>
//           </FlexBox>
//         </Box>
//       )}
//     </>
//   );
// }
