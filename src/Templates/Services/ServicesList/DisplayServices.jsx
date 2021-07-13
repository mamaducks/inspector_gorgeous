import React, { useState } from "react";
import { Box, Card, Dialog } from "@material-ui/core";
import { servicesCard } from "./ServiceList";
import { DivBox } from "../../../Components/Box/AppBoxes";

export function DisplayService() {
  const [selected, setSelected] = useState();

  return (
    <Box
      display="flex"
      justifyContent="center"
      flexWrap="wrap"
      style={{ paddingBlock: "10px" }}
    >
      <Dialog open={!!selected} onClose={() => setSelected(undefined)}>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          alignItems="center"
          padding="25px"
          width="300px"
          letterSpacing={0.3}
        >
          <img
            alt=""
            src={selected?.image}
            width="120px"
            height="120px"
            style={{ paddingBlock: "12px" }}
          />

          <DivBox textAlign="justify" flexWrap="wrap" fontSize="1rem">
            {selected?.textBack}
          </DivBox>
        </Box>
      </Dialog>

      {servicesCard.map(({ image, textBack, textFront }, index) => (
        <div key={index} title={textBack}>
          <Card
            onClick={() => setSelected({ image, textBack, textFront })}
            style={{ margin: "8px", cursor: "pointer" }}
          >
            <Box
              alignItems="center"
              justifyContent="center"
              display="flex"
              flexDirection="column"
              width="230px"
              height="180px"
            >
              <img alt="" src={image} width="50px" height="50px" />

              <Box fontWeight="lighter" lineHeight={4} fontSize="1rem">
                {textFront}
              </Box>
            </Box>
          </Card>
        </div>
      ))}
    </Box>
  );
}
