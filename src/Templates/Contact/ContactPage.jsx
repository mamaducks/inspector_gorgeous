import {
  Box,
  CardActions,
  CardContent,
  Divider,
  Typography,
} from "@material-ui/core";
import { useMediaQuery } from "react-responsive";
import { ContactBox } from "./ContactBox";
import { ContactMap } from "./ContactMap";
import { NewContainer, DivBox, FlexBox } from "../../Components/Box/AppBoxes";
import Heart from "../../img/hearthouse.png";

import { BsHeart } from "react-icons/bs";
import { Social } from "../../Components/Social/SocialMedia";

export const ContactPage = () => {
  const isWide = useMediaQuery({
    query: "(min-device-width: 600px)",
  });

  return (
    <>
      <NewContainer>
        <FlexBox
          alignSelf="center"
          style={{ paddingBlock: "20px", marginTop: "15px" }}
        >
          {isWide && (
            <img
              alt=""
              src={Heart}
              width="80px"
              height="80px"
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

              <Typography variant="subtitle1">
                We offer Home Inspection services to areas of New Jersey and
                Philadelphia
              </Typography>
            </CardContent>
          </DivBox>
        </FlexBox>

        <ContactMap />
      </NewContainer>

      <NewContainer>
        <Box alignSelf="center">
          <CardContent style={{ padding: "0px" }}>
            <Typography align="center">
              Have any questions? We'd
              <BsHeart
                fontSize="1em"
                color="#c54097"
                style={{ paddingInline: "8px" }}
              />
              to hear from you!
            </Typography>
            <Divider />
            <CardActions>
              <Social color="#c54097" />
            </CardActions>
          </CardContent>
        </Box>
      </NewContainer>
      {isWide && (
        <ContactBox
          fontWeight="700"
          // fontSize="1.2vw"
          // lineHeight={1}
          style={{ color: "#ffffff", backgroundColor: "#a71976" }}
        >
          <Typography variant="subtitle1">
            Traditional Home Inspections • Pre-Listing Inspections • Radon
            Testing • Termite Inspections
          </Typography>
        </ContactBox>
      )}
    </>
  );
};
