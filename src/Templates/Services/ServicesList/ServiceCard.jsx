import React, { useState } from "react";

import {
  Box,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Dialog,
  Typography,
} from "@material-ui/core";
import { servicesCard } from "./ServiceList";
import { DivBox } from "../../../Components/Box/AppBoxes";

export function ServiceCard() {
  const [selected, setSelected] = useState();

  return (
    <>
      <Box
        display="flex"
        justifyContent="center"
        flexWrap="wrap"
        style={{ paddingBlock: "10px" }}
      >
        <Dialog open={!!selected} onClose={() => setSelected(undefined)}>
          <Card
            // display="flex"
            // flexDirection="column"
            // justifyContent="space-between"
            // alignItems="center"
            style={{ padding: "20px" }}
            // width="300px"
            // letterSpacing={0.3}
          >
            <CardMedia style={{ display: "flex", justifyContent: "center" }}>
              <img
                alt=""
                src={selected?.image}
                width="120px"
                height="120px"
                align="center"
                justifyContent="center"
                style={{ paddingBlock: "12px", textAlign: "center" }}
              />
            </CardMedia>

            <CardContent>
              <Typography
                align="justify"
                style={{ fontWeight: "300" }}
                // variant="body1"
                // component="p"
                variant="overline"
                display="block"
              >
                >{selected?.textBack}
              </Typography>
            </CardContent>
          </Card>
        </Dialog>
        {servicesCard.map(({ image, textBack, textFront }, index) => (
          <div key={index} title={textBack}>
            <Card
              onClick={() => setSelected({ image, textBack, textFront })}
              style={{
                margin: "8px",
                cursor: "pointer",
                width: "230px",
                height: "180px",
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <img alt="" src={image} width="50px" height="50px" />

              <Typography
                style={{ fontWeight: "300", lineHeight: "4" }}
                fontSize="1rem"
                variant="body1"
              >
                {textFront}
              </Typography>
            </Card>
          </div>
        ))}
      </Box>
    </>
  );
}
