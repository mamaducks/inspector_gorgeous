import {
  Paper,
  Container,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import { FlexBox } from "../../Components/Box/AppBoxes";
import EmmaLogo from "../../img/newEmmaLogo.png";
import { AiOutlineMail } from "react-icons/ai";
import { IoIosPhonePortrait, IoMdPin } from "react-icons/io";

function ProfileCardInfo({ Icon, info }) {
  return (
    <ListItem>
      <ListItemIcon>
        <Icon color="#a71976" fontSize="20px" />
      </ListItemIcon>

      <ListItemText>{info}</ListItemText>
    </ListItem>
  );
}

export function ProfileCard() {
  return (
    <Container style={{ margin: 25 }}>
      <Paper>
        <FlexBox>
          <img
            alt=""
            src={EmmaLogo}
            width="320"
            height="245"
            style={{ paddingLeft: 25 }}
          />
          <div style={{ padding: 25, paddingRight: 30, alignSelf: "center" }}>
            <ProfileCardInfo Icon={IoIosPhonePortrait} info="609-670-0451" />

            <ProfileCardInfo
              Icon={AiOutlineMail}
              info="Contact@BuyerBeware.com"
            />

            <ProfileCardInfo Icon={IoMdPin} info="Based in Berlin, NJ" />
          </div>
        </FlexBox>
      </Paper>
    </Container>
  );
}
