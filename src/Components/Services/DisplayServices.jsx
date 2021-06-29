import { servicesCard } from "../Services/ServiceList";

import React, { useState } from "react";
import { Box, Card, Dialog, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  flipCard: {
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    flexDirection: "column",
    width: "230px",
    height: "180px",
    fontSize: "14px",

    "& img": {
      width: 50,
      height: 50,
    },
  },
});

export function DisplayService() {
  const classes = useStyles();
  const [selected, setSelected] = useState();

  return (
    <>
      <Box display="flex" justifyContent="center" flexWrap="wrap">
        <Dialog open={!!selected} onClose={() => setSelected(undefined)}>
          <Box display="flex" justifyContent="space-between" paddingTop="25px">
            <Box alignSelf="center" width="300px">
              <img alt="" src={selected?.image} width="305" height="259" />

              <Box>
                <Card>{selected?.textBack}</Card>
              </Box>
            </Box>
          </Box>
        </Dialog>

        {servicesCard.map(({ image, textBack, textFront }, index) => (
          <div key={index} title={textBack}>
            <Card onClick={() => setSelected({ image, textBack, textFront })}>
              <div className={classes.flipCard}>
                <img alt="" src={image} />

                <Box fontWeight="lighter">{textFront}</Box>
              </div>
            </Card>
          </div>
        ))}
      </Box>
    </>
  );
}
