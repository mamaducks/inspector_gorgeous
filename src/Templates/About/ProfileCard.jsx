import {
  Paper,
  Container,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import { useMediaQuery } from "react-responsive";
import { AiOutlineMail } from "react-icons/ai";
import { IoIosPhonePortrait, IoMdPin } from "react-icons/io";
import { FlexBox } from "../../Components/Box/AppBoxes";
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
    <Container style={{ marginBottom: 25 }}>
      <Paper style={{ padding: 25 }}>
        <FlexBox>
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
        </FlexBox>
      </Paper>
    </Container>
  );
}
