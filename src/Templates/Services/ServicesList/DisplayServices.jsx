import { servicesCard } from "./ServiceList";
import {
  ServiceGrid,
  ServiceCard,
  ServiceDialog,
  DivBox
} from "../../../Components/Box/AppBoxes";
import React, { useState } from "react";
import { Box, Card, Dialog } from "@material-ui/core";

export function DisplayService() {
  const [selected, setSelected] = useState();

  return (
    <ServiceGrid>
      <Dialog open={!!selected} onClose={() => setSelected(undefined)}>
        <ServiceDialog>
          <img alt="" src={selected?.image} width="120px" height="120px" style={{paddingBlock:"12px"}} />

          <DivBox textAlign="justify">{selected?.textBack}</DivBox>
        </ServiceDialog>
      </Dialog>

      {servicesCard.map(({ image, textBack, textFront }, index) => (
        <div key={index} title={textBack}>
          <Card onClick={() => setSelected({ image, textBack, textFront })} style={{margin: "8px", cursor:"pointer"}}>
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
