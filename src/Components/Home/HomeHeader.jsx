import { Box, Container, Grid, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  imageBox: {
    paddingRight: 25,
    justifyContent: "space-between",
    width: "100%",
  },
  image: {
    height: 250,
    width: 250,
    backgroundColor: "#49008033",
    paddingRight: 25,
  },
  homeP: {},
});
export const HomeHeader = () => {
  const classes = useStyles();
  return (
    <Container style={{ padding: 20 }}>
      <Grid container>
        <Grid item xs={12}>
          <Box display="flex" justifyContent="space-between">
            <Box className={classes.imageBox}>
              <div className={classes.image}>A picture of you</div>
            </Box>
            <Box>
              <Box
                fontFamily="Helvetica"
                fontSize={14}
                letterSpacing={2}
                lineHeight={2.3}
                textAlign="center"
                color="#095565"
              >
                <div style={{ fontWeight: "bolder", fontSize: "larger" }}>
                  Buyer Beware Home Inspections
                </div>
                <div style={{ fontWeight: "bold" }}>
                  We offer the following specialized inspection services:
                </div>
                <div>
                  • Pre-Listing Inspection for Seller • Pre-Purchase Inspection
                  for Buyer New Construction Home Inspection • Multi-Unit
                  Property Inspection • Townhouse Home Inspection• • Condo
                  Inspection • During Construction Home Inspection • Radon
                  Testing • Termite / WDI (Wood Destroying Insect)
                </div>
                <div>
                  Other Inspection Services: Oil Tank Sweeps / Inspection
                  Swimming pool Mold Septic Well water testing Home Energy
                  Reports
                </div>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box
            className={classes.homeP}
            fontFamily="Helvetica"
            fontSize={14}
            letterSpacing={2}
            lineHeight={2.3}
            textAlign="center"
            color="#095565"
          >
            Let Us Help You Get to Know Your Home — At Safeway Home Inspections,
            we fully understand the importance of a thorough home inspection,
            and that’s why we work so hard to offer you the very best. Let the
            professionals at Safeway Home Inspections, LLC, provide an unbiased,
            comprehensive, visual inspection of your entire home and property.
            Walk through the home with us on inspection day, and learn about the
            home’s features, as well as tips for care and maintenance. We take
            the time to find the smallest details and issues and answer all your
            questions. With over 20 years of home inspection, construction, and
            carpentry experience under our belts, we have the experience and
            knowledge needed to help you get to know your new home.
          </Box>
          <Box>
            The whole house inspection we perform for you will be of the most
            complete and in-depth available in the Home Inspection Industry
            today. Our New Jersey home inspection is an objective visual
            analysis of a home`s structure and mechanical systems. An inspection
            will determine the areas of the home that are not performing
            properly, as well as items that are beyond their usefull life or are
            unsafe.
          </Box>
          <Box
            fontFamily="Helvetica"
            fontSize={14}
            letterSpacing={2}
            lineHeight={2.3}
            textAlign="center"
            color="#095565"
          >
            What’s Included In My Home Inspection? Your Pillar To Post inspector
            will examine all structures and major systems of a home. They will
            identify important factors for you to consider as you make your home
            ownership decision. Your home inspector is always happy to answer
            any questions you have during the inspection.
          </Box>
        </Grid>
        <Box>
          Home Inspection Saint David Dr Mt Laurel Township, NJ 08054 Monday8:00
          am - 7:00 pm Tuesday8:00 am - 7:00 pm Wednesday8:00 am - 7:00 pm
          Thursday8:00 am - 7:00 pm Friday8:00 am - 7:00 pm Saturday9:00 am -
          5:00 pm SundayClosed
        </Box>
        <Box>
          We love hearing from you anytime! Call or email us if you have any
          questions or use our online scheduler to set up a home inspection.
          Available 7 days a week Earning your trust is my goal 732-646-3430
          DukeHomeInspection@gmail.com
        </Box>
      </Grid>
    </Container>
  );
};
