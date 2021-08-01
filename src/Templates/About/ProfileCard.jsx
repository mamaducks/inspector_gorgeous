import {
  Paper,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
  Container,
} from "@material-ui/core";
import { useMediaQuery } from "react-responsive";
import { AiOutlineMail } from "react-icons/ai";
import { IoIosPhonePortrait, IoMdPin } from "react-icons/io";
import EmmaLogo from "../../img/newEmmaLogo.png";

function ProfileCardInfo({ Icon, info }) {
  return (
    <ListItem>
      <ListItemIcon>
        <Icon />
      </ListItemIcon>

      <ListItemText>{info}</ListItemText>
    </ListItem>
  );
}

export function ProfileCard() {
  const isWide = useMediaQuery({
    query: "(min-device-width: 700px)",
  });

  return (
    <Container>
      <Paper style={{ padding: 5, marginBottom: 20 }}>
        <Box display="flex" justifyContent="space-evenly">
          {isWide && (
            <img
              alt=""
              src={EmmaLogo}
              width="320"
              height="245"
              style={{ paddingLeft: 25 }}
            />
          )}

          <div style={{ padding: 25, paddingRight: 30, alignSelf: "center" }}>
            <ProfileCardInfo Icon={IoIosPhonePortrait} info="609-670-0451" />

            <ProfileCardInfo
              Icon={AiOutlineMail}
              info="BuyerBewareHomeInspections@gmail.com"
            />

            <ProfileCardInfo Icon={IoMdPin} info="Based in Berlin, NJ" />
          </div>
        </Box>
      </Paper>
    </Container>
  );
}
