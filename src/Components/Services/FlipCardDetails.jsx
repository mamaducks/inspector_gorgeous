import { Box, Card, makeStyles } from "@material-ui/core";
import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";

const useStyles = makeStyles({
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
    },
  },
});

export function FlipCardDetails({ textFront, textBack, image, ...props }) {
  const classes = useStyles();
  const [isFlipped, setIsFlipped] = useState(false);
  const onFlip = () => setIsFlipped(!isFlipped);

  return (
    <div style={{ paddingBlock: "15px" }}>
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
          <Box width="16rem" padding={2} fontWeight="lighter" textAlign="right">
            {textBack}
          </Box>
        </Card>
      </ReactCardFlip>
    </div>
  );
}
