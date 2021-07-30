import {
  Box,
  CardActions,
  CardContent,
  Divider,
  Typography,
} from "@material-ui/core";
import { useMediaQuery } from "react-responsive";
import { ContactMap } from "./ContactMap";
import {
  NewContainer,
  DivBox,
  FlexBox,
  MainContent,
} from "../../Components/Box/AppBoxes";
import Heart from "../../img/heartHouse.png";
import { BsHeart } from "react-icons/bs";
import { Social } from "../../Components/Social/SocialMedia";

export const ContactPage = () => {
  const isWide = useMediaQuery({
    query: "(min-device-width: 600px)",
  });

  return (
    <>
      <NewContainer>
        <FlexBox alignSelf="center" style={{ paddingBlock: "10px" }}>
          {isWide && (
            <img
              alt=""
              src={Heart}
              width="90px"
              height="90px"
              style={{
                paddingRight: "30px",
                alignSelf: "center",
              }}
            />
          )}
          <DivBox>
            <CardContent>
              <Typography color="textPrimary" variant="h5" gutterBottom>
                Buyer Beware Home Inspections is based out of Berlin, NJ
              </Typography>
              <Divider style={{ margin: "10px 0" }} />

              <Typography
                variant="subtitle1"
                component="p"
                style={{ fontWeight: "300", fontSize: "1.1rem" }}
              >
                We offer Home Inspection services to areas of New Jersey and
                Philadelphia
              </Typography>
            </CardContent>
          </DivBox>
        </FlexBox>

        <ContactMap />
      </NewContainer>

      <NewContainer>
        <Box alignSelf="center" paddingTop="8px">
          <CardContent style={{ padding: "0px" }}>
          <Typography color="textPrimary" variant="h5" gutterBottom style={{display:"flex", alignItems:"center"}}>
          Have any questions? We'd
              <BsHeart
                fontSize="1.1em"
                color="#a71976"
                style={{ paddingInline: "8px" }}
              />
              to hear from you!
              </Typography>
            
            <Divider />
            <CardActions>
              <Social color="#a71976" />
            </CardActions>
          </CardContent>
        </Box>
      </NewContainer>
      {isWide && (
        <Box
          textAlign="center"
          style={{ color: "#ffffff", backgroundColor: "#a71976" }}
        >
          <Typography variant="subtitle1">
            Traditional Home Inspections • Pre-Listing Inspections • Radon
            Testing • Termite Inspections
          </Typography>
        </Box>
      )}
    </>
  );
};
