import Icon from "@iconify/react";
import {
  makeStyles,
  Box,
  Grid,
  GridList,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import React from "react";
import { services } from "./ServiceList";

const ITEMS_PER_ROW = 4;

const useStyles = makeStyles({
  list: {
    display: "flex",
    justifyContent: "center",
    padding: 20,
    flexWrap: "wrap",
  },
  listItem: {
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    flexDirection: "column",
    width: "215px",
    marginBottom: 20,
    padding: 8,
    "& img": {
      width: 50,
      height: 50,
      paddingBottom: 15,
    },
  },
  newList: {
    display: "flex",
  },
});

export const ServiceCard = () => {
  return (
    <>
      <Grid>
        <ServiceInclude servicesOld />
      </Grid>
      <Grid>{/* <Service services /> */}</Grid>
    </>
  );
};

export function ServiceInclude() {
  const classes = useStyles();

  return (
    <div className={classes.list}>
      {services.map(({ text, image }) => {
        return (
          <div key={text} className={classes.listItem}>
            <img alt="" src={image}  />
            
            <Box fontWeight="lighter">{text}</Box>
          </div>
        );
      })}
    </div>
  );
}

// export function Service() {
//   const classes = useStyles();
//   const [dense, setDense] = React.useState(false);

//   return (
//     <div>
//       {services.map(({ text, image, Icon }) => {
//         return (

//           <div >
//             <List dense={dense}>

//                   <ListItem>
//                   <img alt="" src={image} width="50px" height="50px" marginRight="20px"/>
//                   <Box fontSize="larger" fontWeight="lighter" color="#b23a87">
//               {text}
//             </Box>
//                   </ListItem>

//             </List>
//           </div>
//         );

//       })}
//     </div>
//   );
// }

// export function BdService() {

// }
