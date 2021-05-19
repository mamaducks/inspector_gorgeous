import { Box, Grid, makeStyles } from "@material-ui/core";
import Corner from "../../img/cornerhouse.png";
import MagList from "../../img/maglist.png";
import GuyCheck from "../../img/guycheck.png";
import CheckBox from "../../img/checkedbox.png";
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
  ImageBox,
  ImageRBox,
} from "../Box/MyBox";

const useStyles = makeStyles({
  
  midImage: {
    width: 355,
    height: 355,
  },
  checkImage: {
    width: 100,
    height: 100,
  },
});

export const BodyTop = () => {
  const classes = useStyles();
  return (
    <Grid item xs={12} style={{ padding: 10 }}>
      <Box display="flex" justifyContent="space-between">
        <ImageBox>
          <img alt="" src={MagList} className={classes.midImage} />
        </ImageBox>
        {/* <Box
          className={classes.homeP}
          fontSize={15}
          letterSpacing={2}
          lineHeight={1.7}
          width="110em"
        > */}
        <MyBox>
          <MainTitleBox>Buyer Beware Home Inspections</MainTitleBox>
          <HeaderBox>Let Us Help You Get to Know Your Home</HeaderBox>
          <Box>
            At Safeway Home Inspections, we fully understand the importance of a
            thorough home inspection, and that’s why we work so hard to offer
            you the very best. Let the professionals at Safeway Home
            Inspections, LLC, provide an unbiased, comprehensive, visual
            inspection of your entire home and property. Walk through the home
            with us on inspection day, and learn about the home’s features, as
            well as tips for care and maintenance. We take the time to find the
            smallest details and issues and answer all your questions. With over
            20 years of home inspection, construction, and carpentry experience
            under our belts, we have the experience and knowledge needed to help
            you get to know your new home.
          </Box>
        </MyBox>
      </Box>
    </Grid>
  );
};

export const BodyMiddle = () => {
  const classes = useStyles();
  return (
    <Grid item xs={12} style={{ padding: 10 }}>
      <DisplayBox>
        <ImageRBox>
          <img alt="" src={GuyCheck} className={classes.midImage} />
        </ImageRBox>
        <ContentBox>
          <HeaderBox>What’s Included In My Home Inspection?</HeaderBox>
          <ContentRBox>
            Our New Jersey home inspection is an objective visual analysis of a
            home`s structure and mechanical systems. An inspection will
            determine the areas of the home that are not performing properly, as
            well as items that are beyond their usefull life or are unsafe.
            <Box>
              Your Pillar To Post inspector will examine all structures and
              major systems of a home. They will identify important factors for
              you to consider as you make your home ownership decision. Your
              home inspector is always happy to answer any questions you have
              during the inspection.
            </Box>
          </ContentRBox>
        </ContentBox>
      </DisplayBox>
    </Grid>
  );
};

export const BodyBottom = () => {
  const classes = useStyles();
  return (
    <Box style={{ padding: 10 }}>
      <DisplayBox>
        <div>
          <MyContentBox>
            <MyMainTitleBox>
              We offer the following specialized inspection services:
            </MyMainTitleBox>
            <ListBox>
              • Pre-Listing Inspection for Seller • Pre-Purchase Inspection for
              Buyer • During Construction Home Inspection • New Construction
              Home Inspection • Multi-Unit Property Inspection • Townhouse Home
              Inspection • Condo Inspection • Radon Testing • Termite / WDI
              (Wood Destroying Insect)
            </ListBox>
          </MyContentBox>
        </div>
        <Box >
          <img alt="" src={CheckBox} className={classes.checkImage} />
        </Box>
      </DisplayBox>
    </Box>
  );
};
