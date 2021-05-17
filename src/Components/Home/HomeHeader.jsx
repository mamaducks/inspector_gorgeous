import { Box, Container, Grid, makeStyles } from "@material-ui/core";
import Corner from "../../img/cornerhouse.png";
import MagList from "../../img/maglist.png";

const useStyles = makeStyles({
  imageBox: {
    width: "100%",
    alignSelf: "center",
  },
  midImageBox: {
    width: "100%",
    alignSelf: "center",
    display: "flex",
    justifyContent: "flex-end",
  },
  midImage: {
    width: 355,
    height: 355,
  },
  image: {
    height: 250,
    width: 250,
    backgroundColor: "#49008033",
    paddingRight: 25,
  },
  homeP: {},
});

export const BodyTop = () => {
  const classes = useStyles();
  return (
    <Grid item xs={12} style={{ padding: 10 }}>
      <Box display="flex" justifyContent="space-between">
        <Box className={classes.imageBox}>
          
          <img alt="" src={MagList} className={classes.midImage} />
        </Box>
        <Box
          className={classes.homeP}
          fontSize={14}
          letterSpacing={2}
          lineHeight={2}
          width="110em"
        >
          <div
            style={{
              fontWeight: "bolder",
              fontSize: "x-large",
              color: "#751f66",
              textAlign: "center",
            }}
          >
            Buyer Beware Home Inspections
          </div>
          <Box
            style={{
              fontWeight: "bold",
              color: "#751f66",
            }}
          >
            Let Us Help You Get to Know Your Home
          </Box>
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
        </Box>
      </Box>
    </Grid>
  );
};

export const BodyMiddle = () => {
  const classes = useStyles();
  return (
    <Grid item xs={12} style={{ padding: 10 }}>
      <Box display="flex" justifyContent="space-between">
        <Box
          className={classes.homeP}
          fontSize={14}
          letterSpacing={2}
          lineHeight={2}
          width="110em"
        >
          <div style={{ fontWeight: "bolder", color: "#751f66" }}>
            What’s Included In My Home Inspection?
          </div>{" "}
          <Box>
            Our New Jersey home inspection is an objective visual analysis of a
            home`s structure and mechanical systems. An inspection will
            determine the areas of the home that are not performing properly, as
            well as items that are beyond their usefull life or are unsafe.
          </Box>
          <Box>
            Your Pillar To Post inspector will examine all structures and major
            systems of a home. They will identify important factors for you to
            consider as you make your home ownership decision. Your home
            inspector is always happy to answer any questions you have during
            the inspection.
          </Box>
        </Box>
        <Box className={classes.midImageBox}>
        <img alt="" src={MagList} className={classes.midImage} />
        </Box>
      </Box>
    </Grid>
  );
};

export const BodyBottom = () => {
  const classes = useStyles();
  return (
    <Box>
      <Box
        fontSize={14}
        letterSpacing={2}
        lineHeight={3}
        color="#751f66"
        fontWeight="bold"
      >
        We offer the following specialized inspection services:
      </Box>
      <Box
        fontSize={14}
        letterSpacing={2}
        lineHeight={1.5}
        textAlign="center"
        width="87em"
      >
        <div>
          • Pre-Listing Inspection for Seller • Pre-Purchase Inspection for
          Buyer • New Construction Home Inspection • Multi-Unit Property
          Inspection {"  "}
        </div>
        <div>
          {" "}
          • Townhouse Home Inspection • Condo Inspection • During Construction
          Home Inspection • Radon Testing • Termite / WDI (Wood Destroying
          Insect)
        </div>
      </Box>
    </Box>
  );
};
export const HomeHeader = () => {
  const classes = useStyles();
  return (
    <Container style={{ padding: 20 }}>
      <Grid container>
        <BodyTop />
        <BodyMiddle />
        <BodyBottom />
      </Grid>
    </Container>
  );
};
