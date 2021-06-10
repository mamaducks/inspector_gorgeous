import {
  Box,
  Card, Grid, makeStyles
} from "@material-ui/core";
import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import { servicesCard } from "./ServiceList";

const useStyles = makeStyles({
  list: {
    display: "flex",
    // justifyContent: "center",
    // padding: 20,
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
  gridBox: {
    display: "flex",
    justifyContent: "space-evenly",
    flexWrap: "wrap",
  },
  flipList: {
    // display: "flex",
    // justifyContent: "center",
    padding: 20,
    flexWrap: "wrap",
  },
  flipCard: {
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    flexDirection: "column",
    width: "240px",
    height: "245px",

    "& img": {
      width: 40,
      height: 40,
      // paddingBottom: 15,
    },
    flipBack: {
      width: "16rem",
      // height: "245px",
      alignItems: "center",
    justifyContent: "center",
    display: "flex",
    fontWeight:"lighter"
    },
    flipCardItem: {},
    // listGrid: {
    //   display: "flex",
    // }
  },
});

export const ServiceCard = () => {
  return (
    <>
      {/* <Grid>
        <ServiceInclude servicesOld />
      </Grid> */}
      <Grid>
        <ServiceCardGrid servicesCard={servicesCard} />
        {/* <CardDeets servicesCard /> */}
        {/* <ServiceListInclude /> */}
        {/* <Service services /> */}
      </Grid>
    </>
  );
};

// export function ServiceInclude() {
//   const classes = useStyles();

//   return (
//     <div className={classes.list}>
//       {services.map(({ text, image }) => {
//         return (
//           <div key={text} className={classes.listItem}>
//             <img alt="" src={image} />

//             <Box fontWeight="lighter">{text}</Box>
//           </div>
//         );
//       })}
//     </div>
//   );
// }

export function CardDeets({ textFront, textBack, image, ...props }) {
  const classes = useStyles();
  const [isFlipped, setIsFlipped] = useState(false);
  const onFlip = () => setIsFlipped(!isFlipped);

  return (
    <div style={{paddingBlock: "15px"}}>
      <ReactCardFlip
        isFlipped={isFlipped}
        flipDirection="vertical"
        key={textFront}
        {...props}
      >
        <Card onClick={onFlip}>
          <div key={textFront} className={classes.flipCard}>
            <img alt="" src={image} />

            <Box fontWeight="lighter">{textFront}</Box>
          </div>
        </Card>
        <Card onClick={onFlip}>
          <Box  width="16rem" padding={2} fontWeight="lighter"  textAlign="right">{textBack}</Box>
        </Card>
      </ReactCardFlip>
    </div>
  );
}

// export const Listings = () => {
//   const listings = useAllListings();

//   const { listingId } = useParams();

//   return (
//     <>
//       <div>
//         {servicesCard.map((data, key) => {
//           return (
//             <div key={key}>
//               <CardDeets key={key} {...data} />
//             </div>
//           );
//         })}
//       </div>
//     </>
//   );
// };

export const ServiceCardGrid = ({ servicesCard }) => {
  const classes = useStyles();

  console.log(servicesCard);
  return (
    <>
      <div className={classes.gridBox}>
        {/* <GridList className={classes.listGrid} > */}
        {servicesCard.map((data, index) => (
          <div key={index} className={classes.flipCardItem}>
            <CardDeets {...data} />
          </div>
        ))}
        {/* </GridList> */}
      </div>
    </>
  );
};
// return (
//   <div className={classes.list}>
//     {services.map(({ text, image }) => {
//       return (
//         <div key={text} className={classes.listItem}>
//           <img alt="" src={image}  />

//           <Box fontWeight="lighter">{text}</Box>
//         </div>
//       );
//     })}
//   </div>
// );
// }

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
