import { makeStyles, Box, Grid, Container } from "@material-ui/core";
import MapImage from "../../img/locationimg.png";
import { PhoneInfo, AddressInfo, InfoGrid } from "./ContactInfo";
import Mag from "../../img/magnifyhome.png";
import {
  MyBox,
  DisplayEvenBox,
  DisplayCenterBox,
  DisplayBox,
  ImageBox,
  MyGrid,
  ColorBox,
  PadBox,
  SpaceBox,
  MapImageBox,
  MyPadBox,
  HoursBox,
  MyMapBox,
  MyInfoBox,
  CenterBox,
  MyContent,
  MyContentBox
} from "../Box/MyBox";

const useStyles = makeStyles({
  map: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "column",
    // backgroundColor: "#2790b90a",
  },
  info: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  midImageBox: {
    width: "100%",
    alignSelf: "center",
    display: "flex",
    justifyContent: "flex-start",
  },
  midImage: {
    width: 120,
    height: 120,
  },
});
export const ContactGrid = () => {
  const classes = useStyles();

  return (
    <>
      {/* <Box className={classes.logo}>
          <img src={IgLogo} width="373" height="340" />
        </Box> */}

      <Container style={{ display: "flex"}}>
        <MyMapBox>
          <MyInfoBox>
            We welcome you to contact us with any questions, comments, or concerns.
            Buyer Beware is based out of Berlin, NJ and offers Home Inspection services to areas of New Jersey and Philadelphia
          </MyInfoBox>
          <DisplayEvenBox>
            <img
              alt=""
              src={MapImage}
              width="415"
              height="380"
              style={{ padding: 20, alignSelf: "center" }}
            />
            <InfoGrid />
          </DisplayEvenBox>
         
            <MyInfoBox>
              Monday thru Friday 8:00 am - 7:00 pm Saturday 9:00 am - 5:00 pm Sunday Closed
            </MyInfoBox>
          
        </MyMapBox>
        {/* <PadBox>
          <DisplayBox>
            <Box letterSpacing={1} lineHeight={2}>
              <PhoneInfo />
              <AddressInfo />
            </Box>

            <ImageBox >
              <img alt="" src={Mag} className={classes.midImage} />
            </ImageBox>
          </DisplayBox>
        </PadBox> */}
      </Container>

      <ColorBox>
        Traditional Home Inspections * Pre-Listing Inspections * Radon Testing *
        Termite Inspections
      </ColorBox>

      <Container>
        <DisplayEvenBox>
          {/* <MyGrid> */}
            <MyInfoBox>
              <div>
                Call or email us if you have any questions or use our online
                scheduler to set up a home inspection.
              </div>
              Let us know how we can help you, by filling out the form. We will
              get back with you as soon as possible. Feel free to call us if you
              are in need of assistance immediately.
            </MyInfoBox>
          {/* </MyGrid> */}
          {/* <DisplayCenterBox> */}
          <form>
            <input></input>
            <input></input>
            <input></input>
          </form>
          {/* </DisplayCenterBox> */}
        </DisplayEvenBox>
      </Container>
    </>
  );
};
