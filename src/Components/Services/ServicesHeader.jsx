import React from "react";
import {
  Box,
  Container,
  Card,
  CardActionArea,
  Grid,
  makeStyles,
} from "@material-ui/core";
import ManMag from "../../img/manmag.png";
import ThumbUp from "../../img/guythumbup.png";
import {
  MyBox,
  HeaderBox,
  MainTitleBox,
  ContentRBox,
  ContentBox,
  DisplayBox,
  MyContentBox,
  MyMainTitleBox,
  ListBox,
  MyContent,
  ImageBox,
  ImageRBox,
} from "../Box/MyBox";

import { newServices } from "./ServiceList";
import {INSPECT_TYPE} from "../Services/Services";

const ITEMS_PER_ROW = 4;



const useStyles = makeStyles({
  root: {
    padding: 10,
    alignItems: "center",
    display: "flex",
    justifyContent: "flex-end",
    flexDirection: "column",
  },
  list: {
    display: "flex",
    justifyContent: "space-evenly",
    padding: 24,
    flexWrap: "wrap",
  },
  listItem: {
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    flexDirection: "column",
    width: "25%",
    padding: 1,
  },
  listImg: {
    width: 55,
    height: 55,
    paddingBottom: 15,
  },

  image: {
    height: 250,
    width: 250,
    backgroundColor: "#49008033",
  },
  listImg: {
    width: 188,
    height: 165,
  },
});

export function ServicesHeader() {
  const classes = useStyles();

  return (
    <Container>
      <Grid xs={12}>
        <Grid item xs={12}>
          <DisplayBox>
            <ImageBox>
              <img alt="" src={ManMag} className={classes.image} />
            </ImageBox>

            <Box
              letterSpacing={1.5}
              lineHeight={1.5}
              width="115em"
              alignSelf="center"
            >
              <Box
                color="rgb(117, 31, 102)"
                textAlign="center"
                fontSize="larger"
                lineHeight={3}
                letterSpacing={1}
              >
                content header
              </Box>
              <div>
                {" "}
                A home inspection is only as good as the inspector. That’s why
                IG Inspections LLC is your best choice for home inspections in
                New Jersey. With over 30 years experience restoring, building,
                and designing homes Buyer Beware is the top choice in south
                jersey for your home inspection services. Whether you’re a
                homeowner, homebuyer, or agent we’ll provide you with a detailed
                description of a home’s condition so you can move forward
                confidently and with peace of mind.
              </div>
              Our inspections give you detailed report so you have the comfort
              and knowledge to make informed decisions about your home. Some
              issues are easily identified and others need a more in-depth and
              educated analysis. We will inspect all of the systems within your
              home – from roof to basement – to ensure that everything is in
              proper working order. I encourage you to attend, and accompany me
              during the inspection.
              <div>
                Feel free to ask questions as we inspect the premises together.
                I will give you a full explanation, in non-technical terms, to
                provide you with a better understanding of the systems within
                your home. You can then consider what needs to be addressed and
                budgeted for immediate attention or what can be put it on the
                to-do list.
              </div>
              <div>
                Your detailed Buyer Beware Inspection Report will be done by a
                highly trained home inspector with details about your homes
                condition, images and recommendations, delivered within 24 hours
                (next business day) – often the same day
              </div>
            </Box>
          </DisplayBox>
        </Grid>
        <Grid>
          <DisplayBox>
            <Box className={classes.root}>
              <Box
                letterSpacing={1}
                lineHeight={1.5}
                // textAlign="center"
                width="58em"
                // color="#751f66"
                fontSize={17}
                paddingBottom="12px"
              >
                <ul>
                  {INSPECT_TYPE.map((service) => (
                    <li key={service}>{service}</li>
                  ))}
                </ul>
              </Box>
              <Box fontWeight="bold">Our Full Service Inspections include</Box>
            </Box>

            <ImageBox>
              <img
                alt=""
                src={ThumbUp}
                width="177"
                height="161"
                className={classes.listImg}
              />
            </ImageBox>
          </DisplayBox>
          {/* <CardActionArea>
          <NewServiceListing newServices />
        </CardActionArea> */}
        </Grid>
      </Grid>
    </Container>
  );
}

export function NewServiceListing() {
  const classes = useStyles();
  return (
    <div className={classes.list}>
      {newServices.map(({ text, title }) => {
        return (
          <div key={text} className={classes.listItem}>
            <div key={title} className={classes.listImg} />
            <Box fontSize="larger" color="#b23a87">
              {title}
            </Box>
            <h4 style={{ fontWeight: "lighter" }}>{text}</h4>
          </div>
        );
      })}
    </div>
  );
}
