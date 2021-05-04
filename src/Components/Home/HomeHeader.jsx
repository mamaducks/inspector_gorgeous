import { Box, Container, makeStyles, Typography } from "@material-ui/core";

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
});
export const HomeHeader = () => {
  const classes = useStyles();
  return (
    <Container style={{padding: 20}}>
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
            <div style={{fontWeight: "bolder", fontSize: "larger"}}>Buyer Beware Home Inspections</div>
            <div style={{fontWeight: "bold", }} >We offer the following specialized inspection services:</div>
            <div>
              • Pre-Listing Inspection for Seller • Pre-Purchase Inspection for
              Buyer New Construction Home Inspection • Multi-Unit Property
              Inspection • Townhouse Home Inspection• • Condo Inspection •
              During Construction Home Inspection • Radon Testing • Termite /
              WDI (Wood Destroying Insect)
            </div>
            <div>
              Other Inspection Services: Oil Tank Sweeps / Inspection Swimming
              pool Mold Septic Well water testing Home Energy Reports
            </div>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};
