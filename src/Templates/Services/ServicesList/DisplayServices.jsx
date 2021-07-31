import React, { useState } from "react";
import { Box, Card, Dialog, makeStyles } from "@material-ui/core";
import { servicesCard } from "./ServiceList";

const useStyles = makeStyles(({ palette }) => ({
  card: {
    "&:hover": {
      backgroundColor: palette.secondary.light,
    },
  },

}));
export function DisplayService() {
  const styles = useStyles();
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

          <Box
            textAlign="justify"
            flexWrap="wrap"
            style={{
              fontWeight: "lighter",
              letterSpacing: 1,
              textAlign: "center",
              fontSize: "1.1rem",
            }}
          >
            {selected?.textBack}
          </Box>
        </Box>
      </Dialog>

      {servicesCard.map(({ image, textBack, textFront }, index) => (
        <div key={index} title={textBack}>
          <Card
            onClick={() => setSelected({ image, textBack, textFront })}
            style={{ margin: "8px", cursor: "pointer" }}
            classes={{ root: styles.card }}
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

              <Box fontWeight="lighter" lineHeight={4} fontSize="1.1rem">
                {textFront}
              </Box>
            </Box>
          </Card>
        </div>
      ))}
    </Box>
  );
}
