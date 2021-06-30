import { servicesCard } from "./ServiceList";
import {
  ServiceGrid,
  ServiceCard,
  ServiceDialog,
} from "../../../Components/Box/AppBoxes";
import React, { useState } from "react";
import { Box, Card, Dialog } from "@material-ui/core";

export function DisplayService() {
  const [selected, setSelected] = useState();

  return (
    <ServiceGrid>
      <Dialog open={!!selected} onClose={() => setSelected(undefined)}>
        <ServiceDialog>
          <img alt="" src={selected?.image} width="120px" height="120px" />

          <Card>{selected?.textBack}</Card>
        </ServiceDialog>
      </Dialog>

      {servicesCard.map(({ image, textBack, textFront }, index) => (
        <div key={index} title={textBack}>
          <Card onClick={() => setSelected({ image, textBack, textFront })}>
            <ServiceCard>
              <img alt="" src={image} width="50px" height="50px" />

              <Box fontWeight="lighter">{textFront}</Box>
            </ServiceCard>
          </Card>
        </div>
      ))}
    </ServiceGrid>
  );
}
