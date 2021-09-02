import React, {useState} from 'react';
import {Box, Card, Dialog, makeStyles} from '@material-ui/core';
import {servicesCard} from './ServiceList';
import {FlexColumnBox} from '../../../App/AppBoxes';

const useStyles = makeStyles(({palette}) => ({
  card: {
    '&:hover': {
      backgroundColor: palette.secondary.light,
    },
  },
  box: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    paddingBottom: '10px',
  },
  img: {
    width: '100px',
    height: '100px',
    paddingBlock: '12px',
  },
  backFont: {
    fontWeight: 'lighter',
    letterSpacing: 1,
    textAlign: 'justify',
    fontSize: '1.1rem',
    flexWrap: 'wrap',
  },
  frontFont: {
    fontWeight: 'lighter',
    lineHeight: 4,
    fontSize: '1.1rem',
  },
}));

export function DisplayService() {
  const styles = useStyles();
  const [selected, setSelected] = useState();

  return (
    <Box className={styles.box}>
      <Dialog open={!!selected} onClose={() => setSelected(undefined)}>
        <FlexColumnBox
          justifyContent="space-between"
          padding="25px"
          width="300px"
          letterSpacing={0.3}
        >
          <img alt="" src={selected?.image} className={styles.img} />

          <Box className={styles.backFont}>{selected?.textBack}</Box>
        </FlexColumnBox>
      </Dialog>

      {servicesCard.map(({image, textBack, textFront}, index) => (
        <div key={index} title={textBack}>
          <Card
            onClick={() => setSelected({image, textBack, textFront})}
            style={{margin: '8px', cursor: 'pointer'}}
            classes={{root: styles.card}}
          >
            <FlexColumnBox justifyContent="center" width="230px" height="180px">
              <img alt="" src={image} width="50px" height="50px" />

              <Box className={styles.frontFont}>{textFront}</Box>
            </FlexColumnBox>
          </Card>
        </div>
      ))}
    </Box>
  );
}
