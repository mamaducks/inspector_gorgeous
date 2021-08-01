import {
  Box,
  CardActions,
  CardContent,
  Container,
  Divider,
  Typography,
} from "@material-ui/core";
import { useMediaQuery } from "react-responsive";
import { ContactMap } from "./ContactMap";
import Heart from "../../img/houseColor.png";
import { BsHeart } from "react-icons/bs";
import { Social } from "../../Components/Social/SocialMedia";

export const ContactPage = () => {
  const isWide = useMediaQuery({
    query: "(min-device-width: 600px)",
  });

  return (
    <>
      <Container>
        <Box display="flex" style={{ paddingTop: "10px" }}>
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

          <CardContent>
            <Typography color="textPrimary" variant="h5">
              Buyer Beware Home Inspections is based out of Berlin, NJ
            </Typography>
            <Divider style={{ margin: 5 }} />

            <Typography
              variant="subtitle1"
              component="p"
              // style={{ fontWeight: "300", fontSize: "1.1rem" }}
            >
              We offer Home Inspection services to areas of New Jersey and
              Philadelphia
            </Typography>
          </CardContent>
        </Box>

        <ContactMap />
        <Box alignSelf="center" paddingTop="8px">
          <CardContent style={{ padding: "0px" }}>
            <Typography
              color="textPrimary"
              variant="h5"
              gutterBottom
              style={{ alignItems: "center", flexWrap: "nowrap" }}
            >
              Have any questions? We'd
              <BsHeart
                fontSize="1.1rem"
                color="#a71976"
                style={{ paddingInline: "8px" }}
              />
              to hear from you!
            </Typography>

            <Divider />

            <CardActions>
              <Social color="#a71976" style={{ justifyContent: "center" }} />
            </CardActions>
          </CardContent>
        </Box>
      </Container>

      {isWide && (
        <Box
          textAlign="center"
          style={{ color: "#ffffff", backgroundColor: "#a71976" }}
        >
          <Typography
            variant="h1"
            style={{ fontSize: "1.1rem", lineHeight: "2" }}
          >
            Traditional Home Inspections • Pre-Listing Inspections • Radon
            Testing • Termite Inspections
          </Typography>
        </Box>
      )}
    </>
  );
};
