import React from "react";
import { Box, Container, Grid, makeStyles } from "@material-ui/core";
import ManMag from "../../img/manmag.png";
import ThumbUp from "../../img/thumbupCheck.png";

const useStyles = makeStyles({
  imageBox: {
    width: "100%",
    alignSelf: "center",
    display: "flex",
    justifyContent: "center",
  },
  BottomImageBox: {
    width: "100%",
    alignSelf: "center",
    display: "flex",
    justifyContent: "flex-end",
  },
  image: {
    height: 250,
    width: 250,
    backgroundColor: "#49008033",
  },
  listImg: {
    width: 250,
    height: 250,
  },
  homeP: {},
});

export function ServicesHeader() {
  const classes = useStyles();

  return (
    <Container>
      <Grid xs={12}>
        <Box display="flex" justifyContent="space-between">
          <Box className={classes.imageBox}>
            <img alt="" src={ManMag} className={classes.listImg} />
          </Box>
          <Box
            fontSize={14}
            letterSpacing={2}
            lineHeight={1.8}
            width="115em"
            alignSelf="center"
          >
            <div>
              A home inspection is only as good as the inspector. That’s why IG
              Inspections LLC is your best choice for home inspections in New
              Jersey. With over 30 years experience restoring, building, and
              designing homes, whether you’re a homeowner, homebuyer, or agent
              we’ll provide you with a detailed description of a home’s
              condition so you can move forward confidently and with peace of
              mind.
            </div>
            <div>
              Count on WIN Home Inspection to provide you with the best home
              inspection service and an unbiased, comprehensive report on the
              condition of the property. Our home inspectors are always
              reliable, professional, and knowledgeable.{" "}
            </div>
          </Box>
        </Box>
        <Grid item xs={12}>
          <Box display="flex" justifyContent="space-between">
            <Box
              className={classes.homeP}
              fontSize={14}
              letterSpacing={2}
              lineHeight={2}
              width="110em"
              alignSelf="center"
            >
              Some issues are easily identified and others need a more in-depth
              and educated analysis. This is where I can help you. I will
              inspect all of the systems within your home – from roof to
              basement – to ensure that everything is in proper working order. I
              encourage you to attend, and accompany me during the inspection.
              <div>
                Feel free to ask questions as we inspect the premises together.
                I will give you a full explanation, in non-technical terms, to
                provide you with a better understanding of the systems within
                your home. You can then consider what needs to be addressed and
                budgeted for immediate attention or what can be put it on the
                to-do list.
              </div>
            </Box>
            <Box className={classes.BottomImageBox}>
              <img alt="" src={ThumbUp} className={classes.listImg} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
