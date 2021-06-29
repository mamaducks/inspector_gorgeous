import { Paper, Container, List } from "@material-ui/core";
import EmmaLogo from "../../img/newEmmaLogo.png";
import { ProfileListItem } from "./ProfileListItem";
import { AiOutlineMail } from "react-icons/ai";
import { IoIosPhonePortrait, IoMdPin } from "react-icons/io";

export function ProfileCard() {
  return (
    <Container style={{ margin: 25 }}>
      <Paper
        style={{
          display: "flex",
        }}
      >
        <img
          alt=""
          src={EmmaLogo}
          width="320"
          height="245"
          style={{ paddingLeft: 25 }}
        />
        <div style={{ padding: 25, paddingRight: 30, alignSelf: "center" }}>
          <List style={{ padding: 3 }}>
            <ProfileListItem
              Icon={IoIosPhonePortrait}
              text={"609-670-0451"}
              style={{ alignSelf: "center" }}
            />
            <ProfileListItem
              Icon={AiOutlineMail}
              text={"Contact@BuyerBeware.com"}
              style={{ alignSelf: "flex-start" }}
            />
            <ProfileListItem
              Icon={IoMdPin}
              text={"Based in Berlin, NJ"}
              style={{ alignSelf: "flex-end" }}
            />



          </List>
        </div>
      </Paper>
    </Container>
  );
}
